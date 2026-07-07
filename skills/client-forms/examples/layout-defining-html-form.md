# Layout-Defining HTML Form

Use this when the current Form defines slots that other Forms can fill. Slot definitions live in the HTML body. Custom properties and events, if any, live in frontmatter.

```html
---
properties:
  - name: title
    type: string
events:
  - name: close
---
<div class="app-shell">
  <header>
    <h1 anvil:name="title_heading">Dashboard</h1>
    <anvil-slot name="header_actions"></anvil-slot>
  </header>
  <main>
    <anvil-slot name="content"></anvil-slot>
  </main>
</div>
```

A Form can use one layout while defining new slots for its own callers:

```html
<anvil-form layout="CustomerApp.DashboardLayout">
  <anvil-block slot="header">
    <anvil-slot name="actions"></anvil-slot>
  </anvil-block>
  <anvil-block slot="body">
    <anvil-slot name="content"></anvil-slot>
  </anvil-block>
</anvil-form>
```

Use `<anvil-slot>` to define slots. Use `<anvil-block>` to fill slots on a layout you are using.
