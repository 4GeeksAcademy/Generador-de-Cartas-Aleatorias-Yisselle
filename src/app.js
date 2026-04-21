import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let suits = ["heart", "diamond", "spade", "club"];
  let suitSymbols = {
    heart: "♥",
    diamond: "♦",
    spade: "♠",
    club: "♣",
  };


  let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

  let randomSuit = suits[Math.floor(Math.random() * suits.length)];
  let randomValue = values[Math.floor(Math.random() * values.length)];

  let card = document.createElement("div");
  card.classList.add("card");

  if (randomSuit === "heart" || randomSuit === "diamond") {
    card.style.color = "red";
  } else {
    card.style.color = "black";
  }

  card.innerHTML = `
<div class="top">${suitSymbols[randomSuit]}</div>
<div class="number">${randomValue}</div>
<div class="bottom">${suitSymbols[randomSuit]}</div>
`;

  document.querySelector(".container-fluid").appendChild(card);
};