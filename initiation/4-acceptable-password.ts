/**
 Acceptable Password I

You are at the beginning of a password series. Every mission is based on the previous one. The missions that follow will become slightly more complex.

In this mission, you need to create a password verification function.

The verification condition is:
the length should be bigger than 6.

Input: A string.

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);

link https://js.checkio.org/mission/acceptable-password-i/share/752775c93f8f23605961fc2e11bbe49e/
 */
import assert from "assert";

function isAcceptablePassword(password: string): boolean {
    let accept = password.length > 6;
    return accept;
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);