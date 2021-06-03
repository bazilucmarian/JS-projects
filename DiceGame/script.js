const firstUserScore = document.querySelector("#score--0");
const secondUserScore = document.querySelector("#score--1");
const firstUserCurrentScore = document.querySelector("#current--0");
const secondUserCurrentScore = document.querySelector("#current--1");
const playerOneElement = document.querySelector(".player--0");
const playerTwoElement = document.querySelector(".player--1");
const diceEl = document.querySelector(".dice");
const newGameBtn = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// initial state
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  firstUserScore.textContent = 0;
  secondUserScore.textContent = 0;
  firstUserCurrentScore.textContent = 0;
  secondUserCurrentScore.textContent = 0;

  diceEl.classList.add("hidden");
  playerOneElement.classList.remove("player--winner");
  playerTwoElement.classList.remove("player--winner");
  playerOneElement.classList.add("player--active");
  playerTwoElement.classList.remove("player--active");
};
init();

// rolling dice functionality

btnRoll.addEventListener("click", () => {
  if (playing) {
    // generate number between 1 and 6
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice based on nr generate
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      // add dice to score of player 1 until dice's value is one less
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // move to player 2

      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    // add current score to active player score list
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    // check if player score is >=100
    if (scores[activePlayer] >= 100) {
      // finsish the game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch to second player
      switchPlayer();
    }
  }

  // finish the game if
});

newGameBtn.addEventListener("click", init);

function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerOneElement.classList.toggle("player--active");
  playerTwoElement.classList.toggle("player--active");
}
