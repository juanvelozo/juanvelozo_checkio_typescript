/**
 * You need to count how many non-empty lines a given text has.

An empty line is a line without symbols or the one that contains only spaces.

Input: A text (string).

Output: An integer (number).

Examples:

assert.strictEqual(nonEmptyLines("one simple line\n"), 1);
assert.strictEqual(nonEmptyLines(""), 0);
assert.strictEqual(nonEmptyLines("\nonly one line\n            "), 1);
assert.strictEqual(
    nonEmptyLines(
        "\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            "
    ),
    3
);

link https://js.checkio.org/mission/non-empty-lines/share/c85dcb59a8c0f46eb045b1c8bffff89c/
 */
import assert from "assert";

function nonEmptyLines(text: string): number {
  const lines = text.split('\n'); 
  let count = 0;

  for (const line of lines) {
    if (line.trim().length > 0) {
      count++;
    }
  }

  return count;
}

console.log("Example:");
console.log(nonEmptyLines("one simple line\n"));

// These "asserts" are used for self-checking
assert.strictEqual(nonEmptyLines("one simple line\n"), 1);
assert.strictEqual(nonEmptyLines(""), 0);
assert.strictEqual(nonEmptyLines("\nonly one line\n            "), 1);
assert.strictEqual(
    nonEmptyLines(
        "\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            "
    ),
    3
);