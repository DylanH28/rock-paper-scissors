let computerSelection;
function computerPlay () {
    let computersHand = Math.floor(Math.random() * 3) + 1;
    if (computersHand === 1) {
        return computerSelection = 'rock';
    }
    else if (computersHand === 2) {
        return computerSelection = 'paper';
    }
    else {
        return computerSelection = 'scissors';
    }
}
console.log(computerPlay())

let playerScore = 0;
let computerScore = 0;
function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return 'It\'s a tie!'
        }
        else if (computerSelection === 'paper') {
            return playerScore++, 'You lose! Paper beats rock.';
        }
        else {
            return computerScore++, 'You win! Rock beats scissors.';
        }
    } 
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return playerScore++, 'You win! Paper beats rock';
        }
        else if (computerSelection === 'paper') {
            return 'It\'s a tie!'
        }
        else {
            return computerScore, 'You lose! Scissors beats paper.';
        }
    } 
    if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            return computerScore++ ,'You lose! Rock beats scissors.';
        }
        else if (computerSelection === 'paper') {
            return playerScore++, 'You win! Scissors beats paper.';
        }
        else {
            return 'It\'s a tie!'
        }
    } 
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?')
        playRound(playerSelection, computerSelection);
        if (i === 5 && playerScore > computerScore) {
            return 'You win!'
        }
        else if (i === 5 && playerScore < computerScore) {
            return 'You lose!'
        }
    }
}