/*
This is an intro mission, the purpose of which is to explain how to solve missions on CheckiO.

<---MISSION--->
This mission is the easiest one. Write a function that will receive 2 numbers as input and it should return the multiplication of these 2 numbers.
Input: Two arguments. Both are of type integer.
Output: Integer.

Examples:

assert.equal(multTwo(3, 2), 6);
assert.equal(multTwo(0, 1), 0);

*/
import assert from "assert";

function multTwo(a: number, b: number): number {
    return a * b;
}

console.log("Example:");
console.log(multTwo(3, 2));
// These "asserts" are used for self-checking
assert.equal(multTwo(3, 2), 6);
assert.equal(multTwo(0, 1), 0);
