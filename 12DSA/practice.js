// Day 12: String Practice Problems - 15 Basic String Problems

// Problem 1: Get string length
function getLength(str) {
  // Your code here
}
console.log("1. Length of 'JavaScript':", getLength("JavaScript")); // Expected: 10

// Problem 2: Get first and last character
function firstAndLast(str) {
  // Return object with first and last character
  // Your code here
}
console.log("2. First and last of 'hello':", firstAndLast("hello")); // Expected: { first: 'h', last: 'o' }

// Problem 3: Get character at specific index
function getCharAt(str, index) {
  // Your code here
}
console.log("3. Character at index 2 in 'JavaScript':", getCharAt("JavaScript", 2)); // Expected: 'v'

// Problem 4: Concatenate two strings
function concatStrings(str1, str2) {
  // Your code here
}
console.log("4. Concat 'Hello' and 'World':", concatStrings("Hello", "World")); // Expected: "HelloWorld"

// Problem 5: Extract substring using slice
function extractSlice(str, start, end) {
  // Your code here
}
console.log("5. Slice 'JavaScript' from 0 to 4:", extractSlice("JavaScript", 0, 4)); // Expected: "Java"

// Problem 6: Extract substring using substring
function extractSubstring(str, start, end) {
  // Your code here
}
console.log("6. Substring 'JavaScript' from 4 to 10:", extractSubstring("JavaScript", 4, 10)); // Expected: "Script"

// Problem 7: Convert to uppercase
function toUpper(str) {
  // Your code here
}
console.log("7. Uppercase 'hello':", toUpper("hello")); // Expected: "HELLO"

// Problem 8: Convert to lowercase
function toLower(str) {
  // Your code here
}
console.log("8. Lowercase 'WORLD':", toLower("WORLD")); // Expected: "world"

// Problem 9: Check if string includes a substring
function includesSubstring(str, substr) {
  // Your code here
}
console.log("9. Does 'hello world' include 'world'?", includesSubstring("hello world", "world")); // Expected: true

// Problem 10: Find index of substring
function findIndex(str, substr) {
  // Your code here
}
console.log("10. Index of 'world' in 'hello world':", findIndex("hello world", "world")); // Expected: 6

// Problem 11: Replace substring
function replaceSubstring(str, oldStr, newStr) {
  // Your code here
}
console.log("11. Replace 'world' with 'JS' in 'hello world':", replaceSubstring("hello world", "world", "JS")); // Expected: "hello JS"

// Problem 12: Split string into array
function splitString(str) {
  // Split by space
  // Your code here
}
console.log("12. Split 'hello world from JS':", splitString("hello world from JS")); // Expected: ["hello", "world", "from", "JS"]

// Problem 13: Repeat string n times
function repeatString(str, n) {
  // Your code here
}
console.log("13. Repeat 'ha' 3 times:", repeatString("ha", 3)); // Expected: "hahaha"

// Problem 14: Trim whitespace
function trimSpaces(str) {
  // Your code here
}
console.log("14. Trim '  hello  ':", `'${trimSpaces("  hello  ")}'`); // Expected: 'hello'

// Problem 15: Create template literal greeting
function createGreeting(name, age) {
  // Return template literal: "My name is [name] and I am [age] years old"
  // Your code here
}
console.log("15. Greeting for John, 25:", createGreeting("John", 25)); // Expected: "My name is John and I am 25 years old"
