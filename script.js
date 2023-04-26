// computer picks a number between 1-3
function getComputerChoice() {
    num = Math.floor(Math.random() * 3) + 1;
    console.log(num);
// if 1, return "Rock"
    if (num == 1) {
       return getComputerChoice = "Rock";
// if else 2, return "Paper"
   }   else if (num == 2) {   
            return getComputerChoice = "Paper";
// else, return "Scissors"
   } else {   
            return getComputerChoice = "Scissors";
   }
}
   
console.log(getComputerChoice());