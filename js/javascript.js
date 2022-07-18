let playerScore = 0;
let computerScore = 0;

/*Get computer choice*/
function getComputerChoice() {
    const playPossible = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    const computerChoice = playPossible[randomNumber];

    return computerChoice;
}

/*Get player choice*/
function getPlayerChoice() {
    let goodChoice = false; 
    let playerSelection

    while(!goodChoice) {

        playerSelection = prompt("Enter your choice (rock, paper, scissors): ");
        playerSelection = playerSelection.toLowerCase()

        if(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            goodChoice = true;
        }

        else {
            alert("This is not a good choice!")
        }
    }

    return playerSelection;
}

/*Play 1 round*/
function play(playerSelection, computerSelection) {
    let winner;

    if(playerSelection === "rock" && computerSelection === "paper") {
        winner = "computer";
    }

    else if(playerSelection === "rock" && computerSelection === "scissors") {
        winner = "player";
    }

    else if(playerSelection === "paper" && computerSelection === "rock") {
        winner = "player";
    }

    else if(playerSelection === "paper" && computerSelection === "scissors") {
        winner = "computer";
    }

    else if(playerSelection === "scissors" && computerSelection === "rock") {
        winner = "computer";
    }

    else if(playerSelection === "scissors" && computerSelection === "paper") {
        winner = "player";
    }

    else {
        winner = "both";
    }

    let result;

    if(winner === "player") {
        result = "You win! " + captitalizeFirstLetter(playerSelection) + " beats " + computerSelection; 
    }

    else if(winner === "computer") {
        result = "You lose! " + captitalizeFirstLetter(computerSelection) + " beats " + playerSelection; 
    }

    else {
        result = "Nobody wins! You both played " + computerSelection;
    }

    return result + ".";

}

function captitalizeFirstLetter(word) {
    
    let wordCapitalized = word.toLowerCase()
    wordCapitalized = wordCapitalized.charAt(0).toUpperCase() + wordCapitalized.slice(1);
    return wordCapitalized;
}

function playGame(event) {  
    const resultText = document.querySelector('.result');
    const result = play(event.target.className, getComputerChoice());

    if(result.includes("win")) {
        playerScore++;
    }

    else if(result.includes("lose")) {
        computerScore++;
    }

    if(playerScore < 5 && computerScore < 5) {
        resultText.textContent = result;
    }

    else {
        let finalResult = "(" + playerScore + " - " + computerScore;

        if(playerScore > computerScore) {
            finalResult += ") You win the 5 round game! Congratulations! :))";
        }
    
        else if(playerScore < computerScore) {
            finalResult += ") You lose the 5 round game! :(";
        }

        resultText.textContent = finalResult
    }
}

const rockButton = document.querySelector('.rock');
rockButton.addEventListener('click', playGame);

const paperButton = document.querySelector('.paper');
paperButton.addEventListener('click', playGame);

const scissorsButton = document.querySelector('.scissors');
scissorsButton.addEventListener('click', playGame);
