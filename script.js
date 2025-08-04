let humanScore = 0, computerScore = 0;

function getComputerChoice(){
    let a = Math.floor(Math.random() * 100) + 1, b;
    if(a <= 35){
        b = 'Rock';
    }
    else if (a > 35 && a <= 70){
        b = 'Paper';
    }
    else if(a > 70 && a <= 100){
        b = 'Scissors';
    }
    else {
        console.log('Try again');
        b = 'Rock';
    }
    return b;
}



function getHumanChoice(){
    let user = prompt("Enter 1(Rock), 2(Paper) or 3(Scissors): ");

    if (user === 1){
        user = 'Rock';
    }
    else if(user === 2){
        user = 'Paper';
    }
    else if(user === 3){
        user = 'Scissors';
    }
    else{
        user = 'Rock';
    }

    return user;
}


function playRound(humanChoice, computerChoice){
    if (humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log('You won! Rock beats scissors!');
        humanScore++;
    }
    else if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log('You lost! Paper beats rock!');
        computerScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'scissors'){
        console.log('You lost! Scissors beats paper!');
        computerScore++;
    }
    else if(humanChoice === 'paper' && computerChoice === 'rock'){
        console.log('You won! Paper beats rock!');
        humanScore++;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        console.log('You won! Scissors beats paper!');
        humanScore++;
    }
    else if(humanChoice === 'scissors' && computerChoice === 'rock'){
        console.log('You lost! Rock beats scissors!');
        computerScore++;
    }
    else{
        console.log('TIED!');
    }
}

function playGame(){
    let human, computer;
    for(let i = 0; i < 5; i++){
        human = getHumanChoice().toLowerCase();
        computer = getComputerChoice().toLowerCase();
        playRound(human, computer);
    }

    if (humanScore > computerScore){
        console.log(`You won! Your score: ${humanScore}`);
    }
    else{
        console.log(`You lost! Your score: ${humanScore}`);
    }
}

playGame();

