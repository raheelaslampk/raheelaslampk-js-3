function simpleAlert(){
    document.getElementById("display").innerHTML= "Hello, How are you.";
    alert("Hello, How are you.")
}
function alertName(){
    var name= prompt("Please entre the name");
    document.getElementById("display").innerHTML=name;
}