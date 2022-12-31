function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = getRandomInt(3);
    // 0 = rock
    // 1 = paper
    // 2 = scissors

    let computerChoiceString = "";
    switch(computerChoice) {
        case 0:
            computerChoiceString = "rock";
            break;
        case 1:
            computerChoiceString = "paper";
            break;
        case 2:
            computerChoiceString = "scissors";
            break;
        default:
    }
    return computerChoiceString;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let finalReturn = "";
    if(playerSelection == computerSelection)
    {
        finalReturn = "Tie! You both chose " + computerSelection;
    }
    else if (playerSelection == "rock" && computerSelection == "paper")
    {
        finalReturn = "You Lose! " + computerSelection + " bseats " + playerSelection + ".";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors")
    {
        finalReturn = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock")
    {
        finalReturn = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    }
    else
    {
        finalReturn = "You Win! " + playerSelection + " beats " + computerSelection + ".";
    }
    return finalReturn;
}

const playerSelection = "rOck";
const computerSelection  = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));