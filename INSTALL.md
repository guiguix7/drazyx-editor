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

Install the dedicated video-editing skill globally for OpenCode:

```bash
npx skills add guiguix7/drazyx-editor --skill drazyx-video --agent opencode --global --yes
```

Install globally for Codex:

```bash
npx skills add guiguix7/drazyx-editor --skill drazyx --agent codex --global --yes
```

Replace `--skill drazyx` with `--skill drazyx-video` to install the dedicated video skill for Codex.

Install interactively to choose a skill, agent, and scope:

```bash
npx skills add guiguix7/drazyx-editor
```

The repository includes two packages: `drazyx-video` for video post-production and `drazyx` for broader artist/studio work. You can install both when useful.

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

For video edits, install `drazyx-video` and use that skill when named invocation is supported.

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

Copy the entire folder for the selected skill—including `SKILL.md`, `INSTALL.md`, and `references/`—to the directory scanned by your agent.

For OpenCode, project-level discovery supports `.agents/skills/`. Use the folder for the skill you need, such as `.agents/skills/drazyx-video/`. For a global install, use the CLI command above or the global skill directory documented by your installed OpenCode version. Other hosts use their own discovery paths; confirm support and reference-file loading in the target version.

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
Freebuff must support the Agent Skills format or provide an adapter to its own skill format. Do not assume OpenCode discovery paths automatically work in Freebuff. Confirm whether it can read `.agents/skills/drazyx-video/SKILL.md` and sibling `references/` files. Rendering also requires separate access to an editing tool and source media. Compatibility has not yet been tested.

## Repository layout

- `skills/<name>/` contains canonical installable packages discovered by the Skills CLI.
- `.agents/skills/<name>/` contains project-local mirrors for agents that scan this convention.
- `scripts/sync-skill.mjs` copies canonical packages to their mirror folders without removing unrelated local skills.
- `scripts/validate-skill.mjs` verifies each package's required files and canonical/mirror content.

When editing a skill, change its package under `skills/` first, then run `npm run sync` and `npm run check`.
