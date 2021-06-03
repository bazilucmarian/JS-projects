let secretNumber = Math.trunc(Math.random() * 20) + 1; //generate a number between 1 and 20
let initialScore = 20;
let highscore = 0;

const message = document.querySelector(".message");
const secretNumberElement = document.querySelector(".number");
const scoreElement = document.querySelector(".label-score");
const inputField = document.querySelector(".guess");
const buttonCheck = document.querySelector(".check");
const body = document.querySelector("body");
const againButton = document.querySelector(".again");

const displayMessage = (messageText) => {
  message.textContent = messageText;
};

buttonCheck.addEventListener("click", () => {
  if (!inputField.value) {
    displayMessage("Please write an number !⛔🔢 ⛔");
  } else if (+inputField.value === secretNumber) {
    displayMessage("Correct number !! ✅✅");
    body.style.backgroundColor = "#60b347";
    if (initialScore > highscore) {
      highscore = initialScore;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (+inputField.value !== secretNumber) {
    if (initialScore > 1) {
      displayMessage(
        inputField.value > secretNumber ? "Too High ! 😢" : "Too Low! 😢"
      );
      initialScore--;
      scoreElement.textContent = `💯 Score: ${initialScore}`;
    } else {
      displayMessage("You lost the game !!! 😭");
    }
  }
});

againButton.addEventListener("click", () => {
  initialScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  message.textContent = "You restart the game 🎰";
  inputField.value = "";
  scoreElement.textContent = `💯 Score: ${initialScore}`;
  body.style.backgroundColor = "#222";
});
