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
let getPlayerChoice = prompt("Rock, Paper, or Scissors?");
// compare getgetPlayerChoice to getgetComputerSelection
function playRound() {
// if getgetPlayerChoice == getgetComputerSelection return "Tie!"
    if (getPlayerChoice === getComputerSelection) {
        return playRound = "It's a tie!";
// if getgetPlayerChoice == Rock and getgetComputerSelection == Paper return "Computer wins!"
}   else if ((getPlayerChoice = "Rock") && (getComputerSelection = "Paper")) {
        return playRound = "Computer wins!";
// if getgetPlayerChoice == Paper and getgetComputerSelection == Rock return "You win!"
}   else if ((getPlayerChoice = "Paper") && (getComputerSelection = "Rock")) {
return playRound = "You win!";
// if getgetPlayerChoice == Paper and getgetComputerSelection == Scissors return "Computer wins!"
}   else if ((getPlayerChoice = "Paper") && (getComputerSelection = "Scissors")) {
    return playRound = "Computer wins!";
// if getgetPlayerChoice == Scissors and getgetComputerSelection == Paper return "You win!"
}   else if ((getPlayerChoice = "Scissors") && (getComputerSelection = "Paper")) {
    return playRound = "You win!";
// if getgetPlayerChoice == Rock and getgetComputerSelection == Scissors return "You win!"
}   else if ((getPlayerChoice = "Rock") && (getComputerSelection = "Scissors")) {
    return playRound = "You win!";
// if getgetPlayerChoice == Scissors and getgetComputerSelection == Rock return "Computer wins!"
}   else if ((getPlayerChoice = "Scissors") && (getComputerSelection = "Rock")) {
    return playRound = "Computer wins!";
}
}
// Display outcome

//console.log("computer: " + getComputerSelection())
//console.log("player: " + getPlayerChoice)
//console.log(playRound())

const playerSelection = getPlayerChoice;
const computerSelection = getComputerSelection();
//run the getComputerSelection vs getPlayerChoice five time in a row and show the results each time
function game() {
    return game = playRound(playerSelection, computerSelection)
}
console.log("computer: " + computerSelection)
console.log("player: " + playerSelection)
console.log(game())



