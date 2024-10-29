function Stack() {
  this.dataStore = []
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(elem) {
  this.dataStore[this.top++] = elem;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1]
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0
}

// let s = new Stack()
// s.push('john')
// s.push('mike')
// s.push('ross')
// console.log(s.length()) // 3
// console.log(s.peek()) // ross
// let rm = s.pop()
// console.log(rm)// ross
// console.log(s.peek()) // mike
// s.push('alice')
// console.log(s.peek()) // alice
// s.clear()
// console.log("length: " + s.length()); // 0
// console.log(s.peek()); // undefined
// s.push("Clayton");
// console.log(s.peek()); // clayton

const mulBase = (num, base) => {
  let s = new Stack()
  do {
    s.push(num % base)
    num = Math.floor(num /= base)
  } while(num > 0)
  let converted = ''
  while (s.length() > 0) {
    converted += s.pop()
  }
  return converted;
}

// let num = 32, base = 2;
// console.log(mulBase(num, base)) // 100000
// num = 125;
// base = 8;
// console.log(mulBase(num, base)) // 175

const isPalindrome = word => {
  let s = new Stack()
  let _ = word.length
  for (let i = 0; i < _; i++) {
    s.push(word[i])
  }
  let rword = ""
  while(s.length() > 0) {
    rword += s.pop()
  }
  return word === rword;
}

console.log(isPalindrome('hello'))
console.log(isPalindrome('1001'))
console.log(isPalindrome('racecar'))























































