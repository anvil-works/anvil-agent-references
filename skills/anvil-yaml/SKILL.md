---
name: anvil-yaml
description: Update Anvil app manifest files in `anvil.yaml`, including services, app metadata, app logo/favicon, and `db_schema`, using the Anvil YAML type reference available to this agent and `anvil --json validate`.
---

# Anvil YAML

Use this workflow when changing app structure or metadata in `anvil.yaml`.

## Workflow

1. Read `anvil.yaml` and the Anvil YAML type reference available to this agent.
2. Make the smallest manifest change that satisfies the task.
3. Validate with `anvil --json validate anvil.yaml`.
4. Treat machine-readable validation errors as authoritative.

## Rules

- Do not guess field names.
- Do not update `dependencies`; ask the user to update dependencies in the Anvil IDE.
- After edits, `anvil.yaml` may be automatically formatted and keys re-ordered.
- If you enable Users, prefer the standard Users table shape described below.

## App Logo

For app-wide themes or rebrands, inspect `metadata.logo_img` and the existing
files in `theme/assets`:

- Preserve an existing `logo_img` unless the user requests a logo change.
- If `logo_img` is missing and a credible existing logo, brand mark, or app icon is available, set it to `asset:<path>`, for example `logo_img: asset:harbor-mark.svg`.
- Do not use a photo or arbitrary decorative image as the app logo.
- Do not generate a logo automatically. If no suitable asset exists, leave `logo_img` unset.
- If you can create images, offer to make a logo. Otherwise, ask the user for an SVG or PNG.
- Preserve unrelated metadata fields.

When app-wide styling changes both CSS/theme files and `anvil.yaml`, validate the
complete app with `anvil --json validate .`.

## Data Tables

When adding or maintaining the Data Tables service:

- `client_config.enable_v2: true` means Accelerated Data Tables. Missing or false `enable_v2` means legacy Data Tables.
- When adding a new `/runtime/services/tables.yml` service entry, include `client_config.enable_v2: true` to use Accelerated Data Tables.
- For an existing tables service, preserve the current `client_config` unless the user explicitly asks to migrate table behavior.
- Default new tables to `client: none`; server-returned rows and client-writable model classes do not require table access. Use `search` for intentional direct client searches, and `full` only when the user explicitly requests unrestricted client table writes.
- Preserve existing non-empty `db_schema.*.indexes` entries, but do not add new indexes unless the user explicitly asks and confirms the app is on a plan that supports Data Table indexes.
- For new tables, omit `indexes` or use `indexes: []` if the manifest shape requires it.

## Users Table Shape

When enabling Users or changing `db_schema` for `server_config.user_table`:

- When adding the Users service, add or preserve the matching Users table in `db_schema`. If you set `server_config.user_table: users`, `db_schema.users` must exist.
- Always set `server_config.user_table`. For the standard Users table, use `server_config.user_table: users`.
- If it is a string, use that string as the `db_schema` table key.
- If it is a number, treat it as a legacy table id, not a `db_schema` key. Do not create a numeric `db_schema` key. Only edit an existing `db_schema` table when an existing `table_id_hints` entry unambiguously maps that table id to a table Python name; otherwise ask the user to choose or confirm the Users table in the IDE.

The standard Users table includes at least:

- `email` (`string`)
- `enabled` (`bool`)
- `signed_up` (`datetime`)
- `password_hash` (`string`)
- `confirmed_email` (`bool`)
- `remembered_logins` (`simpleObject`)

Some apps also include service-managed columns such as `last_login` (`datetime`), `n_password_failures` (`number`), or `mfa` (`simpleObject`). Do not remove existing service-managed columns.
