/*11.Write a program that checks whether a user-entered number is positive, negative, or
zero using the if-else statement. Display the result accordingly */

const Num = parseFloat(prompt("Enter a Number To check Positive, Negative or Zero"));
if(Num>0){
    console.log(`The Number is Positive`)
}else if(Num==0){
    console.log(`The Number is Zero`)
}else{
    console.log(`The Number is Negative`)
}