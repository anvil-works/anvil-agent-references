# Layout-Using Form

Use this when a Form appears inside another layout Form. The current Form's root is `<anvil-form layout="...">`; each `<anvil-block>` fills a slot on that layout.

```html
<anvil-form layout="CustomerApp.DashboardLayout">
  <anvil-block slot="header">
    <anvil-component type="TextBox" name="search_box" prop:placeholder="Search"></anvil-component>
  </anvil-block>
  <anvil-block slot="body">
    <anvil-component type="Label" name="body_label" prop:text="Dashboard content"></anvil-component>
  </anvil-block>
</anvil-form>
```

The `layout` value must be a package-qualified Form spec. A `Layouts` package is only an app convention.

Use `prop:` and `bind:` on the root `<anvil-form layout="...">` only for properties on the layout instance:

```html
<anvil-form layout="CustomerApp.Layouts.Dialog" prop:title="Customer details" bind:is_enabled="self.dialog_enabled">
  <anvil-block slot="body">
    <anvil-component type="Button" name="ok_button" prop:text="OK"></anvil-component>
  </anvil-block>
</anvil-form>
```

Do not use `<anvil-slot>` to fill a layout. Use `<anvil-block>` for that.
