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

//let response = confirm("Would you like to read the guide?"); // leaves less room for user error in
//console.log("Rock beats scissors, Scissors beats paper, Paper beats rock");
//if (response === "yes" || response === "Yes")
//console.log("Rock beats scissors, Scissors beats paper, Paper beats rock");

let weapon = prompt(
  "Choose your weapon:  1. Rock, 2. Paper, 3. Scissors. Type the number to make your choice"
);

if (weapon === "1") {
  alert("You chose Rock!");
} else if (weapon === "2") {
  alert("You chose Paper!");
} else if (weapon === "3") {
  alert("You chose Scissors!");
} else {
  alert("Invalid choice. Please refresh and try again.");
}
