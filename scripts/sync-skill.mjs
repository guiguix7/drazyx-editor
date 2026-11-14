import { cp, mkdir, readdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = resolve(root, "skills");
const targetRoot = resolve(root, ".agents/skills");
const packages = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name)
  .sort();

await mkdir(targetRoot, { recursive: true });
for (const name of packages) {
  const source = resolve(sourceRoot, name);
  const target = resolve(targetRoot, name);
  await cp(source, target, { recursive: true, force: true });
  console.log(`Synced skills/${name} -> .agents/skills/${name}`);
}
