---
name: data-models
description: Design idiomatic Anvil data models and client/server data flow for new apps, CRUD workflows, Data Tables, model classes, buffering, drafts, Data Bindings, and server methods. Use before choosing an architecture for persisted domain data, when the user asks about Anvil models/model classes, or when deciding whether to pass rows, model objects, dicts, or server-callable payloads.
---

# Data Models

Use this workflow before creating or changing app architecture for persisted domain data.

Read `references/examples.md` only when the user asks about model classes or
the implementation will use one.

## Workflow

1. Inspect `anvil.yaml`, the relevant `db_schema` tables, and nearby client/server code that already reads or mutates the data.
2. Identify the domain objects, table ownership, create/edit flows, and trust boundaries.
3. Choose the data shape:
   - live rows or model objects for persisted table data
   - buffered rows or draft rows for save/cancel flows
   - dicts only for transient UI state, document-shaped payloads, or external API data
4. Decide where behavior belongs:
   - model properties/methods for row-local behavior
   - model classmethods or server methods for collection operations
   - ordinary server callables for cross-model, external, background, or bootstrap work
5. Wire imports so model modules load before affected table rows are used on both client and server.
6. Update Forms to bind to rows/model objects directly, especially in `RepeatingPanel` item templates.
7. Validate changed manifest, client Python, server Python, and form templates with the smallest relevant `anvil --json validate ...` commands.

Done when the table schema, model classes, server methods, form bindings, and validation evidence all match the chosen data shape.

## Defaults

- Prefer live Data Table rows, search iterators, and model classes over dict DTOs passed through server callables.
- Default tables to `client: none` and return rows/search results from server code. Do not choose direct client table access unless the user requests it; client-side row saves use model `client_*` flags and checked `_do_*` hooks, not `client: full`.
- Put domain behavior on model classes when it naturally belongs to one table or row type.
- Use Forms for interaction and presentation logic, not as the main home for data rules.
- Use ordinary `@anvil.server.callable` functions for cross-model operations, external services, background tasks, bootstrapping, or logic that does not naturally belong to one model.

## Model Classes

Model classes are a built-in Anvil Data Tables feature, not a separate app
dependency. They extend a table's Row class so rows can carry app-specific
properties, methods, validation, and server methods.

For each important Data Table, consider a model class in a client Module:

```python
from datetime import date

from anvil.tables import app_tables

class TodoItem(app_tables.todo_items.Row, buffered=True):
    @property
    def is_overdue(self):
        return self["due_date"] < date.today()
```

- Define model classes in client Modules so client and server code can import them.
- Inherit from `app_tables.<table_name>.Row`.
- Import the model Module from app startup code and from any Server Module that touches that table.
- Add properties for derived values the UI needs, rather than recomputing column logic in Forms.
- Add model methods for meaningful operations on a row.

## Editing Flows

- Use Data Bindings against row or model objects when binding components to persisted data.
- In `RepeatingPanel` item templates, bind component properties directly to `self.item[...]` or model properties instead of copying values into labels or inputs in Python.
- Use `buffered=True` on model classes, or `row.buffer_changes()`, when users can save or discard edits.
- Use draft rows for create flows. Client-side `save()` requires a client-writable model with permission checks in the corresponding `_do_*` hooks; do not grant table-level `client: full` for it.
- Avoid copying rows into dicts solely to make editing cancellable; buffering and drafts exist for that.

## Server Behavior

- Use `@anvil.server.server_method` for privileged operations that belong on a model instance or collection.
- Use `@classmethod` with `@anvil.server.server_method` for collection operations such as "get rows visible to the current user".
- If server method implementation should not be visible in client code, define a client-visible stub on the model and override it in a server-side subclass.
- Treat non-`self` arguments to server methods as untrusted client input.
- For private data, derive identity and enforce ownership in trusted server code or model hooks.

## When Dicts Are Fine

Use dicts for simple transient UI state, API payloads, form scratch data with no backing row, or values that are naturally document-shaped. Do not use dicts as the default transport for rows that Anvil can pass directly.
