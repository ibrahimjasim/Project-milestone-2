
document.addEventListener("DOMContentLoaded", function (event) {

    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");
    const choiceBtns = document.querySelectorAll(".choiceBtn");
    let player;
    let computer;
    let computerScore = 0;
    let playerScore = 0;
    // let result;

    choiceBtns.forEach(button => button.addEventListener("click", (event) => {
        player = event.target.getAttribute('data-option');
        computerTurn();
        const result = checkWinner();
        const resultMessage = ` Comp picked:: ${computer} -- ${result}`;
        resultText.textContent = resultMessage;
        if (result === 'You Win!') {
            playerScore = playerScore + 1;
        }
        if (result === 'You Lose!') {
            computerScore = computerScore + 1;
        }
        document.getElementById('user-score').innerText = playerScore;
        document.getElementById('computer-score').innerText = computerScore;
    }));

    function computerTurn() {

        const randNum = Math.floor(Math.random() * 3) + 1;

        switch (randNum) {
            case 1:
                computer = "ROCK";
                break;
            case 2:
                computer = "PAPER";
                break;
            case 3:
                computer = "SCISSORS";
                break;
        }
    }
    function checkWinner() {
        if (player == computer) {
            return "Draw!";
        }
        else if (computer == "ROCK") {
            return (player == "PAPER") ? "You Win!" : "You Lose!";
        }
        else if (computer == "PAPER") {
            return (player == "SCISSORS") ? "You Win!" : "You Lose!";
        }
        else if (computer == "SCISSORS") {
            return (player == "ROCK") ? "You Win!" : "You Lose!";
        }
    }


})
    ;

