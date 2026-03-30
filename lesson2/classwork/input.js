const prompt = require("prompt-sync")();

// prompt ALWAYS returns a string
let input = prompt("Give me a number:");

console.log(input);

// In Javascript, when you add a number to a string, it concatenates the strings.
console.log(input + 1);

let number = Number(input);
console.log(number + 1);