// function getData(){
//     let data = document.getElementById("name").value;
//     let data2 = document.getElementById("email").value;
//     let data3 = document.getElementById("password").value;
//   console.log({data,data2,data3})
// }

// function getData(){
//     const val1 = document.getElementById("chk_one");
//     const val2 = document.getElementById("chk_two");
//     const val3 = document.getElementById("chk_three");
//     if(val1.checked && val2.checked && val3.checked){
//         console.log(val1.value,val2.value,val3.value)
//     }
//     else if(val1.checked){
//         console.log(val1.value)
//     }else if(val2.checked){
//         console.log(val2.value)
//     }else if(val3.checked){
//         console.log(val3.value)
//     }else{
//         alert("please select a subject")
//     }
// }

function getData(){
   var data = document.getElementsByName("gender")
   var i;
   for(i = 0; i<=data.length; i++){
    if(data[i].checked){
        console.log(data[i].value)
        localStorage.setItem("naved", data[i].value)
    }
   }
}



// function getData(){
//     var data1 =  document.getElementById("name").value;
//     var data2 = document.getElementById("email").value;
//     console.log([data1, data2])
// }