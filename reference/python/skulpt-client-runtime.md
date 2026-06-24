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

Top-level module availability does not imply full CPython parity for every submodule or API. For example, Skulpt provides `collections`, but not `collections.abc`;

When client code needs unsupported stdlib behavior, prefer one of these approaches:

- Move the behavior to `server_code/` behind an `@anvil.server.callable` function.
- Use Anvil client APIs or browser APIs through `anvil.js`.
- Use app-local or dependency-provided client modules when they are already present in the app checkout.
