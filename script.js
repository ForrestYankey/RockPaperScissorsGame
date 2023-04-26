// computer picks a number between 1-3
function computerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
// if 1, return "Rock"
    if (num == 1) {
       return computerChoice = "Rock";
// if else 2, return "Paper"
   }   else if (num == 2) {   
            return computerChoice = "Paper";
// else, return "Scissors"
   } else {   
            return computerChoice = "Scissors";
   }
}

// ask player for choice
let playerChoice = prompt("Rock, Paper, or Scissors?");
// compare getPlayerChoice to getComputerChoice
function gameResults() {
// if getPlayerChoice == getComputerChoice return "Tie!"
    if (playerChoice === computerChoice) {
        return gameResults = "It's a tie!";
// if getPlayerChoice == Rock and getComputerChoice == Paper return "Computer wins!"
}   else if ((playerChoice = "Rock") && (computerChoice = "Paper")) {
        return gameResults = "Computer wins!";
// if getPlayerChoice == Paper and getComputerChoice == Rock return "You win!"
}   else if ((playerChoice = "Paper") && (computerChoice = "Rock")) {
return gameResults = "You win!";
// if getPlayerChoice == Paper and getComputerChoice == Scissors return "Computer wins!"
}   else if ((playerChoice = "Paper") && (computerChoice = "Scissors")) {
    return gameResults = "Computer wins!";
// if getPlayerChoice == Scissors and getComputerChoice == Paper return "You win!"
}   else if ((playerChoice = "Scissors") && (computerChoice = "Paper")) {
    return gameResults = "You win!";
// if getPlayerChoice == Rock and getComputerChoice == Scissors return "You win!"
}   else if ((playerChoice = "Rock") && (computerChoice = "Scissors")) {
    return gameResults = "You win!";
// if getPlayerChoice == Scissors and getComputerChoice == Rock return "Computer wins!"
}   else if ((playerChoice = "Scissors") && (computerChoice = "Rock")) {
    return gameResults = "Computer wins!";
}
}
// Display outcome
console.log(computerChoice() + ":computer")
console.log(playerChoice + ":player")
console.log(gameResults())
