// Problem 1
// Count and print how many times "dog" appears in the list.

animals = ["dog", "cat", "lion", "tiger", "elephant", "red panda", "dog"]

counter = 0
for (let i = 0; i < animals.length; i++) {
    let item = animals[i];
    if (item == "dog") {
        counter += 1
    }
}
console.log(counter, "dogs!")

// Problem 2
// Count and print how many numbers are odd in the list (a number is odd if it's not divisible by 2).

numbers = [24, 93, 56, 43, 57, 64]

counter = 0
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item % 2 != 0) {
        counter += 1
    }
}
console.log(counter, "odd numbers!")

// Problem 3
// Search for "monkey" in the list and print its index if it's found.

animals = ["dog", "cat", "lion", "monkey", "tiger", "elephant", "red panda"]

if (animals.includes("monkey")) {
    console.log("Monkey found!")
} else {
    console.log("No monkeys found")
}

// Problem 4
// Search for 99 in the list and print if it is found.

numbers = [24, 93, 56, 43, 57, 64, 99]

if (numbers.includes(99)) {
    console.log("99 found!")
} else {
    console.log("No 99s found")
}


// Problem 5
// Count and print how many numbers are even in the list (a number is odd if it's divisible by 2).

numbers = [24, 93, 56, 43, 57, 64]

counter = 0
for (let i = 0; i < numbers.length; i++) {
    let item = numbers[i];
    if (item % 2 == 0) {
        counter += 1
    }
}
console.log(counter, "even numbers!")