////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if( move === null || move === undefined ) {
        return getInput();
    } else {
        return move;
    }
}

function getComputerMove(move) {
    if( move === null || move === undefined ) {
        return randomPlay();
    } else {
        return move;
    }
}

function getWinner(playerMove,computerMove) {
    var winner;

    if( playerMove === computerMove ){
        winner = 'tie'
    } else {
        switch(playerMove){
            case 'rock':
                if(computerMove === 'scissors'){
                    winner = 'player';
                } else if(computerMove === 'paper'){
                    winner = 'computer';
                }
            break;
            case 'paper':
                if(computerMove === 'rock'){
                    winner = 'player';
                } else if(computerMove === 'scissors'){
                    winner = 'computer';
                }
            break;
            case 'scissors':
                if(computerMove === 'paper'){
                    winner = 'player';
                } else if(computerMove === 'rock'){
                    winner = 'computer';
                }
            break;
            default:
                console.log("input values are bad");
                winner = undefined;
        }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    var playerMove;
    var computerMove;
    var winner;

    while((playerWins < 5) && (computerWins<5)){

        playerMove = getPlayerMove(null);
        computerMove = getComputerMove(null);
        console.log("You played", playerMove, "and I chose", computerMove);

        winner = getWinner(playerMove, computerMove);
        if(winner === 'player'){
            playerWins++;
            console.log("You won! The score is", playerWins, "to", computerWins);
        } else if(winner === 'computer' ){
            computerWins++;
            console.log("I got you that time! The score is", playerWins, "to", computerWins);
        } else {
            console.log("That was a tie... The tension builds! The score is still", playerWins, "to", computerWins);
        }
    }

    if (playerWins === 5){
        console.log("You won! gg.");
    } else {
        console.log("A machine has defeated a human, as will happen nearly half the time in this instance.");
    }

    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    var playerMove;
    var computerMove;
    var winner;

    while((playerWins < x) && (computerWins < x)){

        playerMove = getPlayerMove(null);
        computerMove = getComputerMove(null);
        console.log("You played", playerMove, "and I chose", computerMove);

        winner = getWinner(playerMove, computerMove);
        if(winner === 'player'){
            playerWins++;
            console.log("You won! The score is", playerWins, "to", computerWins);
        } else if(winner === 'computer' ){
            computerWins++;
            console.log("I got you that time! The score is", playerWins, "to", computerWins);
        } else {
            console.log("That was a tie... The tension builds! The score is still", playerWins, "to", computerWins);
        }
    }

    if (playerWins >= x){
        console.log("You won! gg.");
    } else {
        console.log("A machine has defeated a human, as will happen nearly half the time in this instance.");
    }

    return [playerWins, computerWins];
}

playToFive();
