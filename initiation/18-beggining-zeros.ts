/**
 * You have a string that consist only of digits. You need to find how many zero digits ("0") are at the beginning of the given string.

Input: A string (string), that consists of digits.

Output: An integer (number).

Examples:

assert.strictEqual(beginningZeros("100"), 0);
assert.strictEqual(beginningZeros("001"), 2);
assert.strictEqual(beginningZeros("100100"), 0);
assert.strictEqual(beginningZeros("001001"), 2);

Precondition: 0-9

link https://js.checkio.org/mission/beginning-zeros/share/b8a3037b542fb0bb3d255338bb65239e/
 */
import assert from "assert";

function beginningZeros(a: string): number {
    let count = 0;

    for (const char of a) {
        if (char === "0") {
            count++;
        } else {
            break;
        }
    }

    return count;
}

console.log("Example:");
console.log(beginningZeros("10"));

// These "asserts" are used for self-checking
assert.strictEqual(beginningZeros("100"), 0);
assert.strictEqual(beginningZeros("001"), 2);
assert.strictEqual(beginningZeros("100100"), 0);
assert.strictEqual(beginningZeros("001001"), 2);
assert.strictEqual(beginningZeros("012345679"), 1);
assert.strictEqual(beginningZeros("0000"), 4);