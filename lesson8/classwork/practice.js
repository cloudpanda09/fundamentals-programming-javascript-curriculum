// Problem 1
// Write a function that returns your favorite fruit and print it.

function favorite_fruit() {
    let fruit = "Strawberry";
    return fruit
}

console.log(favorite_fruit())

// Problem 2
// Write a function that returns a smiley face and print it.

function smile() {
    let smiley_face = ":)"
    return smiley_face
}

console.log(smile())

// Problem 3
// Write a function that takes three parameters: length, width, and height.
// It should return the volume (length * width * height).

function volume(length, width, height) {
    let volume = length * width * height;
    return volume;
}

console.log(volume(3, 4, 5));

// Problem 4
// Create a variable for a book, then print it.
// Modify it inside a function and print it again.

let book = "Harry Potter and the Sorcerer's Stone";

function change_book() {
    let book = "Harry Potter and the Goblet of Fire";
    return book
}

console.log(book);
console.log(change_book());

// Problem 5
// Write a function that takes one parameter num.
// The function should return the value of num multiplied by 2.

function multiply_2(num) {
    let number = num * 2;
    return number
}

console.log(multiply_2(6));