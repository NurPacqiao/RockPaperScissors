let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Style for body
let body = document.querySelector("body");
body.style.display = "flex";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.justifyContent = "center";

let bg = document.createElement("img");
bg.src = "rps.png";
bg.style.position = "fixed";
bg.style.top = 0;
bg.style.width = "70%";
bg.style.height = "100%";
bg.style.objectFit = "cover";
bg.style.zIndex = "-1";
document.body.appendChild(bg);

//Style for info text at the bottom of the buttons
let results = document.createElement("div");
results.classList.add("results");
results.style.display = "flex";
results.style.alignItems = "center";
results.style.flexDirection = "column";
results.style.justifyContent = "center"
results.innerText = '';

let newDiv = document.createElement("div");
newDiv.style.marginTop = "260px";
newDiv.style.display = "flex";
newDiv.style.flexDirection = "column";

let diver = document.createElement("div");
diver.style.display = "flex";
diver.style.flexDirection = "row";

let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");

//Style for PLAY AGAIN button
let play = document.createElement("button");
play.textContent = "PLAY";

//Style for buttons (rock, paper, scissors)
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

function styleButton(btn) {
    btn.style.backgroundColor = "lightblue";
    btn.style.fontSize = "20px";
    btn.style.border = "solid 1.5px black";
    btn.style.borderRadius = "8px";
    btn.style.margin = "10px";
}

[rock, paper, scissors, play].forEach(styleButton);

diver.append(rock, paper, scissors);

//Style for container (play button, text)
let container = document.createElement("div");
container.style.display = "flex";
container.style.alignItems = "center";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.marginTop = "40px";

newDiv.appendChild(diver);
newDiv.appendChild(results);

container.append(newDiv, play);

body.appendChild(container);

// Main function for the game
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        results.innerText = `TIED! Score: ${humanScore} - ${computerScore}`;
        return;
    }

    if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        results.innerText = `You won! ${humanChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}. Score: ${humanScore} - ${computerScore}`;
    } else {
        computerScore++;
        results.innerText = `You lost! ${computerChoice.toUpperCase()} beats ${humanChoice.toUpperCase()}. Score: ${humanScore} - ${computerScore}`;
    }

    if (humanScore === 5 || computerScore === 5) {
        results.innerText = `\nGame Over! ${humanScore > computerScore ? 'You win!' : 'You lose!'} Score: ${humanScore} - ${computerScore}`;
        disableButtons();
        play.style.display = "block";
    }
}

//Function that resets/starts game (Play)
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    results.innerText = '';
    
    rock.style.display = "block";
    paper.style.display = "block";
    scissors.style.display = "block";

    play.style.display = "none"; 
}

function disableButtons(){
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.display = "none";
}

disableButtons();
play.style.display = "block";
play.addEventListener("click", resetGame);

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));