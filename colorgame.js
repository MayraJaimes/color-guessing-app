var colors = [];

var squares = document.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];  
}