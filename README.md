<div align="center">

# Drazyx Editor

**A creative direction and production skill for the independent artist Drazyx.**

Professional music-video editing · Music production & audio QC · Artist identity · Music marketing · Release strategy

[![Agent Skills](https://img.shields.io/badge/format-Agent%20Skills-8B5CF6)](https://agentskills.io/)
[![OpenCode](https://img.shields.io/badge/agent-OpenCode-111827)](https://opencode.ai/)
[![Status](https://img.shields.io/badge/status-v1.0.0-7C3AED)](#)

</div>

---

## What is this?

**Drazyx Editor is a reusable Agent Skill package** that gives compatible AI coding and creative agents the context, creative standards, and execution workflows needed to work on Drazyx music and promotional assets.

It is not a standalone video editor, DAW, plugin, or rendering engine. It guides an agent that already has access to the relevant project files and tools.

The central principle is simple:

> Music first. Visuals and marketing should make the music more compelling—not compete with it.

The skill is built around Drazyx's real artist identity and working preferences. It is designed to prevent generic edits, unnecessary effects, endless planning, and incomplete delivery.

## Capabilities

| Area | What the skill guides |
|---|---|
| Creative direction | Artist identity, visual language, references, typography, and art direction |
| Music video editing | Short-form edits, music-led storytelling, pacing, motion design, and QC |
| HyperFrames | Composition workflow, project inspection, previews, linting, rendering, and delivery |
| Music production | Composition, arrangement, sound design, and critical feedback |
| Audio QC | Mix review, master inspection, technical checks, and playback translation |
| Music marketing | Positioning, audience hypotheses, Reels/TikTok/Shorts, hooks, captions, CTAs, and measurement |
| Release strategy | Release preparation, rollout, distribution metadata, rights checks, and post-release learning |

## Quick start

### Install with the Skills CLI

Run:

```bash
npx skills add guiguix7/drazyx-editor
```

Select **drazyx**, choose your agent, and select global or project-level installation.

To list the skills available in this repository first:

```bash
npx skills add guiguix7/drazyx-editor --list
```

### OpenCode

For a global installation, select OpenCode and global scope in the installer. Restart OpenCode, then invoke the skill:

```text
@drazyx
```

You can also use the repository's project-local copy under `.agents/skills/drazyx/` when this repository is opened directly in a compatible environment.

### Manual installation

Copy the complete `.agents/skills/drazyx/` directory into the agent's supported skills directory. Keep the `references/` folder; the main skill file loads those documents on demand.

See **[INSTALL.md](INSTALL.md)** for detailed setup, update, compatibility, and troubleshooting instructions.

## Repository structure

```text
drazyx-editor/
├── README.md
├── INSTALL.md
├── CONTRIBUTING.md
├── CHANGELOG.md
├── SECURITY.md
├── LICENSE
├── .gitignore
├── .agents/
│   └── skills/
│       └── drazyx/
│           ├── SKILL.md
│           ├── INSTALL.md
│           └── references/
│               ├── brand-context.md
│               ├── video-postproduction.md
│               ├── music-production-qc.md
│               ├── music-marketing.md
│               └── release-playbook.md
└── skills/
    └── drazyx/
        ├── SKILL.md
        └── references/
            └── ...
```

The distributable skill lives at `skills/drazyx/` for Skills CLI discovery. The `.agents/skills/drazyx/` copy supports project-local discovery in agents that scan that convention. Keep both copies in sync when updating the skill.

## How the skill works

1. **Understand the actual request.** Define the expected deliverables, source files, scope, constraints, and acceptance criteria.
2. **Inspect the real project.** Read source footage, audio, compositions, assets, and existing instructions before making changes.
3. **Choose a creative direction.** Start with the track's emotional center and strongest musical moment.
4. **Execute the whole task.** Complete all requested outputs before spending time polishing details of a single sample.
5. **Review the rendered result.** Check the actual export, not only the code or preview.
6. **Deliver and report.** Provide exact output paths, formats, QC findings, and unresolved limitations.

A particularly important rule: when asked to improve three existing videos, the agent must work on and render all three. It must not replace that request with a new short proof of concept.

## Principles

- Music stays at the center.
- Distinctive work beats generic templates.
- Effects need an editorial purpose.
- Preserve original masters and source material.
- Separate production feedback, mix feedback, and master QC.
- Never claim to have listened, watched, rendered, published, or verified something that was not actually checked.
- No promises of virality, streams, playlist placement, or audience growth.
- No fake engagement, bots, spam, or deceptive promotion.
- Current platform rules and specifications must be verified when they matter.

## Requirements

The skill itself is plain Markdown and does not require a runtime.

Actual production tasks may require separate tools, depending on the project:
- HyperFrames and its supported runtime;
- FFmpeg/FFprobe for media inspection and export checks;
- FL Studio and the relevant plugins for DAW work;
- access to source media, artwork, project files, and approved audio masters;
- web access for current platform specifications, policies, and campaign research.

Installing this skill does **not** install those tools, models, plugins, fonts, or credentials.

## Artist links

- [Spotify](https://open.spotify.com/intl-pt/artist/71gVcrLVY10LjtZWvUWLQU)
- [SoundCloud](https://soundcloud.com/drazyxmusic)
- [YouTube](https://www.youtube.com/@drazyxmusic)
- [Instagram](https://www.instagram.com/drazyxmusic/)
- [TikTok](https://www.tiktok.com/@drazyxmusic)
- [Bandcamp](https://drazyx.bandcamp.com/)

## Documentation

- [Installation and updates](INSTALL.md)
- [Contribution guide](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)
- [Security policy](SECURITY.md)
- [License status](LICENSE)

## Status

This repository is the public home of the Drazyx Editor skill pack. Version **1.0.0** contains the core artist context and operating workflows. Agent-specific adapters, automated validation, and additional tooling can be added later without changing the core identity reference.

---

<div align="center">

**Built for Drazyx. Designed to help agents do the work—not just talk about it.**

</div>
