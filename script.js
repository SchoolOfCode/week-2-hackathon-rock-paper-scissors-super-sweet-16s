
console.log("Time to play Rock, Paper, Scissors!");

function greet() {
  let userName = prompt("What is your name?");
  return userName;
}

let userName = greet();
console.log("Hello, " + userName + "!");

//let response = prompt("Would you like to read the guide?");
//if (response === "yes" || response === "Yes") {
// console.log("Rock beats scissors, Scissors beats paper, Paper beats rock");
//}

let response = confirm("Would you like to read the guide?"); // leaves less room for user error in
console.log("Rock beats scissors, Scissors beats paper, Paper beats rock");














function randomComputer() {
  const generator = Math.floor(Math.random()*3+1);
    let computerMove;
    if (generator == 1) {
      computerMove = "Rock";
    }
    else if (generator == 2) {
      computerMove = "Paper";
    }
    else if (generator == 3) {
      computerMove = "Scissors";
    }
  return computerMove;
}




function getWinner(player_choice, computer_choice) {

  let payoff_table = [[0,-1,1],[1,0,-1],[-1,1,0]]

  switch (player_choice) {
    case "Rock":
      player_choice = 0;
      break;
    case "Paper":
      player_choice = 1;
      break;
    case "Scissors":
      player_choice = 2;
      break;
}

switch (computer_choice) {
  case "Rock":
    computer_choice = 0;
    break;
  case "Paper":
    computer_choice = 1;
    break;
  case "Scissors":
    computer_choice = 2;
    break;
}

return payoff_table[player_choice][computer_choice];

}