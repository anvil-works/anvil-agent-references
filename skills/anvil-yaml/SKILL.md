---
name: anvil-yaml
description: Update Anvil app manifest files in `anvil.yaml`, including services, app metadata, and `db_schema`, using the generated type reference and `anvil --json validate`.
---

# Anvil YAML

Use this workflow when changing app structure or metadata in `anvil.yaml`.

## Workflow

1. Read `anvil.yaml` and the agent reference type file `reference/types/anvil-yaml.d.ts`.
2. Make the smallest manifest change that satisfies the task.
3. Validate with `anvil --json validate anvil.yaml`.
4. Treat machine-readable validation errors as authoritative.

## Rules

- Do not guess field names.
- Do not update `dependencies`; ask the user to update dependencies in the Anvil IDE.
- After edits, `anvil.yaml` may be automatically formatted and keys re-ordered.
- If you enable Users, prefer the standard Users table shape described below.

## Data Tables

When adding or maintaining the Data Tables service:

- `client_config.enable_v2: true` means Accelerated Data Tables. Missing or false `enable_v2` means legacy Data Tables.
- When adding a new `/runtime/services/tables.yml` service entry, include `client_config.enable_v2: true` to use Accelerated Data Tables.
- For an existing tables service, preserve the current `client_config` unless the user explicitly asks to migrate table behavior.
- Preserve existing non-empty `db_schema.*.indexes` entries, but do not add new indexes unless the user explicitly asks and confirms the app is on a plan that supports Data Table indexes.
- For new tables, omit `indexes` or use `indexes: []` if the manifest shape requires it.

## Users Table Shape

When enabling Users or changing `db_schema` for `server_config.user_table`:

- If `server_config.user_table` is absent, use the `users` table.
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

## User Follow-Up

- Do not link `anvil.yaml` as a navigable IDE path; describe manifest changes in plain language (startup form, services enabled, metadata).
- When you change `db_schema`, put the required user follow-up in an important callout:
  > [!IMPORTANT]
  > Validation does not update the live database. You must resolve or apply schema changes in **[Data Tables schema](db/schema/default)**.
- When you enable Users or change the Users table in `db_schema`, explicitly say the Users table schema must be resolved or applied in the IDE.
- For dependency changes, ask the user to update dependencies in the Anvil IDE rather than editing `dependencies` in the manifest.
