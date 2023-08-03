/**
 * You are given an array with positive integers (number) and an integer (number) N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:
- array = [1, 2, 3, 4] and N = 2, then the result is 32 == 9;
- array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

Input: Two arguments.An array of integers (number) and an integer (number).

Output: The result as an integer (number).

Examples:

assert.strictEqual(indexPower([1, 2, 3, 4], 2), 9);
assert.strictEqual(indexPower([1, 3, 10, 100], 3), 1000000);
assert.strictEqual(indexPower([0, 1], 0), 1);
assert.strictEqual(indexPower([1, 2], 3), -1);


Precondition: 0 < len(array) ≤ 10
0 ≤ N
all(0 ≤ x ≤ 100 for x in array)

link https://js.checkio.org/mission/index-power/share/4d545f74c150b65837e4dad0420d60f4/
 */
import assert from "assert";

function indexPower(ar: number[], n: number): number {
    if (n >= ar.length) {
        return -1;
    }

    return Math.pow(ar[n], n);
}

console.log("Example:");
console.log(indexPower([1, 2, 3], 2));

// These "asserts" are used for self-checking
assert.strictEqual(indexPower([1, 2, 3, 4], 2), 9);
assert.strictEqual(indexPower([1, 3, 10, 100], 3), 1000000);
assert.strictEqual(indexPower([0, 1], 0), 1);
assert.strictEqual(indexPower([1, 2], 3), -1);
