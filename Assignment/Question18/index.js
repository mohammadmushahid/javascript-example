/*18.Write a JavaScript program that defines a function called EvenOrOdd which takes an
integer as a parameter and displays whether the number is even or odd. Then, call this
function with a user-provided integer. */

const number = parseInt(prompt("Enter a Number to check Even or Odd"));

function EvenOrOdd(integer){
    if(integer % 2){
        console.log("Odd Number")
    }else{
        console.log("Even Number")
    }
}

EvenOrOdd(number);