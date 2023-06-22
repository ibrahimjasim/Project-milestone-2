document.addEventListener("DOMContentLoaded", function (event) {
    const playerText = document.querySelector("#playerText");
    const computerText = document.querySelector("#computerText");
    const resultText = document.querySelector("#resultText");
    const choiceBtns = document.querySelectorAll(".choiceBtn");

    let player;
    let computer;
    let computerScore = 0;
    let playerScore = 0;

    choiceBtns.forEach((button) =>
        button.addEventListener("click", (event) => {
            if (playerScore < 5 && computerScore < 5) {
                player = event.target.getAttribute("data-option");
                computerTurn();
                const result = checkWinner();
                const resultMessage = ` Comp picked: ${computer} -- ${result}`;
                resultText.textContent = resultMessage;
                if (result === "You Win!") {
                    playerScore += 1;
                }
                if (result === "You Lose!") {
                    computerScore += 1;
                }
                document.getElementById("user-score").innerText = playerScore;
                document.getElementById("computer-score").innerText = computerScore;
                if (playerScore === 5 || computerScore === 5) {
                    endGame();
                }
            }
        })
    );


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
        } else if (computer == "ROCK") {
            return player == "PAPER" ? "You Win!" : "You Lose!";
        } else if (computer == "PAPER") {
            return player == "SCISSORS" ? "You Win!" : "You Lose!";
        } else if (computer == "SCISSORS") {
            return player == "ROCK" ? "You Win!" : "You Lose!";
        }
    }

    function endGame() {
        let message;
        if (playerScore === 5) {
            message = "You won the game!";
        } else {
            message = "You lost the game!";
        }
        resultText.textContent = message;
        choiceBtns.forEach((button) => {
            button.disabled = true;
        });
    }
});