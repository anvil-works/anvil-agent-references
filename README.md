# Anvil Agent References

This repository contains reference material for AI agents and developer tooling working with Anvil apps.

This repository is generated from the main Anvil source repository.

It includes:

- `stubs/`: Python type stubs for Anvil client and server APIs.
- `skills/`: public agent workflows for common Anvil development tasks.
- `reference/`: structured reference files for Anvil-specific project formats.
- `docs/`: agent-oriented docs for understanding and editing Anvil apps.
- `.codex-plugin/`: Codex plugin metadata for installing the Anvil skills as a bundle.
- `.claude-plugin/`: Claude Code plugin metadata for installing the Anvil skills as a bundle.

Do not edit these files directly; changes should be made in the source repository and published here by the release workflow.

## Codex

Install the repository as a Codex plugin when you want the whole Anvil workflow available in every project. For local testing, point a Codex plugin marketplace entry at this checkout. The plugin is named `anvil` and exposes the skills under `skills/`.

The plugin installs the Anvil skills only. Codex does not read `AGENTS.md` from the plugin checkout while it is working in a separate app. To make these resource paths always available, copy the relevant sections from this repository's `AGENTS.md` into the app project's own `AGENTS.md`.

For manual setup, symlink the skills you want into a Codex skill directory:

```sh
mkdir -p ~/.agents/skills
ln -s /path/to/anvil-agent-references/skills/server-code ~/.agents/skills/server-code
ln -s /path/to/anvil-agent-references/skills/form-code ~/.agents/skills/form-code
```

For a project-specific setup, use `.agents/skills` in the project instead of `~/.agents/skills`.

## Claude Code

Load this checkout as a Claude Code plugin while testing:

```sh
claude --plugin-dir /path/to/anvil-agent-references
```

Claude exposes plugin skills with the `anvil:` namespace, for example `/anvil:server-code`, `/anvil:form-code`, and `/anvil:form-html-template`.

The plugin installs the Anvil skills only. Claude Code does not read `CLAUDE.md` from the plugin checkout while it is working in a separate app. To make these resource paths always available, add a project `CLAUDE.md` that imports this repository's `CLAUDE.md`, or copy the relevant sections into the app project's own `CLAUDE.md`.

For standalone setup, symlink the skills you want into a Claude skill directory:

```sh
mkdir -p ~/.claude/skills
ln -s /path/to/anvil-agent-references/skills/server-code ~/.claude/skills/server-code
ln -s /path/to/anvil-agent-references/skills/form-code ~/.claude/skills/form-code
```

For project-specific setup, use `.claude/skills` in the project instead of `~/.claude/skills`.

## Agent Resource Paths

The public skills refer to Anvil resources by logical role. In this generated checkout, those resources live at:

- Anvil client stubs: `stubs/client/`
- Anvil server stubs: `stubs/server/`
- Anvil type references: `reference/types/`
- Anvil agent docs: `docs/`

If you install individual skills manually, keep this checkout available and add the matching project guidance too: copy `AGENTS.md` guidance for Codex-style agents, or import/copy `CLAUDE.md` guidance for Claude Code.
