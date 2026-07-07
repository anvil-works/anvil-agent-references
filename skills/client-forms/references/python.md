# Form Python

Use this reference when a client Form task affects the Python file: class shape, initialization, lifecycle, handlers, validation methods, or runtime updates to existing components.

For template syntax, load `cheat-sheet.md`. For native DOM events or direct DOM access, load `html-dom.md`. For repeated data UI, load `../examples/repeating-panel-item-template.md`.

## Form Shapes

A Form is a Python file plus one template file:

- Package HTML Form: `client_code/**/<Form>/__init__.py` with `client_code/**/<Form>/form_template.html`.
- Module HTML Form: `client_code/**/<Form>.py` with `client_code/**/<Form>.html`.
- Legacy YAML Forms use `.yaml` in place of `.html`.

## Required Class Shape

Every Form Python file must define the Form class matching the last path segment and inherit from its generated template class:

```python
from ._anvil_designer import Form1Template

class Form1(Form1Template):
    def __init__(self, **properties):
        super().__init__(**properties)
```

- Import `<Form>Template` from `._anvil_designer`.
- Define class `<Form>` inheriting from `<Form>Template`.
- The class name must match the Form's last path segment.
- Call `super().__init__(**properties)` in `__init__` so generated components and bindings initialize.

Legacy Forms may call `self.init_components(**properties)` instead. Leave an existing `self.init_components(**properties)` call in place unless the task requires updating the Form to the newer pattern.

## What Belongs In Form Python

Use Form Python for:

- `__init__` setup after generated component initialization.
- Anvil component event handlers.
- Form lifecycle events such as `show`.
- Validation methods and submit/save handlers.
- Runtime updates to existing component properties.
- Setting `RepeatingPanel.items`.
- Updating `self.item` and refreshing Data Bindings when needed.
- Small dynamic state that belongs to the Form instance.

Do not use Form Python to render generated app data by building HTML strings or manually appending DOM nodes. Return to the main skill and RepeatingPanel example if the task is repeated rows, cards, search results, notifications, or similar data-driven UI.

## Validation And Error Handling

For submit/save handlers, distinguish validation from unexpected failures. Validate client-known fields before `anvil.server.call(...)`.

For expected server-side validation failures in simple form flows, handle an explicit result from the server, such as `{"ok": False, "message": "..."}`. Catch exceptions only when the type is part of the callable's contract and is catchable on the client, such as documented Anvil/service exceptions.

Do not rely on ordinary Python built-in exceptions raised by server callables, such as `ValueError` or `TypeError`, being catchable on the browser client as the same exception type.

Do not wrap the server call or Data Table save path in `except Exception`, `except BaseException`, a bare `except`, or `except anvil.server.AnvilWrappedError`. Unexpected save/server/schema errors should raise. Use `finally` only to restore loading state such as button enabled/text; do not convert unexpected exceptions into labels, alerts, or generic retry messages.

## Handler Signatures

Match handler signatures to the event source:

| Source | Python signature |
| --- | --- |
| Anvil component event | `def handler(self, **event_args):` |
| Top-level Form event | `def handler(self, **event_args):` |
| Native DOM event | `def handler(self, event):` |

For new Anvil component events, prefer `@handle(...)` in Python:

```python
@handle("save_button", "click")
def save_button_click(self, **event_args):
    pass
```

Preserve existing `on:<event>` markup-wired component handlers only when matching nearby app style. For native DOM event wiring, load `html-dom.md` before editing.

Decorator import rule:

- Use `@handle(...)` when the module has `from anvil import *`.
- Use `@anvil.handle(...)` when the module has `import anvil`.
- Add the required import if neither form is present.

`anvil --json validate` will not catch every missing decorator import or runtime API typo. Check imports directly.

## Runtime Updates

Named Anvil components from the template are available as attributes on the Form instance. Use component properties and methods for normal runtime updates:

```python
self.status_label.text = "Saved"
self.save_button.enabled = False
self.results_panel.items = rows
```

For named plain HTML elements, load `html-dom.md` before using `HtmlComponent.classes`, `HtmlComponent.style`, native DOM events, or `self.dom_nodes[...]`.

For Data Binding updates:

- Mutating `self.item` or a bound object does not automatically refresh every displayed value.
- Call `self.refresh_data_bindings()` when a Python-side mutation should update bound UI immediately.
- In RepeatingPanel item templates, prefer template bindings over Python assignments that copy row fields into labels.

## Client API Checks

Confirm any unfamiliar `anvil.*` symbol, dependency component method, component property, or helper API from the Anvil client API stubs, dependency docs/files, or nearby working examples before writing it.

Validation does not prove runtime API names exist.

## Workflow

1. Identify the target Form, or choose the package HTML path for a new Form.
2. Read the Form Python file and matching template together.
3. Confirm component names, handler names, and binding targets before editing.
4. Make the smallest Python change that satisfies the task.
5. For behavior changes, inspect enough of `anvil.yaml` to identify `startup_form` or `startup`; if the changed Form is not startup-reachable and no nearby navigation path is evident, mention that in the handoff.
6. Validate the changed Python file.

## Validation

Check changed Python files with:

```sh
anvil --json validate client_code/<Form>/__init__.py
```

This checks Python syntax, template import, Form class name, and inheritance. It does not prove runtime Anvil API names exist, and it does not prove the changed workflow behaves correctly. Suggest testing the changed Form workflow in the IDE when behavior changed.
