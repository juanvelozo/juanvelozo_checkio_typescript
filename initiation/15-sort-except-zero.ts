/**
 * Sort the integers in sequence in sequence. But the position of zeros should not be changed.

Input: Array of integers (number).

Output: Array of integers (number).

Examples:

assert.deepStrictEqual(
    exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7]),
    [1, 3, 0, 0, 4, 4, 5, 0, 7]
);
assert.deepStrictEqual(
    exceptZero([0, 2, 3, 1, 0, 4, 5]),
    [0, 1, 2, 3, 0, 4, 5]
);
assert.deepStrictEqual(exceptZero([0, 0, 0, 1, 0]), [0, 0, 0, 1, 0]);
assert.deepStrictEqual(exceptZero([4, 5, 3, 1, 1]), [1, 1, 3, 4, 5]);

Precondition:

All numbers are non-negative.

link https://js.checkio.org/mission/sort-except-zero/share/2dba88b478a5670f2b6ac6edf4d53417/
 */
import assert from "assert";

function exceptZero(items: number[]): number[] {
    let sortedIntegers = items.filter((num) => num !== 0).sort((a, b) => a - b);

    let result: number[] = Array(items.length);

    for (let i = 0, j = 0; i < items.length; i++) {
        if (items[i] === 0) {
            result[i] = 0;
        } else {
            result[i] = sortedIntegers[j];
            j++;
        }
    }

    return result;
}

console.log("Example:");
console.log(JSON.stringify(exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7])));

// These "asserts" are used for self-checking
assert.deepStrictEqual(
    exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7]),
    [1, 3, 0, 0, 4, 4, 5, 0, 7]
);
assert.deepStrictEqual(
    exceptZero([0, 2, 3, 1, 0, 4, 5]),
    [0, 1, 2, 3, 0, 4, 5]
);
assert.deepStrictEqual(exceptZero([0, 0, 0, 1, 0]), [0, 0, 0, 1, 0]);
assert.deepStrictEqual(exceptZero([4, 5, 3, 1, 1]), [1, 1, 3, 4, 5]);
assert.deepStrictEqual(exceptZero([0, 0]), [0, 0]);
