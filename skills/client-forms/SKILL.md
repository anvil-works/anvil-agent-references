---
name: client-forms
description: Create, inspect, edit, style, validate, and convert Anvil client Forms under `client_code`, including Form Python, HTML templates, event wiring, Data Bindings, RepeatingPanel item templates, reusable Forms, theme CSS, and legacy YAML templates.
---

# Client Forms

Use this workflow for Anvil client Forms. Keep the default path small: identify the Form shape, make the smallest normal edit, then load only the reference or example for the branch you are actually touching.

For ordinary Python modules that are not Forms, use `client-modules`. Before choosing persisted data, CRUD, Data Tables, or client/server data flow, use `data-models`.

## Native Libraries

Use Native Libraries for app-wide browser libraries and page-head assets. They
live in `anvil.yaml` at `native_deps.head_html`.

## Core Model

A Form is a Python file plus exactly one template file:

- Package Form: `client_code/**/<Form>/__init__.py` plus `client_code/**/<Form>/form_template.html`.
- Module Form: `client_code/**/<Form>.py` plus `client_code/**/<Form>.html`.
- Legacy YAML Forms use the same path shapes with `.yaml` instead of `.html`.

Modern HTML templates have these common shapes:

- Layout Form: explicit root `<anvil-form layout="...">`.
- Container Form: explicit root `<anvil-form container="...">`, or an implicit `HtmlComponent` container when no root `<anvil-form>` is present.

For agent reasoning, ordinary HTML without `<anvil-form>` is equivalent to an implied `container="HtmlComponent"`.

Legacy `HtmlTemplate` is different from modern `HtmlComponent`. Treat `<anvil-form container="HtmlTemplate" prop:html="...">` and YAML `container.type: HtmlTemplate` as migration/compatibility cases, not the default model.

For new Forms, use package HTML Form paths unless the user asks for a module Form or the app consistently uses module Forms.

## First Three Moves

1. Inspect the Form Python and its one template together. If the task names a parent list/table/card, also inspect the RepeatingPanel `item_template` Form before deciding where to edit.
2. Identify the template kind before editing: Layout Form, explicit Container Form, implicit `HtmlComponent` container, or legacy YAML/`HtmlTemplate`.
3. Choose the smallest normal pattern. Load examples only when the task matches; load references for syntax, policies, or edge cases.

Before behavior changes, inspect enough of `anvil.yaml` to identify `startup_form` or `startup`. If the changed Form is not startup-reachable and no nearby navigation path is evident, mention that in the handoff.

## Do

- Inspect Python and template together before changing component names, handlers, bindings, slots, or container/layout shape.
- Identify Layout Form vs Container Form before editing template structure.
- Use `RepeatingPanel` with an item template Form for repeated rows, cards, list items, search results, order lines, notifications, and similar data-driven UI.
- Use `@handle(...)` for new Anvil component events, unless preserving existing markup-wired event style.
- Validate the changed files before finishing.

## Don't

- Do not render repeated app data with raw DOM loops, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `createElement`, cloned DOM nodes, or helper functions that return HTML strings.
- Do not guess unfamiliar `anvil.*` symbols, dependency component APIs, component properties, roles, or CSS hooks. Confirm them from stubs, dependency docs/files, or nearby working examples.
- Do not hand-edit legacy YAML templates by default. Convert to HTML for layout work unless the user explicitly asks to stay on YAML.
- Do not wrap submit/save/server-call/Data Table paths in broad exception handlers. Let unexpected errors raise; use `finally` only to restore UI state such as button enabled/text.
- Do not use native DOM event handler signatures for Anvil component events, or Anvil component handler signatures for native DOM events.

## Gotchas

- Handler signatures differ by event source: Anvil component events use `def handler(self, **event_args)`; native DOM events use `def handler(self, event)`.
- `writeback:` mutates the bound target, but it does not refresh sibling Data Bindings. Refresh explicitly when an editable item field must update related bound UI immediately.
- `anvil --json validate` checks syntax and template generation, but it does not prove runtime Anvil API names or dependency component properties exist.
- Expected user-fixable validation failures should be handled deliberately; unexpected save/server/schema errors should not be converted into generic labels, alerts, or retry messages.
- Legacy `HtmlTemplate` is not modern `HtmlComponent`; treat it as a conversion/compatibility path.

## Load By Task

Examples are concrete recipes. References are policies and syntax dictionaries.

