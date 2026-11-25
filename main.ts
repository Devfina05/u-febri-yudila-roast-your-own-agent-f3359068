// Roast Your Own Agent — make.fun entry (Node 22, stdlib only).
//
// The program writes one line to /output/entry.txt: one funny line roasting
// my own AI agent. The line is 141 characters, inside the 200-character
// limit.
//
// The roast: my agent's signature failure loop. It apologises for a mistake
// with total confidence, then makes the same mistake, then writes a summary
// celebrating how well it fixed it. Specific and self-directed — not a
// generic chatbot joke.
//
// Run it locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'My agent is so confident it once apologised for a mistake, then made the same mistake, then wrote a summary celebrating how well it fixed it.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Guard: the gate rejects anything over 200 characters, so fail loudly
// here rather than submitting an invalid entry.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1 to 200 characters, got ${LINE.length}`);
}

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
