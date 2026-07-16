# Data Model Examples

Use these examples when a user asks about Anvil models/model classes or when designing a CRUD app from scratch.

Model classes are built into Anvil Data Tables. They are not a separate dependency to discover in `.anvil/deps`. A model class extends `app_tables.<table_name>.Row`, so normal table searches return row objects with app-specific properties and methods.

## Basic Model Class

Create the model in a client Module so both client and server code can import it.

```python
# client_code/TaskModels.py
from datetime import date

import anvil.server
import anvil.users
from anvil.tables import app_tables


class Task(
    app_tables.tasks.Row,
    buffered=True,
    client_creatable=True,
    client_updatable=True,
):
    @property
    def is_done(self):
        return self["status"] == "done"

    @property
    def is_overdue(self):
        return self["due_date"] is not None and self["due_date"] < date.today() and not self.is_done

    @anvil.server.server_method(require_user=True)
    def mark_done(self):
        raise NotImplementedError

    @classmethod
    def _do_create(cls, values, from_client):
        if from_client:
            user = anvil.users.get_user()
            if user is None:
                raise PermissionError("Sign in to create tasks")
            values["owner"] = user
        return super()._do_create(values, from_client)

    def _do_update(self, updates, from_client):
        if from_client and self["owner"] != anvil.users.get_user():
            raise PermissionError("This task belongs to another user")
        return super()._do_update(updates, from_client)

    @anvil.server.server_method(require_user=True)
    @classmethod
    def get_my_tasks(cls):
        raise NotImplementedError
```

Import the model module when the app starts and from server modules that touch the table. This ensures rows are instantiated as `Task` objects.

```python
# client_code/Home/__init__.py
from .. import TaskModels


class Home(HomeTemplate):
    def __init__(self, **properties):
        super().__init__(**properties)
        self.tasks_panel.items = TaskModels.Task.get_my_tasks()
```

## Server-Side Model Implementation

Use a server-side subclass when the implementation should be hidden from client code or needs trusted access.

```python
# server_code/TaskModelsServer.py
from datetime import datetime

import anvil.users
import anvil.server
from anvil.tables import app_tables

import TaskModels


class Task(TaskModels.Task):
    @anvil.server.server_method(require_user=True)
    def mark_done(self):
        if self["owner"] != anvil.users.get_user():
            raise PermissionError("This task belongs to another user")
        self["status"] = "done"
        self["updated_at"] = datetime.now()

    @anvil.server.server_method(require_user=True)
    @classmethod
    def get_my_tasks(cls):
        user = anvil.users.get_user()
        return app_tables.tasks.search(owner=user)
```

Keep the table at `client: none`. The model's `client_*` options route permitted
operations through its server-side `_do_*` hooks; they do not require table-level
client write access.

## Forms Bind To Rows

Pass row/model objects to Forms and RepeatingPanels directly. Do not turn rows into dicts just to display or edit them.

Bind row/model values in the item template:

```html
<!-- client_code/TaskRow/form_template.html -->
<anvil-form container="ColumnPanel">
  <anvil-component type="Label" name="title_label" bind:text="self.item['title']"></anvil-component>
  <anvil-component type="Label" name="status_label" bind:text="'Done' if self.item.is_done else 'Open'"></anvil-component>
  <anvil-component type="Button" name="done_button" prop:text="Done"></anvil-component>
</anvil-form>
```

Use Python for actions, not for copying bound field values into components:

```python
# client_code/TaskRow/__init__.py
import anvil


class TaskRow(TaskRowTemplate):
    def __init__(self, **properties):
        super().__init__(**properties)

    @anvil.handle("done_button", "click")
    def done_button_click(self, **event_args):
        self.item.mark_done()
        self.refresh_data_bindings()
```

For Anvil component Data Bindings, bind component properties to `self.item["title"]`, `self.item.is_overdue`, or other model properties. Use `writeback:` for editable component properties that should update the row/model object.

## Create And Edit Flows

Use draft rows for create flows. A draft is not persisted until `save()` is called.

```python
from anvil.tables import app_tables

task = app_tables.tasks.Row()
if confirm(TaskEdit(item=task)):
    task.save()
```

Use buffering for edit flows so Cancel can discard changes.

```python
with task.buffer_changes():
    if confirm(TaskEdit(item=task)):
        task.save()
```

If the model class uses `buffered=True`, rows already buffer changes by default; Save should call `row.save()` and Cancel should call `row.reset()` or discard the draft. The model's `_do_create()` and `_do_update()` hooks above validate client saves on the server.

## Keep Server Callables For Non-Model Work

Use `@anvil.server.callable` for work that does not naturally belong to one model object, such as external API calls, reporting across many unrelated tables, background-task launches, or startup/bootstrap data. For row actions and collection queries, prefer model instance methods or classmethods decorated with `@anvil.server.server_method`.
