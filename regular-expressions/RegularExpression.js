// console.log(/abc/.test('abcde'));
// console.log(/[0123456789]/.test("in 2020"));
// console.log(/[0-9]/.test("in 1992"));

// let dateTime = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
// console.log(dateTime.test("30-01-2003 15:20"));
// console.log(dateTime.test("30-jan-2003 15:20"));

// let notBinary = /[^01]/;
// console.log(notBinary.test("1100100010100110"));
// console.log(notBinary.test("1100100010200110"));

// console.log(/'\d+'/.test("'123'")); // true
// console.log(/'\d+'/.test("''")); // false
// console.log(/'\d*'/.test("'123'")); // true
// console.log(/'\d*'/.test("''")); // true

// let neighbor = /neighbou?r/;
// console.log(neighbor.test("neighbour")); // true
// console.log(neighbor.test("neighbor")); // true

// let dateTime1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
// console.log(dateTime1.test("30-1-2003 8:45")); // t
//
// let cartoonCrying = /boo+(hoo+)+/i;
// console.log(cartoonCrying.test("Boohoooohoohooo")); // t

// let match = /\d+/.exec("one two 100");
// console.log(match);
// console.log(match.index);
// console.log("one two 100".match(/\d+/));
// [ '100', index: 8, input: 'one two 100', groups: undefined ]
// 8
// [ '100', index: 8, input: 'one two 100', groups: undefined ]

// let quotedText = /'([^']*)'/;
// console.log(quotedText.exec("she said 'hello'"));
// console.log(/bad(ly)?/.exec("bad"));
// console.log(/(\d)+/.exec("123"));
// [
//   "'hello'",
//   'hello',
//   index: 9,
//   input: "she said 'hello'",
//   groups: undefined
// ]
// [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]
// [ '123', '3', index: 0, input: '123', groups: undefined ]

// function findDate(string) {
//   let datetime = /(\d{1,2})-(\d{1,2})-(\d{4})/;
//   let match = datetime.exec(string);
//   return new Date(Number(match[3]), Number(match[2]), Number(match[1]));
// }
// console.log(findDate("30-1-2003"));
// 2003-03-01T16:00:00.000Z

// let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
// console.log(animalCount.test("15 pigs")); // t
// console.log(animalCount.test("15 pigchickens")); // f

