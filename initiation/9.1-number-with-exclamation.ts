/**
 * This function should take a non-negative integer as an input and return the factorial of that number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n .

Input: Integer (number).

Output: Integer (number).

Examples:

assert.strictEqual(factorial(0), 1);
assert.strictEqual(factorial(1), 1);
assert.strictEqual(factorial(5), 120);
assert.strictEqual(factorial(10), 3628800);

How it’s used:

in mathematical applications to calculate permutations and combinations;
in algorithms to solve problems related to counting arrangements.
Precondition:

n ∈ N₀


link https://js.checkio.org/mission/number-with-exclamation/share/fc9b013c974eeef759a8b3549a6b1352/ 
 */
import assert from "assert";

function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Example:");
console.log(factorial(4));

// These "asserts" are used for self-checking
assert.strictEqual(factorial(0), 1);
assert.strictEqual(factorial(1), 1);
assert.strictEqual(factorial(5), 120);
assert.strictEqual(factorial(10), 3628800);
assert.strictEqual(factorial(15), 1307674368000);