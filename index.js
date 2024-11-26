let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genratecompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random(options) * 3);
  return options[randomIdx];
};
const drawGame = () => {
  console.log("game was draw.");
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#0E0F18";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("You win!");
    msg.innerText = `You win!, Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("You lose");
    msg.innerText = `You lose, Comp ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //Generate computer Choice// modular work means work with fucntions
  const compChoice = genratecompChoice();
  console.log("computer choice = ", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //comp choice will be scissor or paper//
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp choice will be scissor or rock//
      userWin = compChoice === "scissor" ? false : true;
    } else {
      //comp choice will be paper or rock//
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  //   console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice is clicked", userChoice);
    playGame(userChoice);
  });
});