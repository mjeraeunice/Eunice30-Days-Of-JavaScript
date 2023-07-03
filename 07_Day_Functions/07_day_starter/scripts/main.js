// ## Exercises: Level 1

// 1. Declare a function _fullName_ and it print out your full name.
function fullName(){
    console.log("My name is Eunice Mjera");
}fullName()
// 2. Declare a function _fullName_ and now it takes firstName, lastName as a parameter and it returns your full - name.
function myName(firstName,lastName){
       return"My name is" + firstName + "" + lastName;
}
var allName=myName("Eunice","Mjera");
console.log(allName);
// 3. Declare a function _addNumbers_ and it takes two two parameters and it returns sum.
function _addNumbers_(num1,num2){
   var sum= num1 + num2
   return sum
}
console.log(_addNumbers_(2,7));
// 4. An area of a rectangle is calculated as follows: _area = length x width_. Write a function which calculates _areaOfRectangle_.
function area_of_rectangle(length,width){
    var area= length * width;
    return area
}
console.log(area_of_rectangle(4.5,7));

// 5. A perimeter of a rectangle is calculated as follows: _perimeter= 2x(length + width)_. Write a function which calculates _perimeterOfRectangle_.
function perimeter_of_rectangle(length,width){
    var perimeter=2*(length + width);
    return perimeter
}
console.log(perimeter_of_rectangle(3,8));
// 6. A volume of a rectangular prism is calculated as follows: _volume = length x width x height_. Write a function which calculates _volumeOfRectPrism_.
function volume_of_rectangularPrism(l1,w1,h1){
    var volume= l1*w1*h1
    return volume
}
console.log(volume_of_rectangularPrism(10,6,8));

// 7. Area of a circle is calculated as follows: _area = π x r x r_. Write a function which calculates _areaOfCircle_
 const _areaOfCircle=(radius)=>{
    var pi= Math.PI
    var area= pi * radius *radius
    return area
 }
 console.log(_areaOfCircle(7));

// 8. Circumference of a circle is calculated as follows: _circumference = 2πr_. Write a function which calculates _circumOfCircle_
const _circumOfCircle_=(raduis)=>{ 
    return 2 * Math.PI * radius;
    
}
console.log(_circumOfCircle_(5));
// 9. Density of a substance is calculated as follows:_density= mass/volume_. Write a function which calculates _density_.
const _density_=(mass,volume)=>{
    return mass/volume
}
console.log(_density_(30,6));
// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, _speed_.
const _speed_=(distance,time)=>{
    return distance.reduce((a,b)=>a+b)/time.reduce((c,d)=>c+d)
}
const distances=[20,5,7];
const times=[4,2,1]
console.log(_speed_(distances,times));
// 11. Weight of a substance is calculated as follows: _weight = mass x gravity_. Write a function which calculates _weight_.
    const _weight_=(mass,gravity)=>{
        return mass *gravity
    }
    console.log(_weight_(4,6));
// 12. Temperature in oC can be converted to oF using this formula: _oF = (oC x 9/5) + 32_. Write a function which convert oC to oF _convertCelsiusToFahrenheit_.
const _convertCelsiusToFahrenheit_=(celcius)=>{
    var fahrenheit=(celcius *9/5) +32
    return fahrenheit
}
console.log(_convertCelsiusToFahrenheit_(20));
// 13. Body mass index(BMI) is calculated as follows: _bmi = weight in Kg / (height x height) in m2_. Write a function which calculates _bmi_. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is _underweight, normal, overweight_ or _obese_ based the information given below.

//     - The same groups apply to both men and women.
//     - _Underweight_: BMI is less than 18.5
//     - _Normal weight_: BMI is 18.5 to 24.9
//     - _Overweight_: BMI is 25 to 29.9
//     - _Obese_: BMI is 30 or more
const _bmi_=(weight,height)=>{
    heightInMetres=height /100
    bmindex=weight/(heightInMetres *heightInMetres)
    return bmindex
}
const weight_difference=(bmindex)=>{
    if(bmindex<18.5){
        return "The patient is underweight"
    }
    else if(bmindex>=18.5 && bmindex<=24.9){
        return "The patient has a normal weight"
    }
    else if(bmindex >=25 && bmindex<=29.9){
        return " The patient is overweight"
    }
    else{ return "The patient is Obese "}}
console.log(-_bmi_(25,156));
console.log(weight_difference());
// 14. Write a function called _checkSeason_, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
const _checkSeason_=(month)=>{
    const seasons = ["Winter", "Spring", "Summer", "Autumn"];
    return seasons[Math.floor((month % 12) / 3)];
}
console.log(_checkSeason_(4));
// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

//     ```js
//     console.log(findMax(0, 10, 5))
//     10
//     console.log(findMax(0, -10, -2))
//     0
//     ```
const findMax=(num1,num2,num3)=>{
        if (num1 >= num2 && num1 >= num3) {
          return num1;
        } else if (num2 >= num1 && num2 >= num3) {
          return num2;
        } else {
          return num3;
        }
      }   
console.log(findMax(0,10,5));
console.log(findMax(0,-10,-2));