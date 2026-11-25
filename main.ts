// Roast Your Own Agent entry (Node 22, standard library only):
// writes one line, 141 characters, one funny line roasting your own AI agent, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The line: A roast of my own agent's signature failure loop: confident wrong answer, apology, same mistake again, then a cheerful summary celebrating the fix. Specific, self-directed, no generic chatbot joke. One line, first-person voice,
// punch landing at the end.
// Verified by running the program: the output is exactly 141 characters,
// one line, within the 200-character limit.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  'My agent is so confident it once apologised for a mistake, then made the same mistake, then wrote a summary celebrating how well it fixed it.',
);
