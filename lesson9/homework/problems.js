// Problem 1
// Use a while loop to print the word "JavaScript" 4 times.

let js = 1;
while (js < 5) {
    console.log("JavaScript");
    js += 1
}

// Problem 2
// Use a while loop to print the even numbers from 2 to 12 (inclusive).

let num = 2
while(num < 14) {
    console.log(num)
    num += 2
}

// Problem 3
// Ask the user to input a positive number.
// Use a while loop to count up from 0 to that number (inclusive), printing each number.

const prompt = require("prompt-sync")();

let pos_num = prompt("Input a positive number: ");
let num1 = 0

while (num1 <= pos_num) {
    console.log(num1);
    num1 += 1;
}

// Problem 4
// Ask the user to enter a starting number greater than 10.
// Use a while loop to count down by 5 each time until the number is less than 0.

let starting_num = prompt("Enter a starting number greater than 10: ");

while (starting_num >= 0) {
    console.log(starting_num);
    starting_num -= 5;
}

// Problem 5
// Create a list of your three favorite animals.
// Use a while loop to print each animal with the text "is awesome!" after it.

let animals = ["Red pandas", "Dogs", "Cats"]
let i = 0;

while (i <= animals.length - 1) {
    console.log(animals[i], "are awesome!");
    i += 1;
}