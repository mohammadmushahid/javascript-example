// const sayName = (name,value) => {
//     return name + value
// };
// console.log(sayName("Naved", "Hello"))


// function sum(...args){  ==> Rest parameter
//     let result = 0;

//     for(let i = 0; i<args.length; i++){
//         result += args[i]
//     }
//     console.log(result)
// }

// sum(1,2,3,4,5,6,7,8,9);


// const arr1 = [1,2,3]; // Speread Operator
// const arr2 = [4,5,6,];
// // console.log(arr2)
// const arr3 = [...arr1,...arr2]
// console.log(arr3)


// const arr = "Naved" // ==> For of Loop

// for(let x of arr){
//     console.log(x)
// }

// Template literals ==>
// let str = `mohd
// naved`
// console.log(str)

// let str = 'Naved';
// let me = 'Ansari'
// console.log(`my Name is ${str}. and i am ${me}`)

// let num = 10;
// console.log(`${num + 10}`)

// Array Destructuring
// let book = ["advanve js", 150, 200];
// let arr = book[0];
// console.log(arr)

// let arr = [1,2, ,3,4];
// const [f,s,t=120,fr,oo] = arr
// console.log(t)

// const arr = ['naved', 'rehan', 'ayan',[100,200]]
// let [one,two,three,[first,second,third="300"]] = arr;
// console.log(first)

// function hello(){
//     return ["Awwaltech", 200]
// }

// let [name,price] = hello();
// console.log(price)

// Object Destucturing
// const stu = {
//     name: "Naved",
//     role: "BCA",
//     mobile: 90909009,
//     details: {
//         add: 'Noida',
//         id: 01
//     }
// }

// const {name:title, role, mobile=9090, details:{add:ad,id}} = stu;
// console.log(ad)


// (function(){
//     console.log("Hello")
// })()

// const z = 123;
// function outer(){
//     let data = "Naved"
//     console.log('Outer Function', data,z)
//     function inner(){
//         const a = 'Awwaltech'
//         console.log('inner Function', data, a , z)
//     }
//     inner();
// }

// outer();
// console.log(z)


// const stu = {
//     name: 'naved',
//     arr: [1,2,3,4,5],
//     obj: {
//         data: "Awwaltech"
//     },
//     greet: function(){console.log('Function')}
// }

// for(let data in stu){
//     console.log(stu[data])
// }

// let data = parseInt(prompt("Enter a Number Like 1,2,3"))
// // let result = parseInt(data)


// switch (data) {
//     case 1: {
//         console.log('oppo')
//         break;
//     }
//     case 2: {
//         console.log('vivo')
//         break;
//     }
//     case 3: {
//         console.log('mi')
//         break;
//     }

//     default:{
//         console.log("Enter valid no.")
//     }

// }