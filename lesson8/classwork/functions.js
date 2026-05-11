// Function that returns a greeting message
function make_greeting() {
    let greeting = "Hello, world!";
    return greeting; // Sends the greeting variable back to where the function was called
}

let message = make_greeting(); // Call the make_greeting() function.
console.log(message);

// Function that builds a face
function build_face() {
    let face = "-_-";
    return face; // Sends the face variable back to where the function was called
}

let person = build_face(); // Call the build_face() function.
console.log("Meet our human:", person);

// Function that returns a personalized greeting based on name.

function personalized_greeting(name) { // name is a parameter
    let greeting = "Hello, " + name + "!";
    return greeting;
}

console.log(personalized_greeting("Alice"))

// Function that returns a rectangle's area based on length and width.
function rectangle_area(length, width) { // length and width are parameters
    let area = length * width;
    return area;
}

console.log("The area of this rectangle is", rectangle_area(5, 3));