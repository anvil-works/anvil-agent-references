# HTML Form Template Syntax

Use this reference when authoring or reviewing an HTML form template.

## Core Terms

- **Form Python**: the `.py` file that defines the form class and event handlers.
- **Form template**: the `.html` file that defines the form's designer layout.
- **Package form**: `client_code/<Form>/__init__.py` plus `client_code/<Form>/form_template.html`.
- **Module form**: `client_code/<Form>.py` plus `client_code/<Form>.html`.
- **Anvil component**: an `<anvil-component type="...">`, such as `Button`, `TextBox`, `LinearPanel`, or an app/dependency component.
- **Plain HTML element**: normal HTML such as `<div>`, `<section>`, `<button>`, or `<span>`.
- **Container form**: a form whose root is `<anvil-form container="...">`; its children are placed in that container.
- **Layout-using form**: a form whose root is `<anvil-form layout="...">`; it fills slots on another layout form with `<anvil-block>`.
- **Layout-defining form**: a form that declares `<anvil-slot>` elements so other forms can place content into it.
- **Package-qualified form spec**: `<PackageName>.<PythonPathToForm>`, for example `CustomerApp.Layouts.Dialog` or `m3.Layouts.NavigationRailLayout`.
- **Legacy form spec**: old `form:...` or `form:<dep_id>:...` syntax. Do not write this in HTML templates.
- **Frontmatter**: optional YAML at the top of the file for form API metadata only. Layout body content belongs in HTML.

Prefer package forms for new forms unless the user asks for a module form or nearby forms of the same kind use `<Form>.py` plus `<Form>.html`.

## File Shape

Most templates start with HTML only:

```html
<anvil-form container="LinearPanel">
  <anvil-component type="Button" name="save_button" prop:text="Save"></anvil-component>
</anvil-form>
```

Add frontmatter only when the form needs custom component flags, custom properties, custom events, toolbox metadata, layout metadata, or item type metadata. Do not add an empty `---` / `---` block. See `frontmatter.md`.

## Choose The Form Shape

- Use `<anvil-form container="LinearPanel">` when the form owns its layout and uses a built-in Anvil container.
- Use `<anvil-form container="CustomerApp.Components.Card">` when the form owns its layout and the root container is an app or dependency form. The value must be a package-qualified form spec.
- Use `<anvil-form layout="CustomerApp.DashboardLayout">` when the form is displayed inside another layout form. Put all child content inside `<anvil-block slot="...">` elements.
- Omit `<anvil-form>` only for a plain HTML body that should behave as an `HtmlComponent` container. This is common for layout-defining forms and custom component containers.

Do not wrap Anvil components in a native HTML `<form>` tag. Use `<anvil-form>` for Anvil form structure.

## Custom Elements

| Element | Meaning |
| --- | --- |
| `<anvil-form>` | Root element for a container form or a layout-using form. |
| `<anvil-component type="...">` | Creates an Anvil component instance. Children are allowed only when the component type is a container. |
| `<anvil-block slot="name">` | Fills a named slot on the layout named by `<anvil-form layout="...">`. |
| `<anvil-slot name="...">` | Declares a named slot that child forms can fill when they use this form as a layout. |
| `<anvil-dropzone name="...">` | In a custom component container, marks where caller-supplied child components may be inserted. |

Built-in Anvil component and container types are unqualified, such as `Button`, `Label`, `LinearPanel`, and `ColumnPanel`. App and dependency forms are package-qualified, such as `CustomerApp.Components.Card` or `m3._Components.Button`.

Recognized built-in containers include `LinearPanel`, `ColumnPanel`, `FlowPanel`, `GridPanel`, `HtmlComponent`, `RichText`, and `RepeatingPanel`. The parser may accept children on other component types, but unsupported runtime containers can fail when rendered.

## Blocks, Slots, And Dropzones

- A `<anvil-block slot="body">` belongs in a form that uses an existing layout. Its contents become the components placed into that layout slot.
- A `<anvil-slot name="body">` belongs in a form that defines a layout. It creates a target that other forms can fill.
- A `<anvil-dropzone name="body">` belongs in a custom component container. It creates an insertion point for child components passed to that component.

Do not treat these as interchangeable. Use blocks to fill an existing layout, slots to define a layout, and dropzones only for custom component containers.

## Attribute Prefixes

| Prefix | Meaning | Example |
| --- | --- | --- |
| `prop:` | Component, container, or layout property | `prop:text="Hello"` |
| `bind:` | One-way data binding | `bind:text="self.item['name']"` |
| `writeback:` | Two-way binding | `writeback:text="self.item['name']"` |
| `on:` | Anvil component or form event handler; prefer Python `@anvil.handle` for new component handlers | `on:click="self.save_click"` |
| `on:layout:` | Event handler for an event raised by the layout form | `on:layout:submit="self.submit_dialog"` |
| `container:` | Layout property for a child in its parent container | `container:width="200"` |
| `anvil:name` | Gives a plain HTML element an Anvil component name | `anvil:name="hero"` |
| `anvil:dom-node` | Exposes a plain HTML element in Python as `self.dom_nodes["name"]` | `anvil:dom-node="submit_btn"` |
| `anvil:on-dom:` | Native DOM event handler on a plain HTML element; handler receives the browser event object | `anvil:on-dom:click="self.handle_dom_click"` |

