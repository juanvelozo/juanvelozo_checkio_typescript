/*
Check if the given number is even or not. Your function should return true if the number is even, and false if the number is odd.
Input: A number.
Output: Logic value (boolean).

Examples:
assert.strictEqual(isEven(2), true);
assert.strictEqual(isEven(5), false);
assert.strictEqual(isEven(0), true);

link https://js.checkio.org/mission/is-even/share/66d1291048cccdb3bc15b4c23c553947/
*/
import assert from "assert";

function isEven(num: number): boolean {
    return num % 2 === 0;
};

console.log("Example:");
console.log(isEven(2));

// These "asserts" are used for self-checking
assert.strictEqual(isEven(2), true);
assert.strictEqual(isEven(5), false);
assert.strictEqual(isEven(0), true);
