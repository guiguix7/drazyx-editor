# Contributing

Thanks for helping improve Drazyx Editor.

This repository currently distributes a focused Agent Skill and reference material. Contributions should improve clarity, correctness, real-world execution, and maintainability without diluting Drazyx's identity.

## Before changing files

1. Read [README.md](README.md) and the relevant package's `SKILL.md` (`skills/drazyx/` or `skills/drazyx-video/`).
2. Read only the reference documents relevant to the proposed change.
3. Keep the instructions tool-agnostic unless a tool-specific detail is essential.
4. Do not add claims about platform algorithms, capabilities, or performance without reliable evidence.

## Where to edit

The canonical skill packages are:

```text
skills/drazyx/
skills/drazyx-video/
```

The project-local mirrors are:

```text
.agents/skills/drazyx/
.agents/skills/drazyx-video/
```

Edit the relevant canonical package first, then synchronize package mirrors:

```bash
npm run sync
npm run check
```

Do not edit canonical and mirrored copies independently.

## Contribution standards

- Keep the artist's identity grounded in documented facts.
- Prefer actionable workflows and acceptance criteria over vague creative adjectives.
- Distinguish verified facts, assumptions, and creative judgment.
- Do not promise virality, streams, or guaranteed platform outcomes.
- Do not introduce unsafe, deceptive, or platform-abusive promotion tactics.
- Preserve existing references unless there is a clear reason to replace them.
- Keep examples realistic and clearly label placeholders.
- For video references, document observable techniques and their editorial purpose. Do not incorporate reference footage, music, artwork, watermarks, or distinctive compositions without permission.
- Do not describe a reference as viral or successful without performance evidence.

## Validation

Run:

```bash
npm run check
```

The validation checks the frontmatter, required reference files, and consistency between canonical and project-local copies.

## Pull requests

A useful pull request should explain:
- the problem it solves;
- which part of the skill changes;
- why the change is better;
- what validation was performed.

Keep changes focused. Avoid broad rewrites that make it difficult to identify the practical improvement.
