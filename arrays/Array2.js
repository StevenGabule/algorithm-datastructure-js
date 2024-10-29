// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
//
// console.log(array3);
//
// const letters = ["a", "b", "c"];
// const numbers = [1, 2, 3];
//
// const alphaNumeric = letters.concat(numbers);
// console.log(alphaNumeric);

// Concatenating three arrays
// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6];
// const num3 = [7, 8, 9];
// const numbers = num1.concat(num2, num3);
// console.log(numbers);

// Concatenating values to an array
// const letters = ["a", "b", "c"];
// const alphaNumeric = letters.concat(1, [2, 3]);
// console.log(alphaNumeric);

// Concatenating nested arrays
// const num1 = [[1]];
// const num2 = [2, [3]];
// const numbers = num1.concat(num2);
// console.log(numbers);
// num1[0].push(4);
// console.log(numbers);

// Concatenating array-like objects with Symbol.isConcatSpreadable
// const obj1 = { 0: 1, 1: 2, 2: 3, length: 3 };
// const obj2 = { 0: 1, 1: 2, 2: 3, length: 3, [Symbol.isConcatSpreadable]: true };
// console.log([0].concat(obj1, obj2));
// // [ 0, { '0': 1, '1': 2, '2': 3, length: 3 }, 1, 2, 3 ]

// Using concat() on sparse arrays
// console.log([1, , 3].concat([4, 5])); // [1, empty, 3, 4, 5]
// console.log([1, 2].concat([3, , 5])); // [1, 2, 3, empty, 5]

// Calling concat() on non-array objects
console.log(Array.prototype.concat.call({}, 1, 2, 3)); // [{}, 1, 2, 3]
console.log(Array.prototype.concat.call(1, 2, 3)); // [ [Number: 1], 2, 3 ]
const arrayLike = {
    [Symbol.isConcatSpreadable]: true,
    length: 2,
    0: 1,
    1: 2,
    2: 99, // ignored by concat() since length is 2
};
console.log(Array.prototype.concat.call(arrayLike, 3, 4)); // [1, 2, 3, 4]







