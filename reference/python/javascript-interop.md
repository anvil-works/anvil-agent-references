# JavaScript Interop

Client code only. For third-party libraries, use browser-compatible builds. Verify exports and call signatures in stubs or library docs.

## Imports

- Browser global: `from anvil.js.window import Foo`.
- Dynamic global: `import anvil.js`, then `anvil.js.window[name]`.
- ES module: `module = anvil.js.import_from(url)`; named export `module.name`; default export `module.default`.
- Theme ES module: `anvil.js.import_from("./_/theme/<path>")`.

## Conversions

- JavaScript strings, numbers, booleans, and `BigInt` values → Python primitives; `null` / `undefined` → `None`. JavaScript `Symbol` values remain wrapped.
- Mutable `Array` → backed `ProxyList`; mutations are shared with the original JavaScript array. Frozen `Array` → copied `list`.
- `Map` → backed `ProxyMap`; `Set` → backed `ProxySet`.
- `Uint8Array` → `bytes`. Other typed arrays and `ArrayBuffer` remain proxies; use `Uint8Array(buffer)` for bytes.
- Python `list` / `tuple` → `Array`; `dict` → object literal; `set` → `Set`; `bytes` → `Uint8Array`.
- Other objects remain proxies. Access with attributes, subscripts, `.get()`, and `.keys()`.
- JavaScript calls accept positional arguments only.
- Plain object-literal proxies serialize to server code as dictionaries, and `ProxyList` serializes as a list. Do not send class-instance proxies; extract their data into ordinary serializable values first.

## Promise Boundary

- Regular JavaScript function and method calls that return Promises suspend Python execution and return the resolved value. Write them like synchronous Python calls, even when browser docs say the return type is `Promise`:

  ```python
  response = fetch(url)
  data = response.json()
  ```

- Use the resolved result directly. Do not use `await_promise()`, `.then()`, or Python `async` / `await` for these calls.
- Use `await_promise()` only when Python already has a raw Promise, such as a property (`await_promise(document.fonts.ready)`) or a constructed Promise (`await_promise(Promise(executor))`).

## JavaScript Constructors

Call Foo(...) normally; interop detects whether to call Foo(...) or construct new Foo(...). Use anvil.js.new(Foo, ...) or anvil.js.call(Foo, ...) only to override incorrect detection.

## DOM and Callbacks

- Anvil Component node: `anvil.js.get_dom_node(component)`.
- HTML node: `anvil:dom-node="name"` → `self.dom_nodes["name"]`.
- JavaScript error → `anvil.js.ExternalError`; underlying error: `error.original_error`.
- Wrap Python callbacks with `anvil.js.report_exceptions` when the library may swallow callback errors.
- A Python callback that suspends, such as one making a server call, returns a JavaScript Promise; verify the API accepts async callbacks.
