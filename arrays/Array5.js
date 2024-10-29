// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter((word) => word.length > 6);
// console.log(result);
//
// // Filtering out all small values
// function isBigEnough(value) {
//     return value >= 10;
// }
//
// console.log([12, 5, 8, 130, 44].filter(isBigEnough))

// Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]










