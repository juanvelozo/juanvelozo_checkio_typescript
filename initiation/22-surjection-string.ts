/**
 * You need to check that the string A is isometric to the string B. There exists a function that turns characters from A into characters in the same spot in B.

Characters in A correspond to a unique character value in B. Characters in B are allowed to correspond to multiple character values in A.


Input: Two strings (string).

Output: Logic value (boolean).

Examples:

assert.strictEqual(isometricStrings("add", "egg"), true);
assert.strictEqual(isometricStrings("foo", "bar"), false);
assert.strictEqual(isometricStrings("bar", "foo"), true);
assert.strictEqual(isometricStrings("", ""), true);

Precondition:
both strings have the same length.


link https://js.checkio.org/mission/surjection-strings/share/69a154e739a0f88038ec3edf8111af8b/
 */
import assert from "assert";

function isometricStrings(line1: string, line2: string): boolean {
    if (line1.length !== line2.length) {
        return false;
      }
      
      const charMap: { [key: string]: string } = {};
      
      for (let i = 0; i < line1.length; i++) {
        const char1 = line1[i];
        const char2 = line2[i];
        
        if (charMap[char1] && charMap[char1] !== char2) {
          return false;
        }
        
        charMap[char1] = char2;
      }
      
      return true;
}

console.log("Example:");
console.log(isometricStrings("add", "egg"));

// These "asserts" are used for self-checking
assert.strictEqual(isometricStrings("add", "egg"), true);
assert.strictEqual(isometricStrings("foo", "bar"), false);
assert.strictEqual(isometricStrings("bar", "foo"), true);
assert.strictEqual(isometricStrings("", ""), true);
assert.strictEqual(isometricStrings("all", "all"), true);
assert.strictEqual(isometricStrings("gogopy", "doodle"), false);
assert.strictEqual(isometricStrings("abba", "cccc"), true);