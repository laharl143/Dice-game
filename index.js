// 1st dice //

// Math floor = give whole number ;   Math random = generates random number ;  * 6 = limits the random number to 0-5 ; + 1 = add plus 1 to make RNG 1-6
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6/png

//Using DOM manipulation, document.querySelectorAll("img") is used to point out all the img tag ; [0] is used to point the first img tag
var image1 = document.querySelectorAll("img")[0];
//Using DOM manipulation, .setAttribute is used to change the inside of "src" to the variable randomImageSource
image1.setAttribute("src", randomImageSource);


// 2nd dice //

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

//Using DOM manipulation, document.querySelectorAll("img") is used to point out all the img tag ; [1] is used to point the 2nd img tag  ; .setAttribute is used to change the inside of "src" to the variable randomImageSource2
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// if statement //

//Using DOM manipulation, document.querySelector("h1") is used to point out the specific tag ; .innerHTML is used to replace the overall html line inside the specific tag selected by the .querySelector
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}

else {
    document.querySelector("h1").innerHTML = "Draw!";
}
