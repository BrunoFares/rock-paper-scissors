let randomNumber = () => Math.floor(Math.random()*3);

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('#result');
const userPlayed = document.querySelector('#userPlayed');
const comPlayed = document.querySelector('#comPlayed');
const startGame = document.querySelector("#startGame");
const reset = document.querySelector('#reset');
const scoreboard = document.querySelector('#scoreboard');
const total = document.querySelector('#totalscore');
const choice = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;
let totalScore = 0;

startGame.addEventListener('click', game);
reset.addEventListener('click', resetGame);

function getComputerChoice(){
    let randNum = randomNumber();
    switch(randNum){
    case 0:
        return "rock";
        break;
    case 1:
        return "paper";
        break;
    case 2:
        return "scissors";
        break;
    }
}

function playRound(userSelection) {
    let computerSelection = getComputerChoice();
    switch(userSelection) {
    case 'rock': 
        if (computerSelection === 'rock') return 'It\'s a tie'
        else if (computerSelection === 'paper') return "You win"
        else return "You lose"
        break;
    case 'paper':
        if (computerSelection === 'paper') return 'It\'s a tie'
        else if (computerSelection === 'rock') return "You win"
        else return "You lose"
        break;
    case 'scissors':
        if (computerSelection === 'scissors') return 'It\'s a tie'
        else if (computerSelection === 'paper') return "You win"
        else return "You lose"
        break;
    }
}

function game(){
    rock.addEventListener('click', rockFunction);
    scissors.addEventListener('click', scissorsFunction);
    paper.addEventListener('click', paperFunction);
    
    for(let i = 0; i < choice.length ; i++){
        choice[i].addEventListener('mouseover', function() {
            choice[i].style.cssText = "background-color: rgb(171, 171, 171); color: rgb(37, 37, 37);"
    })}

    for(let i = 0; i < choice.length ; i++){
        choice[i].addEventListener('mouseout', function() {
            choice[i].style.cssText = "background-color: rgb(37, 37, 37); color: rgb(171, 171, 171);"
    })}

    userScore = 0;
    computerScore = 0;
    totalScore = 0;

    total.textContent = 'Game Started';

    function rockFunction() {
        result.textContent = playRound('rock');
        userPlayed.textContent = 'Rock';
    
        if (result.textContent === 'You win') {
            comPlayed.textContent = 'Scissors';
            scoreboard.textContent = `your score: ${++userScore}, computer score: ${computerScore}`
            total.textContent = ++totalScore;
        }
        else if (result.textContent === "It's a tie") {
            comPlayed.textContent = userPlayed.textContent;
            scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`;
        }
        else {
            comPlayed.textContent = 'Paper';
            scoreboard.textContent = `your score: ${userScore}, computer score: ${++computerScore}`
            total.textContent = ++totalScore;
        }

        if(totalScore === 5){
            total.textContent = (userScore > computerScore) ? 'You Win!' : 'You Lose.';
            rock.removeEventListener('click', rockFunction);
            paper.removeEventListener('click', paperFunction);
            scissors.removeEventListener('click', scissorsFunction);
        }
    };
    
    function paperFunction() {
        result.textContent = playRound('paper');
        userPlayed.textContent = 'Paper';
    
        if (result.textContent === 'You win') {
            comPlayed.textContent = 'Rock';
            userScore++;
            total.textContent = ++totalScore;
            scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`
        }
        else if (result.textContent === "It's a tie") {
            comPlayed.textContent = userPlayed.textContent;
            scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`;
        }
        else {
            comPlayed.textContent = 'Scissors';
            computerScore++;
            total.textContent = ++totalScore;
            scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`
        }

        if(totalScore === 5){
            total.textContent = (userScore > computerScore) ? 'You Win!' : 'You Lose.';
            rock.removeEventListener('click', rockFunction);
            paper.removeEventListener('click', paperFunction);
            scissors.removeEventListener('click', scissorsFunction);
        }
    };
    
    function scissorsFunction() {
        result.textContent = playRound('scissors');
        userPlayed.textContent = 'Scissors';
    
        if (result.textContent === 'You win') {
            comPlayed.textContent = 'Paper';
            userScore++;
            total.textContent = ++totalScore;
            scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`
        }
        else if (result.textContent === "It's a tie") {
            comPlayed.textContent = userPlayed.textContent;
            scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`;
        }
        else {
            comPlayed.textContent = 'Rock';
            computerScore++;
            total.textContent = ++totalScore;
            scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`
        }

        if(totalScore === 5){
            total.textContent = (userScore > computerScore) ? 'You Win!' : 'You Lose.';
            rock.removeEventListener('click', rockFunction);
            paper.removeEventListener('click', paperFunction);
            scissors.removeEventListener('click', scissorsFunction);
        }
    };
}

function resetGame() {
    result.textContent = "";
    userPlayed.textContent = "";
    comPlayed.textContent = "";
    userScore = 0;
    computerScore = 0;
    totalScore = 0;
    total.textContent = '';
    scoreboard.textContent = `your score: ${userScore}, computer score: ${computerScore}`;
}

//  i made the following counter function just to be sure that 
//  my random number generator was indeed random enough

function counter(numOfIterations){
    let one = 0, two = 0, three = 0;

    for (let i = 0; i < numOfIterations; i++){
        let randNum = randomNumber();

        switch(randNum){
        case 0:
            ++one;
            break;
        case 1:
            ++two;
            break;
        case 2:
            ++three;
            break;
        }
    }
    console.log(`one: ${one}, two: ${two}, three: ${three}`);
}