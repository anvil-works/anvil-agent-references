---
name: form-yaml-template
description: Convert legacy Anvil form template YAML to HTML with `anvil convert-template <path-to-template>` only for template/layout work after confirming no sibling HTML exists. The command removes the source YAML after successful conversion by default. Hand-edit YAML only when the user explicitly asks to stay on YAML.
---

# Forms YAML Template

Use this workflow when an app-editing task affects layout or template structure in a form that still has a legacy YAML template (`form_template.yaml` or `<Form>.yaml`).

The default conversion is destructive: `anvil convert-template` validates the YAML, writes the generated HTML, then removes the source YAML after successful conversion. Do not run it for code-only changes, and do not run it when a sibling HTML template already exists unless the user explicitly asks to regenerate that HTML. Staying on YAML requires explicit user intent (for example "keep this as YAML" or "edit the designer YAML").

A form should have exactly one template file: either HTML or YAML, never both. The server prefers HTML when both exist. Before converting, check whether the sibling HTML template already exists. If it exists, validate and use that HTML template instead of converting the YAML. Remove the YAML only after the HTML validates, unless the user explicitly wants to keep YAML.

## Convert To HTML (default)

1. Identify the YAML template path under `client_code/`:
   - `client_code/**/<Form>/form_template.yaml`
   - `client_code/**/<Form>.yaml`
2. Check for the sibling HTML template:
   - `client_code/**/<Form>/form_template.html`
   - `client_code/**/<Form>.html`
3. If sibling HTML exists, validate it with `anvil --json validate <path-to-html>` and continue layout edits with `form-html-template`.
   - Do not run conversion over existing HTML unless the user explicitly asks to regenerate it from YAML.
   - Remove the YAML only after validating the HTML, unless the user explicitly wants YAML kept.
4. If no sibling HTML exists and the task requires template/layout work, run `anvil convert-template <path-to-template>`.
   - Example: `anvil convert-template client_code/Form1/form_template.yaml`
   - Example: `anvil convert-template client_code/Package/Form1/form_template.yaml`
   - Writes the sibling `.html` file and removes the source YAML after successful conversion.
   - Use `-o <path>` / `--output <path>` to choose the HTML output path.
   - Use `-f` / `--force` only when the user explicitly wants existing HTML overwritten.
   - Use `--keep-source` only when the user explicitly wants YAML retained after conversion.
   - Use `--json` for structured output (source path, output path, whether the YAML was removed).
5. Validate the generated HTML path: `anvil --json validate <path-to-html>`.
6. Continue layout edits with `form-html-template`.

## Stay On YAML (explicit user request only)

1. Read the form Python file and YAML file together.
2. Make the requested change in YAML; keep Python and YAML consistent.
3. Validate: `anvil --json validate client_code/<path>.yaml`
4. Type references: `reference/types/form-yaml.d.ts`

Do not hand-edit YAML when the user has not explicitly asked to stay on YAML.

## User Follow-Up

- When you convert YAML to HTML and the command removes the YAML after successful conversion, say that the legacy YAML template was converted to HTML and removed; link the resulting HTML design view, for example `**[Form1 HTML design](forms/Form1#design;html)**`.
- If the user asked to stay on YAML, say that YAML was edited; otherwise do not emphasize the YAML file.
- Ask before hand-editing YAML if the user has not explicitly asked to stay on YAML.
