// Comparison operators are used to compare two values and return a boolean (true or false)
console.log(5 > 3); // Greater than
console.log(5 < 3); // Less than
console.log(5 >= 3); // Greater than or equal to
console.log(4 <= 4); // Less than or equal to
console.log(5 === 5); // Strict equality: checks if the values are equal and of the same type
console.log(5 == 3); // Loose equality: checks if the values are equal, but does not check the type

// An example where === is more powerful than ==
console.log(0 == false) // Looks like false, but would convert types and then return true
console.log(0 === false) // Will return false because they are different types

console.log(0 !== false) // Strict equality: checks if the values are not equal or not of the same type
console.log(0 != false) // Loose equality: checks if the values are not equal, but does not check the type

// You can also compare variables
let a = 10;
let b = 7;
console.log(a > b);
console.log(a === b);

console.log("apple" === "apple");
console.log("Apple" == "apple"); // String comparison is case-sensitive
console.log("apple" !== "banana");
console.log("bat" < "cat"); // It converts each letter of the alphabet to the number it represents (i.e. b = 2 and c = 3), and then compares the words to find which one's greater
console.log("dog" < "zebra"); // JS compares left to right, so if, for example, z > d, then it will stop checking and say that z is greater
console.log("zha" < "zhan");