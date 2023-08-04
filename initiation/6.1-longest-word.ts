/**
 * This function should take a string without punctuation marks as an input and return the longest word in the string. If there are multiple words of the same length, return the first one that appears.

Input: String (string).

Output: String (string).

Examples:

assert.strictEqual(longestWord("hello world"), "hello");
assert.strictEqual(longestWord("openai gpt-4"), "openai");
assert.strictEqual(longestWord("this is a sentence"), "sentence");
assert.strictEqual(longestWord("the quick brown fox"), "quick");

How it’s used:

in natural language processing tasks, like text analysis;
in search algorithms, to find key words or tags in a text.
Preconditions:

sentence ∈ string;
length(sentence) >= 0.

link https://js.checkio.org/mission/the-longest-word/share/11e499916be4a74fba4a73a808086822/
 */
import assert from "assert";

function longestWord(sentence: string): string {
    // your code here
    return "";
}

console.log("Example:");
console.log(longestWord("hello world"));

// These "asserts" are used for self-checking
assert.strictEqual(longestWord("hello world"), "hello");
assert.strictEqual(longestWord("openai gpt-4"), "openai");
assert.strictEqual(longestWord("this is a sentence"), "sentence");
assert.strictEqual(longestWord("the quick brown fox"), "quick");
assert.strictEqual(longestWord("jumped over the lazy dog"), "jumped");
assert.strictEqual(longestWord("typescript is great"), "typescript");
assert.strictEqual(longestWord("the answer is 42"), "answer");
assert.strictEqual(longestWord("to be or not to be"), "not");
assert.strictEqual(longestWord("that is the question"), "question");
assert.strictEqual(longestWord(""), "");