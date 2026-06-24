# Skulpt Client Runtime

Anvil client Python under `client_code/` runs in the browser on Skulpt, not full CPython.

## Supported Stdlib Imports

These top-level Python standard library modules are available in Anvil client code:

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

Top-level module support does not imply that every CPython submodule exists. For example, Skulpt provides `collections`, but not `collections.abc`. Check existing app usage or validate the file before relying on dotted stdlib imports. One known bundled dotted import is `urllib.request`.

## Unsupported Stdlib Imports

Do not import unsupported CPython-only modules from client code. Common unsupported examples include:

- Operating system and process APIs: `os`, `pathlib`, `shutil`, `subprocess`, `tempfile`
- Network and server-side APIs: `socket`, `ssl`, `http`, `smtplib`, `email`
- Threads and async runtimes: `threading`, `multiprocessing`, `asyncio`, `concurrent`
- Local files, archives, and databases: `sqlite3`, `gzip`, `zipfile`, `tarfile`, `pickle`, `shelve`
- CPython introspection/tooling: `inspect`, `ast`, `tokenize`, `importlib`, `pkgutil`, `traceback`
- Numeric stdlib modules not listed above: `decimal`, `statistics`, `cmath`
- Python 3 package shapes not bundled by Skulpt: `collections.abc`, `html`, `html.parser`, `html.entities`

When client code needs unsupported stdlib behavior, prefer one of these approaches:

- Move the behavior to `server_code/` behind an `@anvil.server.callable` function.
- Use Anvil client APIs or browser APIs through `anvil.js`.
- Use app-local or dependency-provided client modules when they are already present in the app checkout.

External Python packages are not generally available in browser client code unless the app or a dependency explicitly provides compatible client-side code.
