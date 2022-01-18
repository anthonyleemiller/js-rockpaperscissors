let results = Array("rock", "paper", "scissors");
let playerSelection = "rock";

function computerPlay(){
    let result = results[Math.floor(Math.random()*results.length)];
    //found above Math.floor function from StackOveflow
    return(result);
};

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    let x = playerSelection;
    let y = computerSelection;

    if (x = y){
        return("It's a draw! Both users selected the same thing.");
    } else return("You win!");
};
//return(y + " is cpu selection.");


console.log(playRound(playerSelection, computerSelection));

