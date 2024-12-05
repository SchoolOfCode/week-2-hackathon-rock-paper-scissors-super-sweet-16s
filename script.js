console.log("Time to play Rock, Paper, Scissors!");

function greet() {
  let userName = prompt("What is your name?");
  return userName;
}

let userName = greet();
alert("Hello, " + userName + "!");

//let response = prompt("Would you like to read the guide?");
//if (response === "yes" || response === "Yes") {
// console.log("Rock beats scissors, Scissors beats paper, Paper beats rock");
//

let response = confirm("Would you like to read the guide?"); // leaves less room for user error in
if (response) {
  alert(
    "Choose a weapon on the following screen to beat the computer. Rock beats scissors, scissors beats paper, paper beats rock. Good luck!"
  );
} else {
  alert("Good luck!");
}

let weapon;
while (weapon !== "1" && weapon !== "2" && weapon !== "3") {
  weapon = prompt(
    "Choose your weapon:  1. Rock, 2. Paper, 3. Scissors. Type the number to make your choice."
  );

  if (weapon != "1" && "2" && "3") {
    alert("Incorrect! Please select a weapon between 1 and 3");
  }
}

if (weapon === "1") {
  alert("You chose Rock!");
} else if (weapon === "2") {
  alert("You chose Paper!");
} else if (weapon === "3") {
  alert("You chose Scissors!");
}

function randomComputer() {
  const generator = Math.floor(Math.random() * 3 + 1);
  let computerMove;
  if (generator == 1) {
    computerMove = "Rock";
  } else if (generator == 2) {
    computerMove = "Paper";
  } else if (generator == 3) {
    computerMove = "Scissors";
  }
  return computerMove;
}

function getWinner(player_choice, computer_choice) {
  let payoff_table = [
    [0, -1, 1],
    [1, 0, -1],
    [-1, 1, 0],
  ];

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
