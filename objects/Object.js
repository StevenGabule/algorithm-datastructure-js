// let arr = [1, 2, 3]
let obj = {a: 1, b: 2, c: 3, d: 4}
const length = Object.keys(obj).length
// console.log(length)

let username = {first: 'John', last: 'due'}
for (const u in username) {
  if (username.hasOwnProperty(u)) {
    // console.log(username[u]);
  }
}

for (const u of Object.keys(username)) {
  // console.log(username[u]);
}

// Object.entries(username).forEach(([key, value]) => console.log(key, value))

const person = {name: 'amy', age: 40}
const arr = []
// Object.keys(person).forEach(key => arr.push([key, person[key]]))
// console.log(arr)

// const result = Object.keys(person).map(key => [key, person[key]]);
// console.log(result)
// console.log(Object.entries(person))

// merge multiple objects in one object
const defaultUser = {
  name: 'John Doe',
  email: 'johndoe@gmail.com',
  subscribed: true
}

const actualUser = {
  name: 'Mark Doe',
  email: 'markdoe@gmail.com'
}

const userData = Object.assign(defaultUser, actualUser)
// const userData = {...defaultUser, ...actualUser}
// console.log(userData)

const state = {}
const onKeyUp = evt => {
  const value = evt.target.value;
  const name = evt.target.name;
  state[name] = value
}

// del or filter property of object
const name = {first: 'John', last: 'Due', middle: 'Lim'}
const filterObj = (obj, prop) => {
  const filteredObj = {}
  Object.keys(obj).filter(k => k !== prop).map(key => filteredObj[key] = obj[key])
  return filteredObj
}
console.log(filterObj(name, 'first'))

// get all values in Object
const userProp = {
  first: 'John',
  last: 'Due',
  age: 12,
  phone: 209292828
}
const values = Object.keys(userProp).map(key => userProp[key])
console.log(values)
console.log(Object.values(userProp))






























