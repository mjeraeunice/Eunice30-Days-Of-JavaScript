let nums = [1, 2, 3]
nums[0] = 10
console.log(nums) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums == numbers) // false

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwoes = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false

let numberss = nums
console.log(nums == numbers)  // true

let userOnes = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}
let userTwo = userOne
console.log(userOne == userTwo)  // true
//Other non-primitive data types examples 
let fruits = ['apple', 'mango', 'orange']
console.log(fruits[2]) // 'orange'

let matrixes = [[1, 2], [3, 4]]
console.log(matrix[0][2]) // 3

//Objects example,they are used to store a collection of key-value pairs
let person = {
  name: 'John',
  age: 20,
  address: {
    street: '120 Main St',
    city: 'Capetown',
    state: 'SA'
  }
}
console.log(person.name) // 'John'
console.log(person.address.city) // 'Capetown'

//Functions examples,they are used to define reusable blocks of code that can be called with different arguments.
function add(a, b) {
  return a + b;
}

const myFunction = add;

