# Installation

Drazyx Editor is distributed as an Agent Skill. It provides reusable instructions and reference material; it is not a standalone editor, plugin, DAW, or rendering engine.

## Requirements

- Node.js 22.20 or later for the current Skills CLI.
- A supported coding/creative agent.
- Separate access to any media tools required by your task (for example, HyperFrames, FFmpeg/FFprobe, FL Studio, or a browser).

## Install with the Skills CLI

Install only the Drazyx skill globally for OpenCode:

```bash
npx skills add guiguix7/drazyx-editor --skill drazyx --agent opencode --global --yes
```

Install globally for Codex:

```bash
npx skills add guiguix7/drazyx-editor --skill drazyx --agent codex --global --yes
```

Install interactively to choose an agent and scope:

```bash
npx skills add guiguix7/drazyx-editor
```

List the skills found in the repository without installing:

```bash
npx skills add guiguix7/drazyx-editor --list
```

The CLI installs to the selected agent's supported skill directory. See the [Skills CLI documentation](https://www.skills.sh/docs/cli) for the current agent list and all options.

## Use the skill

In OpenCode, invoke it explicitly:

```text
@drazyx
```

You can also describe a task that clearly falls within the skill's description. Compatible agents may discover it automatically.

Example requests:

```text
@drazyx Review the three existing Reels in this project and improve all three.
Preserve the original FL Studio footage. Render every final video and run QC.
Do not create a new proof of concept instead of completing the requested edits.
```

```text
@drazyx Audit this final master for release readiness. Do not remaster it.
Separate measured issues from listening observations.
```

```text
@drazyx Build a release campaign for this single. Verify current platform rules
and give me content concepts, hooks, captions, CTAs, and measurement criteria.
```

## Manual installation

The complete skill is in:

```text
.agents/skills/drazyx/
```

Copy that entire folder—including `SKILL.md`, `INSTALL.md`, and `references/`—to the directory scanned by your agent.

For OpenCode, project-level discovery supports `.agents/skills/`. For a global install, use the CLI command above or the global skill directory documented by your installed OpenCode version.

## Update

Update skills installed through the Skills CLI:

```bash
npx skills update drazyx
```

To update only global skills:

```bash
npx skills update drazyx --global
```

To reinstall from this GitHub repository, run the install command again and follow the CLI prompts.

## Troubleshooting

**The agent does not find the skill**
- Confirm the folder is named `drazyx` and contains `SKILL.md`.
- Confirm the YAML frontmatter contains `name: drazyx` and a useful `description`.
- Restart the agent after installation.
- Verify that the selected agent is supported by the current Skills CLI.

**The agent finds the skill but cannot render media**
- The skill provides instructions, not the media software.
- Check that the project has its required tools and that the agent can access the source media and output folders.
- Ask the agent to report unavailable tools rather than claiming to have rendered or inspected files.

**Freebuff compatibility**
Freebuff must support the Agent Skills format or provide an adapter to its own skill format. Do not assume that OpenCode discovery paths are automatically valid in Freebuff. Start by pointing Freebuff to `.agents/skills/drazyx/SKILL.md` and confirm that it can also read the sibling `references/` folder.

## Repository layout

- `skills/drazyx/` is the canonical installable package discovered by the Skills CLI.
- `.agents/skills/drazyx/` is a project-local copy for agents that scan this convention.
- `scripts/sync-skill.mjs` copies the canonical package into the project-local directory.
- `scripts/validate-skill.mjs` verifies required files and that both copies match.

When editing the skill, change `skills/drazyx/` first, then run `npm run sync` and `npm run check`.
