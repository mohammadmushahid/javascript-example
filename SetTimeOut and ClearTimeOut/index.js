// var id = setTimeout(Anim, 5000);

// function Anim(){
//     console.log("hello")
// }


// var id = setTimeout(Anim, 3000);

// function Anim(){
//     var target = document.getElementById("test");
//     target.style.width = '500px';
// }


var id = setTimeout(function Anim(){
    var target = document.getElementById("test");
    target.style.width = '500px';
}, 2000);

function stopAnimation(){
    clearTimeout(id);
}