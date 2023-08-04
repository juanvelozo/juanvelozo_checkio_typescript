/**
 * You are given a string where you have to find its first word.

When solving a task pay attention to the following points:

There can be dots and commas in a string.
A string can start with a letter or, for example, one/multiple dot(s) or space(s).
A word can contain an apostrophe and it's a part of a word.
The whole text can be represented with one word and that's it.
Input: A string (string).

Output: A string (string).

Examples:

assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord(" a word "), "a");
assert.strictEqual(firstWord("don't touch it"), "don't");
assert.strictEqual(firstWord("greetings, friends"), "greetings");

Precondition: the text can contain a-z A-Z , . '

link https://js.checkio.org/mission/first-word/share/0fbcda4af8707ab0dc22269ce59cc54e/
 */
import assert from "assert";

function firstWord(text: string): string {
    // your code here
    return "";
}

console.log("Example:");
console.log(firstWord("Hello world"));

// These "asserts" are used for self-checking
assert.strictEqual(firstWord("Hello world"), "Hello");
assert.strictEqual(firstWord(" a word "), "a");
assert.strictEqual(firstWord("don't touch it"), "don't");
assert.strictEqual(firstWord("greetings, friends"), "greetings");
assert.strictEqual(firstWord("... and so on ..."), "and");
assert.strictEqual(firstWord("hi"), "hi");
