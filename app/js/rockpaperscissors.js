'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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

function getPlayerMove(move) {
    return move || getInput();
} 

function getComputerMove(move) {
    return move || randomPlay();
    }

function getWinner(playerMove,computerMove) {
    var winner;
      if (playerMove === computerMove) {
        winner = "none";
         console.log("Player Move: " + playerMove + "       |       Computer Move: " + computerMove);  
        return winner;
      }
      else if (playerMove === "rock") {
        if (computerMove === "scissors"){
          winner = "player";
           console.log("Player Move: " + playerMove + "       |       Computer Move: " + computerMove);  
          return winner;
        }
        else{
          winner = "computer";
           console.log("Player Move: " + playerMove + "       |       Computer Move: " + computerMove);  
          return winner;
        }
      }
      else if (playerMove === "paper"){
        if (computerMove === "rock"){
          winner = "player";
           console.log("Player Move: " + playerMove + "       |       Computer Move: " + computerMove);  
          return winner;
      }
        else {
          winner = "computer";
           console.log("Player Move: " + playerMove + "       |       Computer Move: " + computerMove);  
          return winner;
        }
      }
      else if (playerMove === "scissors"){
        if (computerMove === "paper") {
          winner = "player";
           console.log("Player Move: " + playerMove + "       |       Computer Move: " + computerMove);  
          return winner;
        }
      else{
          winner = "computer";
           console.log("Player Move: " + playerMove + "       |       Computer Move: " + computerMove);  
          return winner;
        }
      }
 };
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
 


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   
   while (playerWins < 5 && computerWins < 5) {
       var playerMove = getPlayerMove();
       var computerMove = getComputerMove();
       var winner = getWinner(playerMove,computerMove);
       
       if (winner === "player"){
           playerWins += 1;
           console.log("You win");
       }
       else if (winner === "computer"){
           computerWins += 1;
           console.log("Computer Wins");
       }
       else if (winner === "none"){
           playerWins += 0;
           computerWins += 0;
           console.log("It's a tie!");
       }
       else{
        console.log("Incorrect Data Entry")
       }
   }
   var finalWinner;
     	if (playerWins > computerWins) {
    		console.log("Congratulations you defeated the computer!");
    		console.log("Final Score ===> Player: " + playerWins + " Vs. Computer: " + computerWins);
    	}
    	else {
    		console.log("Try again, the computer was too good for you!");
    		console.log("Final Score ===> Player: " + playerWins + " Vs. Computer: " + computerWins);
    	}

    return [playerWins, computerWins];
};

playToFive();
 // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
