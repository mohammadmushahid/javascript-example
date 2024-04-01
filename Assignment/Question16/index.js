/*16.Write a JavaScript program that prompts the user to enter a number and generates
the multiplication table for that number. Use a for loop to calculate and display the
multiplication table from 1 to 10 for the entered number.
 */

const num = parseInt(prompt("Enter a Number to Print a Table"));
  for (let i = 1; i <= 10; i++) {
    const result = num * i;
    console.log(`${num} x ${i} = ${result}`);
  }
