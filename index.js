// Image1
var randomNumber1 = Math.floor(Math.random()*6)+1;
// document.getElementsByTagName(".img1")[0].setAttribute("images", "images[randomNumber1]");
var randomDiceImage = "dice"+randomNumber1+".png"; //dice1-dice6

var randomImageSource = "images/"+randomDiceImage; //images/dice1.png-images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



// Image2
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Conditionals
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!";//textContent
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}else{
  document.querySelector("h1").innerHTML="Draw!"
}
