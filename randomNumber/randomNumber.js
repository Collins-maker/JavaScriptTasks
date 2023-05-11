// Generate a random integer between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to enter a guess
let userGuess = parseInt(prompt("Guess a number between 1 and 10"));

// Check if the guess matches the random number
if (userGuess === randomNumber) {
  console.log("Good work!");
} else {
  console.log("Not matched. The random number was " + randomNumber);
}
