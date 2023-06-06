var a = 5;
console.log(a);
var x = "abc";

for(var i = 0; i < 10; i++) {
    console.log(i);
}

if(x === "abc") {
    console.log("cos dziala !!!");
}

function funkcja() {
    var node = document.getElementById("name-field");
    var imie = node.value;
    alert(imie);
}

function funkcja2() {
    console.log("Dziala po najechaniu !!!");
}

function funkcja3() {
    var div = document.getElementById("super-div");
    div.innerHTML = "<h2>Jakis inny naglowek !!!</h2>";
}