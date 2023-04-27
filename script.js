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

// ask player for choice
function getPlayerSelection() {
     return getPlayerSelection = prompt("Rock, Paper, or Scissors?");
     
}

//variables
const playerSelection = getPlayerSelection();
const computerSelection = getComputerSelection();

// compare playerSelection to getComputerSelection
function playRound(playerSelection, computerSelection) {
// if getgetPlayerChoice == getgetComputerSelection return "Tie!"
    if (playerSelection === computerSelection) {
        return playRound = "It's a tie!";
// if getgetPlayerChoice == Rock and getgetComputerSelection == Paper return "Computer wins!"
}   else if ((playerSelection = "Rock") && (computerSelection = "Paper")) {
        return playRound = "Computer wins!";
// if getgetPlayerChoice == Paper and getgetComputerSelection == Rock return "You win!"
}   else if ((playerSelection = "Paper") && (computerSelection = "Rock")) {
        return playRound = "You win!";
// if getgetPlayerChoice == Paper and getgetComputerSelection == Scissors return "Computer wins!"
}   else if ((playerSelection = "Paper") && (computerSelection = "Scissors")) {
        return playRound = "Computer wins!";
// if getgetPlayerChoice == Scissors and getgetComputerSelection == Paper return "You win!"
}   else if ((playerSelection = "Scissors") && (computerSelection = "Paper")) {
        return playRound = "You win!";
// if getgetPlayerChoice == Rock and getgetComputerSelection == Scissors return "You win!"
}   else if ((playerSelection = "Rock") && (computerSelection = "Scissors")) {
        return playRound = "You win!";
// if getgetPlayerChoice == Scissors and getgetComputerSelection == Rock return "Computer wins!"
}   else if ((playerSelection = "Scissors") && (computerSelection = "Rock")) {
        return playRound = "Computer wins!";
}   
}

//console.log(computerSelection);
//console.log(playerSelection);
//console.log(playRound());

function game () {
    playRound(playerSelection, computerSelection);
    console.log("You played " + playerSelection + ". " + "Computer played " + computerSelection + ". " + playRound);
}

game();