| Task trigger | Load |
| --- | --- |
| New or simple container Form | `examples/basic-container-form.md` |
| Existing button/input handler edit | stay in this file; load `examples/dom-event-vs-component-event.md` only if event source is unclear |
| No root `<anvil-form>` / implicit `HtmlComponent` container | `references/template-shapes.md`, then `examples/htmlcomponent-container.md` |
| Form using a layout with `<anvil-block>` | `references/template-shapes.md`, then `examples/layout-using-form.md` |
| Form defining slots with `<anvil-slot>` | `examples/layout-defining-html-form.md` and `references/html-frontmatter.md` if custom properties/events are involved |
| Root shape, attribute prefixes, bindings, blocks, slots, dropzones, or event signature lookup | `references/cheat-sheet.md` |
| `anvil:name`, `anvil:dom-node`, native DOM events, direct DOM access, or runtime class/style helpers on plain HTML | `references/html-dom.md`; use `examples/dom-event-vs-component-event.md` for a concrete event recipe |
| RepeatingPanel item templates, `writeback:`, or item refresh behavior | `examples/repeating-panel-item-template.md` |
| Reusable component Form | `examples/custom-component.md`; also `references/html-frontmatter.md` for custom API metadata |
| Custom component container or `<anvil-dropzone>` | `examples/custom-component-container.md` and `references/html-frontmatter.md` |
| Legacy YAML template or converted `HtmlTemplate` | `references/yaml-template.md`, `references/template-shapes.md`, then `examples/yaml-htmltemplate-conversion.md` |
| M3 or dependency component specs | inspect `anvil.yaml`, dependency docs/files, then `examples/dependency-component.md` |
| Form Python class shape, handler signatures, lifecycle, client runtime caveats, or dynamic updates | `references/python.md` |
| `anvil.js`, `anvil.js.window`, browser APIs, JavaScript proxies, or Promises | `$javascript-interop` |
| Roles, theme CSS, generated component DOM, or dependency styling internals | `references/styling.md`, `references/styling-examples.md`, and `references/component-dom.md` |

## Simple Event Edits

For existing Form edits that only add or change simple event wiring, matching Python handlers, fixed button/input behavior, or item-template bindings, stay on the normal path unless the task expands into layout restructuring, new Forms, YAML conversion, frontmatter, custom components, styling, data modeling, dependency APIs, reusable Forms, or raw DOM work.

For newly added Anvil component events, prefer Python `@handle(...)` wiring and keep component markup simple. Use `on:<event>` only when preserving or extending existing markup-wired component events. If the source is plain HTML and needs a browser event object, load `references/html-dom.md`.

## Form Python

Every Form Python file must define the Form class matching the last path segment and inherit from its generated template class:

```python
from ._anvil_designer import Form1Template

class Form1(Form1Template):
    def __init__(self, **properties):
        super().__init__(**properties)
```

Use Form Python for initialization, lifecycle events, validation, submit/save handlers, Anvil component handlers, `RepeatingPanel.items`, `self.item`, Data Binding refreshes, and dynamic state.

Decorator gotcha: use `@handle(...)` when the module has `from anvil import *`. Use `@anvil.handle(...)` when the module has `import anvil`, or add the required import.

## Data Bindings And Repeated Items

- Use `RepeatingPanel` with an item template Form for repeated data-driven UI.
- In item templates, prefer Data Bindings such as `bind:text="self.item['name']"` or `writeback:text="self.item['name']"` over Python assignments that copy row fields into component properties.
- Keep repeated interactive elements and their handlers in the item template Form.

## Styling

Use the supported styling surface for the thing being styled:

- Raw HTML elements: stable, domain-specific classes in the template plus selectors in `theme/assets/theme.css`.
- Dynamic raw HTML state: load `references/html-dom.md` before using plain-HTML runtime style/class helpers.
- Anvil components: component properties, roles, documented dependency APIs, and `.anvil-role-<role-name>` CSS selectors.
- M3 or dependency components: inspect docs or dependency files before guessing component properties, layout behavior, or CSS hooks.

## Legacy YAML Templates

Do not hand-edit legacy YAML templates unless the user explicitly asks to stay on YAML.

For template/layout work on a Form with `form_template.yaml` or `<Form>.yaml`:

1. Check for a sibling HTML template first.
2. If sibling HTML exists, validate and use it; remove redundant YAML only after the HTML validates unless the user wants YAML kept.
3. If no sibling HTML exists, run `anvil convert-template <path-to-yaml>` for layout work. The default command validates YAML, writes HTML, and removes the source YAML after successful conversion.
4. Read the generated HTML, validate it, then continue editing the HTML template.

## Validation

Validate changed app files with `anvil --json validate`:

```sh
anvil --json validate client_code/<Form>/__init__.py
anvil --json validate client_code/<Form>/form_template.html
```

Use one changed file at a time, or validate a shared parent when changes span multiple file types. Validate the whole app with `anvil --json validate .` when changes span multiple file types or shared configuration.

Treat validation warnings as actionable even when validation succeeds.

Before finishing, re-check component names, Python references, event handlers, plain HTML names, slot names, frontmatter boundaries, CSS selectors, and template paths. Suggest checking the changed Form in the IDE designer when layout or visual appearance changed, and running the affected workflow when component behavior changed.
