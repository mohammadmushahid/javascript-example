// AJAX 
// Asyncronous JavaScript And Xml

function loadData(){
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(this.responseText);
    }
  }

  xhttp.open('GET', "Content/readme.txt",true);
  xhttp.send();
}