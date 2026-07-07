# YAML HtmlTemplate Conversion

Use this after converting legacy YAML when the generated HTML contains `<anvil-form container="HtmlTemplate" prop:html="...">`, or when the source YAML had `container.type: HtmlTemplate`.

For local inline markup, normalize toward an implicit `HtmlComponent` container when the mapping is obvious.

Source YAML:

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

Preferred HTML:

```html
---
custom_component: true
---
<div class="combo">
  <anvil-component type="DropDown" name="picker" on:change="self.picker_change"></anvil-component>
</div>
```

Do not change converted frontmatter as part of this cleanup. Do not inline theme asset references such as `@theme:standard-page.html`; those are real legacy `HtmlTemplate` usage. If wrapper behavior is ambiguous because of scripts, multiple slots, CSS/Python dependencies, or behavior-sensitive structure, keep `container="HtmlTemplate"` and state why.
