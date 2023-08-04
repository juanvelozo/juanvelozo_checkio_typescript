/**
 * This function should take two positive numbers (length and width) as inputs and return the perimeter of a rectangle.

Input: Two integers (number).

Output: Integer (number).

Examples:

assert.strictEqual(rectanglePerimeter(2, 4), 12);
assert.strictEqual(rectanglePerimeter(3, 5), 16);
assert.strictEqual(rectanglePerimeter(10, 20), 60);
assert.strictEqual(rectanglePerimeter(7, 2), 18);

How it’s used:

in architectural and engineering applications for calculating the perimeter of buildings or rooms;
in computer graphics to calculate the perimeter of a rectangle on a screen.
Preconditions:

length, width ∈ R;
length, width > 0.
link https://js.checkio.org/mission/rectangle-perimeter/share/10de721afc054ddd1f241898e54e706d/
 */
import assert from "assert";

function rectanglePerimeter(length: number, width: number): number {
    return 2 * (length + width);
}

console.log("Example:");
console.log(rectanglePerimeter(3, 2));

// These "asserts" are used for self-checking
assert.strictEqual(rectanglePerimeter(2, 4), 12);
assert.strictEqual(rectanglePerimeter(3, 5), 16);
assert.strictEqual(rectanglePerimeter(10, 20), 60);
assert.strictEqual(rectanglePerimeter(7, 2), 18);
assert.strictEqual(rectanglePerimeter(1, 1), 4);
assert.strictEqual(rectanglePerimeter(1, 5), 12);
assert.strictEqual(rectanglePerimeter(4, 1), 10);
assert.strictEqual(rectanglePerimeter(100, 100), 400);
assert.strictEqual(rectanglePerimeter(0.5, 2), 5);