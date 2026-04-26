// Problem 1
// Create a list of 3 operating systems.
// Print the last one using length.
// Then reverse the list and print it.

let operating_systems = ['Microsoft Windows', 'Apple iOS', 'Andrioid']
console.log(operating_systems[2])
console.log(operating_systems.reverse())

// Problem 2
// Create a list of 4 school subjects.
// Print the second subject.
// Then sort them alphabetically and print the result.

let school_subjects = ['math', 'science', 'language arts', 'social studies']
console.log(school_subjects[1])
console.log(school_subjects.sort())

// Problem 3
// Create a list of 5 error codes.
// Print how many there are.
// Then find the index of "403" and print it.

let error_codes = [401, 403, 404, 500, 503]
console.log(error_codes.length)
console.log(error_codes.indexOf(403))

// Problem 4
// Create a list of 2 programming languages.
// Print a random one.
// Then append another language and print the list.

let programming_languages = ['java', 'python']

let length = programming_languages.length;

let random_index = Math.floor(Math.random() * length);
let random_language = programming_languages[random_index];
console.log("Random language: ", random_language)

// Problem 5
// Create a list of 6 passwords.
// Print the one in the middle using length.
// Then remove the first password in the list and print it.

let passwords = ['123456', '123456789', 'qwerty', 'password', '111111', '12345']

let middle_index = Math.floor(passwords.length / 2)
console.log(passwords[middle_index])

passwords.splice(0, 1)
console.log(passwords)