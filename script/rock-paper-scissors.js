let score = getTheScore() || {

    win: 0,
    lose: 0,
    tie: 0,
};

let moves = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}

let isAutoplay = false;
let setIntervalID;

function reset() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;

    localStorage.removeItem('score');
    document.querySelector('.js-score').innerHTML = `Wins:${score.win} Lost:${score.lose} Tie:${score.tie}`;
}

function storeTheScore() {
    localStorage.setItem('score', JSON.stringify(score));
}

function getTheScore() {
    return JSON.parse(localStorage.getItem('score'));
}

function autoPlay() {
    if (!isAutoplay) {
        setIntervalID = setInterval(function () {

            let randomMove = something();
            playerMove(randomMove);
            isAutoplay = true;

        }, 1000);
    } else {
        clearInterval(setIntervalID)
        isAutoplay = false;
    }

}

function playerMove(move) {


    let computersMove = something();
    let result = '';

    console.log(computersMove);

    if (computersMove === move) {
        result = 'Its a Tie';
        score.tie++;
    } else {
        if (computersMove === moves.rock) {

            if (move === moves.paper) {
                result = 'You Win';
                score.win++;
            } else {
                result = 'You lost';
                score.lose++;
            }
        }

        if (computersMove === moves.paper) {
            if (move === moves.scissors) {
                result = 'You Win';
                score.win++;
            } else {
                result = 'You lost';
                score.lose++;
            }
        }

        if (computersMove === moves.scissors) {
            if (move === moves.rock) {
                result = 'You Win';
                score.win++;
            } else {
                result = 'You lost';
                score.lose++;
            }
        }
    }
    storeTheScore();
    document.querySelector('.js-move').innerHTML = ` <p>Your Choice </p> <img class=" image-icon" src="images/${move}.jpeg">
            <p>Computers Choice </p> <img class=" image-icon" src="images/${computersMove}.jpeg">`;
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-score').innerHTML = `Wins:${score.win} Lost:${score.lose} Tie:${score.tie}`;

}



function something() {

    const randomNumber = Math.random();
    let computersMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) computersMove = 'rock';
    if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) computersMove = 'paper';
    if (randomNumber >= 2 / 3 && randomNumber < 1) computersMove = 'scissors';

    return computersMove;
}