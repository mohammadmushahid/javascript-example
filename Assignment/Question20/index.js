/* 20.Write a JavaScript program that defines a recursive function called calculateFactorial
which takes a positive integer as a parameter and calculates its factorial. Then, call this
function with a user-provided positive integer.*/

const num = parseInt(prompt("Enter Any Number to Calculate Factorial"));

function calculateFactorial(number){
    if (number === 0) {
        return 1;
      }
      return number * calculateFactorial(number - 1);
}

const result = calculateFactorial(num)
console.log(`Factorial of ${num} is: ${result}`);
  