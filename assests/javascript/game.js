var wins = 0;
var losses = 0;
var guessLeft = 12;
var guessLetter = [];

var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// user guessing a letter and to lower case the user input
var userGuess;
document.onkeypress = function(event) {
  var userGuess = event.key.toLowerCase();

  console.log(userGuess);

  //computer guessing a letter
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);

  //check if user guess and computer guess are correct/incorrect

  // if user guess and computer guess are correct win will increase, guesses left will go back to original ,nothing in guessLetter array
  if (userGuess === computerGuess) {
    wins++;
    guessLetter = [];
  }
  // if user guess is not equal computer guess; guess left will decrease and user guess will be be added to guessLetter array
  if (userGuess != computerGuess) {
    guessLeft--;
    guessLetter.push(userGuess);
  }
  // if guesses left is zero then losses will go up, guesses left will go back to original and nothing in the guessLetter array
  if (guessLeft === 0) {
    losses++;
    guessLeft = 12;
    guessLetter = [];
  }

  //Inputting wins onto document
  var userInput = document.getElementById("wins");
  userInput.textContent = wins;
  //Inputting loss onto document
  var userInput = document.getElementById("losses");
  userInput.textContent = losses;
  //Inputting guesses left onto document;
  var userInput = document.getElementById("left");
  userInput.textContent = guessLeft;
  //Inputting letters guessed by user onto document;
  var userInput = document.getElementById("guess");
  userInput.textContent = guessLetter.join(" , ");
};
