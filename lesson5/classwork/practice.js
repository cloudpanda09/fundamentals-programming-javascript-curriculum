// Problem 1
// Create a list of 4 car brands.
// Print the first and last.
// Then add another brand using push() and print the updated list.

car_brands = ["Honda", "Tesla", "Ferrari", "Subaru"]
car_brands.push("Rover")
console.log(car_brands)

// Problem 2
// Create a list of 5 numbers.
// Print the number at index 2.
// Then insert a new number at index 2 and print the updated list.

numbers = [1, 2, 3, 4, 5]
console.log(numbers[2])
numbers.splice(2, 0, 6);
console.log(numbers)

// Problem 3
// Create a list of 3 cities.
// Print the length of the list.
// Then remove one city and print the updated list.

cities = ["Seattle", "San Francisco", "Hawaii"]
console.log(cities.length)
cities.pop()
console.log(cities)

// Problem 4
// Create a list of 6 file extensions.
// Print a random one.
// Then pop one at index 3 and print the updated list.

file_extensions = ["docx", "jpg", "jpeg", "mp3", "pdf", "wav"]

let length = file_extensions.length;

let random_index = Math.floor(Math.random() * length);
let random_file_extension = file_extensions[random_index];
console.log("Random file extension: ", random_file_extension)


// Problem 5
// Create a list of 8 names.
// Print the one at the middle index using length.
// Then count how many times a specific name appears.

let names = ["Anne", "Bob", "Charles", "Daisy", "Emily", "Frederick", "Gina", "Hazel"]

let middle_index = Math.floor(names.length / 2)
console.log(names[middle_index])

let name_count = names.filter((name) => name == "Hazel").length
console.log(name_count)
