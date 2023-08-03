/**
 * You are given a sequence of integers. Your task in this mission is to find, how many times the sorting direction was changed in the given sequence. If the elements are equal - the previous sorting direction remains the same, if the sequence starts from the same elements - look for the next different to determine the sorting direction.

Let's look at the scheme:

changing_dir

There are three sorting directions:

on the chunk 1, 2, 2 - up (increasing);
on the chunk 2, 1 - down (decreasing);
and on the chunk 1, 2, 2 - up again.
So, you have two points of changing the sorting direction: #1 - from up to down, and #2 - from down to up. That's the result your function should return.
Input: Array of integers (number).

Output: An integer (number).

Examples:

assert.strictEqual(changingDirection([1, 2, 3, 4, 5]), 0);
assert.strictEqual(changingDirection([1, 2, 3, 2, 1]), 1);
assert.strictEqual(changingDirection([1, 2, 2, 1, 2, 2]), 2);

Preconditions:

the sequence is non-empty;
the elements are positive integers.

 */

import assert from "assert";

function changingDirection(elements: number[]): number {
    let count = 0;
    let prevDirection: "ascending" | "descending" | "" = "";

    for (let i = 1; i < elements.length; i++) {
        const current = elements[i];
        const previous = elements[i - 1];

        if (
            (current > previous && prevDirection === "descending") ||
            (current < previous && prevDirection === "ascending")
        ) {
            count++;
        }

        if (current > previous) {
            prevDirection = "ascending";
        } else if (current < previous) {
            prevDirection = "descending";
        }
    }

    return count;
}
console.log("Example:");
console.log(changingDirection([1, 2, 3, 4, 5]));

// These "asserts" are used for self-checking
assert.strictEqual(changingDirection([1, 2, 3, 4, 5]), 0);
assert.strictEqual(changingDirection([1, 2, 3, 2, 1]), 1);
assert.strictEqual(changingDirection([1, 2, 2, 1, 2, 2]), 2);