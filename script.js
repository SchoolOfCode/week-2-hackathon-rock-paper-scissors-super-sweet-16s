function startGame() {

  function greet() {
    let userName;
    let valid_name = false;
      while (valid_name==false) {
      userName = prompt("What is your name?");
      userName.toLowerCase;
      for (let i = 0; i < userName.length; i++) {
        if (userName[i] < "a" || userName[i] > "z") {
          alert("Invalid name inserted, please try again.")
          break;
        } else {
            valid_name = true
        }
      }
    }
    userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    return userName;
  }

  let userName = greet();
  alert("Hello, " + userName + "!");

  let response = confirm("Would you like to read the guide?"); // leaves less room for user error in
  if (response) {
    alert(
      "Choose a weapon on the following screen to beat the computer. Rock beats scissors, scissors beats paper, paper beats rock. Good luck!"
    );
  } else {
    alert("Good luck!");
  }
  

console.log("Time to play Rock, Paper, Scissors!");

//let response = prompt("Would you like to read the guide?");
//if (response === "yes" || response === "Yes") {
// console.log("Rock beats scissors, Scissors beats paper, Paper beats rock");
//

let continue_choice = true
let win_tally = 0
let draw_tally = 0
let loss_tally = 0

while (continue_choice==true) {
  let weapon;
  while (weapon !== "1" && weapon !== "2" && weapon !== "3") {
    weapon = prompt(
      "Choose your weapon:  1. Rock, 2. Paper, 3. Scissors. Type the number to make your choice."
    );

    if (weapon !== "1" && weapon !== "2" && weapon !== "3") {
      alert("Incorrect! Please select a weapon between 1 and 3");
    }
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
    return computerMove
  }  

  if (weapon === "1") {
    alert("You chose Rock!");
  } else if (weapon === "2") {
    alert("You chose Paper!");
  } else if (weapon === "3") {
    alert("You chose Scissors!");
  }

    let computer_choice = randomComputer()
    
    console.log("Computer chose "+computer_choice)

    function getWinner(player_choice, computer_choice) {
      let payoff_table = [
        [0, -1, 1],
        [1, 0, -1],
        [-1, 1, 0],
      ];

      switch (player_choice) {
        case "1":
          player_choice = 0;
          break;
        case "2":
          player_choice = 1;
          break;
        case "3":
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

    if (getWinner(weapon,computer_choice)==1) {
      win_tally++
    } else if (getWinner(weapon,computer_choice)==0) {
      draw_tally++
    } else {
      loss_tally++
    }

    continue_choice = confirm("Do you wish to play again?")

  }

  if (win_tally > loss_tally) {
    console.log(`Congratulations, you beat the computer! During the game, you earnt ${win_tally} wins, ${draw_tally} draws and ${loss_tally} losses.`)
  } else if (win_tally < loss_tally) {
    console.log(`Unlucky, the computer won out this time! During the game, you earnt ${win_tally} wins, ${draw_tally} draws and ${loss_tally} losses.`)
  } else {
    console.log(`Close race! It seems you and the computer drew this time. During the game, you earnt ${win_tally} wins, ${draw_tally} draws and ${loss_tally} losses.`)
  }
}