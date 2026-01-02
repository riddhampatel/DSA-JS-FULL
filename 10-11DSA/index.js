// Day 10-11: Arrays - Basics
// Array creation and initialization, methods, accessing, modifying, and traversal

console.log("=== Day 10-11: Arrays - Basics ===\n");

// 1. ARRAY CREATION AND INITIALIZATION
console.log("1. Array Creation and Initialization:");

// Different ways to create arrays
const arr1 = [1, 2, 3, 4, 5]; // Array literal
const arr2 = new Array(5); // Array with 5 empty slots
const arr3 = new Array(1, 2, 3, 4, 5); // Array with elements
const arr4 = Array.of(1, 2, 3); // Array.of() method
const arr5 = Array.from("hello"); // Array from string

console.log("Array literal:", arr1);
console.log("Array(5):", arr2);
console.log("Array(1,2,3,4,5):", arr3);
console.log("Array.of(1,2,3):", arr4);
console.log("Array.from('hello'):", arr5);
console.log();

// 2. ARRAY METHODS (PUSH, POP, SHIFT, UNSHIFT)
console.log("2. Array Methods:");

let fruits = ["apple", "banana"];
console.log("Original array:", fruits);

// push() - adds element at the end
fruits.push("orange");
console.log("After push('orange'):", fruits);

// pop() - removes last element
let removed = fruits.pop();
console.log("After pop():", fruits, "| Removed:", removed);

// unshift() - adds element at the beginning
fruits.unshift("mango");
console.log("After unshift('mango'):", fruits);

// shift() - removes first element
removed = fruits.shift();
console.log("After shift():", fruits, "| Removed:", removed);
console.log();

// 3. ACCESSING AND MODIFYING ELEMENTS
console.log("3. Accessing and Modifying Elements:");

let numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);

// Accessing elements
console.log("Element at index 0:", numbers[0]);
console.log("Element at index 2:", numbers[2]);
console.log("Last element:", numbers[numbers.length - 1]);

// Modifying elements
numbers[1] = 25;
console.log("After modifying index 1:", numbers);

numbers[numbers.length - 1] = 55;
console.log("After modifying last element:", numbers);
console.log();

// 4. ARRAY TRAVERSAL
console.log("4. Array Traversal:");

let colors = ["red", "green", "blue", "yellow"];

// Using for loop
console.log("Using for loop:");
for (let i = 0; i < colors.length; i++) {
    console.log(`  Index ${i}: ${colors[i]}`);
}

// Using for...of loop
console.log("\nUsing for...of loop:");
for (let color of colors) {
    console.log(`  ${color}`);
}

// Using forEach method
console.log("\nUsing forEach:");
colors.forEach((color, index) => {
    console.log(`  Index ${index}: ${color}`);
});

// Using while loop
console.log("\nUsing while loop:");
let i = 0;
while (i < colors.length) {
    console.log(`  Index ${i}: ${colors[i]}`);
    i++;
}
console.log();

// 5. COMMON ARRAY PROPERTIES AND METHODS
console.log("5. Common Array Properties:");

let arr = [1, 2, 3, 4, 5];
console.log("Array:", arr);
console.log("Length:", arr.length);
console.log("Is Array?", Array.isArray(arr));
console.log("toString():", arr.toString());
console.log("join(' - '):", arr.join(" - "));
console.log();

// 6. ARRAY EXAMPLES
console.log("6. Practical Examples:");

// Example 1: Sum of array elements
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let nums = [1, 2, 3, 4, 5];
console.log(`Sum of ${nums}:`, sumArray(nums));

// Example 2: Find maximum element
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(`Maximum in ${nums}:`, findMax(nums));

// Example 3: Reverse an array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log(`Reverse of ${nums}:`, reverseArray(nums));

// Example 4: Count occurrences of an element
function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

let letters = ["a", "b", "a", "c", "a", "d"];
console.log(`Count of 'a' in ${letters}:`, countOccurrences(letters, "a"));
