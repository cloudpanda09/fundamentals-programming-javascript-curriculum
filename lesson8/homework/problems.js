// Problem 1
// Write a function that returns the number 42 and print the result.

function return_42() {
    return 42
}

console.log(return_42())

// Problem 2
// Write a function that returns "penguin" and print the result.

function return_penguin() {
    return "penguin"
}

console.log(return_penguin())

// Problem 3
// Create a variable for a fruit, then print it.
// Modify it inside a function and print it again.

let fruit = "Mango";

function change_fruit() {
    let fruit = "Strawberry";
    return fruit
}

console.log(fruit)
console.log(change_fruit())

// Problem 4
// Write a function that takes two parameters: first_name and last_name.
// The function should return a string that combines the first and last names separated by a space.

function full_name(first_name, last_name) {
    let full_name = first_name + " " + last_name;
    return full_name;
}

console.log(full_name("Alice", "Bennett"))

// Problem 5
// Write a function called calculate_perimeter that takes two parameters: length and width.
// The function should return the perimeter of a rectangle (2 * (length + width)).

function calculate_perimeter(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

console.log(calculate_perimeter(3, 5));