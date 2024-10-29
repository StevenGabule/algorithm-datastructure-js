/**
 * Raise number to the power
 *
 * Example:
 * num = 3
 * power = 2
 * output = 3^2 = 9
 *
 * @param {number} num
 * @param {number} power
 * @returns {number}
 */
function fastPower(num, power) {
  return num ** power;
}

console.log(fastPower(3, 2)) // 9

/**
 * Raise number to the power
 *
 * Example:
 * num = 3
 * power = 2
 * output = 3^2 = 9
 *
 * @param {number} num
 * @param {number} power
 * @returns {number}
 */
function iterativePower(num, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= num
  }
  return result;
}

console.log(iterativePower(3, 2)) // 9

/**
 * O(n) recursive example
 * Calculate factorial
 *
 * Example:
 * num = 5
 * output = 120
 *
 * @param {number} num
 * @returns {number}
 */
function factorial(num) {
  if (num === 0) return 1;
  return factorial(num - 1) * num;
}

console.log(factorial(5)) // 120
/**
 * Flow:
 * factorial(4)
 * ￿ factorial(3) * 4
 * ￿ factorial(2) * 3
 * ￿ factorial(1) * 2
 */

// O(n²) example
/**
 * Get all possible pairs out of provided letters
 *
 * Example:
 * letter = ['a', 'b']
 * output = ['aa', 'ab', 'ba', 'bb']
 *
 * @param {string[]} letters
 * @returns {string[]}
 */
function pairs(letters) {
  const result = []
  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
      result.push(`${letters[i]}${letters[j]}`)
    }
  }
  return result;
}

console.log(pairs(['a', 'b']))
// Time complexities: O(1) + letters.length * letters.length * O(1) + O(1)
// Time complexity: O(letters.length^2)
// Space complexity: O(letters.length^2)


/**
 * Multiply all values of the array by certain value in place
 *
 * Example:
 * arr = [1,2,3]
 * multiplier = 2
 * output = [2, 4, 6]
 *
 * @param {number[]} arr
 * @param {number} multiplier
 * @return {number[]}
 */
function multiplyArrayInPlace(arr, multiplier) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= multiplier;
  }
  return arr;
}

console.log(multiplyArrayInPlace([1, 2, 3], 2)) // [2, 4, 6]
// Space complexity: O(array.length)
// Auxiliary space complexity: O(1)

/**
 * Multiply all values of the array by certain value with allocation
 * of additional memory to prevent input array modification
 *
 * Example:
 * arr = [1,2,3]
 * multiplier = 2
 * output = [2, 4, 6]
 *
 * @param {number[]} arr
 * @param {number} multiplier
 * @return {number[]}
 */
function multiplyArray(arr, multiplier) {
  const multipliedArray = [...arr];
  for (let i = 0; i < multipliedArray.length; i++) {
    multipliedArray[i] *= multiplier;
  }
  return multipliedArray;
}

console.log(multiplyArray([1, 2, 3], 2)) // [2, 4, 6]
// Space complexity: O(array.length)
// Auxiliary space complexity: O(array.length)

// Binary Search – O(log n)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1
  }
  return -1;
}

console.log(binarySearch([1, 2, 3], 3)) // 2
// Time Complexity: O(log𝑛) = The search space halves each iteration.
// Space Complexity: O(1) = Only a constant amount of space is used.

// Merge Sort – O(n log n)

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right)
}

function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) result.push(left.shift());
    else result.push(right.shift());
  }
  return result.concat(left, right)
}

console.log(mergeSort([10, 22, 1, 4, 3, 10, 100, 33]))
/* [1,  3,  4,  10, 10, 22, 33, 100] */
// Time Complexity: O(𝑛 log n) = Divides the array logarithmically and merges linearly.
// Space Complexity: O(n) = Requires additional space for merging.








