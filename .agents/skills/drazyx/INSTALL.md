# Install the Drazyx skill

This folder follows the Agent Skills format. The complete installation guide is maintained at:

[Repository installation guide](https://github.com/guiguix7/drazyx-editor/blob/main/INSTALL.md)

The distributable package is `skills/drazyx/`. The project-local mirror is `.agents/skills/drazyx/`.

## Quick install

```powershell
npx skills add guiguix7/drazyx-editor --skill drazyx --agent opencode --global --yes
```

To choose the agent and installation scope interactively:

```powershell
npx skills add guiguix7/drazyx-editor
```

Restart the agent after installation, then invoke the skill with `@drazyx` where supported.

## Manual install

Copy this complete `drazyx` directory, including `SKILL.md` and `references/`, into the skills directory supported by your agent. Do not copy only the main file.
