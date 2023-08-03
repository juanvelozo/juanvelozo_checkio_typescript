/**
 * You are given a string and you have to find its first word.

The input string consists of only English letters and spaces.
There aren’t any spaces at the beginning and the end of the string.
Input: A string.

Output: A string.

Examples:

assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord("a word"), "a");
assert.strictEqual(firstWord("greeting from CheckiO Planet"), "greeting");
assert.strictEqual(firstWord("hi"), "hi");

How it is used: The first word is a command in a command line.

Precondition: The text can contain a-z, A-Z and spaces.

link https://js.checkio.org/mission/first-word-simplified/share/baec78eef02ca2903d1d961e9da015d0/
 */

import assert from "assert";

function firstWord(text: string): string {
    let a = text.split(" ")
    return a[0];
}

console.log("Example:");
console.log(firstWord("Hello world"));

// These "asserts" are used for self-checking
assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord("a word"), "a");
assert.strictEqual(firstWord("greeting from CheckiO Planet"), "greeting");
assert.strictEqual(firstWord("hi"), "hi");