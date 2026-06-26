# Trivial Form Edit

Use this reference for existing forms when the task only adds or changes simple event wiring, Python handlers, fixed button/input behavior, or item-template bindings. If the task expands beyond this, stop and use the relevant full skill.

If this reference links to a specific example in a full-skill reference file, you may read that linked example without escalating to the full skill.

## Event Wiring

| Source | Template | Python handler |
| --- | --- | --- |
| Native DOM event | `<button anvil:on-dom:click="self.save_click">` | `def save_click(self, event):` |
| Anvil component event in a normal form module | `<anvil-component ... name="save_button">` | `@handle("save_button", "click")` and `def save_button_click(self, **event_args):` |
| Existing component event in markup | `<anvil-component ... on:click="self.save_click">` | `def save_click(self, **event_args):` |

For newly added Anvil component events, prefer Python `@handle(...)` wiring and
keep the component markup simple. Use `on:<event>` only when preserving or
extending an existing markup-wired component event.

Avoid these common mistakes:

- Do not use `anvil:on-click`, `anvil:on:click`, or `anvil:on-click="self.handler"` for native DOM events.
- Do not give DOM handlers `**event_args`; use `event`.
- Do not give Anvil component handlers `event`; use `**event_args`.

## Bindings And Repeated Items

- In RepeatingPanel item templates, keep interactive elements and their handlers in the item template form.
- Prefer Data Bindings for item fields: use `bind:text="self.item['name']"` for display-only fields and `writeback:text="self.item['name']"` for editable inputs.
- `writeback:` mutates the bound target, but it does not refresh sibling Data Bindings. If adding a writeback input plus refresh handler, use the editable item-field example in `form-html-template/references/examples.md#repeatingpanel-item-template`.

## Minimal Checks

1. Read the target form Python and template together.
2. Keep component names, DOM names, Python method names, and handler signatures consistent.
3. Before writing any unconfirmed `anvil.*` call, check the client stubs; `anvil --json validate` will not catch a missing runtime API.
4. Validate each changed file or a shared parent with `anvil --json validate`.
5. For behavior changes, check `anvil.yaml` for `startup_form` or `startup`. If the form is not startup-reachable and no nearby navigation path is evident, mention that in the handoff.

## Escalate To Full Skills

Use the full skills when the task involves layout restructuring, new forms, YAML conversion, frontmatter, custom components, styling, data modeling, M3/dependency APIs, reusable Forms, raw DOM rendering, or anything beyond simple wiring/bindings.
