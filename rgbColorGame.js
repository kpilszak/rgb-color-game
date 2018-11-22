var colors = randomizeColors(6);

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

function randomizeColors(mode) {
    var rgbColors = [];
    for (var i = 0; i < mode; i++) {
        rgbColors.push(randomizeRGB());
    }
    return rgbColors;
}

function randomizeRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}