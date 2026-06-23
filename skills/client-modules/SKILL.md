---
name: client-modules
description: Edit Anvil client code Python modules under `client_code` that are not form definitions, without touching read-only dependencies or form templates.
---

# Client Modules

Use this workflow when the task affects client-side Python that is not a form definition.

## Scope

Client modules live under `client_code/` and have no matching form template.

- Module path: `client_code/**/<Module>.py`
- Package path: `client_code/**/<Package>/__init__.py`
- Not a module: `client_code/**/<Form>.py` with `<Form>.yaml` or `<Form>.html`.
- Not a module: `client_code/**/<Form>/__init__.py` with `form_template.yaml` or `form_template.html`.

Use `form-code` for form definitions.

## Rules

- Make client code changes under `client_code/`; do not edit `.anvil/`.
- Prefer relative imports for app-local references unless the app uses another pattern.
- Use the Anvil client API stubs available to this agent for Anvil API references.

## Workflow

1. Identify the target module and confirm it has no matching form template.
2. Read nearby modules if the change touches shared logic or existing call patterns.
3. Make the smallest change that satisfies the task.
4. Keep imports and package structure consistent with the app.

## Notes

- Client-side Python uses Skulpt; some stdlib modules are limited and external libraries are not available.
- JavaScript APIs are available through the Python-JavaScript bridge, for example `from anvil.js.window import document`.
- Do not use Python `await` syntax for JavaScript Promises in client code. JavaScript functions that return Promises do not need `await` or `anvil.js.await_promise()`. Use `anvil.js.await_promise(promise)` only for rare Promise-valued property/access cases. For example, Web Animations `Animation.ready` and `Animation.finished` are Promise-valued properties; use `anvil.js.await_promise(animation.finished)` only when client code must wait for them.

## Testing

```sh
anvil --json validate client_code/<Module>.py
```

For a package module, check its `__init__.py`:

```sh
anvil --json validate client_code/<Package>/__init__.py
```

- Suggest testing the changed client workflow in the IDE.
