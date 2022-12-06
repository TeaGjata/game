alert("Welcome to our game!")
let playerSelection = "";
let computerSelection = "";

game(5);


function userPlay() {
    let playerChoice = prompt("To play this game you have to select a choice: rock, paper or scissors?", "")?.trim().toLowerCase();

    if (playerChoice == null) {
        alert(
            "Please, add one of three choices (Rock, Paper or Scissors)"
        );
    }
    if (playerChoice == "rock") {
        return playerChoice;
    }

    if (playerChoice == "paper") {
        return playerChoice;
    }

    if (playerChoice == "scissors") {
        return playerChoice;
    } else {
        alert("Please add one of three choices (Rock, Paper or Scissors)");
    }

    return userPlay();
}

function playRound(computerSelection, playerSelection) {

    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        console.log("you won this round");
        return { player: 1, computer: 0 };
    }
    if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        console.log("you lost this round");
        return { player: 0, computer: 1 };
    }
    if (
        (playerSelection == "rock" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "scissors")
    ) {
        console.log("Its a draw");
        return playRound(computerPlay(), userPlay());
    }
}

function game(fiveRounds) {
    let gameScore = { player: 0, computer: 0 };

    let userScore = gameScore.player;
    let computerScore = gameScore.computer;

    for (let i = 0; i < fiveRounds; i += 1) {

        const roundScore = playRound(computerPlay(), userPlay());

        userScore = userScore + roundScore.player;
        computerScore = computerScore + roundScore.computer;

    }
    if (userScore > computerScore) {
        console.log("Congratulations! You are the winner!");
    }
    if (userScore < computerScore) {
        console.log("Sorry! You lost!");
    }

    if (userScore == computerScore) {
        console.log("You both have the same point!");
    }
}

function computerPlay() {
    let computer = Math.random() * 151;
    if (computer <= 100) {
        return "rock";
    } else if (computer <= 50) {
        return "paper";
    } else {
        return "scissors";
    }
}
