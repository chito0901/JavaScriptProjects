
const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "It's a Tie!";
    } else {
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors") ? "You Win!" : "You lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You Win!" : "You lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You Win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "You Win!":
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}