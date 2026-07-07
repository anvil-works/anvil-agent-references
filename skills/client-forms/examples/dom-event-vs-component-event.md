# DOM Event Vs Component Event

Use Anvil component events for Anvil components. Use native DOM events for plain HTML elements when the element should remain native HTML or the handler needs the browser event object.

Anvil component event:

```html
<anvil-component type="Button" name="save_button" prop:text="Save"></anvil-component>
```

```python
@handle("save_button", "click")
def save_button_click(self, **event_args):
    pass
```

Existing markup-wired component event:

```html
<anvil-component type="Button" name="save_button" prop:text="Save" on:click="self.save_button_click"></anvil-component>
```

```python
def save_button_click(self, **event_args):
    pass
```

Plain HTML native DOM event:

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

Imperative DOM event with JavaScript DOM access:

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

Do not use `anvil:name` or `set_event_handler(...)` for browser DOM events such as `click`, `change`, or `input`. `HtmlComponent` only has Anvil `show` and `hide` events.
