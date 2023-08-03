/**
 * In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but it cannot consist of just digits;
if the password is longer than 9 - previous rule (about one digit), is not required.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);

link https://js.checkio.org/mission/acceptable-password-iv/share/b96013dc3ba64000a3edc93c26111339/

 */

import assert from "assert";
function isAcceptablePassword(password: string): boolean {
    if (password.length <= 6) {
        return false;
    }

    if (password.length > 9) {
        return true;
    }

    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        if (!isNaN(parseInt(password[i]))) {
            hasDigit = true;
        }

        if (hasDigit && !isNaN(parseInt(password))) {
            return false;
        }
    }

    return hasDigit;
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("notshort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
assert.strictEqual(isAcceptablePassword("1234567"), false);
assert.strictEqual(isAcceptablePassword("12345678910"), true);