# Anvil Agent References

This is a template for an app project's `AGENTS.md`, not plugin runtime config. Installing the plugin exposes the skills; it does not make Codex read this file while working in another app. Copy the sections you want into that app's own `AGENTS.md`.

Use the public Anvil skills in this checkout for Anvil app work. The current working directory is usually an Anvil app root with `anvil.yaml`, `client_code/`, `server_code/`, and `theme/assets/`.

## Shared Anvil Resources

When a skill refers to host-provided Anvil resources, use the resources from this generated checkout:

- Anvil client stubs: `stubs/client/` - read-only Anvil API `.pyi` files for `client_code/`.
- Anvil server stubs: `stubs/server/` - read-only Anvil API `.pyi` files for `server_code/`.
- Anvil type references: `reference/types/` - generated `.d.ts` reference material for `anvil.yaml` and form templates.
- Anvil docs: `docs/` - agent-oriented Anvil docs, including dependency docs when present.
- Anvil skills: `skills/` - public workflows for common Anvil app-editing tasks.

Skill-local `references/...` paths are resolved relative to the active skill directory.

## Validation

Validate supported app files with `anvil --json validate <path>`. Validate `anvil.yaml`, HTML or YAML form templates under `client_code/`, and Python files under `client_code/` or `server_code/`.

## Editing Boundaries

- Treat the app checkout as user-owned code.
- Do not edit this generated reference checkout while working on an app.
- Do not edit `.anvil/` dependency material inside an app checkout.
- Inspect `.anvil/deps/<package>/anvil.yaml` and dependency docs before guessing dependency APIs.

## Skills

Use these public skills for Anvil work:

- `form-code` - form Python.
- `form-html-template` - form HTML templates.
- `form-yaml-template` - convert legacy Anvil form YAML to HTML, or edit YAML only when explicitly requested.
- `form-styling` - form appearance and theme CSS.
- `client-modules` - client modules that are not forms.
- `server-code` - server modules.
- `anvil-yaml` - `anvil.yaml`.
