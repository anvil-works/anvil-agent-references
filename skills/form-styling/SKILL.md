---
name: form-styling
description: Style Anvil form UI using component properties, roles, CSS classes, theme CSS, and M3 guidance.
---

# Forms Styling

Use this workflow when the task affects how a form looks — colors, spacing, typography, roles, or component appearance.

For layout structure, use `form-html-template`. For form Python, use `form-code`.

The main distinction is between raw HTML elements and Anvil components:

- Style raw HTML elements with CSS classes/selectors in `theme/assets/theme.css`.
- Style Anvil components with component properties, roles, and documented component APIs.
- Treat roles as the semantic styling API for reusable Anvil component variants. Role appearance usually belongs in `theme/assets/theme.css` as `.anvil-role-<role-name>`.

Keep these editing surfaces separate. Do not add `anvil:dom-node` just to style an element,
and do not guess component CSS internals when a component property or role is
the supported API.

## Styling Terms

- **Role**: an Anvil component role set with a component property such as `role` / `prop:role`.
- **Component property**: a documented Anvil component property, confirmed in the agent reference stubs under `stubs/client/anvil/` or dependency docs.
- **Documented dependency API or hook**: styling guidance from agent reference docs under `docs/m3/`, `.anvil/deps/<package>/docs/`, or the dependency's component files.
- **Generated component internals**: DOM/CSS classes emitted by an Anvil component implementation rather than authored in the app template. Do not write selectors against these.
- **Theme-parameter-driven app**: an app whose `theme/assets/theme.css` already uses `%color:<COLOR NAME>%` tokens and whose colors are defined in `theme/parameters.yaml`.

## Where Styles Go

- Put reusable CSS in `theme/assets/theme.css`.
- Use stable, domain-specific class names for raw HTML elements and wrapper markup in form templates.
- Use `theme/parameters.yaml` color tokens only in a theme-parameter-driven app.
- Prefer CSS custom properties in `theme/assets/theme.css` for new app-local styling tokens.
- Use component properties, roles, or documented dependency APIs for Anvil component styling.
- Define new reusable component variants with `prop:role` and `.anvil-role-<role-name>` selectors.
- Use the agent reference stubs under `stubs/client/anvil/` to confirm component style properties before adding or changing them.

`theme.css` may use `%color:<COLOR NAME>%` tokens in a theme-parameter-driven app. Color definitions are available in
`theme/parameters.yaml` at `color_scheme.colors`. If the app is not already
using those tokens, prefer CSS variables instead of introducing new color
template values.

## Workflow

1. Inspect the form HTML template, `theme/assets/theme.css`, `theme/parameters.yaml`, nearby forms, and app dependencies.
2. Identify whether each styled thing is raw HTML or an Anvil component.
3. For raw HTML, add or reuse semantic classes and write CSS selectors against those classes.
4. For Anvil components, use direct component properties when they express the style; otherwise use or add a semantic `prop:role`.
5. Preserve existing visual conventions for spacing, tokens, typography, and nested component structure unless the user asks for a redesign.
6. Keep component names, event handlers, DOM node names, and Python references unchanged unless the task requires renaming them.
7. Re-check changed selectors and component properties against the UI markup and nearby theme rules before finishing.

## Raw HTML

- Prefer classes over broad element selectors.
- Use app-specific class names that describe the domain or UI role.
- Keep durable visual styling in CSS, not Python.

## Anvil Components

- Preserve existing app conventions for roles, spacing, and nested component structure.
- When the app depends on M3, consult the agent reference docs under `docs/m3/` and dependency files before guessing component styling, layout behavior, properties, or CSS hooks.
- Style the role wrapper directly when the component's root is the visual surface.
- If the component renders a native control inside a wrapper, scope through the role and target the native element, for example `.anvil-role-primary-action > button` for Button.
- If the component root is the native control, put the role selector on that element, for example `input.anvil-role-compact-field` or `textarea.anvil-role-notes`.
- Use documented Anvil-prefixed component classes only for broad defaults, for example `.anvil-button > button` for all Anvil buttons.
- Do not guess generated component internals.
- Add hover and active states when the interaction needs them.

See `references/examples.md` before adding or changing component roles. See `references/component-dom.md` when you need the generated DOM shape or a broad Anvil component selector.

## Testing

- If you changed form template markup for roles, classes, component properties, or wrapper elements, validate that template:

```sh
anvil --json validate <path-to-template>
```

- CSS-only changes do not need template validation. Suggest checking the affected form in the IDE when the visual result matters.
