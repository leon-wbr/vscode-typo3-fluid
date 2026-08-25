// Fetches the VS Code grammars this extension composes with, so snapshot tests
// tokenize exactly what a user sees. Pinned: snapshots are only stable against
// a fixed upstream version.
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const VSCODE_TAG = "1.89.0";
const OUT_DIR = join(dirname(fileURLToPath(import.meta.url)), "../test/grammars");

const GRAMMARS = {
  "html.tmLanguage.json": "extensions/html/syntaxes/html.tmLanguage.json",
  "html-derivative.tmLanguage.json":
    "extensions/html/syntaxes/html-derivative.tmLanguage.json",
  "css.tmLanguage.json": "extensions/css/syntaxes/css.tmLanguage.json",
};

const exists = (p) =>
  access(p).then(
    () => true,
    () => false
  );

await mkdir(OUT_DIR, { recursive: true });

for (const [name, path] of Object.entries(GRAMMARS)) {
  const target = join(OUT_DIR, name);
  if (await exists(target)) continue;

  const url = `https://raw.githubusercontent.com/microsoft/vscode/${VSCODE_TAG}/${path}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.error(`Failed to fetch ${name}: ${response.status} ${url}`);
    process.exit(1);
  }
  await writeFile(target, await response.text());
  console.log(`fetched ${name}`);
}
