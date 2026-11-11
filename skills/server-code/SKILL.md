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
- Never create `server_code/__init__.py`; `server_code/` is an Anvil code root, not a Python package.
- Keep imports and package structure consistent with the app.
- Use the Anvil server API stubs available to this agent for Anvil API references.
- For `@anvil.server.callable` functions that need a user-level permission, use the decorator's `require_user=` argument rather than checking in the function body.

## Datetimes And Timezones

- Use Python's `datetime` for current timestamps.
- Anvil preserves timezone-aware `datetime` values across clients, server code,
  and Data Tables. When a naive `datetime` crosses one of those boundaries,
  Anvil stamps it with the timezone where it was created. So `datetime.now()` in server
  code will be treated as UTC and in client code will be treated as browser timezone.
- When an explicitly timezone-aware value is required, use `anvil.tz`.

## Validation And Error Handling

- For expected user-fixable validation failures, use an explicit result object
  such as `{"ok": False, "message": "Message is required"}`, or raise a shared
  `anvil.server.PortableException` when the caller should catch an exact domain
  error. Let unexpected Data Table, service, schema, and implementation errors
  raise normally.
- Do not rely on ordinary Python built-in exceptions raised by server callables,
  such as `ValueError` or `TypeError`, being catchable on the browser client as
  the same exception type.
- Portable classes and portable exceptions must be defined in client modules so
  both sides can import the same class.

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

- Use `$app-testing` to exercise changed server behavior in the agent's running environment.

## Notes

- Server Python is typically 3.10.
- External server Python libraries can be added in `server_code/requirements.txt`.
- Server code can import client modules for shared portable definitions or when the app already does so; otherwise keep shared server logic under `server_code/`.
