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
9. For fixed native HTML owned by the template, including buttons, inputs, links, and semantic markup, use `anvil:dom-node` when Python needs direct element access; for dynamic styling on named plain HTML, prefer `anvil:name` and the named `HtmlComponent`'s `classes` / `style` helpers.
10. Before finishing, re-check component names, event handlers, DOM node references, slot names, frontmatter boundaries, and explicit closing tags for non-void elements.

## References

- Layout and syntax: `references/syntax.md` and `references/examples.md`.
- Frontmatter: `references/frontmatter.md` for custom component flags, custom properties, custom events, toolbox metadata, layout metadata, and item type metadata.

## Events

- Prefer Python `@anvil.handle` for new `anvil-component`.
- If an existing template wires component events in HTML, use `on:<event>="self.method_name"`.
- Choose between native HTML and `<anvil-component>` deliberately for buttons, inputs, links, and form controls. Use fixed native HTML when the template needs direct browser affordances, precise styling, native DOM event handling, or browser DOM APIs; use Anvil components when the element should participate in Anvil component APIs, layout/container behavior, roles, properties, or Data Bindings.
- Use `anvil:dom-node` when Python needs direct access to a fixed native HTML element. Add `anvil:on-dom:<event>="self.method_name"` only when a native DOM event handler needs the browser event object.
- For repeated interactive elements, put the components and `@anvil.handle` handlers in the `RepeatingPanel` item template form instead of wiring events on DOM-generated rows.

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
