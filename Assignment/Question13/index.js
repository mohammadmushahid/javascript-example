/*13.Create a program that prompts the user to enter a day of the week (as a number, e.g.,
1 for Monday). Use a switch statement to output the corresponding day name. */

let day = parseInt(prompt("Enter Day"));

switch (day) {
    case 1:
        console.log("The Day is : MONDAY");
        break;
    case 2:
        console.log("The Day is : TUESDAY");
        break;
    case 3:
        console.log("The Day is : WEDNESDAY");
        break;
    case 4:
        console.log("The Day is : THURSDAY");
        break;
    case 5:
        console.log("The Day is : FRIDAY");
        break;
    case 6:
        console.log("The Day is : SATURDAY");
        break;
    case 7:
        console.log("The Day is : SUNDAY");
        break;
    default:
        console.log("Enter Correct Day")
}