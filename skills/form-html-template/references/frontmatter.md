# HTML Form Template Frontmatter

Use this reference before adding or changing YAML frontmatter in an HTML form template.

Most forms do not need frontmatter. If none of the fields below are needed, start the file with HTML and do not add an empty `---` / `---` block.

## What Frontmatter Is For

Frontmatter stores form API metadata: information the designer or callers need about the form itself. It does not describe the visible component tree.

Use frontmatter only for:

- `custom_component`: marks the form as a custom component.
- `custom_component_container`: marks a custom component as accepting child components; valid only with `custom_component: true`.
- `properties`: custom properties exposed by the form or custom component.
- `events`: custom events exposed by the form or custom component.
- `toolbox_item`: how a custom component appears in the designer toolbox.
- `layout_metadata`: designer metadata for a layout form.
- `item_type`: data-table item type metadata.

For exact field shapes, consult the form YAML type reference available to this agent.

## What Belongs In HTML

Layout body data belongs in the HTML body, not frontmatter:

- Root form shape: `<anvil-form container="...">` or `<anvil-form layout="...">`.
- Component tree: `<anvil-component>`.
- Layout usage: `<anvil-block slot="...">`.
- Layout definition: `<anvil-slot name="...">`.
- Custom component container insertion points: `<anvil-dropzone name="...">`.
- Bindings, event attributes, component properties, and layout properties.

Do not put legacy YAML layout fields such as `container`, `components`, `layout`, `components_by_slot`, or `slots` in HTML-template frontmatter.

## Layout-Defining Form With Properties And Events

This form defines slots that other forms can fill. The custom properties and events are API metadata, so they live in frontmatter. The slots are body layout, so they live in HTML.

```html
---
properties:
  - name: title
    type: string
    description: Dialog title
events:
  - name: submit
    parameters:
      - name: value
---
<section class="dialog-shell">
  <header>
    <h2 anvil:name="title_heading">Customer details</h2>
    <anvil-slot name="actions"></anvil-slot>
  </header>
  <main>
    <anvil-slot name="content"></anvil-slot>
  </main>
</section>
```

## Form Using A Layout With Properties And Events

This form uses an existing layout and exposes its own custom API. The layout selection and blocks are body layout, so they stay in HTML.

```html
---
properties:
  - name: title
    type: string
    description: Dialog title
events:
  - name: submit
    parameters:
      - name: value
---
<anvil-form layout="CustomerApp.Layouts.Dialog" prop:title="Customer details">
  <anvil-block slot="body">
    <anvil-slot name="content"></anvil-slot>
  </anvil-block>
</anvil-form>
```

The `layout` value must be a package-qualified form spec such as `CustomerApp.Layouts.Dialog`, not legacy `form:...` syntax.

## Custom Component

Use `custom_component: true` when the form should be available as a component to other forms.

```html
---
custom_component: true
properties:
  - name: value
    type: string
    default_binding_prop: true
events:
  - name: change
    default_event: true
---
<anvil-form container="LinearPanel">
  <anvil-component type="TextBox" name="value_box" prop:placeholder="Value"></anvil-component>
</anvil-form>
```

## Custom Component Container

Use `custom_component_container: true` only when callers should be able to insert child components into this component. Put each insertion point in the HTML body with `<anvil-dropzone>`.

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
