# Anvil Component DOM Styling Reference

Use this reference when a component role needs CSS that depends on the component's rendered DOM. Prefer role selectors for reusable variants. Use broad Anvil component selectors only for app-wide defaults.

Roles are emitted as `.anvil-role-<role-name>` on the component root. Some components use a native element as the root; others render a wrapper and put the native control inside it.

## Selector Patterns

| Use case | Selector shape | Example |
| --- | --- | --- |
| Role on a component root | `.anvil-role-<role-name>` | `.anvil-role-card` |
| Role on a native root | `<element>.anvil-role-<role-name>` | `input.anvil-role-compact-field` |
| Role on a wrapper with a native child | `.anvil-role-<role-name> <element>` | `.anvil-role-choice-field select` |
| Role on a wrapper with a direct native child | `.anvil-role-<role-name> > <element>` | `.anvil-role-primary-action > button` |
| App-wide component default | `.anvil-<component-class> ...` | `.anvil-button > button` |

## Common Components

| Component | Runtime shape | Role variant selector | Broad default selector |
| --- | --- | --- | --- |
| Button | `.anvil-button` wrapper with child `button` | `.anvil-role-primary-action > button` | `.anvil-button > button` |
| TextBox | root `input.anvil-text-box` | `input.anvil-role-compact-field` | `input.anvil-text-box` |
| TextArea | root `textarea.anvil-text-area` | `textarea.anvil-role-notes` | `textarea.anvil-text-area` |
| DropDown | `.anvil-dropdown` wrapper with child `select` | `.anvil-role-choice-field select` | `.anvil-dropdown select` |
| DatePicker | `.anvil-datepicker` wrapper with child `input` | `.anvil-role-date-field input` | `.anvil-datepicker input` |
| Label | `.anvil-label` root | `.anvil-role-caption` | `.anvil-label` |
| Image | `.anvil-image` root with child `img` | `.anvil-role-avatar img` | `.anvil-image img` |
| ColumnPanel | `.anvil-column-panel.anvil-container` root | `.anvil-role-summary-card` | `.anvil-column-panel` |
| FlowPanel | `.anvil-flow-panel.anvil-container` root | `.anvil-role-toolbar` | `.anvil-flow-panel` |
| RepeatingPanel | `.anvil-repeating-panel` root with a direct child items container; item-template Form roots are children of that container | `.anvil-role-card-grid > div` | `.anvil-repeating-panel > div` |
| DataGrid | `.anvil-data-grid.anvil-container` root | `.anvil-role-report-grid` | `.anvil-data-grid` |

## Notes

- Component roles apply to the root element created for the Anvil component.
- TextBox and TextArea roles are on the native control itself, so prefer `input.anvil-role-*` and `textarea.anvil-role-*`.
- Button roles are on the wrapper, so prefer `.anvil-role-* > button`.
- DropDown and DatePicker roles are on wrappers, so target their native controls through the role.
- To change layout RepeatingPanel items, apply e.g. `display: grid` or `display: flex` to its direct child items container, not to the RepeatingPanel root. Prefer a role selector such as `.anvil-role-card-grid > div` over the broad component selector.
- Broad selectors such as `.anvil-button > button` change every component of that type in the app. Do not use them for one-off variants.

## Built-in dialogs and notifications

These are supported theme hooks for the runtime's built-in UI. They are outside the app's Form wrapper. Use them for theme defaults alongside the component selectors above.

| Element | Runtime-v3 selector |
| --- | --- |
| Dialog surface | `.anvil-modal-content` |
| Dialog heading area and title | `.anvil-modal-header`, `.anvil-modal-title` |
| Dialog content | `.anvil-modal-body` |
| Dialog actions area | `.anvil-modal-footer` |
| Dialog close button | `.anvil-modal-header .anvil-close` |
| Notification surface | `.anvil-notification` |
| Notification title/message | `.anvil-notification-title`, `.anvil-notification-message` |
| Notification close button | `.anvil-notification .anvil-close` |

`alert()`, `confirm()` and built-in Users forms share the dialog shell. Their content and footer buttons use standard Anvil components; reuse existing Button, TextBox, Label, Link and CheckBox defaults where they apply. A role on dialog content does not style its enclosing shell.

Dialog and notification close buttons share `.anvil-close` in runtime v3; scope it to the relevant container when their styles differ.

The notification container sits inside a wrapper appended to `body`.

Keep modal/backdrop positioning, stacking, visibility and animation under runtime control. Notification container layout is also runtime-managed. Theme CSS should change their appearance without replacing that behavior.

`alert()` and `confirm()` accept `role=None`, a role string, or a list of roles; these apply to the enclosing `.anvil-modal-dialog`. `Notification(..., role="compact")` applies `.anvil-role-compact` to `.anvil-notification` itself. Notification roles also accept a list or `None`. For example, use `.anvil-notification.anvil-role-compact` to style that notification surface.

Style `.anvil-notification` for the default appearance of all notifications. Role selectors apply only when the caller explicitly supplies a role.
