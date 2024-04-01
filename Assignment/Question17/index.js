/*17.Write a JavaScript program that defines a function called greet which takes a
person's name as a parameter and displays a personalized greeting message. Then, call
this function with a user-provided name and show the greeting message.
 */

const user = prompt("Enter Your Name: ");

function greet(name){
    console.log(`Welcome ${name} in The Programming World !!`)
}

greet(user);