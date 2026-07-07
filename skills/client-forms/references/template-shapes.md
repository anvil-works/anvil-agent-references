# HTML Form Template Shapes

Use this reference before changing the root shape of an HTML Form template, editing a template with no root `<anvil-form>`, or handling legacy `HtmlTemplate` output.

## Shape Model

A modern HTML template has two main root models:

- **Layout Form**: explicit root `<anvil-form layout="...">`; the Form fills slots on another layout Form with `<anvil-block>`.
- **Container Form**: explicit root `<anvil-form container="...">`, or an implicit `HtmlComponent` container when there is no root `<anvil-form>`.

For agent reasoning, ordinary HTML without `<anvil-form>` is equivalent to an implied `container="HtmlComponent"`. Preserve that authored shape unless the task requires changing the Form's root container/layout model.

## Container Template

Use an explicit container template when the Form owns its own Anvil layout:

```html
<anvil-form container="LinearPanel">
  <anvil-component type="Label" name="title_label" prop:text="Customers"></anvil-component>
  <anvil-component type="Button" name="add_button" prop:text="Add"></anvil-component>
</anvil-form>
```

The `container` value can be a built-in Anvil container such as `LinearPanel`, `ColumnPanel`, `FlowPanel`, or `HtmlComponent`, or a package-qualified app/dependency Form spec such as `CustomerApp.Components.Card`.

## Layout Form

Use a Layout Form when the Form appears inside another layout Form:

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

The `layout` value must be a package-qualified Form spec. Use `<anvil-block>` to fill slots on that layout. Use `<anvil-slot>` only when defining slots on the current Form.

## Implicit HtmlComponent Container

Omit `<anvil-form>` when the Form should use an implicit `HtmlComponent` container. The top-level content can be ordinary HTML with optional embedded Anvil components:

```html
<section class="hero">
  <h1>Welcome</h1>
  <anvil-component type="Button" name="primary_button" prop:text="Continue"></anvil-component>
</section>
```

Use this shape for HTML-heavy layouts, layout-defining Forms with native markup, and custom component containers that need authored HTML rather than an explicit Anvil container root. See `../examples/htmlcomponent-container.md` for the normal recipe.

Do not rewrite an implicit `HtmlComponent` container into explicit `<anvil-form container="HtmlComponent">` just because the template lacks `<anvil-form>`.

## Legacy HtmlTemplate

Legacy YAML conversion may produce `<anvil-form container="HtmlTemplate" prop:html="...">`. Treat this as a migration edge case, not modern `HtmlComponent`.

When `prop:html` is local markup, such as empty markup, a simple wrapper, or a wrapper containing converted slot placeholders, inline the markup into the HTML body when the mapping is obvious. Replace legacy slot placeholders with the converted components for those slots and remove `container:slot` attributes that only targeted the inlined wrapper.

Do not inline when `prop:html` is a theme asset reference such as `@theme:standard-page.html`, or when wrapper behavior is ambiguous because of scripts, multiple slots, CSS/Python dependencies, or behavior-sensitive structure. In those cases, keep the `HtmlTemplate` container and state why.

Do not change converted frontmatter as part of this cleanup. See `yaml-template.md` for conversion workflow, `html-frontmatter.md` for frontmatter rules, and `../examples/yaml-htmltemplate-conversion.md` for the concrete recipe.
