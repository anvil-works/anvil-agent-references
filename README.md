# Anvil Agent References

This repository is generated from [anvil-works/anvil](https://github.com/anvil-works/anvil).

The files in this repository are generated Anvil reference material for agents
and tooling. Do not edit this repository directly. To change these files, update
the source files in `anvil-works/anvil`, regenerate the docs package, and let the
publishing workflow mirror the generated output here.

Mirrored directories:

- `stubs/`: generated Anvil API stubs from `anvil-works/anvil:doc/anvil-api-stubs/source/`.
- `skills/`: selected public agent workflows from `anvil-works/anvil:platform/agents/agent-host/user_config_template/skills/`.
- `reference/`: generated agent reference material from `anvil-works/anvil:platform/agents/agent-host/user_config_template/reference/`.
- `docs/`: agent-facing docs from `anvil-works/anvil:platform/agents/agent-host/user_config_template/docs/`.

Generated from:

- Source repository: `anvil-works/anvil`
- Source commit: `6cd4c652c9b9c2502b0371602ac9c2b73ca9d502`
- Generation command: `node doc/anvil-api-stubs/generate-stubs.mjs`

