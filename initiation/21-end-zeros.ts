/**
 * Try to find out how many zeros a given number has at the end.

Input: A positive integer (number).

Output: An integer (number).

Examples:

assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(101), 0);

link https://js.checkio.org/mission/end-zeros/share/8bc828dcd0b645858ef9d3546750cd76/
 */
import assert from "assert";

function endZeros(a: number): number {
  const numStr = a.toString();

  let zeroCount = 0;

  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] === '0') {
      zeroCount++;
    } else {
      break;
    }
  }

  return zeroCount;
}

console.log("Example:");
console.log(endZeros(10));

// These "asserts" are used for self-checking
assert.strictEqual(endZeros(0), 1);
assert.strictEqual(endZeros(1), 0);
assert.strictEqual(endZeros(10), 1);
assert.strictEqual(endZeros(101), 0);
assert.strictEqual(endZeros(245), 0);
assert.strictEqual(endZeros(100100), 2);