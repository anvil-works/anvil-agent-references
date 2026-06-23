---
name: form-code
description: Edit Anvil form Python under `client_code`, including handlers, lifecycle, and the required form class that inherits from its designer template.
---

# Forms Code

Use this workflow when the task affects form Python — handlers, lifecycle methods/events, validation, or runtime updates to components — not layout markup.

For layout or structure, use `form-html-template`. For appearance, use `form-styling`. For legacy YAML, use `form-yaml-template` only when the task changes template layout/structure or explicitly asks to migrate YAML to HTML. Pure form-Python changes do not require YAML conversion.

## Form Shapes

A form is a Python file plus one template file:

- Package HTML form: `client_code/**/<Form>/__init__.py` with `client_code/**/<Form>/form_template.html`.
- Module HTML form: `client_code/**/<Form>.py` with `client_code/**/<Form>.html`.

(or legacy `.yaml` files in place of `.html`)

## Required Form Class

Every form Python file must define the form class that matches its path and inherits from the generated template class:

- IDE path `forms/Form1` → class `Form1`
- IDE path `forms/Package.Form1` → class `Form1` (last segment of the dotted path)

```python
from ._anvil_designer import Form1Template

class Form1(Form1Template):
    def __init__(self, **properties):
        super().__init__(**properties)
```

- Import `Form1Template` from `._anvil_designer`.
- Define class `Form1` inheriting from `Form1Template`.
- The class name must match the form's last path segment.
- Call `super().__init__(**properties)` in `__init__` so template components and bindings initialize correctly.

Legacy forms may call `self.init_components(**properties)` instead. For ordinary form initialization, this is largely equivalent to `super().__init__(**properties)`. Leave an existing `self.init_components(**properties)` call in place unless the task requires updating the form to the newer pattern.

Named component instances from the template are available on the form instance.

## Form Python Changes

Use form Python for:

- `__init__` setup and calls to `super().__init__(**properties)` or legacy `self.init_components(**properties)`.
- Anvil component event handlers, preferably declared with `@anvil.handle(<component-name>, <event-name>)`.
- Form lifecycle events such as `show`.
- Validation methods and submit/save handlers.
- Runtime updates to component properties, `RepeatingPanel.items`, `self.item`, or other dynamic state.

## Rules

- Make form changes under `client_code/`; do not edit `.anvil/`.
- Read the matching template when a change affects component names, slots, or bindings.
- Keep component names, Python references, event handlers, DOM node names, slots, and template markup consistent.
- Prefer Python `@anvil.handle(<component-name>, <event-name>)` for Anvil component event handlers.
- Prefer relative imports for app-local form and module references unless the app uses another pattern.

## Workflow

1. Identify the target form, or choose the package HTML path for a new form.
2. Read the form Python file and matching template together.
3. Make the smallest change that satisfies the task.
4. Use `form-html-template` for layout changes and `form-styling` for visual changes.

## Layout-Backed Forms

- For reusable page shells, prefer a layout form that defines slots.
- Prefer slots and declarative template structure over imperative `clear()` / `add_component()` page assembly when the structure is static.

## M3 Apps

- For apps that depend on M3, consult the M3 docs available to this agent before guessing component properties or patterns.
- Prefer M3 components over native Anvil components.

## Testing

Check only the Python files you changed:

```sh
anvil --json validate client_code/<Form>/__init__.py
```

This checks Python syntax, template import, form class name, and inheritance. It does not prove that `__init__` initializes generated components, so confirm a `super().__init__(**properties)` or legacy `self.init_components(**properties)` call when creating or changing a form class.

Suggest testing the changed form workflow in the IDE.
