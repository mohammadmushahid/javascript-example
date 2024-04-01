/* 8.Implement a program that checks if a user-entered number is divisible by
both 3 and 5. Use logical AND (&&) to make this determination.*/

const num = parseFloat(prompt("Enter a Number"));
if(num%3 && num%5){
    console.log(`${num} is Divisible`)
}else{
    console.log(`${num} is not Divisible`)
}