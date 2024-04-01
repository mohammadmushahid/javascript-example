// Function Expression
// Anonymous Function ==> Aisa function jiska koi name hi na ho it is called anonymous function.
// var a = function (){
//     console.log("hello World !")
// }

// a();


// Agar koi kaam kuch time baad karna ho then we use settimeout.
// setTimeout(FunctionName, Time in milisecconds (3000))

// function show(){
//     console.log("hello there how are you !!")
// }

// setTimeout(show,3000)



// setTimeout(function (){
//     console.log("hello there how are you !!")
// },3000)

// IIFE ==> immediately invoked function expression 
// ek aisa function jo kisi per depend nahi rehta ya aisa function jo decalate hote hi immediately call ho jaye that is called iife.
// eg.

// (function (){
//     console.log('hello')
// })();



// (function (){
//     let str = "hello"
//     console.log(str)
// })();

// let msg = "Hello main JS"
// function hello() {
//     console.log(msg)
// }

// hello();

// (function () {
//     let msg = "Hello oppo JS"
//     function hello() {
//         console.log(msg)
//     }

//     hello();
// })();

// JS this keyword and Constructor Function

// function Person(){
//     this.name = "naved",
//     this.clas = "bca",
//     this.roll = 101
//     // console.log(this)
// }

// // console.log(this)

// let data = new Person
// console.log(data)

// function Person(name, clas, roll){
//     this.name = name,
//     this.clas = clas,
//     this.roll = roll

// }

// let data = new Person('naved','bca',101)
// let data2 = new Person('rehan','mca',104)
// console.log(data,data2)
// // console.log()


// ES6 Class constructor Example

// class Person {
//     constructor(name, clas, roll) {
//         this.name = name,
//             this.clas = clas,
//             this.roll = roll

//     }
// }

// let data = new Person('naved', 'bca', 101)
// let data2 = new Person('rehan', 'mca', 104)
// console.log(data, data2)

