// let fruits = ['apple', 'banana'];
// let newFruits = [...fruits, 'Cherry'];
// console.log(newFruits);

// get a random element from an array
// let ages = [12, 32, 98, 45, 38, 76];
// console.log(ages[Math.round(Math.random() * ages.length)]);
// console.log(Math.random())
// console.log(Math.E)
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.LOG2E)
// console.log(Math.LOG10E)
// console.log(Math.PI)
// console.log(Math.SQRT1_2)
// console.log(Math.SQRT2)
/**
 * Note that trigonometric functions (sin(), cos(), tan(), asin(), acos(), atan(), atan2()) expect (and return) angles in radians.
 * To convert radians to degrees, divide by (Math.PI / 180). Multiply by the same value to convert degrees to radians.
 **/

// let elem = [1, 2, 3, 4, 5, 6];
// let results = elem.filter(el => el > 5).map(el => {
//     elem.splice(elem.indexOf(el));
//     return el;
// });
// console.log(results);
// console.log(elem);

// function remoteItems(arr, fn) {
//     return arr.filter(fn).map(el => {
//         arr.splice(arr.indexOf(el));
//         return el;
//     });
// }
//
// let arr1 = [1, 2, 3, 4, 5, 6];
// let result = remoteItems(arr1, num => num > 5);
// console.log(result);
// console.log(arr1);

// fill array with values
// let phoneNumber = '555-525-5252';
// let newNumber = phoneNumber.split('').filter(num => num !== '-');
// console.log(newNumber.fill('*', 0, 3).join(''));

// find certain element / index of array
// let people = ['John', 'Mary', 'Joe', 'Johns'];
// let result = people.findIndex(person => person === 'Johns');
// console.log(result);
//
// const array1 = [5, 12, 8, 130, 44];
// const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));

// find all the index found
// let people = ['John', 'Mary', 'Joe', 'Johns'];
// function findIndexAll(arr, value) {
//     let indices = []; // store the index
//     arr.forEach((el, i) => (el === value) && indices.push(i));
//     return indices;
// }
// let show = findIndexAll(people, 'Joe');
// console.log(show);

/**
 * Make a range of numbers as an array
 * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
 * Generate a sequence of numbers Since the array is initialized with `undefined` on each position,
 * the value of `v` below will be `undefined`
 * */
// let range = Array.from({length: 100}, (v, i) => Math.round(Math.random() * i));
// console.log(range);
// console.log(Array.from('foo'))

// Using an arrow function as the map function to manipulate the elements
// console.log(Array.from([1,2,3], x => x + x ))

// remove duplicate value using new Set(Array)
// const sett = new Set(['foo', 'bar', 'baz', 'foo']);
// console.log(Array.from(sett))

// const newMap = new Map([[1,2],[2,4],[4,8]]);
// console.log(Array.from(newMap))

// const newMap = new Map([['1','a'],['2','b']]);
// console.log(Array.from(newMap.values()))
// console.log(Array.from(newMap.keys()))

// function f() {
//     return Array.from(arguments);
// }
// console.log(f(1,2,3))

/**
 * Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc.)
 * Generate numbers range 2..10 with step of 5
 */
// const ranges = (start, stop, step) => Array.from({length: Math.round((stop - start) / step + 1)}, (_, i) => {
//     return start + (i * step)
// });
// console.log(ranges(1, 10, 2))

// Generate the alphabet using Array.from making use of it being ordered as a sequence
// console.log(ranges('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)))

// get only unique values in array
// let usernames = ['Jeff', 'Doug', 'John', 'John'];
// let newUsernames = usernames.filter((name, index, array) => array.indexOf(name) === index ? name : undefined);
// console.log(newUsernames);

// use set to filter duplicate
// let set = [...new Set(usernames)];
// console.log(set);

// find the difference (non-shared items) between two arrays
// let arr1 = ['fred', 'doug', 'amy', 'amy', 'adasd'];
// let arr2 = ['fred', 'doug', 'amy'];
// let res = [...new Set(arr1)].filter(el => !arr2.includes(el));
// console.log(res);

// let arr1 = ['fred', 'doug', 'amy', 'amy', 'adasd'];
// let arr2 = ['fred', 'doug', 'amy'];
// console.log(arr1.includes(arr2))
// const array1 = [1, 2, 3];
// console.log(array1.includes(3))
//
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));
// console.log(pets.includes('Cat'))

// remove items from left right side of arrays
// let nums = [23, 987, 45, 89];
// let removeFromLeft = nums.slice(0, 3);
// console.log(removeFromLeft);
//
// let removeFromRight = nums.slice(1);
// console.log(removeFromRight);
// console.log(nums);
//
// let getNthItem = (arr, num) => arr.slice(num - 1, num)[0];
// console.log(getNthItem(nums, 3));
//
// function offsetArray(arr, offset) {
//     return [...arr.slice(offset), ...arr.slice(0, offset)]
// }
// console.log(offsetArray([1, 2, 3, 4], 2));

// find shared values between two arrays
/*let men = ['Jim', 'Doug', 'Fred', 'Dave'];
let over50 = ['Angie', 'Dave', 'Jessica', 'Jim'];
console.log(over50.filter(person => men.includes(person)));
*/

// get last item in array, get everything before last item in array
/*let Name = ['Bill', 'Fried', 'doug', 'Jessica', 'Abe', 'John', 'Doe'];
console.log(Name[Name.length - 1]);
console.log(Name.slice(0, -1));
*/

// return last item of array
/*let arr1 = [5, 6, 7, 8];
arr1.pop();
console.log(arr1);

const findLast = (arr, fn) =>  arr.filter(fn).pop();
console.log(findLast(arr1, el => el > 5));

let findLast_ = (arr, fn) => arr.filter(fn).pop();
console.log(findLast_(arr1, el => el > 4));
*/
