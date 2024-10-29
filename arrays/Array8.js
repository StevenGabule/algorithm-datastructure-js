const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

[1, 2, 3].includes(2); // true
[1, 2, 3].includes(4); // false
[1, 2, 3].includes(3, 3); // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
["1", "2", "3"].includes(3); // false

/**
 * fromIndex is greater than or equal to the array length
 * If fromIndex is greater than or equal to the length of the array, false is returned. The array will not be searched.
 */
const arr = ["a", "b", "c"];
arr.includes("c", 3); // false
arr.includes("c", 100); // false

/**
 * Computed index is less than 0
 * If fromIndex is negative, the computed index is calculated to be used as a position
 * in the array at which to begin searching for searchElement.
 * If the computed index is less than or equal to 0, the entire array will be searched.
 * */
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

const arr = ["a", "b", "c"];
arr.includes("a", -100); // true
arr.includes("b", -100); // true
arr.includes("c", -100); // true
arr.includes("a", -2); // false

/**
 * Using includes() on sparse arrays
 * You can search for undefined in a sparse array and get true.
 * */
console.log([1, , 3].includes(undefined)); // true

/**
 * Calling includes() on non-array objects
 * The includes() method reads the length property of this and then accesses each property
 * whose key is a non negative integer less than length.
 */
const arrayLike = {
    length: 3,
    0: 2,
    1: 3,
    2: 4,
    3: 1, // ignored by includes() since length is 3
};
console.log(Array.prototype.includes.call(arrayLike, 2));
// true
console.log(Array.prototype.includes.call(arrayLike, 1));
// false
