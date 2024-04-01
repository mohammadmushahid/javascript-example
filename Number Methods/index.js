// Parse Int()

// var a = "10.00";
// var num = parseInt(a)
// console.log(num)


// var a = "10 Here I am 90";
// var num = parseInt(a)
// console.log(num)

// Parse Float()

// var a = "10.99";
// console.log(a)
// console.log(typeof a)
// var num = parseFloat(a)
// console.log(typeof num)
// console.log(num)

// var a = "10.9 7 years";
// var num = parseFloat(a)
// console.log(num)

// is Finite()
// var a = 'hello';
// var num = isFinite(a)
// console.log(num)


// is Integer()
// var a = 1098781;
// var num = Number.isInteger(a)
// console.log(num)


// to Fixed()
// var a = 1.56789;
// var num = a.toFixed(3)
// console.log(num)

// to Precision()
// var a = 1.56789;
// var num = a.toPrecision(10)
// console.log(num)


// Math Methods

// var a = Math.ceil(10.7678) // upper Value
// console.log(a)

// var a = Math.floor(4.7678) // down value
// console.log(a)

// var a = Math.round(8.5989898) // return 0.5 upper value
// console.log(a)

// var a = Math.trunc(88.5989898) // return integer value
// console.log(a)

// var a = Math.max(10,20,30,40,50,50.50) // return highest value
// console.log(a)

// var a = Math.min(0.1,10,20,30,40,50) // return lowest value
// console.log(a)

// var a= Math.min(-1,-10);
// console.log(a)

// var a= Math.max(-1,-10);
// console.log(a)

// var a= Math.sqrt(49);
// console.log(a)
// var a= Math.cbrt(8);
// console.log(a)
// var a= Math.pow(4,2);
// console.log(a)
// var a= Math.random();
// console.log(a)
// var a= Math.floor(Math.random() * 10000);
// console.log(a)
// var a= Math.abs(-90.90);
// console.log(a)\

// var a= Math.PI;
// console.log(a)


function getRandom(min, max){
    let x = Math.floor(Math.random() * (max-min) + min)
    return x
}

console.log(getRandom(1,7))