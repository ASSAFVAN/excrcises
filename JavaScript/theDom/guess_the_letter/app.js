const lettersAtoZ = "abcdefghijklmnopqrstuvwxyz";
let guessedArr = [];
let isOver = false;
let myLetter = "";

const whatLetter = document.querySelector(".questionMark");
const statusP1 = document.querySelector(".statusP1");
const statusP2 = document.querySelector(".statusP2");
const yesBtn = document.querySelector("button");
const guessedLettersGrid = document.querySelector(".lettersGuessed-container");

//picks random letter
const pickRandomLetter = (str) => {
  let randomLetter = "";
  randomLetter += str[Math.floor(Math.random() * str.length)];
  return randomLetter;
};

//checks for valid/invalid input
const isValid = (letter) => {
  if (lettersAtoZ.includes(letter)) {
    return true;
  }
  return false;
};

//gives a red error message in case of invalid letter
const redErr = () => {
  statusP1.innerText = "please enter a valid letter";
  statusP1.style.color = "red";
};
const redErr2 = (letter) => {
  statusP1.innerText = `${letter} has already been guessed`;
  statusP1.style.color = "red";
};
const redErr3 = () => {
  statusP1.innerText = `nope, wrong letter`;
  statusP1.style.color = "red";
};

//checks if the letter was guessed already
const guessedCheck = (letter) => {
  return guessedArr.some(function (arrVal) {
    return letter === arrVal;
  });
};

//adding the incorrect letter to the array of ungessed and to the grid
const addGuessedLetters = (letter) => {
  guessedArr.push(letter);
  const guessedLetter = document.createElement("div");
  guessedLetter.innerText = `${letter},`;
  guessedLetter.setAttribute("data-id", "key");
  guessedLettersGrid.appendChild(guessedLetter);
};

//in case of guessing the right letter
const correctGuess = (letter) => {
  whatLetter.innerText = `${letter}`;
  statusP1.innerText = "Right letter!";
  statusP1.style.color = "green";
  statusP2.innerText = "Would you like to play again?";
  guessedLettersGrid.style.visibility = "hidden";
  yesBtn.style.display = "block";
  isOver = true;
};

// function that resets the random letter and picks a new one, clears the object key values,

const resetGame = () => {
  guessedArr = [];
  whatLetter.innerText = "?";
  statusP1.innerText = "Guess a letter";
  statusP1.style.color = "black";
  statusP2.innerText = "Keys guessed";
  const resetKeys = document.querySelectorAll(`div[data-id="key"]`);
  resetKeys.forEach((element) => {
    guessedLettersGrid.removeChild(element);
  });
  guessedLettersGrid.style.visibility = "visible";
  yesBtn.style.display = "none";
  myLetter = pickRandomLetter(lettersAtoZ);
  isOver = false;
};

myLetter = pickRandomLetter(lettersAtoZ);

window.addEventListener("keydown", (e) => {
  //if game isn't over
  if (!isOver) {
    if (!isValid(e.key)) {
      redErr();
    }
    //if valid
    else {
      //if letter guessed alredy
      const key = e.key.toLowerCase();
      if (guessedCheck(key)) {
        redErr2(key);
      } else {
        const userGuessed = key === myLetter ? true : false;
        if (!userGuessed) {
          addGuessedLetters(key);
          redErr3();
        } else {
          correctGuess(key);
        }
      }
    }
  }
});

yesBtn.addEventListener("click", (e) => {
  resetGame();
});
