/**
 * In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but cannot consist of just digits.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);

How it’s used: For password verification form. Also it's good to learn how the task can be evaluated.

link https://js.checkio.org/mission/acceptable-password-iii/share/d4486ec80ec88bc6ddc13387905b3ddd/
 */
import assert from "assert";
function isAcceptablePassword(password: string): boolean {
    return password.length > 6 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}


console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
assert.strictEqual(isAcceptablePassword("1234567"), false);