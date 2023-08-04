/**
 * This function should take a string as an input and return the count of vowels (a, e, i, o, u) in the string. The function should be case-insensitive.

Input: String (string).

Output: Integer (number).

Examples:

assert.strictEqual(countVowels("hello"), 2);
assert.strictEqual(countVowels("openai"), 4);
assert.strictEqual(countVowels("typescript"), 2);
assert.strictEqual(countVowels("a"), 1);

How it’s used:

in natural language processing tasks, like text analysis and statistics;
in text-based games or learning applications, for instance, to calculate the difficulty level of a word or phrase.
Preconditions:

text ∈ string;
length(text) >= 0.

link https://js.checkio.org/mission/count-vowels/share/32f766ed42a78149ccb758789a81426f/
 */
import assert from "assert";

function countVowels(text: string): number {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    for (let char of text.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  

console.log("Example:");
console.log(countVowels("Hello"));

// These "asserts" are used for self-checking
assert.strictEqual(countVowels("hello"), 2);
assert.strictEqual(countVowels("openai"), 4);
assert.strictEqual(countVowels("typescript"), 2);
assert.strictEqual(countVowels("a"), 1);
assert.strictEqual(countVowels("b"), 0);
assert.strictEqual(countVowels("aeiou"), 5);
assert.strictEqual(countVowels("AEIOU"), 5);
assert.strictEqual(countVowels("The quick brown fox"), 5);
assert.strictEqual(countVowels("Jumps over the lazy dog"), 6);
assert.strictEqual(countVowels(""), 0);