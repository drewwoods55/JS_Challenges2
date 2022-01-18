// //Very easy Challenge- Write a function named min that takes two arguments and returns their minimum.
let min = function(x, y) {
    if (x <= y) {
        return x
       } else {
        return y
       }
};
// anoter way to write this is:
// let min = function(x, y) {
//     return (x <= y) ? x : y;
// };
// this is called a ternary. which is a short hand way of writing if else statements.

//tests
console.log(min(0, 10));
// → 0
console.log(min(4, 4));
// → 4
console.log(min(10,5))
//5


// //Easy Challenge-Create an array of students holding their last name, first name, and age with 3 students.  log a greeting with the first name, last name and age of the 2nd student.


//1st name of student
    //array 
        let firstNames = [ `Drew`, `Aubery`, `Jermaine`]
        //access the Array
            let first = firstNames[2]
//last name of students
        let lastNames = [ `Woods`, `Graham`, `Cole`]

            let last = lastNames[2]
//age of students
        let studentAge = [ 24, 35, 34 ]

            let age = studentAge[2]

// //result
console.log(`Hello, my name is ${first} ${last} and I am ${age} years old.`)
      

//Medium Challenge-Collect input from user (1-12) corrisponding with moths in a year.Alert the user if they enter an invalid number (less than 1 or greater than 12).

//collect user input for numbers
// let userInput = prompt('Pick a number 1-12')

// // tie numbers to the corrisponding month
 if (userInput <= 12 && userInput >= 1 ){
//     // let months = {
//     //     1: "January",
//     //     2: 'Febuary',
//     //     3: 'March',
//     //     4: 'April',
//     //     5: 'May',
//     //     6: 'June',
//     //     7: 'July',
//     //     8: 'August',
//     //     9: 'September',
//     //     10: 'October',
//     //     11: 'November',
//     //     12: 'December'
//     // }
    let months = [
        "January",
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    console.log(months[userInput-1])
} else {
    alert('Please choose a valid number 1-12')
}


//Hard Challenge - Tom : height:  9in   mass: 8 Jerry : height: 10in mass: 45 g Compare the BMI (Body Mass Index) of Tom & Jerry using the formula below: BMI = mass / height ^2 = mass / (height * height) Store Tom & Jerry’s mass and height as variables. Calculate both their BMI’s. Create a Boolean variable containing information about whether Tom has a higher BMI than Jerry. Print a string to the console with the variable from step 3 ( e.g. Is Tom’s BMI higher than Jerry’s? false).

// use formula to contrast BMI 
let jerryMass = 45
let tomMass = 8
let jerryHeight = 10
let tomHeight = 9

const tomBMI = tomMass / tomHeight ** 2;
const jerryBMI = jerryMass / (jerryHeight * jerryHeight);
console.log(tomBMI, jerryBMI);

const higherBMI = tomBMI > jerryBMI;
console.log(`Is Tom's BMI higher than Jerry's? ${higherBMI}`)


