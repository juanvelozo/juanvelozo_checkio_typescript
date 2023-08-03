/**
 * You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.

The initial and final markers are always different.
The initial and final markers are always 1 char size.
The initial and final markers always exist in a string and go one after another.
Input: Three arguments. All of them are strings (string). The second and third arguments are the initial and final markers.

Output: A string (string).

Examples:

assert.strictEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assert.strictEqual(betweenMarkers("What is [apple]", "[", "]"), "apple");
assert.strictEqual(betweenMarkers("What is ><", ">", "<"), "");
assert.strictEqual(betweenMarkers("[an apple]", "[", "]"), "an apple");

How it is used: For text parsing.

Precondition: There can't be more than one final and one initial markers.

link https://js.checkio.org/mission/between-markers-simplified/share/99548b3b3d264ad7aab0d6059d9ef1d0/
 */
import assert from "assert";

function betweenMarkers(text: string, start: string, end: string) {
    let startIndex = text.indexOf(start) + 1;
    let endIndex = text.indexOf(end);

    return text.substring(startIndex, endIndex);
}

console.log("Example:");
console.log(betweenMarkers("What is >apple<", ">", "<"));

// These "asserts" are used for self-checking
assert.strictEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assert.strictEqual(betweenMarkers("What is [apple]", "[", "]"), "apple");
assert.strictEqual(betweenMarkers("What is ><", ">", "<"), "");
assert.strictEqual(betweenMarkers("[an apple]", "[", "]"), "an apple");