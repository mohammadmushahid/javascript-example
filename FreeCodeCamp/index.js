// function caseInSwitch(val) {
//     let answer = "";
//     // Only change code below this line

//     switch(val){
//       case 1:
//       answer = "alpha"
//       break;
//        case 2:
//        answer = "beta"
//       break;
//        case 3:
//        answer = "gamma"
//       break;
//        case 4:
//        answer = "delta"
//       break;
//     }
//     // Only change code above this line
//     return answer;
//   }
//   console.log(caseInSwitch(4))

//   // caseInSwitch(1);


// function switchOfStuff(val) {
//   let answer = "";
//   // Only change code below this line

// switch(val){
//   case 'a' :
//   answer = 'apple';
//   break;
//   case 'b' :
//   answer = 'bird';
//   break;
//   case 'c' :
//   answer = 'cat';
//   break;
//   default :
//   answer = 'stuff';
//   break;
// }

//   // Only change code above this line
//   return answer;
// }

// switchOfStuff(1);


// function sequentialSizes(val) {
//   let answer = "";
//   // Only change code below this line

//   switch(val){
//     case 1:
//     case 2:
//     case 3:
//     answer = "Low"
//     break;
//     case 4:
//     case 5:
//     case 6:
//     answer = "Mid"
//     break;
//     case 7:
//     case 8:
//     case 9:
//     answer = "High"
//     break;
//   }


//   // Only change code above this line
//   return answer;
// }

// sequentialSizes(1);

// Define the number of rows for the pattern
// Define the number of rows for the pattern
// const numRows = 5;

// // Outer loop for rows
// for (let i = 1; i <= numRows; i++) {
//   // Inner loop for printing asterisks in each row
//   let pattern = '';
//   for (let j = 1; j <= i; j++) {
//     pattern += '* ';
//   }
//   // Print the pattern for each row
//   document.write(pattern);
// }

// function myFun() {
//   console.log("Hello");
//   return "World";
//   console.log("byebye")
// }
// console.log(myFun())

// Setup
// function abTest(a, b) {
//   // Only change code below this line

// if(a<0 || b<0){
//   return undefined;
// }


//   // Only change code above this line

//   return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
// }

// abTest(2,2);

// function hello(callme, callme2){
//   console.log('hello')
//   callme();
//   callme2();
// }
// function data(){
//   console.log('i am call back')
// }
// function data2(){
//   console.log('i am call back 2')
// }
// hello(data2,data)

// function greet() {
//   console.log('Hello world');
//   }
//   function sayName(name) {
//     console.log('Hello' + ' ' + name);
//     }
//     function hello(){
//       console.log('i am a third function')
//     }
//     // calling the function
//     setTimeout(greet, 2000);
//     setTimeout(hello,5000)
//     sayName('John');
// function greet(name, myFunctionSayName) {
//   console.log('Hello world');
//   // callback function
//   // executed only after the greet() is executed
//   myFunctionSayName(name);
// }
// // callback function
// function sayName(name) {
//   console.log('Hello' + ' ' + name);
// }
// // calling the function after 2 seconds
// setTimeout(greet, 2000, 'John', sayName);

// let countValue = new Promise(function (resolve, reject) {
//   reject('Promise rejected');
//   });
//   // executes when promise is resolved successfully
//   countValue.then(
//   function successValue(result) {
//   console.log(result);
//   },
//   )
//   // executes if there is an error
// .catch(
//   function errorValue(result) {
//   console.log(result);
//   }
//   );

// function hello(...args){
//   console.log(args)
// }
// hello(0,1,2,3,4,)

// const arr = [1,2,3,4];
// const arr2 = [...arr,5,6,7,...arr];
// console.log(arr2)

// const age = 22;
// let check = (age < 18)?
// ()=>console.log('not eligible'):
// ()=>console.log('eligible')
// check()

// let sum = (a, b) => {
// let result = a + b;
// return result;
// }
// let result1 = sum(5,7);
// console.log(result1);
// console.log(sum(1,1))
// function Person() {
//   this.name = 'Jack',
//   this.age = 25,
//   this.sayName = function () {
//   // this is accessible
//   console.log(this.age);
//   function innerFunc() {
//   // this refers to the global object
//   console.log(this.name);
//   console.log(this);
//   }
//   innerFunc();
//   }
//   }
//   let x = new Person();
//   x.sayName();

// let x = (...n)=>{
//   console.log(n)
// }
// x(1,2,3)


let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 7:
    case 8:
    case 9:
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }

  if(count > 0){
    return count+" Bet"
  }else{
    return count + ' Hold'
  }


  return "Change Me";
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');