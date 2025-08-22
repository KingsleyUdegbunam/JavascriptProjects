let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScore();

function updateScore() {
  const scoreElement = document.querySelector(".js-score");
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const generateRandom = Math.random();
  let computerMove = "";

  if (generateRandom <= 1 / 3) {
    computerMove = "rock";
  } else if (generateRandom > 1 / 3 && generateRandom <= 2 / 3) {
    computerMove = "paper";
  } else if (generateRandom > 2 / 3) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  /* const tie = */

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lost";
    } else if (computerMove === "scissors") {
      result = "You won";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You won";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lost";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lost";
    } else if (computerMove === "paper") {
      result = "You won";
    } else if (computerMove === "scissors") {
      result = "Tie";
    }
  }

  if (result === "You won") {
    score.wins++;
  } else if (result === "You lost") {
    score.losses++;
  } else if (result === "Tie") {
    score.ties++;
  }

  // save score to localStorage for better saving
  localStorage.setItem("score", JSON.stringify(score));

  //manipulating the created p element in the body element to display gameplay
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(
    ".js-move-record"
  ).innerHTML = `You <img class="move-icon" src="/icons/${playerMove}.png" alt=""> <img class="move-icon" src="/icons/${computerMove}.png"> Computer`;
  updateScore();
}
