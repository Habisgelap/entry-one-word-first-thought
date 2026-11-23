// One Word, First Thought — make.fun entry.
// The program writes exactly one word, the first that comes to mind,
// to /output/entry.txt. No topic, no explanation, no second draft.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The word itself: "susurrus" — the soft whispering, rustling sound
// of wind moving through leaves. It sounds like what it means, calls
// up a clear image in a few letters, and is not the word anyone expects
// first. One word, nothing else.
const WORD = "susurrus";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
console.log(`wrote ${WORD.length} characters to ${OUTPUT_PATH}`);
