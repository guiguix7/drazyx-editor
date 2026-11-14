import { readFile, readdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import { join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(new URL("..", import.meta.url).pathname);
const canonical = resolve(root, "skills/drazyx");
const mirror = resolve(root, ".agents/skills/drazyx");

const required = [
  "SKILL.md",
  "INSTALL.md",
  "references/brand-context.md",
  "references/video-postproduction.md",
  "references/music-production-qc.md",
  "references/music-marketing.md",
  "references/release-playbook.md"
];

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

const skillPath = join(canonical, "SKILL.md");
let skill = "";
try {
  skill = await readFile(skillPath, "utf8");
} catch {
  fail("skills/drazyx/SKILL.md is missing");
}

if (skill) {
  if (!skill.startsWith("---\n")) fail("SKILL.md is missing YAML frontmatter");
  if (!/^name:\s*drazyx\s*$/m.test(skill)) fail("frontmatter must declare name: drazyx");
  if (!/^description:\s*.+$/m.test(skill)) fail("frontmatter must declare a description");
}

for (const rel of required) {
  try {
    await readFile(join(canonical, rel));
  } catch {
    fail(`canonical package is missing ${rel}`);
  }
}

let canonicalFiles = [];
let mirrorFiles = [];
try {
  canonicalFiles = (await walk(canonical)).map(p => relative(canonical, p)).sort();
  mirrorFiles = (await walk(mirror)).map(p => relative(mirror, p)).sort();
} catch {
  fail("canonical or project-local skill directory is missing");
}

if (JSON.stringify(canonicalFiles) !== JSON.stringify(mirrorFiles)) {
  fail("canonical and .agents skill file lists differ; run npm run sync");
} else {
  for (const rel of canonicalFiles) {
    const a = await digest(join(canonical, rel));
    const b = await digest(join(mirror, rel));
    if (a !== b) fail(`copies differ at ${rel}; run npm run sync`);
  }
}

if (process.exitCode) {
  console.error("Skill validation failed.");
} else {
  console.log(`PASS: Drazyx skill is valid; ${canonicalFiles.length} files are synchronized.`);
}
