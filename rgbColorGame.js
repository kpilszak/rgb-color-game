var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var siteTitle = document.getElementById("siteTitle");
var message = document.getElementById("message");
var newGameButton = document.getElementById("newGame");
var modeButton = document.querySelectorAll("#easy, #hard");

init();

function init(){
    setMode();
    drawSquares();
    addIfWinChecking();
    reset();
}

function setMode(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("modeOn");
            modeButton[1].classList.remove("modeOn");
            this.classList.add("modeOn");
            this.textContent == "HARD" ? numOfSquares = 6 : numOfSquares = 3;
            reset();
        });
    }
}

function drawSquares(){
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

newGameButton.addEventListener("click", function(){
    colors = randomizeColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    siteTitle.style.backgroundColor = "rgb(139, 176, 178)";
    message.textContent = "";
});

easyButton.addEventListener("click", function(){
    easyButton.classList.add("modeOn");
    hardButton.classList.remove("modeOn");
    numOfSquares = 3;
    colors = randomizeColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    siteTitle.style.backgroundColor = "rgb(139, 176, 178)";
    message.textContent = "";
});

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("modeOn");
    hardButton.classList.add("modeOn");
    numOfSquares = 6;
    colors = randomizeColors(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    siteTitle.style.backgroundColor = "rgb(139, 176, 178)";
    message.textContent = "";
});

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
