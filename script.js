//set scores
let playerScore = 0;
let computerScore = 0;

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

//play single round
function playRound(playerSelection, computerSelection) {
        // if getPlayerChoice == getComputerSelection return "Tie!"
            if (playerSelection === "rock" && computerSelection === "rock") {
                return "You played the same as the computer. It's a tie!";
        }   else if (playerSelection === "paper" && computerSelection === "paper") {
                return "You played the same as the computer. It's a tie!";
        }   else if (playerSelection === "paper" && computerSelection === "paper") {
                return "You played the same as the computer. It's a tie!";
        // if getPlayerChoice == rock and getComputerSelection == paper return "Computer wins!"
        }   else if ((playerSelection === "rock") && (computerSelection === "paper")) {
                computerScore++;
                return `You played ${playerSelection} and the computer played ${computerSelection}. Computer wins!`;    
        // if getPlayerChoice == paper and getComputerSelection == rock return "You win!"
        }   else if ((playerSelection === "paper") && (computerSelection === "rock")) {
                playerScore++;
                return `You played ${playerSelection} and the computer played ${computerSelection}. You win!`;        
        // if getPlayerChoice == paper and getComputerSelection == scissors return "Computer wins!"
        }   else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
                computerScore++;
                return `You played ${playerSelection} and the computer played ${computerSelection}. Computer wins!`;        
        // if getPlayerChoice == scissors and getComputerSelection == paper return "You win!"
        }   else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
                playerScore++;
                return `You played ${playerSelection} and the computer played ${computerSelection}. You win!`;     
        // if getPlayerChoice == rock and getComputerSelection == scissors return "You win!"
        }   else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
                playerScore++;
                return `You played ${playerSelection} and the computer played ${computerSelection}. You win!`;    
        // if getPlayerChoice == scissors and getComputerSelection == rock return "Computer wins!"
        }   else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
                computerScore++;
                return `You played ${playerSelection} and the computer played ${computerSelection}. Computer wins!`;      
        }
}

// play game 5 times and show winner
function game() {
        for (let i = 0; i < 5; i++) {
                const playerSelection = prompt("Chose what to play.", "Rock, Paper, or Scissors?").toLowerCase();
                const computerSelection = getComputerChoice();
                playRound(playerSelection, computerSelection);
        }

        if (playerScore > computerScore) {
                return "You won!";
        } else if (computerScore > playerScore) {
                return "You lost!";
        } else {
                return "It's a tie!"
        }
}

console.log(game() + ` Player score = ${playerScore}. Computer score = ${computerScore}.`)
