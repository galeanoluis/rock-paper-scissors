// let string = prompt("Sexooooo");

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

function playRound() {
    let player = prompt("Rock Paper Scissors!");
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
            console.log("Tie round.");
            return 0;
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("You win this round!")
            return 1;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            console.log("Computer win this round.")
            return -1;
    }
}

function game() {
    let score = 0;
    let i = 0;
    while(i < 5) {
        score = score + (playRound());
        i++;
    }
    if(score > 0) {
        return "YOU WIN THE GAME!!!";
    } else if (score < 0) {
        return "COMPUTER WINS THE GAME, YOU LOST!";
    } else {
        return "IT'S A TIE";
    }
}