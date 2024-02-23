const buttons = document.querySelectorAll("button");
const resultEI = document.getElementById("result");
const playerscoreEI = document.getElementById("user-score");
const computerscoreEI = document.getElementById("computer-score");
let playerscore = 0;
let computerscore = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log("you clicked", button.id);
        const result = playRound(button.id, computerPlay());
        resultEI.textContent = result;
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerscore++;
        playerscoreEI.textContent = "User Score: " + playerscore;
        return "You win!";
    } else {
        computerscore++;
        computerscoreEI.textContent = "Computer Score: " + computerscore;
        return "You lose!";
    }
}