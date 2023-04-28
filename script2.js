// ask computer for choice
// computer picks a number between 1-3
function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
// if 1, return "rock"
    if (num == 1) {
       return "rock";
// if else 2, return "paper"
   }   else if (num == 2) {   
            return "paper";
// else, return "scissors"
   } else {   
            return "scissors";
   }
}

// get player choice and set to lower case
function getPlayerChoice(playerSelection) {
        playerSelection = prompt("rock, paper, or scissors?").toLowerCase();
}
console.log(playerSelection);
let computerSelection = getComputerChoice();
// play single round
function playRound(playerSelection, computerSelection) {
        // if getPlayerChoice == getComputerSelection return "Tie!"
            if (playerSelection === computerSelection) {
                return playRound = "It's a tie!";
        // if getPlayerChoice == rock and getComputerSelection == paper return "Computer wins!"
        }   else if ((playerSelection = "rock") && (computerSelection = "paper")) {
                return playRound = "Computer wins!";
        // if getPlayerChoice == paper and getComputerSelection == rock return "You win!"
        }   else if ((playerSelection = "paper") && (computerSelection = "rock")) {
                return playRound = "You win!";
        // if getPlayerChoice == paper and getComputerSelection == scissors return "Computer wins!"
        }   else if ((playerSelection = "paper") && (computerSelection = "scissors")) {
                return playRound = "Computer wins!";
        // if getPlayerChoice == scissors and getComputerSelection == paper return "You win!"
        }   else if ((playerSelection = "scissors") && (computerSelection = "paper")) {
                return playRound = "You win!";
        // if getPlayerChoice == rock and getComputerSelection == scissors return "You win!"
        }   else if ((playerSelection = "rock") && (computerSelection = "scissors")) {
                return playRound = "You win!";
        // if getPlayerChoice == scissors and getComputerSelection == rock return "Computer wins!"
        }   else if ((playerSelection = "scissors") && (computerSelection = "rock")) {
                return playRound = "Computer wins!";
        }   
        }
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound());


// get player choice
// get computer choice







let playerScore = 0;
let computerScore = 0;

function game() {
        playRound();
        if (score === "Computer wins") {
                computerScore++;
        } else if  (playRound === "You win") {
                playerScore++;
        }
}

game();
console.log(playerScore);
console.log(computerScore);
console.log(playRound())