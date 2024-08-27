var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc = "images/dice" + randomNumber1 + ".png";
var randomImage = document.querySelectorAll("img")[0];
randomImage.setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

var randomImage2 = document.querySelectorAll("img")[1];

randomImage2.setAttribute("src", randomImageSrc2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else{
    document.querySelector("h1").textContent = "Player 2 wins!";
}
