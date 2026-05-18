let i = 1; // Start with an i equal to 1.
while (i < 5) {  // Repeats the loop while i is less than 5.
    console.log(i);  // Print i each time the loop runs.
    i = i + 1;  // Increase i by 1 each time the loop runs so the loop eventually stops.
}

// Error: infinite loop
// i = 1;
// while (i < 5) { // Without changing i
//     console.log("beep!");
// }

let j = 1;  // Start with j equal to 1.
while (j < 10) {  // Repeats the loop while j is less than 10.
    console.log("woof!");
    j += 1;  // Increase j by 1 each time the loop runs so the loop eventually stops.
}

let k = 1;
while (k < 1) {
    console.log("hello!");
    k += 1;
}