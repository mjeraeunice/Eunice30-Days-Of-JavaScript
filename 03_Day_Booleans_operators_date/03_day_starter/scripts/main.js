// this is your main.js script
//AND Operator(&&)
let x = 11;
let y = 20;
if (x < 10 && y < 5) {
  console.log("Both conditions are true");
}

//OR(||) Operator
let b= 5;
let k = 10;
if (b < 10 || k < 5) {
  console.log("At least one condition is true");
}

//NOT(!) Operator
let w = 15;
if (!(w< 10)) {
  console.log("w is not less than 10");
}

//Using the Date() Constructor to create a new date object
//Date() constructor is used
let today = new Date();
console.log(today);

//Parsing a Date String to create a date object
//Date.parse() method is used
let dateStart = "2023-01-01T00:00:00Z";
let date = new Date(Date.parse(dateStr));
console.log(date);

