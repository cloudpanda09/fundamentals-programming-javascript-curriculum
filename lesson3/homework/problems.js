const prompt = require("prompt-sync")();

// Problem 1
// Ask the user to enter a number.
// Print "Even" if the number is divisible by 2, otherwise print "Odd".

let number = Number(prompt("Enter a number: "))
if (number % 2 == 0) {
    console.log("Even")
}
else {
    console.log("Odd")
}

// Problem 2
// Ask the user for the day of the week (all lowercase).
// Print "Weekend" if the day is "saturday" or "sunday",
// else print "Weekday".

let day_of_week = String(prompt("Enter a day of the week (all in lowercase!) "))
if (day_of_week === "saturday") {
    console.log("Weekend")
}
else if (day_of_week === "sunday") {
    console.log("Weekend")
}
else {
    console.log("Weekday")
}

// Problem 3
// Generate a random number between 1 and 10 (inclusive).
// Ask the user to guess the number.
// Print "Correct!" if the guess matches the random number, else print "Try again!".



// Problem 4
// Ask the user for a positive integer.
// If the number is divisible by 2 and greater than 10, print "Big even number".
// Otherwise print "Number does not meet criteria".

let positive_integer = Number(prompt("Enter a positive integer: "))
if (positive_integer % 2 == 0 && positive_integer > 10) {
    console.log("Big even number")
}
else {
    console.log("Number does not meet criteria")
}

// Problem 5
// Ask the user for two numbers.
// Print which number is larger.
// If the numbers are equal, print "Numbers are equal".

let n1 = Number(prompt("Enter a number: "))
let n2 = Number(prompt("Enter another number: "))

if (n1 > n2) {
    console.log(n1 + " is greater than " + n2)
}
else if (n1 == n2) {
    console.log("Numbers are equal")
}
else {
    console.log(n2 + " is greater than " + n1)
}