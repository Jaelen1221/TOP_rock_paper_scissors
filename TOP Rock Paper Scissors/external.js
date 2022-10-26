// Player input and formatting 
var userInput = prompt("Rock, Paper, or Scissors?");
var playerChoice = userInput.toLowerCase();
console.log(playerChoice);

// Mechanism for AI selection
function computerSelection() {
var botChoice = Math.random(); 

    if (botChoice < 0.34) {
        return "rock";
    } else if ( botChoice <= 0.67) {
        return "paper"; 
        } else {
        return "scissors";
        }
    }

let botChoice = computerSelection();
console.log(botChoice);

// Mechanism for playing game

function playRound(playerChoice, botChoice) {

    if (playerChoice === botChoice) {
        return "Tie";
    }

    if (playerChoice === "rock") {
        if (botChoice === "scissors") {
            return "Rock beats scissors"
        } else {
            return "Paper beats rock";
        }
    }

    if (playerChoice === "paper") {
        if (botChoice === "rock") {
            return "Paper beats rock"
        } else {
            return "Scissors beats paper";
        }
    }

    if (playerChoice === "scissors") {
        if (botChoice === "paper") {
            return "Scissors beats paper" 
        } else { 
            return "Rock beats scissors";
        }
    }
}


//
playRound();
console.log(playRound(playerChoice, botChoice));