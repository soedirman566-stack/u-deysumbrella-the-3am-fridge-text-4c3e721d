// The 3AM Fridge Text — make.fun entry
// Writes one line to /output/entry.txt: the text a smart fridge sends
// its owner at 3am. An optional argv[2] overrides the output path
// (used for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Four visits tonight, zero snacks taken. I'm a fridge, not a menu — and the leftovers are starting to feel led on.";

const outPath = process.argv[2] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");

console.log(`wrote ${LINE.length} chars to ${outPath}`);
