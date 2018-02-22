var colors = [
    "pink", "blue", "red", "orange", "black", "white"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.querySelector("#colorDisplay");

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];  
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;

        if (clickedColor === pickedColor){
            //correct
        }
        else {
            //incorrect
        }
    }) 

}

colorDisplay.textContent = pickedColor;