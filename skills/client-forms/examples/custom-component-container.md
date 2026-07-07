# Custom Component Container

Use this when a reusable component accepts caller-supplied child components. The component Form needs `custom_component: true`, `custom_component_container: true`, and `<anvil-dropzone>` insertion points.

Container component template:

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

Caller template:

```html
<anvil-form container="CustomerApp.Components.InfoCard">
  <anvil-component
    type="Button"
    name="save_button"
    prop:text="Save"
    container:dropzone="actions"></anvil-component>
</anvil-form>
```

Caller Python:

```python
@handle("save_button", "click")
def save_button_click(self, **event_args):
    pass
```

Named components placed into a dropzone belong to the caller Form, so put handlers in the caller's Python. For the default dropzone, omit `container:dropzone`.
