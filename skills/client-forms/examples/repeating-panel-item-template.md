# RepeatingPanel Item Template

Use this when one item template Form should render once per item. Set `prop:item_template` to the package-qualified Form spec, then set `items` from Python.

Parent template:

```html
<anvil-form layout="CustomerApp.DashboardLayout">
  <anvil-block slot="body">
    <anvil-component type="RepeatingPanel" name="articles_panel" prop:item_template="CustomerApp.ArticleRow"></anvil-component>
  </anvil-block>
</anvil-form>
```

Parent Python:

```python
def __init__(self, **properties):
    super().__init__(**properties)
    self.articles_panel.items = self.load_articles()
```

Item template:

```html
<anvil-form container="ColumnPanel">
  <anvil-component type="Label" name="title_label" bind:text="self.item['title']"></anvil-component>
  <anvil-component type="Label" name="author_label" bind:text="self.item['author']"></anvil-component>
  <anvil-component type="Button" name="open_button" prop:text="Open"></anvil-component>
</anvil-form>
```

Item Python:

```python
@handle("open_button", "click")
def open_button_click(self, **event_args):
    self.parent.raise_event("x-open-article", item=self.item)
```

## Lay out repeated items as a grid

At runtime, a RepeatingPanel has a component root and a direct child items container. The item-template Form roots are children of that items container. Give the RepeatingPanel a semantic role, then put the grid layout on its items container:

```html
<anvil-component type="RepeatingPanel" name="articles_panel" prop:item_template="CustomerApp.ArticleCard" prop:role="article-grid"></anvil-component>
```

```css
.anvil-role-article-grid > div {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 1rem;
}
```

Keep card styling in the item template or on an item-template role. Read `references/component-dom.md` before relying on more of a generated component's DOM.

## Edit item fields

For editable item fields, use `writeback:` for the input and refresh bindings when sibling bound UI should update immediately:

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
```

If the event must use the current input value before writeback has updated `self.item`, commit it explicitly before refreshing:

```python
@handle("name_box", "change")
def name_box_change(self, **event_args):
    self.item["name"] = self.name_box.text
    self.refresh_data_bindings()
```

Do not render repeated app data with `innerHTML`, DOM loops, cloned nodes, or helper functions that return HTML strings.

## Standard Component Writeback Triggers

Writeback happens before the listed component event is processed. It does not happen on every event raised by an editable component.

| Component | Writeback property | Trigger |
| --- | --- | --- |
| `CheckBox` | `checked` | Before `change` |
| `DatePicker` | `date` | Before `change` |
| `DropDown` | `selected_value` | Before `change` |
| `TextBox` | `text` | Before `pressed_enter` and `lost_focus`; not before `change` |
| `TextArea` | `text` | Before `lost_focus`; not before `change` |
