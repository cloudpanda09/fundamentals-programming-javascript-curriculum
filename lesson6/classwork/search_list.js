let fruits = ["banana", "peach", "apple"];

// Find if apple in array
if (fruits.includes("apple")) {
    console.log("Found apple");
} else {
    console.log("No apples found")
}

// Find if apple is in array and print its index

let found = false;
let index = -1;

for (let i = 0; i < fruits.length; i++) { // Go through each index of the array
    if (fruits[i] === "apple") { // If the current item is apple
        found = true; // Mark as found
        index = i; // Save the index
        break; // Exit the loop after finding
    }
}

if (found === true) {
    console.log("Found apple at", index);
} else {
    console.log("No apples in the array");
}