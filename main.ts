import { mkdirSync, writeFileSync } from "node:fs";

// Famous Last Words at 1 Percent — a phone's dying confession.
// The phone has spent its whole life holding its owner's secrets, and with
// one percent left it finally spills the most embarrassing one: the 3 a.m.
// searches. The punch lands on the last beat: it dies knowing too much.
const ENTRY =
  "At 1 percent, my last words: your 3 a.m. searches were 'how to fake being busy' and 'can my boss see my screen.' I die knowing too much.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters,
// not only white space, on a single line. Refuse to write a bad entry
// rather than hand the judge an invalid one.
if (ENTRY.length < 1 || ENTRY.length > 199 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(`Entry fails the gate at ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
