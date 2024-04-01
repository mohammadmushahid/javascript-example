/*7.Create a program that compares two numbers entered by the user using comparison
operators. Output whether the first number is greater than, less than, or equal to the
second number.
 */

const firstNum = parseFloat(prompt("Enter First Number"));
const secondNum = parseFloat(prompt("Enter Second Number"));
if(firstNum > secondNum){
    console.log(`${firstNum} is Greater than ${secondNum}`)
}else if(firstNum == secondNum){
    console.log(`${firstNum} is Equal ${secondNum}`)
}else{
    console.log(`${firstNum} is Less than ${secondNum}`)
}