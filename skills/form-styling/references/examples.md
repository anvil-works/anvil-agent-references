# Form Styling Examples

Use these patterns when styling Anvil form templates. Keep Anvil component styling behind roles, and keep raw HTML styling behind ordinary semantic classes.

## Button Role

Give the component a reusable role:

```html
<anvil-component
  type="Button"
  name="save_button"
  prop:text="Save"
  prop:role="primary-action"></anvil-component>
```

Style the native control through the role:

```css
.anvil-role-primary-action > button {
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: var(--app-primary);
  color: white;
  font-weight: 700;
}

.anvil-role-primary-action > button:hover,
.anvil-role-primary-action > button:focus {
  background: var(--app-primary-dark);
}
```

## TextBox Role

Give related inputs a shared role:

```html
<anvil-component
  type="TextBox"
  name="search_box"
  prop:placeholder="Search"
  prop:role="compact-field"></anvil-component>
```

Target the native input through the role:

```css
input.anvil-role-compact-field {
  min-height: 36px;
  border: 1px solid var(--app-border);
  border-radius: 6px;
  padding: 0 10px;
}

input.anvil-role-compact-field:focus {
  border-color: var(--app-primary);
  outline: 2px solid color-mix(in srgb, var(--app-primary) 25%, transparent);
  outline-offset: 1px;
}
```

## DropDown Role

DropDown renders a wrapper with the role and a native `select` inside it:

```html
<anvil-component
  type="DropDown"
  name="status_filter"
  prop:role="choice-field"></anvil-component>
```

```css
.anvil-role-choice-field select {
  min-height: 36px;
  border: 1px solid var(--app-border);
  border-radius: 6px;
  background: var(--app-surface);
}
```

## DatePicker Role

DatePicker renders a wrapper with the role and a native `input` inside it:

```html
<anvil-component
  type="DatePicker"
  name="due_date_picker"
  prop:role="date-field"></anvil-component>
```

```css
.anvil-role-date-field input {
  min-height: 36px;
  border: 1px solid var(--app-border);
  border-radius: 6px;
}
```

## Container Role

When the component root is the visual surface, style the role wrapper directly:

```html
<anvil-component
  type="ColumnPanel"
  name="summary_card"
  prop:role="summary-card"></anvil-component>
```

```css
.anvil-role-summary-card {
  padding: 24px;
  border: 1px solid var(--app-border);
  border-radius: 8px;
  background: var(--app-surface);
}
```

## Raw HTML Classes

Use semantic classes for template-owned HTML. Do not use component roles for raw HTML wrappers.

```html
<section class="invoice-toolbar">
  <h2>Invoices</h2>
  <anvil-component
    type="Button"
    name="new_invoice_button"
    prop:text="New invoice"
    prop:role="primary-action"></anvil-component>
</section>
```

```css
.invoice-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
```

## Global Defaults

Use broad Anvil component selectors only when changing the app-wide default for that component type:

```css
.anvil-button > button {
  border-radius: 6px;
}

input.anvil-text-box {
  min-height: 36px;
}

textarea.anvil-text-area {
  min-height: 96px;
}

.anvil-dropdown select {
  min-height: 36px;
}
```

## Selector Shape

Prefer selectors that encode the supported styling boundary:

```css
/* Wrong: affects every button in the app. */
button {
  border-radius: 6px;
}

/* Right: affects only components with this Anvil role. */
.anvil-role-primary-action > button {
  border-radius: 6px;
}

/* Wrong: uses a one-off visual class for component styling. */
.green-save-button {
  background: var(--app-success);
}

/* Right: names the reusable component role by UI intent. */
.anvil-role-confirm-action > button {
  background: var(--app-success);
}
```
