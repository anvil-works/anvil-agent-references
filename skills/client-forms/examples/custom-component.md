# Custom Component

Use this when a reusable Form needs a named component API for parent Forms. Put new reusable component Forms in a `Components` package by default, unless the app already has another convention.

Component template:

```html
---
custom_component: true
properties:
  - name: title
    type: string
  - name: status
    type: string
events:
  - name: open
    parameters:
      - name: status
---
<anvil-form container="LinearPanel">
  <anvil-component type="Label" name="title_label"></anvil-component>
  <anvil-component type="Label" name="status_label"></anvil-component>
  <anvil-component type="Link" name="open_link" prop:text="Open"></anvil-component>
</anvil-form>
```

Component Python:

```python
def __init__(self, **properties):
    self._title = ""
    self._status = ""
    super().__init__(**properties)

@property
def title(self):
    return self._title

@title.setter
def title(self, value):
    self._title = "" if value is None else str(value)
    self.title_label.text = self._title

@property
def status(self):
    return self._status

@status.setter
def status(self, value):
    self._status = "" if value is None else str(value)
    self.status_label.text = self._status

@handle("open_link", "click")
def open_link_click(self, **event_args):
    self.raise_event("open", status=self.status)
```

Parent template:

```html
<anvil-component
  type="CustomerApp.Components.StatusCard"
  name="build_status"
  prop:title="Build"
  prop:status="Passing"
  on:open="self.build_status_open"></anvil-component>
```

For item-driven reusable Forms, prefer `item=` and Data Bindings against `self.item[...]`. For one Form per item in a repeated collection, use a RepeatingPanel item template instead.
