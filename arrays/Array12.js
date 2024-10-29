const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

// Removing the last element of an array
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ]
console.log(popped); // 'sturgeon'

// Calling pop() on non-array objects
const arrayLike = { length: 3, unrelated: "foo", 2: 4 };
console.log(Array.prototype.pop.call(arrayLike));
// 4

console.log(arrayLike);
// { length: 2, unrelated: 'foo' }

const plainObj = {};
// There's no length property, so the length is 0
Array.prototype.pop.call(plainObj);
console.log(plainObj);
// { length: 0 }





