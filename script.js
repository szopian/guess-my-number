'use strict';
let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

function randomNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector(`.again`).addEventListener(`click`, function () {
  secretNumber = randomNumber();
  score = 20;

  document.querySelector(`.score`).textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector(`.number`).style.width = '15ren';
  document.querySelector('body').style.backgroundColor = `#222`;
  displayMessage(`Start guessing...`);
});

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage(`No number!`);

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage(`Correct Number!`);
    document.querySelector('body').style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = '30ren';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // when guess too high || too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Too high!` : `Too low!`);
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      displayMessage(`You lost!`);
      document.querySelector(`.score`).textContent = 0;
    }
  }
});
