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
    "references/attention-and-music-marketing.md"
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

let packageNames = [];
try {
  packageNames = (await readdir(canonicalRoot, { withFileTypes: true }))
    .filter(entry => entry.isDirectory())
    .map(entry => entry.name)
    .sort();
} catch {
  fail("skills directory is missing");
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
    if (!skill.startsWith("---\n")) fail(`${name}/SKILL.md is missing YAML frontmatter`);
    if (!new RegExp(`^name:\\s*${name}\\s*$`, "m").test(skill)) {
      fail(`${name}/SKILL.md frontmatter must declare name: ${name}`);
    }
    if (!/^description:\s*.+$/m.test(skill)) fail(`${name}/SKILL.md must declare a description`);
  }

  for (const rel of required) {
    try {
      await readFile(join(canonical, rel));
    } catch {
      fail(`skills/${name} is missing ${rel}`);
    }
  }

  let canonicalFiles = [];
  try {
    canonicalFiles = (await walk(canonical)).map(p => relative(canonical, p)).sort();
  } catch {
    fail(`skills/${name} directory is missing`);
    continue;
  }
  for (const rel of canonicalFiles) {
    try {
      const a = await digest(join(canonical, rel));
      const b = await digest(join(mirror, rel));
      if (a !== b) fail(`${name} copies differ at ${rel}; run npm run sync`);
    } catch {
      fail(`.agents/skills/${name} is missing ${rel}; run npm run sync`);
    }
  }
}

for (const name of Object.keys(requiredBySkill)) {
  if (!packageNames.includes(name)) fail(`required skill package skills/${name} is missing`);
}

if (process.exitCode) {
  console.error("Skill validation failed.");
} else {
  console.log(`PASS: ${packageNames.length} skill packages are valid and synchronized.`);
}
