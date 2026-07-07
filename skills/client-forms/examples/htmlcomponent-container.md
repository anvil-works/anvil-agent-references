# Implicit HtmlComponent Container

Use this when the template has no root `<anvil-form>`. For agent reasoning, this is a Container Form with an implied `container="HtmlComponent"`.

Ordinary HTML root:

```html
<section class="hero">
  <h1>Welcome</h1>
  <anvil-component type="Button" name="primary_button" prop:text="Continue"></anvil-component>
</section>
```

Use `anvil:name` when Python should refer to a plain HTML element as an `HtmlComponent`:

```html
<section class="status-region">
  <div anvil:name="banner" class="status-banner">Saving...</div>
</section>
```

```python
self.banner.classes["is-loading"] = loading
self.banner.style["opacity"] = 0.5
```

If the Form has a single top-level plain HTML root, that root is the Form's `HtmlComponent` (`self`), so its `anvil:name` is ignored. Name a nested element instead, or use `self.classes` / `self.style` for the root.

Do not rewrite an implicit `HtmlComponent` container into explicit `<anvil-form container="HtmlComponent">` just because it lacks `<anvil-form>`. Preserve the authored root shape unless the task explicitly changes the Form's layout/container model.
