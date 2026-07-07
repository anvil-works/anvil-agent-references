# Plain HTML, DOM Events, And Runtime DOM Access

Use this reference only when a Form task touches ordinary HTML elements from Python, needs native browser event behavior, or needs browser DOM APIs. For ordinary component properties, Anvil component events, bindings, blocks, and slots, start with `cheat-sheet.md`.

## Choose The Surface

Use plain HTML when the element should remain ordinary HTML. Use an Anvil component when the element should participate in Anvil component APIs, properties, roles, layout properties, or component events.

Prefer these surfaces in order:

1. Static or durable styling: template `class` plus CSS in `theme/assets/theme.css`.
2. Dynamic styling on plain HTML: `anvil:name` plus the named `HtmlComponent` helpers; for the single top-level plain HTML root, use `self.classes` / `self.style`.
3. Native DOM events: declarative `anvil:on-dom:*`, or browser `addEventListener` when imperative wiring is required.
4. Direct DOM access: only for browser DOM APIs that Anvil component properties and helpers do not expose.

Do not use direct DOM access as a rendering surface for repeated app data. Use `RepeatingPanel`, item template Forms, Data Bindings, component properties, and small reusable Forms instead of `innerHTML`, HTML strings, or DOM loops.

## `anvil:name`

Use `anvil:name` when Python needs a plain HTML element exposed as a named `HtmlComponent`, especially for runtime class or style state.

```html
<section class="status-region">
  <div anvil:name="banner" class="status-banner">Saving...</div>
</section>
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

`classes` accepts a string, a list of strings, a dictionary of class names to booleans, or an `anvil.Classes` object. Strings are split on whitespace and duplicate classes are ignored. Subscript assignment also accepts whitespace-separated class groups, so `self.banner.classes["active highlighted"] = condition` toggles both classes together.

`style` accepts a CSS string, a dictionary of CSS property names to values, or an `anvil.Style` object. Property names may use CSS spelling, camelCase, or underscores; numeric values get `px` automatically except for unitless CSS properties and custom properties such as `--gap`. `None` or empty values remove properties.

Check the Anvil client API stubs for the full helper API before using methods beyond item assignment, `add`, `remove`, `clear`, and `update`.

If a Form has a single top-level plain HTML root, that root is the Form's `HtmlComponent` (`self`), so its `anvil:name` is ignored. Use `self.classes` / `self.style` for dynamic styling on that root, or put `anvil:name` on a nested element.

## Native DOM Events

Use `anvil:on-dom:<event>` when a plain HTML element should keep native DOM event semantics or the handler needs the browser event object:

```html
<button type="button" class="primary-action" anvil:on-dom:click="self.save_button_click">
  Save
</button>
```

```python
def save_button_click(self, event):
    event.preventDefault()
    self.save()
```

Do not use `anvil:name` or `set_event_handler(...)` for browser DOM events such as `click`, `change`, or `input`. A named plain HTML `HtmlComponent` has Anvil `show` and `hide` events; it does not turn browser DOM events into Anvil component events. For an Anvil component event, use an Anvil component such as `Button` or `Link`.

Plain HTML `anvil:on:*` is HtmlComponent event binding, not native DOM event wiring. Treat it as a narrow `show` / `hide` edge case; do not use it for browser DOM events such as `click`, `change`, or `input`.

## Direct DOM Access

Use a named DOM node only when Python needs browser DOM APIs that are not exposed by Anvil component properties or `HtmlComponent` helpers:

```html
<div anvil:dom-node="drop_zone" anvil:on-dom:dragover="self.drop_zone_dragover">
  Drop files here
</div>
```

```python
def drop_zone_dragover(self, event):
    event.preventDefault()
    event.dataTransfer.dropEffect = "copy"
    self.dom_nodes["drop_zone"].scrollIntoView()
```

For imperative runtime DOM wiring, use the browser event API and wrap Python callbacks so exceptions are reported through Anvil:

```html
<button type="button" class="primary-action" anvil:dom-node="save_button">Save</button>
```

```python
import anvil.js

self.dom_nodes["save_button"].addEventListener(
    "click",
    anvil.js.report_exceptions(self.save_button_click),
)
```

Add direct DOM node naming only when the handler or code actually uses `self.dom_nodes[...]`.

## Avoid `innerHTML`

Do not render generated or repeated app data by rebuilding HTML strings. Avoid `.innerHTML`, `.outerHTML`, `insertAdjacentHTML`, DOM loops, cloned nodes, and helper functions that return HTML for rows, cards, details, search results, order lines, notifications, or similar data-driven UI.

Prefer:

- `RepeatingPanel.items` plus an item template Form for homogeneous repeated data.
- Small reusable Forms plus `add_component()` for dynamic UI chunks that are not a homogeneous list.
- Data Bindings for row/model fields.
- Named `HtmlComponent.classes` / `style` helpers for runtime visual state on existing plain HTML.
