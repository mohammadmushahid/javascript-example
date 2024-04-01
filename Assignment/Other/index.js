// Printing squares of numbers from 1 to 20
console.log("Squares of numbers from 1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(`Square of ${i}: ${i * i}`);
}

// Calculating and printing squares using a separate for loop
// console.log("\nCalculating and printing squares using a separate for loop:");
// for (let j = 1; j <= 20; j++) {
//   const square = j * j;
//   console.log(`Square of ${j}: ${square}`);
// }


// Prompt the user to enter a number
const userInput = prompt("Enter a number:");

// Convert the user input to a number
const number = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(number)) {
  // Display the multiplication table for the entered number
  console.log(`Multiplication table for ${number}:`);
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}

// Define the RepeatCharacter function
function RepeatCharacter(character, count) {
    let repeatedString = '';
  
    // Check if the count is a valid positive number
    if (!isNaN(count) && count > 0) {
      // Repeat the character and create the string
      for (let i = 0; i < count; i++) {
        repeatedString += character;
      }
  
      // Display the result
      console.log(`String composed of '${character}' repeated ${count} times: ${repeatedString}`);
    } else {
      console.log("Invalid input. Please enter a valid positive number for count.");
    }
  }
  
  // Prompt the user to enter a character
  const userCharacter = prompt("Enter a character:");
  
  // Prompt the user to enter a number
  const userCount = prompt("Enter a number for count:");
  
  // Convert user input to appropriate types
  const character = userCharacter.charAt(0); // Take the first character if user entered a string
  const count = parseInt(userCount);
  
  // Call the RepeatCharacter function with user-provided values
  RepeatCharacter(character, count);

//   // Define the calculateFactorial function
// function calculateFactorial(number) {
//     // Base case: factorial of 0 is 1
//     if (number === 0) {
//       return 1;
//     }
  
//     // Recursive case: calculate factorial
//     return number * calculateFactorial(number - 1);
//   }
  
//   // Prompt the user to enter a positive integer
//   const userInput = prompt("Enter a positive integer:");
  
//   // Convert user input to an integer
//   const userNumber = parseInt(userInput);
  
//   // Check if the input is a valid positive integer
//   if (!isNaN(userNumber) && userNumber >= 0) {
//     // Call the calculateFactorial function with user-provided value
//     const result = calculateFactorial(userNumber);
//     console.log(`Factorial of ${userNumber} is: ${result}`);
//   } else {
//     console.log("Invalid input. Please enter a valid positive integer.");
//   }

// Define the calculateFactorial function
// function calculateFactorial(number) {
//   // Base case: factorial of 0 is 1
//   if (number === 0) {
//     return 1;
//   }

//   // Recursive case: calculate factorial
//   return number * calculateFactorial(number - 1);
// }

// // Prompt the user to enter a positive integer
// const userInput = prompt("Enter a positive integer:");

// // Convert user input to an integer
// const userNumber = parseInt(userInput);

// // Check if the input is a valid positive integer
// if (!isNaN(userNumber) && userNumber >= 0) {
//   // Call the calculateFactorial function with user-provided value
//   const result = calculateFactorial(userNumber);
//   console.log(`Factorial of ${userNumber} is: ${result}`);
// } else {
//   console.log("Invalid input. Please enter a valid positive integer.");
// }

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1]));

const refrigerator = {
  'milk': 1,
  'eggs': 12,
};

for (const food in refrigerator) {
  console.log(food, refrigerator[food]);
}