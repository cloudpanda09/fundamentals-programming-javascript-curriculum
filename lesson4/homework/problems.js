const prompt = require("prompt-sync")();

// Problem 1
// Ask user for two test scores.
// If BOTH scores are at least 50, print "You passed both!"
// Otherwise, print "You failed at least one."
let test_score_1 = prompt("What is your first test score? ")
let test_score_2 = prompt("What is your second test score? ")

if (test_score_1 >= 50 && test_score_2 >= 50) {
    console.log("You passed both!")
} else {
    console.log("You failed at least one.")
}

// Problem 2
// Ask user if they brought lunch and water (yes/no).
// If they brought lunch OR water, print "You're somewhat ready."
// If they brought both, print "You're fully ready!"
// If they brought neither, print "You're not ready."

let lunch = prompt("Did you bring a lunch? ")
let water = prompt("Did you bring water? ")

if (lunch === "yes" && water == "yes") {
    console.log("You're fully ready!")
} else if (lunch === "yes" || water === "yes") {
    console.log("You're somewhat ready.")
} else {
    console.log("You're not ready.")
}


// Problem 3
// Ask user to enter a number.
// If the number is NOT between 1 and 10 (inclusive), print "Out of range."
// Otherwise, print "In range."

number = prompt("Enter a number: ")
if (number >= 1 && number <= 10) {
    console.log("In range.")
} else {
    console.log("Out of range.")
}

// Problem 4
// Generate a random number between 1 and 10.
// Ask the user to guess.
// If the guess is right AND the number is even, print "Even match!"
// Else if guess is right OR number is 5, print "Nice try!"
// Otherwise, print "Nope."

// Cannot solve, we haven't learned random number

// Problem 5
// Ask the user for two numbers.
// If one is divisible by 5 AND the other is NOT divisible by 2, print "Interesting pair!"
// Otherwise, print "Plain pair."

number_1 = Number(prompt("Enter a number: "))
number_2 = Number(prompt("Enter another number: "))

if (number_1 % 5 == 0 && number_1 % 2 != 0) {
    console.log("Interesting pair!")
} else if (number_1 % 2 != 0 && number_2 % 5 == 0) {
    console.log("Interesting pair!")
} else {
    console.log("Plain pair.")
}