// Function to generate a random choice for the computer
function getComputerChoice() {
  const choices = ["R", "P", "S"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Function to play the game
function playGame() {
  let userWins = 0;
  let computerWins = 0;
  let ties = 0;
  
  while (true) {
    const userChoice = prompt("Enter your choice: R, P, or S");
    const computerChoice = getComputerChoice();
  
    const result = determineWinner(userChoice.toUpperCase(), computerChoice);
    alert(result);
  
    if (result === "You win!") {
      userWins++;
    } else if (result === "You lose!") {
      computerWins++;
    } else {
      ties++;
    }
  
    const playAgain = confirm("Do you want to play again?");
    if (!playAgain) {
      break;
    }
  }
  
  alert(`Total Wins: ${userWins}\nTotal Losses: ${computerWins}\nTotal Ties: ${ties}`);
}

// Start the game
playGame();