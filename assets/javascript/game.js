var computerOption = ["a", "b", "c", "d", "e", "f", 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
var computerGuess = 0;
var userArr = [];

var totalWins = 0;
var totalLosses = 0;
var guessesLeft = 10;

function newLetter() {
  var index = Math.floor(Math.random() * computerOption.length);
  return computerOption[index];
}

function print() {
  var letterGuess = document.getElementById("userGuess");
  var wins = document.getElementById("win");
  var losses = document.getElementById("lose");
  var guesses = document.getElementById("guess");

  letterGuess.innerHTML = userArr;
  wins.innerHTML = totalWins;
  losses.innerHTML = totalLosses;
  guesses.innerHTML = guessesLeft;
}

var letter = newLetter();
console.log("newLetter result", letter);

document.onkeyup = function(event) {
  event = event.key.toLowerCase();
  // console.log(event);
  if (event === letter) {
    totalWins++;
    letter = newLetter();
    guessesLeft = 10;
    userArr = [];
    print();
  } else if (userArr.indexOf(event) === -1) {
    userArr.push(event);
    guessesLeft--;
    print();
  }
  if (guessesLeft === 0) {
    userArr = [];
    guessesLeft = 10;
    totalLosses++;
    letter = newLetter();
    print();
  }
}