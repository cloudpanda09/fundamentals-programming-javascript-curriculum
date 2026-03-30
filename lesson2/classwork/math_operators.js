const prompt = require('prompt-sync')();

console.log(4 + 5); // Addition: adds two numbers

console.log(10 - 3); // Subtraction: subtracts the second number from the first

console.log(6 * 7); // Multiplication: multiplies two numbers

console.log(15 / 2); // Division: divides the first number by the second and gives you a decimal result

console.log(15 % 2); // Modulus: gives you the remainder of the division

console.log(2 ** 3); // Exponentiation: raises the first number to the power of the second number

let a = Number(prompt("Give me a number: "));
let b = 3;
console.log(a + b); // You can use math operators on variables too.

console.log(a + b * 2); // Javascript follows the order of operations (PEMDAS)