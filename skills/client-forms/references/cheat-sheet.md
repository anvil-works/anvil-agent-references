# HTML Form Cheat Sheet

Use this as a short syntax lookup after you have identified the Form's Python file and template. Load task-shaped examples for full patterns.

## Root Shapes

| Shape | Template signal | Use when |
| --- | --- | --- |
| Layout Form | `<anvil-form layout="Package.Layout">` | This Form fills slots exposed by another layout Form. Put children inside `<anvil-block slot="...">`. |
| Explicit Container Form | `<anvil-form container="LinearPanel">` or another container spec | This Form owns its root container. Children go inside the root `<anvil-form>`. |
| Implicit `HtmlComponent` Container | No root `<anvil-form>` | This Form owns ordinary HTML at the top level. Preserve this authored shape unless the task requires normalizing the root. |
| Legacy `HtmlTemplate` | `<anvil-form container="HtmlTemplate" ...>` or YAML `container.type: HtmlTemplate` | Compatibility/conversion path. Load `yaml-template.md` and `template-shapes.md`. |

For the full model, load `template-shapes.md`.

## Custom Elements

| Element | Meaning |
| --- | --- |
| `<anvil-form>` | Root element for a layout-using Form or explicit Container Form. |
| `<anvil-component type="...">` | Creates an Anvil component instance. Children are only for components that are valid containers. |
| `<anvil-block slot="name">` | Fills a named slot on the layout referenced by `<anvil-form layout="...">`. |
| `<anvil-slot name="name">` | Declares a named slot that child Forms can fill when they use this Form as a layout. |
| `<anvil-dropzone name="name">` | In a custom component container, marks where caller-supplied child components may be inserted. |

Use blocks to fill an existing layout, slots to define a layout, and dropzones only for custom component containers.

## Attribute Prefixes

Anvil tags (`<anvil-form>`, `<anvil-component>`, `<anvil-block>`, `<anvil-slot>`, and `<anvil-dropzone>`) use unprefixed attributes such as `name`, `type`, `prop:*`, `bind:*`, `writeback:*`, `on:*`, and `container:*`.

| Prefix | Meaning | Example |
| --- | --- | --- |
| `prop:` | Component, container, or layout property | `prop:text="Save"` |
| `bind:` | One-way Data Binding | `bind:text="self.item['name']"` |
| `writeback:` | Two-way Data Binding | `writeback:text="self.item['name']"` |
| `on:` | Anvil component or Form event handler; prefer Python `@handle` for new component handlers | `on:click="self.save_click"` |
| `on:layout:` | Handler for an event raised by the layout Form | `on:layout:submit="self.submit_dialog"` |
| `container:` | Layout property for a child in its parent container | `container:width="200"` |

For plain HTML naming, direct DOM access, and native browser events, load `html-dom.md`.

For Anvil component `prop:` attributes, confirm valid property names and value shapes from the Anvil client API stubs, dependency docs/files, or nearby working examples. Do not infer property names from labels or examples.

Form-valued properties use package-qualified specs. For a `RepeatingPanel`, set `prop:item_template` to a package-qualified Form name such as `CustomerApp.ArticleRow` or `ContentKit.ArticleRow`.

## Event Signatures

| Event source | Normal wiring | Python signature |
| --- | --- | --- |
| New Anvil component event | `@handle("save_button", "click")` in Python | `def save_button_click(self, **event_args):` |
| Existing markup-wired component event | `on:click="self.save_click"` on `<anvil-component>` | `def save_click(self, **event_args):` |
| Native browser DOM event on plain HTML | Load `html-dom.md` | `def save_click(self, event):` |
| Top-level Form event | `@handle("", "show")` in Python | `def form_show(self, **event_args):` |

Use `@handle(...)` for new Anvil component events unless preserving nearby markup-wired style.

## Property Values

Property values are parsed from attributes:

- Strings: `prop:text="Hello"`
- Numbers: `prop:count="42"`
- Floats: `prop:ratio="3.14"`
- Booleans: `prop:enabled="true"`
- Null: `prop:maybe="null"`
- JSON objects: `prop:config='{"foo":"bar","count":1}'`
- JSON arrays: `prop:tags='["a","b"]'`
- JSON-looking strings: wrap the value as a JSON string, such as `prop:text='"{}"'`

## Read Deeper When

| Trigger | Load |
| --- | --- |
| Root shape, implicit `HtmlComponent`, or legacy `HtmlTemplate` uncertainty | `template-shapes.md` |
| Frontmatter, custom properties/events, toolbox metadata, layout metadata, or custom component flags | `html-frontmatter.md` |
| Plain HTML naming, native DOM events, direct DOM access, or runtime class/style helpers | `html-dom.md` |
| RepeatingPanel item templates or `writeback:` refresh behavior | `../examples/repeating-panel-item-template.md` |
| Legacy YAML template work | `yaml-template.md` |
| Python class shape, lifecycle, handler imports, or runtime updates | `python.md` |
| Roles, theme CSS, dependency styling, or generated component DOM | `styling.md`, `styling-examples.md`, and `component-dom.md` |
