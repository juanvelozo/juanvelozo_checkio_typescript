/**
 * Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return true.

Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAllUpper("ALL UPPER"), true);
assert.strictEqual(isAllUpper("all lower"), false);
assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.strictEqual(isAllUpper(""), true);

link https://js.checkio.org/mission/all-upper-i/share/697ca9c1b1b2bf4b3754e9b9c3a37f0e/
 */

import assert from "assert";

function isAllUpper(text: string): boolean {
    let verification = !/[a-z]/.test(text);
    return verification;
}

console.log("Example:");
console.log(isAllUpper("ALL UPPER"));

// These "asserts" are used for self-checking
assert.strictEqual(isAllUpper("ALL UPPER"), true);
assert.strictEqual(isAllUpper("all lower"), false);
assert.strictEqual(isAllUpper("mixed UPPER and lower"), false);
assert.strictEqual(isAllUpper(""), true);
assert.strictEqual(isAllUpper("444"), true);
assert.strictEqual(isAllUpper("55 55 5 "), true);