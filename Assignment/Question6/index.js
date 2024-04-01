/*6.Write a program that takes two numbers as input from the user and performs
arithmetic operations (addition, subtraction, multiplication, division). Display the results
of each operation. */

const operator = prompt("Enter Operator Like: + , - , * , /")
const first_number = parseFloat(prompt("Enter First Number"));
const second_number = parseFloat(prompt("Enter Second Number"));

if(operator == '+'){
    result = first_number + second_number;
    console.log(`The Addition of ${first_number} and ${second_number} Is : ${result}`)
}else if(operator == '-'){
    result = first_number - second_number;
    console.log(`The Subtraction of ${first_number} and ${second_number} Is : ${result}`)
}else if(operator == '*'){
    result = first_number * second_number;
    console.log(`The Multiplication of ${first_number} and ${second_number} Is : ${result}`)
}else if(operator == '/'){
    result = first_number / second_number;
    console.log(`The Devision of ${first_number} and ${second_number} Is : ${result}`)
}else{
    console.log("Enter Correct Operator")
}