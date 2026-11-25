// Office Jokes — make.fun bounty u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a
//
// Writes one office joke (a single line, 1-199 UTF-8 characters) to
// /output/entry.txt. Deterministic, no network, no secrets, no imports
// beyond Node built-ins.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our daily standup is fifteen minutes of six people explaining why the thing due yesterday is now due tomorrow — and tomorrow, they'll spend fifteen more explaining why it's due Friday.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
