function SetData(){
      var value = document.getElementById("name").value;
      document.getElementById("target").innerHTML = "Hello" + " " + value;
      event.preventDefault();
}