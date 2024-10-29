// Testing size of all array elements
// function isBigEnough(element, index, array) {
//     return element >= 10;
// }
// console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
// console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

// Check if one array is a subset of another array
// const isSubset = (array1, array2) =>
//     array2.every((element) => array1.includes(element));
//
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// Using the third argument of callbackFn
// const numbers = [-2, 4, -8, 16, -32];
// const isIncreasing = numbers
//     .filter((num) => num > 0)
//     .every((num, idx, arr) => {
//         // Without the arr argument, there's no way to easily access the
//         // intermediate array without saving it to a variable.
//         if (idx === 0) return true;
//         return num > arr[idx - 1];
//     });
// console.log(isIncreasing); // true

// Using every() on sparse arrays
// console.log([1, , 3].every((x) => x !== undefined)); // true
// console.log([2, , 2].every((x) => x === 2)); // true

// Calling every() on non-array objects
const arrayLike = {
    length: 3,
    0: "a",
    1: "b",
    2: "c",
    3: 345, // ignored by every() since length is 3
};
console.log(Array.prototype.every.call(arrayLike, (x) => typeof x === "string")); // true








