/* 9.Create a program that calculates the total price of items in a shopping cart. Prompt
the user for the price of an item and the quantity, then use the assignment operators to
update the total price.
 */

const Item = parseFloat(prompt("Enter your Item Price"));
const Quantity = parseFloat(prompt("Enter your Item Quantity"));
const total = Item * Quantity;
console.log(`Your Total Price is ${total}`)