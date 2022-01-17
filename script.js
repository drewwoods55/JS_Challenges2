//Very easy Challenge- Write a function named min that takes two arguments and returns their minimum.
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


//Easy Challenge-Create an array of students holding their last name, first name, and age with 3 students.  log a greeting with the first name, last name and age of the 2nd student.


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

//result
console.log(`Hello, my name is ${first} ${last} and I am ${age} years old.`)
      

//Medium Challenge-Collect input from user (1-12) corrisponding with moths in a year.Alert the user if they enter an invalid number (less than 1 or greater than 12).

//collect user input for numbers
let userInput = prompt('Pick a number 1-12')

// tie numbers to the corrisponding month
if (userInput <= 12 && userInput >= 1 ){
    let months = {
        1: "January",
        2: 'Febuary',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }
    console.log(months[userInput])
} else {
    alert('Please choose a valid number 1-12')
}




