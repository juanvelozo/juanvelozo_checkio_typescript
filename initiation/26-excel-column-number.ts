/**
 * Given a string that represents the column title as appears in an Excel sheet, return its corresponding column number.

But how does the Excel column numbering actually work? Well, the column number is like decimal number, but with base (radix) 26 and "digits" A-Z. Read more about number bases. Let's look at the exact numbers:

Excel   Decimal
    A   1
   ..
    Z   26
The 1-"digit" numbers have ended. 2-"digits" numbers start from double first "digit" and go to double last one:

Excel   Decimal
    A   1
   ..
    Z   26
   AA   27
   ..
   AZ   52
   BA   53
   ..
   BZ   78
   CA   79
   ..
   ..
   ZZ   702
Now it's turn for 3-"digit" numbers...

Input: A string (string).

Output: An integer (number).

Examples:

assert.strictEqual(columnNumber("A"), 1);
assert.strictEqual(columnNumber("Z"), 26);
assert.strictEqual(columnNumber("AB"), 28);
assert.strictEqual(columnNumber("ZY"), 701);

Precondition: Non empty, only upper case, only English letters

link https://js.checkio.org/mission/excel-column-number/share/b6d220316a7fe20b6e4136f62d158f3c/
 */
import assert from "assert";

function columnNumber(name: string): number {
  let result = 0;
  for(let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i) - 64; 
    result = result * 26 + charCode; 
  }
  return result;
}

console.log("Example:");
console.log(columnNumber("AA"));

// These "asserts" are used for self-checking
assert.strictEqual(columnNumber("A"), 1);
assert.strictEqual(columnNumber("Z"), 26);
assert.strictEqual(columnNumber("AB"), 28);
assert.strictEqual(columnNumber("ZY"), 701);
