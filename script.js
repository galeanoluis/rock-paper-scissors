// let string = prompt("Sexooooo");

const buttons = Array.from(document.querySelectorAll(".button"));
buttons.forEach(button => button.addEventListener("click", playRound));
console.log(buttons);
const display = document.getElementById("display");
display.textContent = "Let's Play";
const playerScore = document.getElementById("player");
const computerScore = document.getElementById("computer");
const displayScore = document.getElementById("score");
let score = 0;
let round = 0;

function getComputerChoice() {
    let choise = Math.floor(Math.random() * 3);
    switch(choise) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}


function playRound(e) {
    let player = e.target.id;
    let computer = getComputerChoice();
    player = player.toLowerCase();
    while(!("rock paper scissors".includes(player))) {
        player = prompt("Please choose between Rock, Paper or Scissors");
        player = player.toLowerCase();
    }
    switch(player+computer) {
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            display.textContent = "Tie round.";
            game(0);
            return;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            display.textContent = "You win this round!";
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            game(1);
            return;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            display.textContent = "Computer win this round.";
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            game(-1);
            return;
    }
}


function game(i) {
    if (round >= 5) {
        if(score > 0) {
            display.textContent = "YOU WIN THE GAME!!!";
            gameEnd();
        } else if (score < 0) {
            display.textContent = "COMPUTER WINS THE GAME, YOU LOST!";
            gameEnd();
        } else {
            display.textContent = "IT'S A TIE";
            gameEnd();
        }
    }
    score = score + i;
    round++;
}

function gameEnd() {
    round = 0;
    score = 0;
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}

