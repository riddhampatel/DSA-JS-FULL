// Day 12: Strings - Basics
// String concepts and basic operations

console.log("=== Day 12: Strings Basics ===\n");

// 1. String Creation
let str1 = "Hello World";
let str2 = 'JavaScript';
let str3 = `Template Literal`;
console.log("1. String Creation:");
console.log("str1:", str1);
console.log("str2:", str2);
console.log("str3:", str3);
console.log();

// 2. String Length
console.log("2. String Length:");
console.log("Length of 'hello':", "hello".length);
console.log();

// 3. Accessing Characters
console.log("3. Accessing Characters:");
let word = "JavaScript";
console.log("First character:", word[0]);
console.log("Last character:", word[word.length - 1]);
console.log("charAt(2):", word.charAt(2));
console.log();

// 4. String Concatenation
console.log("4. String Concatenation:");
let first = "Hello";
let second = "World";
console.log("Using +:", first + " " + second);
console.log("Using concat():", first.concat(" ", second));
console.log();

// 5. String Methods - slice()
console.log("5. slice() Method:");
let text = "JavaScript";
console.log("Original:", text);
console.log("slice(0, 4):", text.slice(0, 4));
console.log("slice(4):", text.slice(4));
console.log("slice(-6):", text.slice(-6));
console.log();

// 6. String Methods - substring()
console.log("6. substring() Method:");
console.log("substring(0, 4):", text.substring(0, 4));
console.log("substring(4, 10):", text.substring(4, 10));
console.log();

// 7. Case Conversion
console.log("7. Case Conversion:");
let mixed = "Hello World";
console.log("Original:", mixed);
console.log("toUpperCase():", mixed.toUpperCase());
console.log("toLowerCase():", mixed.toLowerCase());
console.log();

// 8. String Search Methods
console.log("8. String Search:");
let sentence = "Hello World, Welcome to JavaScript";
console.log("Original:", sentence);
console.log("includes('World'):", sentence.includes("World"));
console.log("indexOf('World'):", sentence.indexOf("World"));
console.log("indexOf('Python'):", sentence.indexOf("Python"));
console.log("lastIndexOf('o'):", sentence.lastIndexOf("o"));
console.log();

// 9. String Replace
console.log("9. String Replace:");
let greeting = "Hello World";
console.log("Original:", greeting);
console.log("replace('World', 'JS'):", greeting.replace("World", "JS"));
console.log();

// 10. String Split
console.log("10. String Split:");
let words = "apple banana orange";
console.log("Original:", words);
console.log("split(' '):", words.split(" "));
console.log();

// 11. String Trim
console.log("11. String Trim:");
let spacedText = "   hello   ";
console.log("Original: '" + spacedText + "'");
console.log("trim(): '" + spacedText.trim() + "'");
console.log("trimStart(): '" + spacedText.trimStart() + "'");
console.log("trimEnd(): '" + spacedText.trimEnd() + "'");
console.log();

// 12. String Repeat
console.log("12. String Repeat:");
console.log("'ha'.repeat(3):", "ha".repeat(3));
console.log("'*'.repeat(5):", "*".repeat(5));
console.log();

// 13. Template Literals
console.log("13. Template Literals:");
let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old`);
console.log(`Sum of 5 + 3 = ${5 + 3}`);
console.log();

// 14. String Immutability
console.log("14. String Immutability:");
let original = "Hello";
console.log("Original:", original);
original[0] = "h"; // This won't work
console.log("After trying to change [0] to 'h':", original);
console.log("Strings are immutable in JavaScript");
console.log();

// 15. Multi-line Strings
console.log("15. Multi-line Strings:");
let multiLine = `This is
a multi-line
string using template literals`;
console.log(multiLine);
