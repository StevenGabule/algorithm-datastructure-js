// const array1 = [1, 4, 9, 16];
//
// // Pass a function to map
// const map1 = array1.map((x) => x * 2);
// console.log(map1); // Expected output: Array [2, 8, 18, 32]
//
// const numbers = [1, 4, 9];
// const roots = numbers.map((num) => Math.sqrt(num));
// // roots is now     [1, 2, 3]
// // numbers is still [1, 4, 9]
//
//
// /**
//  * Using map to reformat objects in an array
//  */
// const kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
// ];
//
// const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
// console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
// console.log(kvArray);
// // [
// //   { key: 1, value: 10 },
// //   { key: 2, value: 20 },
// //   { key: 3, value: 30 }
// // ]
//
// ["1", "2", "3"].map(Number); // [1, 2, 3]
//
// // But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
// ["1.1", "2.2e2", "3e300"].map(Number); // [1.1, 220, 3e+300]
//
// // For comparison, if we use parseInt() on the array above:
// ["1.1", "2.2e2", "3e300"].map((str) => parseInt(str, 10)); // [1, 2, 3]
//
// /**
//  * Mapped array contains undefined
//  */
// const numbers = [1, 2, 3, 4];
// const filteredNumbers = numbers.map((num, index) => {
//     if (index < 3) {
//         return num;
//     }
// });
//
// // index goes from 0, so the filterNumbers are 1,2,3 and undefined.
// // filteredNumbers is [1, 2, 3, undefined]
// // numbers is still [1, 2, 3, 4]
//
// /**
//  * Side-effectful mapping
//  */
// const cart = [5, 15, 25];
// let total = 0;
// const withTax = cart.map((cost) => {
//     total += cost;
//     return cost * 1.2;
// });
// console.log(withTax); // [6, 18, 30]
// console.log(total); // 45
//
// /**
//  * This is not recommended, because copying methods are best used with pure functions.
//  * In this case, we can choose to iterate the array twice.
//  */
// const cart = [5, 15, 25];
// const total = cart.reduce((acc, cost) => acc + cost, 0);
// const withTax = cart.map((cost) => cost * 1.2);
//
//
// // Sometimes this pattern goes to its extreme and the only useful thing that map() does is causing side effects.
// const products = [
//     { name: "sports car" },
//     { name: "laptop" },
//     { name: "phone" },
// ];
//
// products.map((product) => {
//     product.price = 100;
// });
//
// // As mentioned previously, this is an anti-pattern. If you don't use the return value of map(), use forEach() or a for...of loop instead.
// products.forEach((product) => {
//     product.price = 100;
// });
//
// // Or, if you want to create a new array instead:
// const productsWithPrice = products.map((product) => {
//     return { ...product, price: 100 };
// });

/**
 * Using the third argument of callbackFn
 */
const numbers = [3, -1, 1, 4, 1, 5, 9, 2, 6];
const averaged = numbers
    .filter((num) => num > 0)
    .map((num, idx, arr) => {
        // Without the arr argument, there's no way to easily access the
        // intermediate array without saving it to a variable.
        const prev = arr[idx - 1];
        const next = arr[idx + 1];
        let count = 1;
        let total = num;
        if (prev !== undefined) {
            count++;
            total += prev;
        }
        if (next !== undefined) {
            count++;
            total += next;
        }
        const average = total / count;
        // Keep two decimal places
        return Math.round(average * 100) / 100;
    });
console.log(averaged); // [2, 2.67, 2, 3.33, 5, 5.33, 5.67, 4]















