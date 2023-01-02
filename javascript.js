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
        finalReturn = "You Lose! " + computerSelection + " beats " + playerSelection + ".";
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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function main() {
    let round = 1;
    let playerScore = 0;
    let computerScore = 0;
    const buttonChoice = document.querySelectorAll("button");
    
    // Iterate through each button
    let playerSelection = "";
    buttonChoice.forEach((button) => { 
        round++;
        // each button add an event listener for "click"
        button.addEventListener("click", () => {
            // stores players choice and displays it 
            playerSelection = button.id;
            const playerChoiceContainer = document.querySelector("#player-choice");
            if(round > 1)
            {
                playerChoiceContainer.removeChild(playerChoiceContainer.lastChild);
            }
            const playerChoiceContent = document.createElement("div");
            playerChoiceContent.textContent = button.id;
            playerChoiceContainer.appendChild(playerChoiceContent);


            // gets computers choice and displays it
            const computerSelection  = getComputerChoice();
            const computerChoiceContainer = document.querySelector("#computer-choice");
            if(round > 1)
            {
                computerChoiceContainer.removeChild(computerChoiceContainer.lastChild);
            }
            const computerChoiceContent = document.createElement("div");
            computerChoiceContent.textContent = computerSelection;
            computerChoiceContainer.appendChild(computerChoiceContent);

            // gets round result and displays it
            const roundResult = playRound(playerSelection, computerSelection);
            const roundResultContainer = document.querySelector("#game-results");
            if(round > 1)
            {
                roundResultContainer.removeChild(roundResultContainer.lastChild);
            }
            const roundResultContent = document.createElement("div");
            roundResultContent.textContent = roundResult;
            roundResultContainer.appendChild(roundResultContent);

            // changes round number
            const roundCounterContainer = document.querySelector("#round-counter");
            if(round > 1)
            {
                roundCounterContainer.removeChild(roundCounterContainer.lastChild);
            }
            roundCounterContent = document.createElement("div");
            roundCounterContent.textContent = round;
            roundCounterContainer.appendChild(roundCounterContent);

            // update player score
            if(roundResult[4] == "W")
            {
                const playerScoreValue = document.querySelector("#player-score-value");
                playerScore++;
                playerScoreValue.textContent = playerScore;
            }
            // update computer score
            if(roundResult[4] == "L")
            {
                const computerScoreValue = document.querySelector("#computer-score-value");
                computerScore++;
                computerScoreValue.textContent = computerScore;
            }

            if(playerScore == 5 || computerScore == 5)
            {
                const bodyContainer = document.querySelector('body');
                removeAllChildNodes(bodyContainer);
                finalWinner = document.createElement("h1");
                if(computerScore == 5)
                {
                    finalWinner.textContent = "Computer Wins!";
                }
                if(playerScore == 5)
                {
                    finalWinner.textContent = "You Win!";
                }
                bodyContainer.appendChild(finalWinner);
            }
        });
    });
}   

main();
