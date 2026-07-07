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
| DataGrid | `.anvil-data-grid.anvil-container` root | `.anvil-role-report-grid` | `.anvil-data-grid` |

## Notes

- Component roles apply to the root element created for the Anvil component.
- TextBox and TextArea roles are on the native control itself, so prefer `input.anvil-role-*` and `textarea.anvil-role-*`.
- Button roles are on the wrapper, so prefer `.anvil-role-* > button`.
- DropDown and DatePicker roles are on wrappers, so target their native controls through the role.
- Broad selectors such as `.anvil-button > button` change every component of that type in the app. Do not use them for one-off variants.
