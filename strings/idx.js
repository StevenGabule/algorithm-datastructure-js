// check if string contains substring
// const url = 'https://api.github.com/users/stevengabule'
// console.log(url.includes('github')) // t
//
// // iterate over a string
// const str = 'hello world';
// for(let i = 0; i < str.length; i++) {
//   console.log(str.charAt(i), i)
// }

// const str = 'hello world';
// for(const s in str) console.log(str.charAt(s), s)

// const str = 'hello world';
// const newStr = str.split('');
// for(let [i, n] of newStr.entries()) console.log(n, i)


// capitalize First word of string
// function capitalize(str) {
//   return `${str[0].toUpperCase()}${str.slice(1)}`
// }
//
// const result = capitalize('hello world, of programming');
// console.log(result)

// const capitalize = ([first, ...rest]) =>
//   `${first.toUpperCase()}${rest.join('')}`;
// console.log(capitalize("hello world"))


// capitalize every word in string
function capitalizeWords(str) {
  return str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
}
console.log(capitalizeWords('hello world of programming in good way'))

