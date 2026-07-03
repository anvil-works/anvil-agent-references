# Skulpt Client Runtime

Anvil client Python under `client_code/` runs in the browser on Skulpt, not full CPython. Only a subset of the Python stdlib is available, and external Python packages are not generally available unless the app or a dependency provides compatible client-side code.

These are the supported top-level stdlib imports in Anvil client code:

- `array`
- `builtins`
- `calendar`
- `collections`
- `datetime`
- `fractions`
- `functools`
- `itertools`
- `json`
- `keyword`
- `math`
- `operator`
- `platform`
- `random`
- `re`
- `signal`
- `string`
- `sys`
- `time`
- `turtle`
- `types`
- `typing`
- `urllib`
- `uuid`

Top-level module availability does not imply full CPython parity for every submodule or API. For example, Skulpt provides `collections`, but not `collections.abc`.

## Common unavailable modules

These stdlib modules are **not** available in client code. Importing them fails at runtime; `anvil --json validate` will not catch the error.

| Module | Typical mistake | Prefer instead |
|--------|-----------------|--------------|
| `html` | `html.escape(...)` for user text | Inline replacements, server-side formatting, or `re` for simple cases |
| `pathlib` | File paths on the client | Browser APIs via `anvil.js`, or server callables |
| `os` / `shutil` | Filesystem access | Server callables |
| `importlib` | Dynamic imports | Static imports or server callables |

Before adding any stdlib import not listed in the supported list above, read this file. If the module is absent from the list, assume it is unavailable unless you have verified it in the app checkout.

When client code needs unsupported stdlib behavior, prefer one of these approaches:

- Move the behavior to `server_code/` behind an `@anvil.server.callable` function.
- Use Anvil client APIs or browser APIs through `anvil.js`.
- Use app-local or dependency-provided client modules when they are already present in the app checkout.
