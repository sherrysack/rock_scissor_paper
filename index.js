const choice = ["rock", "scissors", "paper"];
const win = "you win!";
const lose = "you lose";
const tie = "that's a tie, try next time";

const icons = document.querySelectorAll('.icon');
const selectionText = document.querySelector('.selection');
const userScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
function showSelection(e) {
    selectionText.textContent = `${e.target.id}`;
}
function removeSelection(e) {
    selectionText.textContent = ``;
}

icons.forEach(icon => {
    icon.addEventListener('mouseover', showSelection);
    icon.addEventListener('mouseLeave', removeSelection);
    icon.addEventListener('mousedown', playRound);
});

function computerPlay() {
    return Math.floor(Math.random()*3);
}

function playRound(e) {
    computerSelection = computerPlay();
    playerSelection = `${e.target.id}`;
    console.log(`computer selection is ${computerSelection}, 
        your selection is ${playerSelection}`);
    if(computerSelection === playerSelection) {
        return 0;
    }

    if(computerSelection !== 0) {
        if(playerSelection < computerSelection) {
            return 1;

        }else if(playerSelection > computerSelection){
            return -1;
        }

    }else {
        if(playerSelection === 2) {
            return 1;
        }else {
            return -1;
        }
    }

}

let playerSelection = 0;
let computerSelection = computerPlay();

function game() {
    let t = 0;
    //record the time you win
    let times = 0;
    //record the time computer win
    let ltimes = 0;
    while(t < 5 && times < 3 && ltimes < 3) {
        t++;
        playerSelection =

        const res = playRound(playerSelection, computerSelection);
        if(res > 0) {
            times += 1;
        } else if(res < 0) {
            console.log('computer win');
            ltimes += 1;
        }
    }
    if(times >= 3) {
        console.log(win+` at ${ltimes} while ${times}`);
    }else if(ltimes >= 3) {
        console.log(lose +` at ${times} while ${ltimes}`);
    }else {
        console.log(tie);
    }
}
