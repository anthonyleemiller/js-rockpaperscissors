let results = Array("rock", "paper", "scissors");
//let playerSelection = prompt("Please select Rock, Paper, or Scissors:");
let playerSelection = "scissors";


function computerPlay(){
    let result = results[Math.floor(Math.random()*results.length)];
    //found above Math.floor function from StackOverflow
    return(result);
};

let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection){
    let x = playerSelection;
    let y = computerSelection;
    if (x=="rock" && y=="scissors" || x=="paper" && y=="rock" || x == "scissors" && y == "paper"){
        return("You win! " + x + " beats " + y + ".");
    } 
    else if (x=="scissors" && y=="rock" || x=="rock" && y=="paper" || x=="paper" && y=="scissors"){
            return("You lose! " + y + " beats " + x + ".");
        } else return("It's a draw!");
};

console.log(playRound(playerSelection, computerSelection));

