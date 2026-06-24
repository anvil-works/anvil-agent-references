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
Plain HTML elements named with `anvil:name` are named `HtmlComponent` instances. For runtime class or inline-style changes, prefer their live `classes` and `style` helpers, such as `self.banner.classes["is-loading"] = loading` or `self.banner.style["marginTop"] = 4`, rather than `self.dom_nodes[...]`. Check the Anvil client API stubs for the full helper API before using less common methods.

## Form Python Changes

Use form Python for:

- `__init__` setup and calls to `super().__init__(**properties)` or legacy `self.init_components(**properties)`.
- Anvil component event handlers, preferably declared with `@anvil.handle(<component-name>, <event-name>)`.
- Form lifecycle events such as `show`.
- Validation methods and submit/save handlers.
- Runtime updates to component properties, `RepeatingPanel.items`, `self.item`, or other dynamic state.
- Runtime updates to named plain-HTML `HtmlComponent.classes` and `HtmlComponent.style` for dynamic styling.
- Runtime updates to fixed native HTML through `self.dom_nodes[...]` when the template owns those elements.

Do not render generated or repeated app data by rebuilding HTML strings. Avoid
`.innerHTML`, `.outerHTML`, `insertAdjacentHTML`, DOM loops, or helper functions
that return HTML for repeated rows, cards, details, search results, or similar
data-driven UI. Use Anvil components, `RepeatingPanel.items`, item template
forms, Data Bindings, component properties, and named `HtmlComponent.classes` /
`style` helpers instead.

For reusable dynamic UI chunks that are not a homogeneous list, create small
Forms in a `Components` package and import those Form classes where needed.
Add instances with `add_component()` instead of appending HTML strings. Pass
data through `item=` or configured custom properties, rather than manually
syncing many child component fields from parent code. Custom properties require
`custom_component: true` or a layout-defining form; otherwise prefer `item=`.

For `RepeatingPanel` item template forms, prefer Data Bindings in the template
for row/model fields instead of Python assignments such as
`self.title_label.text = self.item["title"]`. Use form Python to set
`<panel>.items`, handle events, perform validation, and call
`self.refresh_data_bindings()` after mutating `self.item` when bound values need
to update.

## Rules

- Make form changes under `client_code/`; do not edit `.anvil/`.
- Read the matching template when a change affects component names, slots, or bindings.
- Keep component names, Python references, event handlers, DOM node names, slots, and template markup consistent.
- Prefer Python `@anvil.handle(<component-name>, <event-name>)` for Anvil component event handlers.
- Use `self.dom_nodes[...]` for fixed native HTML owned by the template, native DOM event work, or browser DOM APIs that Anvil component properties and helpers do not expose. Do not use it as a rendering surface for generated app data.
- Prefer relative imports for app-local form and module references unless the app uses another pattern.
- Before adding unfamiliar stdlib imports or external package imports, check `$CODEX_HOME/reference/python/skulpt-client-runtime.md` for client-side runtime caveats.

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
