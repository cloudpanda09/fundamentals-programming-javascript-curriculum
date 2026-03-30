const prompt = require("prompt-sync")();
// Homework Problem 1
// Ask the user for two numbers.
// Print their quotient and remainder on separate lines.

let n1 = Number(prompt("Give me a number:"))
let n2 = Number(prompt("Give me another number:"))
let quotient = n1/n2
let remainder = n1 % n2
console.log("The quotient of your numbers is " + quotient + " and the remainder is " + remainder)

// Homework Problem 2
// Ask the user for their favorite animal and favorite color.
// Print a sentence combining them like: "A blue tiger would be awesome!"

let favorite_animal = prompt("What is your favorite animal? ")
let favorite_color = prompt("What is your favorite color? ")
console.log("A " + favorite_color + favorite_animal + " would be awesome!" )

// Homework Problem 3
// Use a for loop to print all the even numbers from 0 to 10 (including 10).



// Homework Problem 4
// Ask the user how many push-ups they can do.
// Multiply it by 7 and print how many they could do in a week.

let push_ups = prompt("How many push-ups can you do in a day?")
let weekly_push_ups = Number(push_ups) * 7
console.log("You can do " + weekly_push_ups + " push_ups in a week!")

// Homework Problem 5
// Use a for loop to print the square of each number from 1 to 6.
// (Example: 1*1=1, 2*2=4, etc.)
