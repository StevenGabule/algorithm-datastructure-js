// const arr1 = [1, 2, 1];
// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
// console.log(result);
// Expected output: Array [1, 2, 2, 1]

// Pre-allocate and explicitly iterate
// const arr = [1, 2, 3, 4];
// const calculatedArr = arr.flatMap((x) => [x, x * 2]);
// console.log(calculatedArr);
//
// // is equivalent to
// const n = arr.length;
// const acc = new Array(n * 2);
// for (let i = 0; i < n; i++) {
//     const x = arr[i];
//     acc[i * 2] = x;
//     acc[i * 2 + 1] = x * 2;
// }
// // [1, 2, 2, 4, 3, 6, 4, 8]

// const arr1 = ["it's Sunny in", "", "California"];
//
// arr1.map((x) => x.split(" "));
// // [["it's","Sunny","in"],[""],["California"]]
//
// arr1.flatMap((x) => x.split(" "));
// // ["it's","Sunny","in", "", "California"]

// For adding and removing items during a map()
// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
// const a = [5, 4, -3, 20, 17, -33, -4, 18];
//           //         |\  \  x   |  | \   x   x   |
//           //        [4,1, 4,   20, 16, 1,       18]
//
// const result = a.flatMap((n) => {
//     if (n < 0) {
//         return [];
//     }
//     return n % 2 === 0 ? [n] : [n - 1, 1];
// });
// console.log(result); // [4, 1, 4, 20, 16, 1, 18]
//

// Using the third argument of callbackFn
// const stations = ["New Haven", "West Haven", "Milford (closed)", "Stratford"];
// const line = stations
//     .filter((name) => !name.endsWith("(closed)"))
//     .flatMap((name, idx, arr) => {
//         // Without the arr argument, there's no way to easily access the
//         // intermediate array without saving it to a variable.
//         if (idx === arr.length - 1) return []; // last station has no next station
//         return [`${name} - ${arr[idx + 1]}`];
//     });
// console.log(line); // ['New Haven - West Haven', 'West Haven - Stratford']

// console.log([1, 2, , 4, 5].flatMap((x) => [x, x * 2])); // [1, 2, 2, 4, 4, 8, 5, 10]
// console.log([1, 2, 3, 4].flatMap((x) => [, x * 2])); // [2, 4, 6, 8]

// Calling flatMap() on non-array objects
const arrayLike = {
    length: 3,
    0: 1,
    1: 2,
    2: 3,
    3: 4, // ignored by flatMap() since length is 3
};
console.log(Array.prototype.flatMap.call(arrayLike, (x) => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]

// Array-like objects returned from the callback won't be flattened
console.log(
    Array.prototype.flatMap.call(arrayLike, (x) => ({
        length: 1,
        0: x,
    })),
);
// [ { '0': 1, length: 1 }, { '0': 2, length: 1 }, { '0': 3, length: 1 } ]








