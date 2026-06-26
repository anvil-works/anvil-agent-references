# HTML Form Template Examples

Use these as compact patterns when creating or editing an HTML form template. Prefer package-form `form_template.html` for a new form; these patterns also apply to a module-form `<Form>.html` file.

## Contents

- [Simple Container Form](#simple-container-form)
- [Plain HTML Body](#plain-html-body)
- [Form Using An Existing Layout](#form-using-an-existing-layout)
- [Form That Uses And Defines Layout Slots](#form-that-uses-and-defines-layout-slots)
- [Container Layout Properties](#container-layout-properties)
- [Components From A Dependency](#components-from-a-dependency)
- [Reusable Form Component](#reusable-form-component)
- [RepeatingPanel Item Template](#repeatingpanel-item-template)
- [Layout Properties And Bindings](#layout-properties-and-bindings)
- [Plain HTML DOM Access](#plain-html-dom-access)
- [Layout-Defining Form](#layout-defining-form)
- [Custom Component Container](#custom-component-container)

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
@handle("add_button", "click")
def add_button_click(self, **event_args):
    pass
```

## Plain HTML Body

Omit `<anvil-form>` when the form body is ordinary HTML with embedded Anvil components. The template is treated as an `HtmlComponent` container form.

```html
<section class="hero">
  <h1>Welcome</h1>
  <anvil-component type="Button" name="primary_button" prop:text="Continue"></anvil-component>
</section>
```

When converting legacy YAML, inline local `HtmlTemplate` markup instead of preserving it as a wrapper. For source YAML like this:

```yaml
custom_component: true
container:
  type: HtmlTemplate
  properties:
    html: |-
      <div class="combo">
        <div anvil-slot="default"></div>
      </div>
components:
  - type: DropDown
    name: picker
    layout_properties: {slot: default}
    event_bindings: {change: picker_change}
```

Prefer this HTML shape:

```html
---
custom_component: true
---
<div class="combo">
  <anvil-component type="DropDown" name="picker" on:change="self.picker_change"></anvil-component>
</div>
```

Do not change the converted frontmatter as part of this cleanup. If the old `html` is a theme reference such as `@theme:standard-page.html`, or it is not clear whether local markup should be inlined, ask before rewriting it.

Use `anvil:name` when Python should refer to a plain HTML element as a component:

```html
<section anvil:name="banner" class="status-banner">Saving...</section>
```

```python
self.banner.classes.add("is-loading")
self.banner.classes["is-error"] = has_error
self.banner.classes.update({"active highlighted": should_highlight})
self.banner.style["marginTop"] = 4
self.banner.style.update({"opacity": 0.5})
self.banner.style.clear()
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

Check the Anvil client API stubs available to this agent for component properties such as `role`, `text`, and `placeholder`. Check existing app templates or component docs before using container-specific layout properties.

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

Inspect `anvil.yaml`, the M3 docs available to this agent, or dependency files before choosing component paths or properties. Do not write legacy `form:<dep_id>:...` specs.

## Reusable Form Component

Forms are components. Use small Forms for reusable cards, widgets, stage nodes,
detail panels, and similar composite UI. Put new reusable component Forms in a
`Components` package by default, unless the app already has another component
package convention. In the checkout this package is represented as
`client_code/Components/`; in Anvil references it is a package, not a generic
directory.

Use the app's package name from `anvil.yaml` in package-qualified form specs:

```html
<anvil-form container="LinearPanel">
  <anvil-component
    type="CustomerApp.Components.StatusCard"
    name="build_status"
    bind:item="self.build_status"></anvil-component>
</anvil-form>
```

The same `item` value can be passed from Python:

```python
from ..Components.StatusCard import StatusCard

def add_status_item(self, status):
    self.status_panel.add_component(StatusCard(item=status))
```

When the reusable Form needs a named API, define custom properties in the
component Form's frontmatter. The parent binds to the custom component's
properties; the component's Python property setters update its own internal UI.
For item-driven reusable Forms, prefer Data Bindings against `self.item[...]`.
For custom-property-driven components like this one, update the component's
fixed internal UI from the setters. Named `anvil:dom-node` elements are
appropriate when the component owns fixed native HTML. Data Bindings do not
automatically refresh when arbitrary custom attributes change unless the setter
explicitly calls `self.refresh_data_bindings()`.

```html
---
custom_component: true
properties:
  - name: title
    type: string
  - name: status
    type: string
events:
  - name: open
    parameters:
      - name: status
---
<article class="status-card">
  <h3 anvil:dom-node="title_text"></h3>
  <p anvil:dom-node="status_text"></p>
  <anvil-component
    type="Link"
    name="open_link"
    prop:text="Open"
    on:click="self.open_link_click"></anvil-component>
</article>
```

```python
def __init__(self, **properties):
    self._title = ""
    self._status = ""
    super().__init__(**properties)

@property
def title(self):
    return self._title

@title.setter
def title(self, value):
    self._title = "" if value is None else str(value)
    self.dom_nodes["title_text"].textContent = self._title

@property
def status(self):
    return self._status

@status.setter
def status(self, value):
    self._status = "" if value is None else str(value)
    self.dom_nodes["status_text"].textContent = self._status

def open_link_click(self, **event_args):
    self.raise_event("open", status=self.status)
```

Do not extend this fixed native HTML pattern into generated collections or HTML
string rendering. Repeated app data belongs in `RepeatingPanel` item templates.

Then set those properties from the parent template or parent Python:

```html
<anvil-component
  type="CustomerApp.Components.StatusCard"
  name="build_status"
  prop:title="Build"
  prop:status="Passing"
  on:open="self.build_status_open"></anvil-component>
```

```python
from ..Components.StatusCard import StatusCard

def add_status(self, status):
    self.status_panel.add_component(
        StatusCard(title=status["name"], status=status["state"])
    )
```

For one Form per item in a repeated collection, use a `RepeatingPanel` item
template instead.

## RepeatingPanel Item Template

Use a `RepeatingPanel` when one item template form should render once per item. Set `prop:item_template` to the package-qualified form spec for the row/card form, then set `items` from Python.

Use this for repeated rows, cards, list items, search results, order lines, notifications, and similar app data. Prefer this over DOM-generated lists built with loops, `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `createElement`, cloned DOM nodes, or ad hoc HTML string render functions.

Do not generate repeated app data as HTML strings:

```html
<section anvil:dom-node="articles"></section>
```

```python
def show_articles(self, articles):
    cards = []
    for article in articles:
        cards.append(
            f"<article class='article-card'>"
            f"<h3>{article['title']}</h3>"
            f"<p>{article['summary']}</p>"
            f"</article>"
        )
    self.dom_nodes["articles"].innerHTML = "".join(cards)
```

Instead, put the repeated structure in an item template form:

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

For editable item fields, use writeback for the input and refresh bindings from
the component event when sibling bound UI should update immediately:

```html
<anvil-form container="ColumnPanel">
  <anvil-component type="Label" name="name_label" bind:text="self.item['name']"></anvil-component>
  <anvil-component type="TextBox" name="name_box" writeback:text="self.item['name']"></anvil-component>
</anvil-form>
```

```python
@handle("name_box", "pressed_enter")
def name_box_pressed_enter(self, **event_args):
    self.refresh_data_bindings()

@handle("name_box", "lost_focus")
def name_box_lost_focus(self, **event_args):
    self.refresh_data_bindings()
```

Use the `lost_focus` handler only when blur should also commit or refresh.

Anti-pattern: do not replace writeback with manual mirror code like this:

```python
@handle("name_box", "change")
def name_box_change(self, **event_args):
    self.item["name"] = self.name_box.text
    self.name_label.text = self.item["name"]
```

For code that should run whenever bindings refresh, use the form-level event:

```python
@handle("", "refreshing_data_bindings")
def form_refreshing_data_bindings(self, **event_args):
    pass
```

Interactive repeated rows should keep their event wiring in the item template
form. Prefer an Anvil component when ordinary Anvil click semantics are enough:

```html
<anvil-form container="ColumnPanel">
  <anvil-component type="Label" name="title_label" bind:text="self.item['title']"></anvil-component>
  <anvil-component type="Button" name="open_button" prop:text="Open"></anvil-component>
</anvil-form>
```

```python
@handle("open_button", "click")
def open_button_click(self, **event_args):
    self.parent.raise_event("x-open-article", item=self.item)
```

Use native DOM event wiring for a fixed plain-HTML control only when the markup
should remain ordinary HTML or the handler needs the browser event object:

```html
<article class="article-row">
  <h3 anvil:name="title_heading">Article</h3>
  <p anvil:name="summary_text">Summary</p>
  <button type="button" class="article-row__open" anvil:on-dom:click="self.open_button_click">
    Open
  </button>
</article>
```

```python
def open_button_click(self, event):
    event.preventDefault()
    self.parent.raise_event("x-open-article", item=self.item)
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
@handle("ok_button", "click")
def ok_button_click(self, **event_args):
    pass
```

## Plain HTML DOM Access

Use `anvil:dom-node` when Python needs direct browser DOM access to fixed
native HTML. Use `anvil:on-dom:` when a native HTML element should keep native
DOM event semantics or the handler needs the browser event object. If the
handler does not use `self.dom_nodes[...]`, omit hand-written `anvil:dom-node`
from declarative `anvil:on-dom:*` wiring.
This is not a rendering pattern for app data: do not update repeated rows,
cards, details, or search results by assigning `innerHTML`, `outerHTML`,
`insertAdjacentHTML`, or HTML strings. Use `RepeatingPanel` item templates,
Anvil components, Data Bindings, and component properties instead.

For class and style changes, prefer `anvil:name` and the named `HtmlComponent`'s `classes` / `style` helpers.

```html
<div class="drop-target" anvil:dom-node="drop_zone" anvil:on-dom:dragover="self.drop_zone_dragover">
  Drop files here
</div>
```

```python
def drop_zone_dragover(self, event):
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
    self.dom_nodes["drop_zone"].scrollIntoView()
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
    <h1 anvil:name="title_heading">Dashboard</h1>
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
    <h2 anvil:name="title_heading">Card title</h2>
    <anvil-dropzone name="actions"></anvil-dropzone>
  </header>
  <section class="info-card-body">
    <anvil-dropzone name="body"></anvil-dropzone>
  </section>
</article>
```

Dropzones for custom component containers only work in the top-level `HtmlComponent` container; do not nest them inside other Anvil container components.

When a caller form uses the custom component as its container, named components
placed into a dropzone belong to the caller form:

```html
<anvil-form container="CustomerApp.Components.InfoCard">
  <anvil-component
      type="Button"
      name="save_button"
      prop:text="Save"
      container:dropzone="actions"></anvil-component>
</anvil-form>
```

```python
@handle("save_button", "click")
def save_button_click(self, **event_args):
    pass
```

Put this handler in the caller form's Python, not in the `InfoCard` custom
component container. For the default dropzone, omit `container:dropzone`.
