// Problem 1
// Find and print the sum of all the numbers greater than 25 in the list.

let numbers1 = [1, 63, 23, 86, 34, 75]
let sum = 0;

for (let i = 0; i < numbers1.length; i++) {
    let item = numbers1[i]
    if (item > 25) {
        sum += item
    }
}

console.log(sum)

// Problem 2
// Find and print the sum of all the numbers less than -10 in the list.

let nums = [1, 75, -24, -53, 63, -15]
let sums = 0;

for (let i = 0; i < nums.length; i++) {
    let item = nums[i]
    if (item < -10) {
        sums += item;
    }
}

console.log(sums)

// Problem 3
// Find and print the biggest number less than 100 in the list.

let numbers2 = [252, 432, 21, 64, 97, 35]

let largest_number = -Infinity;

for (let i = 0; i < numbers2.length; i++) {
    let item = numbers2[i]
    if (item < 100 && item > largest_number) {
        largest_number = item
    }
}
console.log(largest_number)

// Problem 4
// Find and print the biggest number in the list.

let numbers3 = [64, 27, 826, 365, 999]

let largest_num = -Infinity;

for (let i = 0; i < numbers3.length; i++) {
    let item = numbers3[i]
    if (item > largest_number) {
        largest_num = item
    }
}
console.log(largest_num)

// Problem 5
// Find and print the total sum of all the numbers in the list.

let numbers4 = [24, 875, 47, 36, 85]

sum = 0

for (let i = 0; i < numbers4.length; i++) {
    let item = numbers4[i]
    sum = sum + item
}

console.log(sum)