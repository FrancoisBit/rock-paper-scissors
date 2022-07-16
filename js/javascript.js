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
        result = "You win! " + playerSelection + " beats " + computerSelection; 
    }

    else if(winner === "computer") {
        result = "You lose! " + computerSelection + " beats " + playerSelection; 
    }

    else {
        result = "Nobody wins! You both played " + computerSelection;
    }

    return result;


}

/*Play 5 rounds*/
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {

        const result = play(getPlayerChoice(), getComputerChoice());
        console.log(result);

        if(result.includes("win")) {
            playerScore++;
        }

        else if(result.includes("lose")) {
            computerScore++;
        }
    }

    if(playerScore > computerScore) {
        console.log("You win the 5 round game! Congratulations! :))");
    }

    else if(playerScore < computerScore) {
        console.log("You lose the 5 round game! :(");
    }

    else {
        console.log("Nobody wins... try again!");
    }
}

game();