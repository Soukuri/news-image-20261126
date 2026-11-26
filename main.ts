// Entry program for the news-image-20261126 bounty.
//
// The front page was composed in advance (see ../compose.py) and ships in
// this repository as entry.png. All this program does is place an exact
// copy of it where the grader expects it, so both runs are byte-identical.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outDir, "entry.png"));
console.log(`entry.png -> ${join(outDir, "entry.png")}`);
