# Install the Drazyx skill

The distributable source of truth is `skills/drazyx/`. This repository also keeps a compatible local copy at `.agents/skills/drazyx/` for OpenCode and other agents that scan that convention.

## Install from GitHub

Install globally for OpenCode:

```powershell
npx skills add guiguix7/drazyx-editor --skill drazyx --agent opencode --global --yes
```

Install globally for Codex:

```powershell
npx skills add guiguix7/drazyx-editor --skill drazyx --agent codex --global --yes
```

Or run the interactive installer:

```powershell
npx skills add guiguix7/drazyx-editor
```

Select the `drazyx` skill, your agent, and the desired installation scope.

## Use in OpenCode

Restart OpenCode and invoke:

```text
@drazyx
```

## Manual installation

Copy the complete folder `.agents/skills/drazyx/` into the skills directory supported by your agent. Keep all files and the `references/` directory; the main skill loads these references when needed.

## Update

```powershell
npx skills update drazyx
```

For global installs:

```powershell
npx skills update drazyx --global
```

See [INSTALL.md](../../../../INSTALL.md) for full requirements, compatibility notes, and troubleshooting.

## Freebuff compatibility

Freebuff must support the Agent Skills convention or expose an adapter to its own skill system. Start by pointing it to `.agents/skills/drazyx/SKILL.md` and verify it can read the sibling `references/` directory. Do not assume OpenCode discovery paths automatically work in Freebuff.
