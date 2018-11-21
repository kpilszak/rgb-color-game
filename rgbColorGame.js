var colors = [
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 255)",
    "rgb(255, 255, 255)"
];

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var message = document.getElementById("message");

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            message.textContent = "You are right!";
            adjustColors(clickedColor);
        } else {
            this.style.backgroundColor = "rgb(237, 234, 232)";
            message.textContent = "Try again";
        }
    });
}

function adjustColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    var siteTitle = document.getElementById("siteTitle");
    siteTitle.style.backgroundColor = color;
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}