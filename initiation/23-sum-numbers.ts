/**
 * In a given text you need to sum the numbers while excluding any digits that form part of a word.

The text consists of numbers, spaces and letters from the English alphabet.

Input: A string (string).

Output: An integer (number).

Examples:

assert.strictEqual(sumNumbers("hi"), 0);
assert.strictEqual(sumNumbers("who is 1st here"), 0);
assert.strictEqual(sumNumbers("my numbers is 2"), 2);
assert.strictEqual(
    sumNumbers(
        "This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year"
    ),
    3755
);
link https://js.checkio.org/mission/sum-numbers/share/4d00b7accbf7104fbcabc9ce7dc9e8be/
 */
import assert from "assert";

function sumNumbers(text: string): number {
  let sum = 0;

  const words = text.split(" ");

  for (const word of words) {
    // Check if the word contains any non-digit characters
    if (/^\d+$/.test(word)) {
      const number = parseInt(word, 10);
      sum += number;
    }
  }

  return sum;
}

console.log("Example:");
console.log(sumNumbers("hi"));

// These "asserts" are used for self-checking
assert.strictEqual(sumNumbers("hi"), 0);
assert.strictEqual(sumNumbers("who is 1st here"), 0);
assert.strictEqual(sumNumbers("my numbers is 2"), 2);
assert.strictEqual(
    sumNumbers(
        "This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year"
    ),
    3755
);
assert.strictEqual(sumNumbers("5 plus 6 is"), 11);
assert.strictEqual(sumNumbers(""), 0);