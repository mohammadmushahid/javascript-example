/*12.Write a JavaScript program that classifies students into different grade categories
based on their exam scores. Prompt the user to enter a numeric score, and then use
if-else if-else statements to determine and display the corresponding grade category.
 */

let student_Num = parseInt(prompt("Enter your Marks to check Grade"));
if (student_Num > 90 || student_Num == 90) {
    console.log("A+ Grade");
} else if (student_Num > 79 || student_Num ==89) {
    console.log("A Grade")
} else if (student_Num > 69 || student_Num==79) {
    console.log("B Grade")
} else if (student_Num > 59 || student_Num ==69) {
    console.log("C Grade")
} else if (student_Num > 49 || student_Num ==59) {
    console.log("D Grade")
}else {
    console.log("You Are Failed !")
}