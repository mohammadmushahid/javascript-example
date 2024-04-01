//  const arr = [1,2,3,4,5]
// //  console.log(arr)

//  const result = arr.map(test)
//  console.log(result);

//  function test(x){
//     console.log(x)
//     return x * 10;
//  }


// function Bird(name) {
//   this.name = name;  //own property
// }

// Bird.prototype.numLegs = 2; // prototype property

// let duck = new Bird("Donald");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     ownProps.push(property);
//   } else {
//     prototypeProps.push(property);
//   }
// }

// console.log(ownProps);
// console.log(prototypeProps)

// function Bird() {
//   let weight = 15;
//   this.getWeight = function(){
//     return weight;
//   }


// }
// console.log(Bird())

// (IIFE)

// (function () {
//   console.log("My Name is Naved And i am a Software Developer !");
//   console.log(100 + 100)
// })();




// const arr = [
//     {fname: "Naved" , lname: "Ansari"},
//     {fname: "Rehan" , lname: "Ansari"},
//     {fname: "Zeeshan" , lname: "Ansari"}

// ]
// console.log(arr)

// const result = arr.map(test)
// console.log(result);

// function test(x){
//    console.log(x)
//    return x.fname + " " + x.lname
// }