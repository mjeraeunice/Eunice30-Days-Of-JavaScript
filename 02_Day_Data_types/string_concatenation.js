// Declaring different variables of different data types
let space = ' '
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
// Concatenating using addition operator
let fullName = firstName + space + lastName // concatenation, merging two string together.
console.log(fullName)

let personInfoOne = fullName + '. I am ' + age + '. I live in ' + country // ES5
console.log(personInfoOne)
// Concatenation: Template Literals(Template Strings)
let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)
// Concatenation using the join() method
let arr = ['I', 'love', 'JavaScript']
let str5 = arr.join(space)
console.log(str5)

// Concatenation using the += operator
let str4 = 'I'
str4 += space + 'love'
str4 += space + 'JavaScript'
console.log(str4)


// Concatenation using the concat() method
let str1 = 'Hello'
let str2 = 'Nation'
let str3 = '!'
let greeting = str1.concat(space, str2, str3)
console.log(greeting)