let randomNumber = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let canPlay = true;
let numGuess = 1;
let guesses = [];

function playGame() {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (!canPlay) return;

    const guess = parseInt(userInput.value);
    if (isNaN(guess)) {
      alert('Please enter a valid number!');
      return;
    }

    validNumber(guess);
  });
}

function validNumber(guess) {
  if (guess < 1 || guess > 100) {
    alert('Please enter a number between 1 and 100.');
    return;
  }

  if (guesses.includes(guess)) {
    alert('You already guessed this number. Try a different one!');
    return;
  }

  if (numGuess === 10) {
    displayGuess(guess);
    displayMessage(`Game Over. The random number was ${randomNumber}.`);
    endGame();
  } else {
    guesses.push(guess);
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed it right!`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`The number is too low.`);
  } else if (guess > randomNumber) {
    displayMessage(`The number is too high.`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remain.innerHTML = `Remaining guesses: ${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  canPlay = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function () {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    numGuess = 1;
    guesses = []; // Reset guesses array
    guessSlot.innerHTML = '';
    remain.innerHTML = `Remaining guesses: ${11 - numGuess}`;
    lowOrHigh.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    canPlay = true;
  });
}

// Initialize the game
playGame();
