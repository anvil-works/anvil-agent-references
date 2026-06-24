@./AGENTS.md

## Claude Code

This is a template for an app project's `CLAUDE.md`, not plugin runtime config. Installing the plugin exposes the skills; it does not make Claude Code read this file while working in another app. Import this file from the app's own `CLAUDE.md`, or copy the sections you want.

When loaded as a Claude Code plugin, invoke Anvil skills with the `/anvil:<skill-name>` namespace, for example `/anvil:server-code` or `/anvil:form-code`.

When installing standalone skills with symlinks into `~/.claude/skills` or project `.claude/skills`, keep this checkout available so skill-local references and generated Anvil resources remain readable.
