/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let topSuit = document.querySelector(".topsuit");
let number = document.querySelector(".number");
let bottomSuit = document.querySelector(".bottomsuit");

function chooseCard(arr1, arr2) {
  let card = [];
  card.push(arr1[Math.floor(Math.random() * arr1.length)]);
  card.push(arr2[Math.floor(Math.random() * arr2.length)]);
  return card;
}

function chooseColor(arr) {
  if (arr[0] === "&hearts;" || arr[0] === "&diams;") {
    topSuit.style.color = "red";
    number.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    topSuit.style.color = "black";
    number.style.color = "black";
    bottomSuit.style.color = "black";
  }
}

function assignSuit(arr) {
  if (arr[0] === "&hearts;") {
    topSuit.innerHTML = "♥";
    bottomSuit.innerHTML = "♥";
  } else if (arr[0] === "&diams;") {
    topSuit.innerHTML = "♦";
    bottomSuit.innerHTML = "♦";
  } else if (arr[0] === "&clubs;") {
    topSuit.innerHTML = "♣";
    bottomSuit.innerHTML = "♣";
  } else {
    topSuit.innerHTML = "♠";
    bottomSuit.innerHTML = "♠";
  }
}

function assignValue(arr) {
  number.innerHTML = arr[1];
}

function generateCard() {
  let card = chooseCard(suits, values);
  chooseColor(card);
  assignSuit(card);
  assignValue(card);
}

window.onload = function() {
  generateCard();
};

let button = document.querySelector(".button");
button.addEventListener("click", () => {
  generateCard();
});
