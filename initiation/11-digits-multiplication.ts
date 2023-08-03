/**
 * You are given a positive number. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

Input: A positive integer (number).

Output: The product of the digits as an integer (number).

Examples:

assert.strictEqual(digitsMultip(123405), 120);
assert.strictEqual(digitsMultip(999), 729);
assert.strictEqual(digitsMultip(1000), 1);
assert.strictEqual(digitsMultip(1111), 1);

How it is used: This task can teach you how to solve a problem with simple data type conversion.

Precondition:
0 < number < 106

link https://js.checkio.org/mission/digits-multiplication/share/45942da39d0bbe8f1fa65ae1d777ecd1/
 */
import assert from "assert";

function digitsMultip(data: number): number {
    const numString: string = data.toString();

    let result: number = 1;

    for (let i = 0; i < numString.length; i++) {
        const digit: number = parseInt(numString[i]);

        if (digit !== 0) {
            result *= digit;
        }
    }

    return result;
}

console.log("Example:");
console.log(digitsMultip(123405));

// These "asserts" are used for self-checking
assert.strictEqual(digitsMultip(123405), 120);
assert.strictEqual(digitsMultip(999), 729);
assert.strictEqual(digitsMultip(1000), 1);
assert.strictEqual(digitsMultip(1111), 1);