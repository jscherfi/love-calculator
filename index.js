var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;


var yourName = document.getElementById("yourName");


var crushName = document.getElementById("crushName");

var submit = document.getElementById("submit");

var input = localStorage.getItem("yourName")
var inputtwo = localStorage.getItem("crushName")

function returnText(){
    input = document.getElementById("yourName").value
    inputtwo = document.getElementById("crushName").value 
    localStorage.setItem("yourName", input) 
    localStorage.setItem("crushName", inputtwo)

    if (loveScore > 70) {
        alert("Hello " + input + " , your love score with " + inputtwo + " is: " + loveScore + "%! Your love is unbreakable!");
    } 
    
    if (loveScore > 30 && loveScore <= 70) {
        alert("Hello " + input + " , your love score with " + inputtwo + " is: " + loveScore + "%")
    }
    
    if (loveScore <= 30) {
        alert("Hello " + input + " , your love score with " + inputtwo + " is: " + loveScore + "%... Oh dear. No wedding bells.");
    }

}

    


