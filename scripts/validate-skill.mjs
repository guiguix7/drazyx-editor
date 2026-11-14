import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const canonicalRoot = resolve(root, "skills");
const mirrorRoot = resolve(root, ".agents/skills");
const requiredBySkill = {
  drazyx: [
    "SKILL.md", "INSTALL.md", "references/brand-context.md",
    "references/video-postproduction.md", "references/music-production-qc.md",
    "references/music-marketing.md", "references/release-playbook.md"
  ],
  "drazyx-video": [
    "SKILL.md", "INSTALL.md", "references/brand-context.md",
    "references/video-postproduction.md", "references/visual-reference-analysis.md",
    "references/attention-and-music-marketing.md",
    "references/short-form-growth-funnel.md"
  ]
};

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

async function digest(file) {
  const data = await readFile(file);
  return createHash("sha256").update(data).digest("hex");
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (entry.isFile()) files.push(path);
  }
  return files;
}

async function relativeFiles(dir) {
  try {
    return (await walk(dir)).map(path => relative(dir, path).split("\\").join("/")).sort();
  } catch {
    return null;
  }
}

let packageNames = [];
try {
  packageNames = (await readdir(canonicalRoot, { withFileTypes: true }))
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort();
} catch {
  fail("skills directory is missing");
}

try {
  const instructions = await readFile(join(root, "AGENTS.md"), "utf8");
  if (!instructions.trim()) fail("AGENTS.md is empty; add repository-level agent instructions");
} catch {
  fail("AGENTS.md is missing");
}

for (const name of packageNames) {
  const canonical = resolve(canonicalRoot, name);
  const mirror = resolve(mirrorRoot, name);
  const required = requiredBySkill[name] ?? ["SKILL.md", "INSTALL.md"];
  const skillPath = join(canonical, "SKILL.md");
  let skill = "";
  try {
    skill = await readFile(skillPath, "utf8");
  } catch {
    fail(`skills/${name}/SKILL.md is missing`);
  }

  if (skill) {
    const match = skill.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---\\r?\\n/);
    if (!match) {
      fail(`${name}/SKILL.md is missing valid YAML frontmatter delimiters`);
    } else {
      const frontmatter = match[1];
      if (!new RegExp(`^name:\\s*["']?${name}["']?\\s*$`, "m").test(frontmatter)) {
        fail(`${name}/SKILL.md frontmatter must declare name: ${name}`);
      }
      const description = frontmatter.match(/^description:\\s*(.+)$/m)?.[1]?.trim();
      if (!description) fail(`${name}/SKILL.md must declare a description`);
      if (description && description.length > 1024) {
        fail(`${name}/SKILL.md description exceeds 1024 characters`);
      }
    }

    for (const [, ref] of skill.matchAll(/references\\/([A-Za-z0-9._-]+\\.md)/g)) {
      try {
        await readFile(join(canonical, "references", ref));
      } catch {
        fail(`skills/${name}/SKILL.md references missing file references/${ref}`);
      }
    }
  }

  for (const rel of required) {
    try {
      const content = await readFile(join(canonical, rel), "utf8");
      if (!content.trim()) fail(`skills/${name}/${rel} is empty`);
    } catch {
      fail(`skills/${name} is missing ${rel}`);
    }
  }

  const canonicalFiles = await relativeFiles(canonical);
  const mirrorFiles = await relativeFiles(mirror);
  if (!canonicalFiles) {
    fail(`skills/${name} directory is missing`);
    continue;
  }
  if (!mirrorFiles) {
    fail(`.agents/skills/${name} directory is missing; run npm run sync`);
    continue;
  }

  const missing = canonicalFiles.filter(file => !mirrorFiles.includes(file));
  const extra = mirrorFiles.filter(file => !canonicalFiles.includes(file));
  for (const file of missing) fail(`.agents/skills/${name} is missing ${file}; run npm run sync`);
  for (const file of extra) fail(`.agents/skills/${name} contains stale file ${file}; run npm run sync`);

  for (const rel of canonicalFiles.filter(file => mirrorFiles.includes(file))) {
    try {
      const a = await digest(join(canonical, rel));
      const b = await digest(join(mirror, rel));
      if (a !== b) fail(`${name} copies differ at ${rel}; run npm run sync`);
    } catch {
      fail(`could not compare canonical and mirror file ${name}/${rel}`);
    }
  }
}

for (const name of Object.keys(requiredBySkill)) {
  if (!packageNames.includes(name)) fail(`required skill package skills/${name} is missing`);
}

if (process.exitCode) {
  console.error("Skill validation failed.");
} else {
  console.log(`PASS: ${packageNames.length} skill packages have required files, valid frontmatter, resolvable references, and exact mirrors.`);
}
