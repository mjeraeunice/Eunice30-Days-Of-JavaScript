// Exercises: Level 1

  ```js
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  ```

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let k=0; k<=10; k++){
    console.log(k);
}
//Using while loop
let z=0
while(z<=10){
    console.log(z);
    z++;
}
//using do while loop
let b = 0;
do {
  console.log(b);
  b++;
} while (b<= 10);
// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i=10; i>=0;i--){
    console.log(i);
}
//using while loop
let x=10;
while(x>=0){
    console.log(x);
    x--
}
//using do-while  loop
let y=10;
do{
    console.log(y);
    y--;
}
while(y>=0);
// 3. Iterate 0 to n using for loop
for(let d=0; d<countries.length;i++){
    console.log(countries[d]);
}
// 4. Write a loop that makes the following pattern using console.log():

   ```js
       #
       ##
       ###
       ####
       #####
       ######
       #######
   ```
   for(let a=0;i<=7;a++){
    console.log('a'.repeat(a));
   }

// 5. Use loop to print the following pattern:

   ```sh
   0 x 0 = 0
   1 x 1 = 1
   2 x 2 = 4
   3 x 3 = 9
   4 x 4 = 16
   5 x 5 = 25
   6 x 6 = 36
   7 x 7 = 49
   8 x 8 = 64
   9 x 9 = 81
   10 x 10 = 100
   ```
 // Using a loop to print the pattern
for (let s = 0; s <= 10; s++) {
      console.log(`${s} x ${s} = ${s * s}`);
    }
    
// 6. Using loop print the following pattern

   ```sh
    i    i^2   i^3
    0    0     0
    1    1     1
    2    4     8
    3    9     27
    4    16    64
    5    25    125
    6    36    216
    7    49    343
    8    64    512
    9    81    729
    10   100   1000
   ```
   for (let l = 0; l<= 10; i++) {
     console.log(`${l}    ${l ** 2}     ${l** 3}`);
   }
// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for(let g=0; g<=100;g++){
  if(g % 2===0){
    console.log(g);
  }
}
// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for(let p=0; p<=100;p++){
  if(p %2!==0){
console.log(p);
  }
}
// 9. Use for loop to iterate from 0 to 100 and print only prime numbers
for (let t = 0; t<= 100; t++) {
  let primeNum = true;

  if (i === 0 || i === 1) {
    primeNum= false;
  } else {
    for (let c = 2; c<= Math.sqrt(i); c++) {
      if (i % c === 0) {
        primeNum= false;
        break;
      }
    }
  }

  if (primeNum) {
    console.log(i);
  }
}
// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

    ```sh
    The sum of all numbers from 0 to 100 is 5050.
    ```
    let sum = 0;

    for (let h = 0; h <= 100; h++) {
      sum += h;
    }
    
    console.log(sum);
    
// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

    ```sh
    The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    ```
    let sumOfeven = 0;
    let sumOfodd = 0;
    
    for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) {
        sumOfeven += i;
      } else {
        sumOfodd += i;
      }
    }
    
    console.log(`The sum of all even numbers from 0 to 100 is ${sumOfeven}. And the sum of all odds from 0 to 100 is ${sumOfodd}`);
    

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

    ```sh
      [2550, 2500]
    ```
    let evenSum = 0;
    let oddSum = 0;
    
    for (let i = 0; i <= 100; i++) {
      if (i % 2 === 0) {
        evenSum += i;
      } else {
        oddSum += i;
      }
    }
    const displaySums=[evenSum,oddSum];
    console.log(displaySums);
// 13. Develop a small script which generate array of 5 random numbers
function randomArraynum() {
  var randomArray = [];
  for (var l = 0; l < 5; l++) {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    randomArray.push(randomNum);
  }
  return randomArray;
}

var nums = randomArraynum();
console.log(nums);
// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique
function Randomunique() {
  let numbers = [];
  
  while (numbers.length < 5) {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  
  return numbers;
}
console.log(Randomunique());
// 15. Develop a small script which generate a six characters random id:

    ```sh
    5j2khz
    ```
    function getRandomId() {
      const items = 'GHTIUJKILOPMNBGFDSE123456789';
      let id = '';
      
      for (let f = 0; f< 6; f++) {
        const indexRandom = Math.floor(Math.random() *items.length);
        id += items[indexRandom];
      }
      
      return id;
    }
    
    const randomId = getRandomId();
    console.log(randomId);
    
