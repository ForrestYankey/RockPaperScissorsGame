// ask computer for choice
// computer picks a number between 1-3
function getComputerSelection() {
    num = Math.floor(Math.random() * 3) + 1;
// if 1, return "Rock"
    if (num == 1) {
       return getComputerSelection = "Rock";
// if else 2, return "Paper"
   }   else if (num == 2) {   
            return getComputerSelection = "Paper";
// else, return "Scissors"
   } else {   
            return getComputerSelection = "Scissors";
   }
}
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    let computerSelection = getComputerSelection();

// compare playerSelection to getComputerSelection
function playRound() {
    //variables
    playerSelection = prompt("Rock, Paper, or Scissors?");
    computerSelection = getComputerSelection(); 
// if getPlayerChoice == getComputerSelection return "Tie!"
    if (playerSelection === computerSelection) {
        return playRound = "It's a tie!";
// if getPlayerChoice == Rock and getComputerSelection == Paper return "Computer wins!"
}   else if ((playerSelection = "Rock") && (computerSelection = "Paper")) {
        return playRound = "Computer wins!";
// if getPlayerChoice == Paper and getComputerSelection == Rock return "You win!"
}   else if ((playerSelection = "Paper") && (computerSelection = "Rock")) {
        return playRound = "You win!";
// if getPlayerChoice == Paper and getComputerSelection == Scissors return "Computer wins!"
}   else if ((playerSelection = "Paper") && (computerSelection = "Scissors")) {
        return playRound = "Computer wins!";
// if getPlayerChoice == Scissors and getComputerSelection == Paper return "You win!"
}   else if ((playerSelection = "Scissors") && (computerSelection = "Paper")) {
        return playRound = "You win!";
// if getPlayerChoice == Rock and getComputerSelection == Scissors return "You win!"
}   else if ((playerSelection = "Rock") && (computerSelection = "Scissors")) {
        return playRound = "You win!";
// if getPlayerChoice == Scissors and getComputerSelection == Rock return "Computer wins!"
}   else if ((playerSelection = "Scissors") && (computerSelection = "Rock")) {
        return playRound = "Computer wins!";
}
}

function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
}

game();

console.log(game())

