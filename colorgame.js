var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplayed = document.querySelector("#colorDisplayed");
var messageDisplayed = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
    hardbtn.classList.remove("selected");
    easybtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    console.log(colors);
    pickedColor = pickColor();
    console.log(pickedColor);
    colorDisplayed.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    console.log(colors);
    pickedColor = pickColor();
    console.log(pickedColor);
    colorDisplayed.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    colors = generateRandomColors(numSquares);
    console.log(colors);
    pickedColor = pickColor();
    console.log(pickedColor);
    colorDisplayed.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]; 
    }
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];  
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor){
            messageDisplayed.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplayed.textContent = "Try Again";
        }
    }); 
}

function changeColors(color){
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}