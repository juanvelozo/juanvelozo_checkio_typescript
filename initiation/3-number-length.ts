/*
You have a non-negative integer. Try to find out how many digits it has.
Input: A non-negative integer (number).
Output: An integer (number).

Examples:
assert.strictEqual(numberLength(10), 2);
assert.strictEqual(numberLength(0), 1);
assert.strictEqual(numberLength(4), 1);
assert.strictEqual(numberLength(44), 2);

link https://js.checkio.org/mission/number-length/share/4df9f778d34174ec06192897a61b2c74/
*/

import assert from "assert";

function numberLength(value: number): number {
    return value.toString().length;
}

console.log("Example:");
console.log(numberLength(10));

// These "asserts" are used for self-checking
assert.strictEqual(numberLength(10), 2);
assert.strictEqual(numberLength(0), 1);
assert.strictEqual(numberLength(4), 1);
assert.strictEqual(numberLength(44), 2);