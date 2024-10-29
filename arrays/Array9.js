// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
// console.log(beasts.indexOf('bison', 2));
// Expected output: 4

// console.log(beasts.indexOf('giraffe'));
// Expected output: -1

/**
 * Using indexOf()
 * The following example uses indexOf() to locate values in an array.
 */
// const array = [2, 9, 9];
// array.indexOf(2); // 0
// array.indexOf(7); // -1
// array.indexOf(9, 2); // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0

// You cannot use indexOf() to search for NaN.
// const array = [NaN];
// array.indexOf(NaN); // -1

/**
 * Finding all the occurrences of an element
 */
const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices); // [0, 2, 4]

/**
 * Finding if an element exists in the array or not and updating the array
 */
function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log(`New veggies collection is: ${veggies}`);
    } else {
        console.log(`${veggie} already exists in the veggies collection.`);
    }
}

const veggies = ["potato", "tomato", "chillies", "green-pepper"];

updateVegetablesCollection(veggies, "spinach");
// New veggies collection is: potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, "spinach");
// spinach already exists in the veggies collection.

/**
 * Using indexOf() on sparse arrays
 * You cannot use indexOf() to search for empty slots in sparse arrays.
 */
console.log([1, , 3].indexOf(undefined)); // -1