For Anvil component `prop:` attributes, consult the Anvil client API stubs available to this agent to confirm valid property names and value shapes. Do not infer property names from labels or examples.

Form-valued properties also use package-qualified specs. For a `RepeatingPanel`, set `prop:item_template` to a package-qualified form name such as `CustomerApp.ArticleRow` or `ContentKit.ArticleRow`.

## Plain HTML Access

Use plain HTML when the element should remain ordinary HTML. Use an Anvil component when the element should participate in Anvil component APIs, properties, roles, layout properties, or component events.

- Use ordinary `class` and `style` attributes for static HTML styling.
- Use `anvil:name` when Python needs a plain HTML element as a named `HtmlComponent`, including dynamic styling through `self.<name>.classes` or `self.<name>.style`.
- Use `anvil:dom-node` only when Python needs the JavaScript bridge for browser DOM APIs that are not exposed by Anvil component properties or helper objects.
- Use `anvil:on-dom:*` only when Python needs the browser DOM event object.

## HTML Classes And Style Helpers

Plain HTML named with `anvil:name` becomes a named `HtmlComponent` on the form instance. Its `classes` and `style` properties are live helper objects for the element's root class list and inline style. Prefer these helpers over `self.dom_nodes[...]` for class and style changes.

```html
<section anvil:name="banner" class="status-banner">Saving...</section>
```

```python
self.banner.classes.add("is-loading")
self.banner.classes.remove("is-loading")
self.banner.classes["is-error"] = has_error
self.banner.classes.update({"active highlighted": should_highlight})
self.banner.style["marginTop"] = 4
self.banner.style.update({"opacity": 0.5}, color="red")
self.banner.style.clear()
```

`classes` accepts a string, a list of strings, a dictionary of class names to booleans, or an `anvil.Classes` object. Strings are split on whitespace and duplicate classes are ignored. Subscript assignment also accepts whitespace-separated class groups, so `self.banner.classes["active highlighted"] = condition` toggles both classes together. Use `classes.update({...}, **kwargs)` for grouped changes; dictionary entries are needed for class names with hyphens or spaces, and keyword arguments are convenient for valid Python identifiers.

`style` accepts a CSS string, a dictionary of CSS property names to values, or an `anvil.Style` object. Property names may use CSS spelling, camelCase, or underscores; numeric values get `px` automatically except for unitless CSS properties and custom properties such as `--gap`. Use `style.update({...}, **kwargs)` for grouped runtime changes; `None` or empty values remove properties. Check the Anvil client API stubs for the full helper API when using methods beyond item assignment, `add`, `remove`, `clear`, and `update`.

Prefer this order for plain HTML styling:

1. Static or durable styling: template `class` plus CSS in `theme/assets/theme.css`.
2. Dynamic root styling: `anvil:name` plus `self.<name>.classes` / `self.<name>.style`.
3. Direct DOM access: `anvil:dom-node` / `self.dom_nodes[...]` only for browser DOM APIs or native DOM event objects that need the JavaScript bridge.

## Bindings And Events

Binding expressions are Python expressions evaluated at runtime. Prefer simple `self.item[...]` or `self.some_value` expressions when possible.

`bind:` is one-way. `writeback:` is two-way. If both appear for the same property, source order decides which binding wins.

For new Anvil component handlers, prefer Python `@anvil.handle(...)` and keep the component markup simple:

```html
<anvil-component type="Button" name="button_1" prop:text="Count: 0"></anvil-component>
```

```python
@anvil.handle("button_1", "click")
def button_1_click(self, **event_args):
    pass
```

If an existing template already wires component events in HTML, preserve that style unless the task calls for changing event wiring:

```html
<anvil-component type="Button" name="button_1" prop:text="Count: 0" on:click="self.button_1_click"></anvil-component>
```

```python
def button_1_click(self, **event_args):
    pass
```

Use DOM events for plain HTML only when the handler needs the browser event object or JavaScript-bridge DOM APIs:

```html
<div anvil:dom-node="drop_zone" anvil:on-dom:dragover="self.drop_zone_dragover">Drop files here</div>
```

```python
def drop_zone_dragover(self, event):
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
    self.dom_nodes["drop_zone"].scrollIntoView()
```

Top-level form events can use an empty component name with `@anvil.handle`:

```python
@anvil.handle("", "show")
def form_show(self, **event_args):
    pass
```

Plain HTML named with `anvil:name` can wire Anvil events with `anvil:on:`:

```html
<div anvil:name="raw_div" anvil:on:show="self.on_show">Content</div>
```

```python
def on_show(self, **event_args):
    pass
```

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
