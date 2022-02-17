// document.firstElementChild.lastElementChild.querySelector("h1").innerText = "hi";
//document.querySelector(".img1").getAttribute("src");
//document.querySelector(".img1").setAttribute("src", "images/dice" + name + ".png");

var fileName1 = Math.floor((Math.random()*6)+1);
document.querySelector(".img1").outerHTML = "<img class='img1' src='images/dice" + fileName1 + ".png'>"
var fileName2 = Math.floor((Math.random()*6)+1);
document.querySelector(".img2").setAttribute("src", "images/dice" + fileName2 + ".png");
if (fileName1 > fileName2) {
  document.querySelector("h1").innerText = "Player1 Wins!";
} else if (fileName1 < fileName2) {
  document.querySelector("h1").innerText = "Player2 Wins!";
} else {
  document.querySelector("h1").innerText = "Draw 🙅🏻‍♀️";
}
