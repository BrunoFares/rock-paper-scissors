let randomNumber = () => Math.floor(Math.random()*3);

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

function playRound(userSelection, computerSelection) {

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
    default:
        return "Not a valid entry";
        break;
    }
}

function game(){
    let userScore = 0;
    let computerScore = 0;
    let totalScore = 0;

    while(totalScore < 5){
        let roundPlay = playRound(prompt('Enter rock, paper or scissors').toLowerCase(), getComputerChoice());
        console.log(roundPlay)

        if(roundPlay === 'You win') userScore++;
        else if(roundPlay === 'It\'s a tie' || roundPlay === 'Not a valid entry') continue;
        else computerScore++;

        ++totalScore;
    }
    return(`your score: ${userScore}, computer score: ${computerScore}`)
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