# HTML Form Template Examples

Use these as compact patterns when creating or editing an HTML form template. Prefer package-form `form_template.html` for a new form; these patterns also apply to a module-form `<Form>.html` file.

## Simple Container Form

Use a container form when the form owns its own layout.

```html
<anvil-form container="LinearPanel">
  <anvil-component type="Label" name="title_label" prop:text="Customers"></anvil-component>
  <anvil-component type="Button" name="add_button" prop:text="Add"></anvil-component>
  <div class="helper-text">Select a customer to edit details.</div>
</anvil-form>
```

```python
@anvil.handle("add_button", "click")
def add_button_click(self, **event_args):
    pass
```

## Plain HTML Body

Omit `<anvil-form>` when the form body is ordinary HTML with embedded Anvil components. The template is treated as an `HtmlComponent` container form.

```html
<section class="hero">
  <h1 anvil:dom-node="heading">Welcome</h1>
  <anvil-component type="Button" name="primary_button" prop:text="Continue"></anvil-component>
</section>
```

## Form Using An Existing Layout

Use `<anvil-form layout="...">` when this form should appear inside another layout form. Each `<anvil-block>` fills one slot on that layout.

```html
<anvil-form layout="CustomerApp.DashboardLayout">
  <anvil-block slot="header">
    <anvil-component type="TextBox" name="search_box" prop:placeholder="Search" container:width="240"></anvil-component>
  </anvil-block>
  <anvil-block slot="body">
    <anvil-component type="Label" name="body_label" prop:text="Dashboard content"></anvil-component>
  </anvil-block>
</anvil-form>
```

The `layout` value is a package-qualified form spec. A `Layouts` package is just one app convention, not required syntax.

## Form That Uses And Defines Layout Slots

A form can use one layout while exposing new slots for child forms. In this example, `<anvil-block>` fills slots on `CustomerApp.DashboardLayout`, while nested `<anvil-slot>` elements create slots on the current form.

```html
<anvil-form layout="CustomerApp.DashboardLayout">
  <anvil-block slot="header">
    <anvil-slot name="actions"></anvil-slot>
  </anvil-block>
  <anvil-block slot="body">
    <anvil-component type="FlowPanel" name="main_panel">
      <anvil-slot name="primary"></anvil-slot>
      <anvil-slot name="secondary" container:width="200"></anvil-slot>
    </anvil-component>
  </anvil-block>
</anvil-form>
```

## Container Layout Properties

Use `container:` attributes for properties that the parent container applies to a child component. Existing `grid_position` values are designer placement tokens; preserve nearby patterns instead of inventing new token strings.

```html
<anvil-form layout="CustomerApp.DashboardLayout">
  <anvil-block slot="body">
    <anvil-component type="ColumnPanel" name="content_panel" prop:role="outlined-card">
      <anvil-component
        type="Label"
        name="summary_title"
        prop:text="Summary"
        container:grid_position="ABCDXY,TOPROW"
        container:full_width_row="true"></anvil-component>
      <anvil-component
        type="Button"
        name="save_button"
        prop:text="Save"
        container:grid_position="ACTIONS,SAVEBT"></anvil-component>
    </anvil-component>
  </anvil-block>
</anvil-form>
```

Check the agent reference stubs under `stubs/client/` for component properties such as `role`, `text`, and `placeholder`. Check existing app templates or component docs before using container-specific layout properties.

## Components From A Dependency

When an app depends on M3 or another component package, use the dependency package name from `anvil.yaml`. For example, if `anvil.yaml` has `resolution_hints: {package_name: m3}`, M3 forms and components use specs such as `m3.Layouts.NavigationRailLayout` and `m3._Components.NavigationLink`.

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

Inspect `anvil.yaml`, agent reference docs under `docs/m3/`, or dependency files before choosing component paths or properties. Do not write legacy `form:<dep_id>:...` specs.

## RepeatingPanel Item Template

Use a `RepeatingPanel` when one item template form should render once per item. Set `prop:item_template` to the package-qualified form spec for the row/card form, then set `items` from Python.

```html
<anvil-form layout="CustomerApp.DashboardLayout">
  <anvil-block slot="body">
    <anvil-component type="RepeatingPanel" name="articles_panel" prop:item_template="CustomerApp.ArticleRow"></anvil-component>
  </anvil-block>
</anvil-form>
```

```python
def __init__(self, **properties):
    super().__init__(**properties)
    self.articles_panel.items = self.load_articles()
```

The item template form can bind against `self.item`:

```html
<anvil-form container="ColumnPanel">
  <anvil-component type="Label" name="title_label" bind:text="self.item['title']"></anvil-component>
  <anvil-component type="Label" name="author_label" bind:text="self.item['author']"></anvil-component>
</anvil-form>
```

## Layout Properties And Bindings

Use `prop:` and `bind:` on `<anvil-form layout="...">` when the current form needs to set properties on the layout it is using.

```html
<anvil-form
  layout="CustomerApp.Layouts.Dialog"
  prop:title="Customer details"
  bind:is_enabled="self.dialog_enabled">
  <anvil-block slot="body">
    <anvil-component type="TextBox" name="name_box" prop:placeholder="Name" writeback:text="self.item['name']"></anvil-component>
    <anvil-component type="Button" name="ok_button" prop:text="OK"></anvil-component>
  </anvil-block>
</anvil-form>
```

```python
@anvil.handle("ok_button", "click")
def ok_button_click(self, **event_args):
    pass
```

## Plain HTML DOM Access

Use `anvil:dom-node` and `anvil:on-dom:` for plain HTML elements that should stay plain HTML and need direct DOM access or a browser event object.

```html
<div class="toolbar">
  <button anvil:dom-node="count_btn" anvil:on-dom:click="self.count_click">Clicked 0 times</button>
  <span anvil:dom-node="status_text">Ready</span>
</div>
```

```python
def count_click(self, event):
    event.preventDefault()
    self.click_count = getattr(self, "click_count", 0) + 1
    self.dom_nodes["count_btn"].innerText = f"Clicked {self.click_count} times"
    self.dom_nodes["status_text"].innerText = "Updated from a native DOM event"
```

## Layout-Defining Form

Use `<anvil-slot>` when the form should act as a layout for child forms. Custom properties and events belong in frontmatter; slots belong in the HTML body.

```html
---
properties:
  - name: title
    type: string
events:
  - name: close
---
<div class="app-shell">
  <header>
    <h1 anvil:dom-node="title_heading">Dashboard</h1>
    <anvil-slot name="header_actions"></anvil-slot>
  </header>
  <main>
    <anvil-slot name="content"></anvil-slot>
  </main>
</div>
```

See `frontmatter.md` for frontmatter rules.

## Custom Component Container

Use a custom component container for a reusable component that accepts caller-supplied child components. Put insertion points in the HTML body with `<anvil-dropzone>`.

```html
---
custom_component: true
custom_component_container: true
properties:
  - name: title
    type: string
---
<article class="info-card">
  <header>
    <h2 anvil:dom-node="title_heading">Card title</h2>
    <anvil-dropzone name="actions"></anvil-dropzone>
  </header>
  <section class="info-card-body">
    <anvil-dropzone name="body"></anvil-dropzone>
  </section>
</article>
```

Dropzones for custom component containers only work in the top-level `HtmlComponent` container; do not nest them inside other Anvil container components.
