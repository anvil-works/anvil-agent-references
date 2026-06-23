---
name: server-code
description: Edit Anvil server code Python modules under `server_code`, including server-callable functions, background logic, and server packages, while keeping changes isolated to the app workspace.
---

# Server Code

Use this workflow when the task affects server code Python, background logic, or server-callable functions.

## Scope

Server code lives under `server_code/`:

- `server_code/**/<Module>.py`
- `server_code/**/<Package>/__init__.py`

## Rules

- Make server code changes under `server_code/`; do not edit `.anvil/`.
- Keep imports and package structure consistent with the app.
- Use the Anvil server API stubs available to this agent for Anvil API references.
- For protected `@anvil.server.callable` functions, prefer declarative decorator arguments such as `require_user=` when existing server modules in this app already use that style for the same kind of access control.

## Workflow

1. Identify the target module or package.
2. Read nearby modules if the change touches shared logic or existing call patterns.
3. Make the smallest change that satisfies the task.
4. Run the syntax check command in the Testing section for changed Python files.

## Testing

```sh
anvil --json validate server_code/<Module>.py
```

For a package module, check its `__init__.py`:

```sh
anvil --json validate server_code/<Package>/__init__.py
```

- There is no general automated server test path in this template; suggest testing the changed callable or background-task workflow in the app.

## Notes

- Server Python is typically 3.10.
- External libraries can be added in `server_code/requirements.txt`.
- Server code can import client modules only when existing server code in this app already does so; otherwise keep shared server logic under `server_code/`.
