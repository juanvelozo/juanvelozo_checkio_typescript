/**
 * For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.

Input: A string (string).

Output: A string (string).

Examples:

assert.strictEqual(
    correctSentence("greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends."),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("greetings, friends."),
    "Greetings, friends."
);

Precondition: No leading and trailing spaces, text contains only spaces, a-z, A-Z, "," and ".".

link https://js.checkio.org/mission/correct-sentence/share/59c47a696c42bf9790685caaad075d5a/
 */
import assert from "assert";

function correctSentence(text: string): string {
    let arrayString = text.split(",")
    const lastIndex = arrayString.length - 1
    
    const firstWord = arrayString[0].charAt(0).toUpperCase() + arrayString[0].slice(1)
    arrayString[0] = firstWord
    
    const lastWord = arrayString[lastIndex].endsWith(".") ? arrayString[lastIndex] : arrayString[lastIndex].concat(".")
    
    arrayString[lastIndex] = lastWord
    const sentence = arrayString.length > 1 ? `${arrayString}` : firstWord.concat(".");
    return sentence;
}

console.log("Example:");
console.log(correctSentence("greetings, friends"));

// These "asserts" are used for self-checking
assert.strictEqual(
    correctSentence("greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends"),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("Greetings, friends."),
    "Greetings, friends."
);
assert.strictEqual(
    correctSentence("greetings, friends."),
    "Greetings, friends."
);
