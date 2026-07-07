# Basic Container Form

Use this when a Form owns its own normal Anvil layout. This is the default recipe for a new simple Form.

Template:

```html
<anvil-form container="LinearPanel">
  <anvil-component type="Label" name="title_label" prop:text="Customers"></anvil-component>
  <anvil-component type="Button" name="add_button" prop:text="Add"></anvil-component>
  <div class="helper-text">Select a customer to edit details.</div>
</anvil-form>
```

Python:

```python
from anvil import *
from ._anvil_designer import CustomersTemplate

class Customers(CustomersTemplate):
    def __init__(self, **properties):
        super().__init__(**properties)

    @handle("add_button", "click")
    def add_button_click(self, **event_args):
        pass
```

Use `container:` attributes for layout properties that belong to the parent container. Preserve existing `grid_position` values instead of inventing designer placement tokens.
