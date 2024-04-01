/* 19.Write a JavaScript program that defines a function called RepeatCharacter which
takes a character and a number as parameters and displays a string composed of the
repeated character. Then, call this function with a user-provided character and number*/

const character = prompt("Enter Any Charecter: ");
const count = parseInt(prompt("Enter Number: "));

function RepeatCharacter(value1, value2){
    let repeatedString = '';
    for (let i = 0; i < value2; i++) {
        repeatedString += value1;
      }
      console.log(`Result is ${repeatedString}`)
}

RepeatCharacter(character, count)
  