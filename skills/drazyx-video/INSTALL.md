# Install Drazyx Video Editor

`drazyx-video` is an Agent Skill package for music-video and short-form post-production. The skill contains editorial instructions and references; it does not install FFmpeg, an NLE, a renderer, an MCP server, or media assets.

## Skills CLI

From this repository's root, install from the local package folder:

```bash
npx skills add . --skill drazyx-video
```

The CLI may prompt for a compatible agent and install scope.

Or install from GitHub:

```bash
npx skills add guiguix7/drazyx-editor --skill drazyx-video
```

Choose the target agent and project/global scope supported by the installed Skills CLI. To install the general Drazyx identity, music, QC, and marketing skill instead, select `drazyx`.

## Manual install

Copy this complete `drazyx-video` directory, including `SKILL.md` and `references/`, into a skill directory the target agent scans. Keep the folder name `drazyx-video` and its companion references together.

The root `visual references/` folder contains project-specific video media and is not included in the distributable skill. If the editing project is this repository, point the agent to that folder. Otherwise provide references and a short description of the source footage separately.

## Host compatibility

This package uses the Agent Skills `SKILL.md` convention, but hosts differ in skill discovery paths, invocation, and tool permissions. Confirm the host reads the folder and its linked files before relying on it. No Freebuff-specific discovery or media-editing integration has been confirmed; if it cannot load Agent Skills, adapt the instructions into a supported project rules or prompt format and connect its editing tools separately.

## Tools

Depending on the task, the agent may need footage/audio access plus an existing NLE or timeline integration, FFmpeg/FFprobe, HyperFrames, Remotion, a browser, or an MCP server. Install and review tools separately; do not infer availability from the skill itself.
