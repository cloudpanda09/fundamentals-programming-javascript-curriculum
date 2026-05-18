// Problem 1
// Use a while loop to print the numbers from 1 to 7 (inclusive).

let i = 1;

while (i < 8) {
    console.log(i);
    i += 1;
}

// Problem 2
// Use a while loop to count down from 3 to -3 (inclusive), printing each number.

let j = 3;

while (j >= -3) {
    console.log(j);
    j -= 1;
}

// Problem 3
// Ask the user to input a number less than 50.
// Use a while loop to print numbers starting from that number, going up by 2 each time, until you reach 50 (inclusive).

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number less than 50: "));

while (num <= 50) {
    console.log(num)
    num += 2;
}

// Problem 4
// Ask the user to input a number.
// Use a while loop to count down by 3 each time until you reach 0 or less (inclusive).

let num2 = Number(prompt("Enter a number: "));

while (num2 > -3) {
    console.log(num2);
    num2 -= 3;
}

// Problem 5
// Use a while loop to print each element in the list.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 0;

while (n < numbers.length) {
    console.log(numbers[n]);
    n += 1;
}

// Problem 6
// Ask the user to enter a positive number.
// Use a while loop to find the sum of all numbers from 1 to that number.
// Example: if the user enters 5, the answer should be 1 + 2 + 3 + 4 + 5 = 15.
// Print the final sum.

let number = Number(prompt("Please enter a positive number: "));
let sum = 0;
i = 1;
while (i <= number) {
    sum = sum + i;
    i += 1;
}

// Problem 7
// Ask the user to enter a secret password.
// Keep asking the user to enter the password again until they type "javascript".
// Count how many tries it took them.
// When they get it correct, print "Correct!" and print the number of tries.

let password = prompt("Please enter a password: ");
let tries = 1;
while (password !== "javascript") {
    password = prompt("Please enter a password: ");
    tries += 1;
}

console.log("Correct!");
console.log("You took", tries, "tries.");