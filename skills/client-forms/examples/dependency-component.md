# Dependency Component

Use this when a template uses M3 or another app dependency. First inspect `anvil.yaml` for the dependency package name, then inspect dependency docs or files before choosing component paths or properties.

If `anvil.yaml` resolves M3 as package name `m3`, use package-qualified specs:

```html
<anvil-form layout="m3.Layouts.NavigationRailLayout">
  <anvil-block slot="navigation">
    <anvil-component
      type="m3._Components.NavigationLink"
      name="home_link"
      prop:text="Home"
      prop:icon="home"
      prop:selected="true"></anvil-component>
  </anvil-block>
  <anvil-block slot="content">
    <anvil-component
      type="m3._Components.Card"
      name="summary_card"
      prop:appearance="outlined">
      <anvil-component
        type="m3._Components.Heading"
        name="summary_heading"
        prop:text="Dashboard"
        prop:style="headline"
        prop:scale="medium"></anvil-component>
    </anvil-component>
  </anvil-block>
</anvil-form>
```

Do not write legacy `form:<dep_id>:...` specs in HTML templates. Do not infer dependency component properties from labels; inspect docs, stubs, or nearby working examples.
