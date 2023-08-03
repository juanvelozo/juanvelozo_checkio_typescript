/*In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit.
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);

How it’s used: For password verification form. Also it's good to learn how the task can be evaluated.

link https://js.checkio.org/mission/acceptable-password-ii/share/9acbd6f3af6fe28f5c373600ad5fd143/
*/

import assert from "assert";
function isAcceptablePassword(password: string): boolean {
    let accept = password.length > 6 && /[0-9]/.test(password);
    return accept;
}


console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("muchlonger"), false);
assert.strictEqual(isAcceptablePassword("ashort"), false);
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
