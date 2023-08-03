/**
 * In this mission you need to create a password verification function.

The verification conditions are:

the length should be bigger than 6;
should contain at least one digit, but it cannot consist of just digits;
having numbers or containing just numbers does not apply to the password longer than 9.
a string should not contain the word "password" in any case;
should contain at least 3 different (case-sensitive) letters (or digits) even if it is longer than 10
Input: A string (string).

Output: A logic value (boolean).

Examples:

assert.strictEqual(isAcceptablePassword("short"), false);
assert.strictEqual(isAcceptablePassword("short54"), true);
assert.strictEqual(isAcceptablePassword("muchlonger"), true);
assert.strictEqual(isAcceptablePassword("ashort"), false);

link https://js.checkio.org/mission/acceptable-password-vi/share/98ff7cdf3203ac3c9e82a4bfa5767453/
 */
import assert from "assert";
function isAcceptablePassword(password: string): boolean {
    let uniqueChars = [...new Set(password)];
    let count = uniqueChars.filter((char) => /[a-zA-Z0-9]/.test(char)).length;
    if (count < 3) {
        return false;
    }
    if (password.toLowerCase().includes("password")) {
        return false;
    }
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
assert.strictEqual(isAcceptablePassword("muchlonger5"), true);
assert.strictEqual(isAcceptablePassword("sh5"), false);
assert.strictEqual(isAcceptablePassword("1234567"), false);
assert.strictEqual(isAcceptablePassword("12345678910"), true);
assert.strictEqual(isAcceptablePassword("password12345"), false);
assert.strictEqual(isAcceptablePassword("PASSWORD12345"), false);
assert.strictEqual(isAcceptablePassword("pass1234word"), true);
assert.strictEqual(isAcceptablePassword("aaaaaa1"), false);
assert.strictEqual(isAcceptablePassword("aaaaaabbbbb"), false);
assert.strictEqual(isAcceptablePassword("aaaaaabb1"), true);
assert.strictEqual(isAcceptablePassword("abc1"), false);
assert.strictEqual(isAcceptablePassword("abbcc12"), true);
assert.strictEqual(isAcceptablePassword("aaaaaaabbaaaaaaaab"), false);