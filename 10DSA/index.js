// Day 10: Arrays - Intermediate
// Array methods (map, filter, reduce, forEach), searching, and sorting

console.log("=== Day 10: Arrays - Intermediate ===\n");

// 1. ARRAY METHODS - MAP
console.log("1. Array.map() - Transform each element:");

const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// Square each number
const squared = numbers.map(num => num ** 2);
console.log("Squared:", squared);

// Convert to strings
const strings = numbers.map(num => `Number ${num}`);
console.log("To Strings:", strings);
console.log();

// 2. ARRAY METHODS - FILTER
console.log("2. Array.filter() - Filter elements by condition:");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers
const evens = nums.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Get odd numbers
const odds = nums.filter(num => num % 2 !== 0);
console.log("Odd numbers:", odds);

// Get numbers greater than 5
const greaterThan5 = nums.filter(num => num > 5);
console.log("Greater than 5:", greaterThan5);

// Filter strings by length
const words = ["hi", "hello", "hey", "javascript", "code"];
const longWords = words.filter(word => word.length > 3);
console.log("Words with length > 3:", longWords);
console.log();

// 3. ARRAY METHODS - REDUCE
console.log("3. Array.reduce() - Reduce array to single value:");

const values = [1, 2, 3, 4, 5];

// Sum of all numbers
const sum = values.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);

// Product of all numbers
const product = values.reduce((acc, num) => acc * num, 1);
console.log("Product:", product);

// Find maximum
const max = values.reduce((acc, num) => Math.max(acc, num), values[0]);
console.log("Maximum:", max);

// Find minimum
const min = values.reduce((acc, num) => Math.min(acc, num), values[0]);
console.log("Minimum:", min);

// Count occurrences
const letters = ["a", "b", "a", "c", "b", "a"];
const count = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});
console.log("Letter count:", count);
console.log();

// 4. ARRAY METHODS - FOREACH
console.log("4. Array.forEach() - Execute function for each element:");

const items = ["apple", "banana", "cherry"];

// Simple iteration
console.log("Fruits:");
items.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item}`);
});

// Modify external variable
let total = 0;
[10, 20, 30, 40].forEach(num => {
    total += num;
});
console.log("Total sum:", total);
console.log();

// 5. ARRAY SEARCHING - indexOf, lastIndexOf, includes
console.log("5. Array Searching Methods:");

const arr = [10, 20, 30, 40, 30, 50];

console.log("Array:", arr);
console.log("indexOf(30):", arr.indexOf(30)); // First occurrence
console.log("lastIndexOf(30):", arr.lastIndexOf(30)); // Last occurrence
console.log("indexOf(100):", arr.indexOf(100)); // Not found: -1
console.log("includes(40):", arr.includes(40)); // true
console.log("includes(100):", arr.includes(100)); // false
console.log();

// 6. ARRAY SEARCHING - find, findIndex
console.log("6. Array.find() and findIndex():");

const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Bob", age: 35 }
];

// Find first person over 28
const person = people.find(p => p.age > 28);
console.log("First person over 28:", person);

// Find index of person named "Jane"
const index = people.findIndex(p => p.name === "Jane");
console.log("Index of Jane:", index);

// Find even number
const numbers2 = [1, 3, 5, 8, 9, 10];
const firstEven = numbers2.find(num => num % 2 === 0);
console.log("First even number:", firstEven);
console.log();

// 7. ARRAY SORTING - sort()
console.log("7. Array.sort() - Sort array elements:");

// Sort numbers (ascending)
const nums1 = [40, 10, 30, 20, 50];
nums1.sort((a, b) => a - b);
console.log("Sorted ascending:", nums1);

// Sort numbers (descending)
const nums2 = [40, 10, 30, 20, 50];
nums2.sort((a, b) => b - a);
console.log("Sorted descending:", nums2);

// Sort strings
const fruits = ["banana", "apple", "cherry", "date"];
fruits.sort();
console.log("Sorted strings:", fruits);

// Sort by string length
const words2 = ["hi", "hello", "hey", "javascript"];
words2.sort((a, b) => a.length - b.length);
console.log("Sorted by length:", words2);

// Sort objects by property
const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 78 }
];
students.sort((a, b) => b.score - a.score); // Descending by score
console.log("Students by score:", students);
console.log();

// 8. ARRAY METHODS - reverse()
console.log("8. Array.reverse() - Reverse array order:");

const original = [1, 2, 3, 4, 5];
const reversed = [...original].reverse(); // Create copy and reverse
console.log("Original:", original);
console.log("Reversed:", reversed);
console.log();

// 9. CHAINING METHODS
console.log("9. Method Chaining - Combine multiple methods:");

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get sum of squares of even numbers
const result = data
    .filter(num => num % 2 === 0)  // Get evens: [2,4,6,8,10]
    .map(num => num ** 2)           // Square them: [4,16,36,64,100]
    .reduce((acc, num) => acc + num, 0); // Sum: 220

console.log("Sum of squares of even numbers:", result);

// Get words longer than 3 chars, uppercase, sorted
const text = ["hi", "hello", "world", "js", "code"];
const processed = text
    .filter(word => word.length > 3)
    .map(word => word.toUpperCase())
    .sort();
console.log("Processed words:", processed);
console.log();

// 10. OTHER USEFUL ARRAY METHODS
console.log("10. Other Useful Methods:");

const arr2 = [1, 2, 3, 4, 5];

// every() - Check if all elements meet condition
const allPositive = arr2.every(num => num > 0);
console.log("All positive?", allPositive);

// some() - Check if at least one element meets condition
const hasEven = arr2.some(num => num % 2 === 0);
console.log("Has even number?", hasEven);

// slice() - Extract portion of array
const portion = arr2.slice(1, 4); // From index 1 to 3
console.log("Slice(1,4):", portion);

// splice() - Remove/add elements
const arr3 = [1, 2, 3, 4, 5];
const removed = arr3.splice(2, 2, 99, 88); // Remove 2 items at index 2, add 99,88
console.log("After splice:", arr3);
console.log("Removed:", removed);

// concat() - Merge arrays
const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];
const merged = arr4.concat(arr5);
console.log("Concatenated:", merged);

// flat() - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Flat(1):", nested.flat(1));
console.log("Flat(2):", nested.flat(2));
