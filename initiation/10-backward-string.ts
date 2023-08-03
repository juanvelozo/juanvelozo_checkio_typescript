/**
 * You should return a given string in reverse order.

Input: A string.

Output: A string.

Examples:

assert.strictEqual(backwardString("val"), "lav");
assert.strictEqual(backwardString(""), "");
assert.strictEqual(backwardString("ohho"), "ohho");
assert.strictEqual(backwardString("123456789"), "987654321");

link https://js.checkio.org/mission/backward-string/share/719559ea54eab941ab9c1ffb08a596b1/

 */
import assert from "assert";

function backwardString(value: string): string {
    
    return value.split("").reverse().join("");
}

console.log("Example:");
console.log(backwardString("val"));

// These "asserts" are used for self-checking
assert.strictEqual(backwardString("val"), "lav");
assert.strictEqual(backwardString(""), "");
assert.strictEqual(backwardString("ohho"), "ohho");
assert.strictEqual(backwardString("123456789"), "987654321");
