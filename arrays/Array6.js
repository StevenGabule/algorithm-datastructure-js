// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat()); // expected output: Array [0, 1, 2, 3, 4]
//
// const arr2 = [0, 1, [2, [3, [4, 5]]]];
// console.log(arr2.flat()); // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
// console.log(arr2.flat(2)); // expected output: Array [0, 1, 2, 3, Array [4, 5]]
// console.log(arr2.flat(Infinity)); // expected output: Array [0, 1, 2, 3, 4, 5]

// Flattening nested arrays
// const arr1 = [1, 2, [3, 4]];
// arr1.flat();
// // [1, 2, 3, 4]
//
// const arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// // [1, 2, 3, 4, [5, 6]]
//
// const arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]
//
// const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/**
 * Using flat() on sparse arrays
 * The flat() method removes empty slots in arrays:
 */
// const arr5 = [1, 2, , 4, 5];
// console.log(arr5.flat()); // [1, 2, 4, 5]
//
// const array = [1, , 3, ["a", , "c"]];
// console.log(array.flat()); // [ 1, 3, "a", "c" ]
//
// const array2 = [1, , 3, undefined, ["a", , ["d", , "e"]], null];
// console.log(array2.flat()); // [ 1, 3, undefined, "a", ["d", empty, "e"], null ]
// console.log(array2.flat(2)); // [ 1, 3, undefined, "a", "d", "e", null ]

/**
 * Calling flat() on non-array objects
 * */
const arrayLike = {
    length: 3,
    0: [1, 2],
    // Array-like objects aren't flattened
    1: { length: 2, 0: 3, 1: 4 },
    2: 5,
    3: 3, // ignored by flat() since length is 3
};
console.log(Array.prototype.flat.call(arrayLike));
// [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]
