/**
 * You have a number and you need to determine which digit in this number is the biggest.

Input: A positive integer (number).

Output: An integer 0-9 (number).

Examples:

assert.strictEqual(maxDigit(0), 0);
assert.strictEqual(maxDigit(52), 5);
assert.strictEqual(maxDigit(634), 6);
assert.strictEqual(maxDigit(1), 1);

link https://js.checkio.org/mission/max-digit/share/e12431c6975113154dfcf362f9e49a90/

 */
import assert from "assert";

function maxDigit(value: number): number {
  let max = 0;
  const str = value.toString();

  for (const char of str) {
    const digit = parseInt(char);
    if (digit > max) {
      max = digit;
    }
  }

  return max;
}


console.log("Example:");
console.log(maxDigit(10));

// These "asserts" are used for self-checking
assert.strictEqual(maxDigit(0), 0);
assert.strictEqual(maxDigit(52), 5);
assert.strictEqual(maxDigit(634), 6);
assert.strictEqual(maxDigit(1), 1);
assert.strictEqual(maxDigit(10000), 1);