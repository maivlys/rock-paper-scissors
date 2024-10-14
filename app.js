const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resetBtn = document.getElementById("reset-btn");

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));
resetBtn.addEventListener("click", resetgame);

let userChoice = document.getElementById("user-choice");
let comChoice = document.getElementById("computer-choice");
let comChoiceResult = document.getElementById("computer-choice-result");

let userScore = document.getElementById("user-score");
let comScore = document.getElementById("computer-score");

let userScoreCnt = 0;
let comScoreCnt = 0;

function computerChoice() {
  const randomNo = Math.floor(Math.random() * 3);
  let computerWeapon = undefined;
  switch (randomNo) {
    case 0:
      computerWeapon = "rock";
      break;
    case 1:
      computerWeapon = "paper";
      break;
    case 2:
      computerWeapon = "scissors";
      break;
  }
  return computerWeapon;
}

function playGame(userInput) {
  const userWeapon = userInput;
  const computerWeapon = computerChoice();
  let result;

  document.getElementById("loader").style.visibility = "visible";

  comChoice.style.visibility = "hidden";
  comChoiceResult.style.visibility = "hidden";
  userChoice.style.visibility = "hidden";
  document.getElementById("vs").style.visibility = "hidden";

  if (userWeapon === "rock") {
    userChoice.innerHTML = "rock";
    switch (computerWeapon) {
      case "rock":
        comChoice.innerHTML = "🪨";
        userScoreCnt++;
        comScoreCnt++;
        break;
      case "paper":
        comChoice.innerHTML = "🧻";
        comScoreCnt++;
        break;
      case "scissors":
        comChoice.innerHTML = "✂️";
        userScoreCnt++;
        break;
    }
  } else if (userWeapon === "paper") {
    userChoice.innerHTML = "paper";
    switch (computerWeapon) {
      case "rock":
        comChoice.innerHTML = "🪨";
        userScoreCnt++;
        break;
      case "paper":
        comChoice.innerHTML = "🧻";
        userScoreCnt++;
        comScoreCnt++;
        break;
      case "scissors":
        comChoice.innerHTML = "✂️";
        comScoreCnt++;
        break;
    }
  } else if (userWeapon === "scissors") {
    userChoice.innerHTML = "scissors";
    switch (computerWeapon) {
      case "rock":
        comChoice.innerHTML = "🪨";
        comScoreCnt++;
        break;
      case "paper":
        comChoice.innerHTML = "🧻";
        userScoreCnt++;
        break;
      case "scissors":
        comChoice.innerHTML = "✂️";
        userScoreCnt++;
        comScoreCnt++;
        break;
    }
  }

  setTimeout(() => {
    document.getElementById("loader").style.visibility = "hidden";
    comChoice.style.visibility = "visible";
  }, 1500);

  setTimeout(() => {
    userChoice.style.color = "white";
    switch (computerWeapon) {
      case "rock":
        comChoiceResult.innerHTML = "rock";
        break;
      case "paper":
        comChoiceResult.innerHTML = "paper";
        break;
      case "scissors":
        comChoiceResult.innerHTML = "scissors";
        break;
    }

    comChoiceResult.style.visibility = "visible";
    userChoice.style.visibility = "visible";
    document.getElementById("vs").style.visibility = "visible";

    userScore.innerHTML = userScoreCnt;
    comScore.innerHTML = comScoreCnt;
  }, 2200);
}

function resetgame() {
  userScore.innerHTML = "0";
  comScore.innerHTML = "0";
  comChoice.style.visibility = "hidden";
  comChoiceResult.style.visibility = "hidden";
  userChoice.style.visibility = "hidden";
  document.getElementById("vs").style.visibility = "hidden";
}
