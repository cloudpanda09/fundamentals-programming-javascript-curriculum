// Problem 1
// Count and print how many times "Alex" appears in the list.

names = ["Alex", "Ben", "Christina", "Daisy", "Alex"]

counter = 0;
for (let i = 0; i < names.length; i++) {
    let item = names[i]
    if (item == "Alex") {
        counter += 1;
    }
}
console.log(counter, "people named Alex!")

// Problem 2
// Search for "elephant" in the list and print if it's found.

animals = ["dog", "cat", "lion", "tiger", "elephant", "red panda"]

if (animals.includes("elephant")) {
    console.log("Found elephant");
} else {
    console.log("No elephants found")
}

// Problem 3
// Count and print how many scores are 100.

scores = [46, 85, 23, 100, 54, 97, 100];

counter = 0;
for (let i = 0; i < scores.length; i++) {
    let item = scores[i]
    if (item == 100) {
        counter += 1;
    }
}
console.log(counter, "full scores!")

// Problem 4
// Search for the color "blue" in the list and print its index if it's found.

colors = ["red", "green", "blue", "purple", "orange", "pink", "blue"];

if (colors.includes("blue")) {
    console.log("Found blue");
} else {
    console.log("No blue found")
}

// Problem 5
// Count and print how many temperatures in the list are below zero.

temperatures = [-2, 4, 9, 2, -6]

counter = 0;
for (let i = 0; i < temperatures.length; i++) {
    let item = temperatures[i]
    if (item < 0) {
        counter += 1;
    }
}
console.log(counter, "temperatures below 0!")