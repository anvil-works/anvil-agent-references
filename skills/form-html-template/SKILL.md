---
name: form-html-template
description: Create, inspect, and edit Anvil forms saved as HTML templates, including package `form_template.html` files and module-form `.html` files beside `.py` files.
---

# Forms HTML Template

Use this workflow when creating or editing an Anvil form HTML template.

For form Python, use `form-code`. For visual changes, use `form-styling`. A form should have exactly one template file: either HTML or YAML, never both. The server prefers HTML when both exist. If a legacy YAML template exists, first check whether the sibling HTML template already exists. Use existing HTML when present; use `form-yaml-template` to convert only when there is no sibling HTML template.

## Form Paths

- Package form: `client_code/**/<Form>/form_template.html` beside `client_code/**/<Form>/__init__.py`.
- Module form: `client_code/**/<Form>.html` beside `client_code/**/<Form>.py`.
- New form: use a package HTML path unless the user asks for a module form or the app consistently uses the module-form pattern.

## Workflow

1. Inspect the form Python file, matching HTML template, nearby forms, theme assets, and dependencies that define components or layouts used by the form.
2. Keep component names, Python references, event handlers, DOM node names, slots, and template markup consistent.
3. Prefer declarative HTML for static layout. Use Python for behavior, validation, event handlers, and dynamic state.
4. For repeated rows, cards, list items, search results, order lines, notifications, and similar UI, use a `RepeatingPanel` with an item template form and set `<panel>.items` from Python. In the item template, prefer Data Bindings such as `bind:text="self.item['name']"` or `writeback:text="self.item['name']"` over Python assignments that copy row fields into component properties. Do not build generated or repeated app data with raw DOM loops, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `createElement`, cloned DOM nodes, or ad hoc HTML string render functions.
5. For reusable UI chunks that are not a homogeneous list, create small Forms in a `Components` package by default, unless the app already has another component package convention. In the checkout this package is represented as `client_code/Components/`; in Anvil references it is a package, not a generic directory.
6. Use `custom_component: true` when a reusable Form needs custom properties/events exposed to parent Forms.
7. Check the Anvil client API stubs available to this agent before adding or changing Anvil component `prop:` attributes.
8. Use `form-styling` for visual changes: component properties, roles, CSS classes, and theme CSS.
9. For fixed native HTML owned by the template, including buttons, inputs, links, and semantic markup, omit hand-written `anvil:dom-node` for normal `anvil:on-dom:*` wiring; the runtime manages plain HTML nodes as needed. Write `anvil:dom-node="name"` only when Python needs direct browser DOM access through `self.dom_nodes["name"]`; for dynamic styling, use `anvil:name` so the plain HTML element is exposed as a named `HtmlComponent` with `classes` / `style` helpers.
10. For behavior changes, inspect enough of `anvil.yaml` to identify `startup_form` or `startup`; if the changed form is not directly startup-reachable and no nearby navigation path is evident, mention that in the handoff.
11. Before finishing, re-check component names, event handlers, DOM node references, slot names, frontmatter boundaries, and explicit closing tags for non-void elements.

## References

- Syntax and core rules: `references/syntax.md`.
- Frontmatter: `references/frontmatter.md` for custom component flags, custom properties, custom events, toolbox metadata, layout metadata, and item type metadata.
- Examples: read only the needed section from the contents in `references/examples.md`, such as simple forms, layout forms, dependency components, reusable form components, RepeatingPanel item templates, layout properties, plain HTML DOM access, or custom component containers.

## Events

- Choose between native HTML and `<anvil-component>` deliberately for buttons, inputs, links, and form controls.
- Before adding or changing event wiring, look for a nearby working example that uses the same source: native HTML element, Anvil component, layout event, or imperative DOM node.
- For new Anvil component event handlers, prefer Python `@anvil.handle("<name>", "<event>")`; the handler accepts `**event_args`.
- If an existing template wires component events in HTML, use `on:<event>="self.method_name"`.
- For plain HTML DOM events, prefer `anvil:on-dom:<event>="self.method_name"`; the handler accepts the browser `event`. Do not add an explicit `anvil:dom-node` just for declarative DOM event wiring. Use browser `addEventListener` on a DOM node for imperative runtime wiring.
- Use `anvil:name` for named `HtmlComponent` access, `classes`, and `style` helpers, not browser DOM events; `HtmlComponent` only has Anvil `show` / `hide` events.
- Wrap browser `addEventListener` callbacks with `anvil.js.report_exceptions`.
- For repeated interactive elements, put the event target and handler in the `RepeatingPanel` item template form.

Common event mistakes to avoid:

- Do not write `anvil:on-click="self.handler"`; it is not the plain HTML click syntax.
- Do not use `anvil:on:click` or `anvil:on-click` for native DOM events. Use `anvil:on-dom:click="self.handler"` on a plain HTML element.
- Do not give a DOM event handler the component-event signature `def handler(self, **event_args):`; use `def handler(self, event):`.
- Do not give an Anvil component handler the DOM-event signature `def handler(self, event):`; use `**event_args`.

| Need | Template | Python handler |
| --- | --- | --- |
| Anvil component event | `<anvil-component ... name="save_button">` | `@anvil.handle("save_button", "click")` and `def save_button_click(self, **event_args):` |
| Existing component event in markup | `<anvil-component ... on:click="self.save_click">` | `def save_click(self, **event_args):` |
| Plain HTML DOM event | `<button anvil:on-dom:click="self.save_click">` | `def save_click(self, event):` |
| Imperative browser DOM event | `<button anvil:dom-node="save_button">` | `self.dom_nodes["save_button"].addEventListener("click", anvil.js.report_exceptions(self.save_click))` |
| Plain HTML exposed as `HtmlComponent` | `<section anvil:name="banner">` | `self.banner.classes[...]` / `self.banner.style[...]` |

See [syntax examples](references/syntax.md#bindings-and-events) for `@anvil.handle`, `on:*`, and `anvil:on-dom:*`.

## Rules

- **No HTML `<form>` tags** around Anvil components. Use `<anvil-form>` / layout structure; native `<form>` tags interfere with Anvil event wiring.
- **Inline local `HtmlTemplate` markup when the mapping is obvious.** If an HTML form template contains `<anvil-form container="HtmlTemplate" prop:html="...">` and `prop:html` is local markup, move that markup into the body when the slot mapping is obvious. Ask if unsure. See `references/examples.md`.
- **Frontmatter is optional.** Omit it unless the form needs custom component flags, custom properties, custom events, toolbox metadata, layout metadata, or item type metadata. Do not add empty frontmatter.
- When frontmatter is needed, use only the fields listed in `references/frontmatter.md`.
- Use explicit closing tags for non-void HTML elements.

## Testing

Check only the HTML template file you changed:

```sh
anvil --json validate <path-to-html>
```

Example:

```sh
anvil --json validate client_code/Form1/form_template.html
```

Suggest checking the changed form in the IDE designer when layout changed, and running the affected form workflow when component behavior changed.
