# Day 12: Strings - Basics

## String Creation

### Three Ways to Create Strings
```javascript
// 1. Single quotes
let str1 = 'Hello';

// 2. Double quotes
let str2 = "World";

// 3. Template literals (backticks)
let str3 = `Hello ${str1}`;  // Can embed expressions
```

### Template Literals
```javascript
const name = "John";
const age = 25;

// Multi-line strings
const message = `Hello ${name}!
You are ${age} years old.
Next year you'll be ${age + 1}.`;

// Expression evaluation
const result = `Sum: ${10 + 20}`;  // "Sum: 30"
```

## String Properties

### Length
```javascript
const str = "Hello";
console.log(str.length);  // 5

// Empty string
"".length  // 0

// String with spaces
"Hello World".length  // 11
```

## Accessing Characters

### Indexing (0-based)
```javascript
const str = "JavaScript";

// Bracket notation
str[0]  // 'J'
str[4]  // 'S'
str[str.length - 1]  // 't' (last char)

// Out of bounds
str[100]  // undefined

// Negative index (doesn't work directly)
str[-1]  // undefined
```

### charAt() Method
```javascript
const str = "Hello";

str.charAt(0)  // 'H'
str.charAt(4)  // 'o'
str.charAt(10)  // '' (empty string, not undefined)
```

### at() Method (Modern)
```javascript
const str = "JavaScript";

str.at(0)   // 'J'
str.at(-1)  // 't' (last character)
str.at(-2)  // 'p' (second last)
```

### charCodeAt() - Get ASCII/Unicode value
```javascript
'A'.charCodeAt(0)  // 65
'a'.charCodeAt(0)  // 97
'0'.charCodeAt(0)  // 48

// Get char from code
String.fromCharCode(65)  // 'A'
String.fromCharCode(97)  // 'a'
```

## String Immutability

**Strings are immutable** - cannot be changed after creation
```javascript
let str = "Hello";
str[0] = 'J';  // No effect
console.log(str);  // Still "Hello"

// Must create new string
str = 'J' + str.slice(1);  // "Jello"
```

## Basic String Methods

### Case Conversion
```javascript
const str = "Hello World";

str.toLowerCase()  // "hello world"
str.toUpperCase()  // "HELLO WORLD"

// Original unchanged
console.log(str);  // "Hello World"
```

### Searching

#### indexOf()
```javascript
const str = "Hello World";

str.indexOf('o')      // 4 (first occurrence)
str.indexOf('o', 5)   // 7 (search from index 5)
str.indexOf('x')      // -1 (not found)
str.indexOf('World')  // 6 (can search substrings)
```

#### lastIndexOf()
```javascript
const str = "Hello World";

str.lastIndexOf('o')    // 7 (last occurrence)
str.lastIndexOf('l')    // 9
str.lastIndexOf('x')    // -1 (not found)
```

#### includes()
```javascript
const str = "JavaScript";

str.includes('Script')  // true
str.includes('Java')    // true
str.includes('Python')  // false

// Case sensitive
str.includes('script')  // false
```

#### startsWith() / endsWith()
```javascript
const str = "Hello World";

str.startsWith('Hello')  // true
str.startsWith('World')  // false
str.endsWith('World')    // true
str.endsWith('world')    // false (case sensitive)

// Optional position parameter
str.startsWith('World', 6)  // true (check from index 6)
```

### Extracting Substrings

#### slice(start, end)
```javascript
const str = "JavaScript";

str.slice(0, 4)   // "Java"
str.slice(4)      // "Script"
str.slice(-6)     // "Script" (last 6 chars)
str.slice(-6, -2) // "Scri"
```

#### substring(start, end)
```javascript
const str = "JavaScript";

str.substring(0, 4)  // "Java"
str.substring(4)     // "Script"

// Negative treated as 0
str.substring(-3)    // "JavaScript" (same as str.substring(0))

// If start > end, they swap
str.substring(4, 0)  // "Java" (same as str.substring(0, 4))
```

#### substr(start, length) - DEPRECATED
```javascript
const str = "JavaScript";

str.substr(0, 4)  // "Java"
str.substr(4, 6)  // "Script"
str.substr(-6, 4) // "Scri"
```

### Trimming Whitespace

```javascript
const str = "  Hello World  ";

str.trim()       // "Hello World"
str.trimStart()  // "Hello World  "
str.trimEnd()    // "  Hello World"

// Also: trimLeft() and trimRight() (aliases)
```

### Replacing

#### replace() - First occurrence
```javascript
const str = "Hello World, Hello Universe";

str.replace('Hello', 'Hi')  // "Hi World, Hello Universe"
str.replace('hello', 'Hi')  // No change (case sensitive)

// With regex (all occurrences)
str.replace(/Hello/g, 'Hi')  // "Hi World, Hi Universe"
```

#### replaceAll() - All occurrences
```javascript
const str = "Hello World, Hello Universe";

str.replaceAll('Hello', 'Hi')  // "Hi World, Hi Universe"
```

### Splitting

```javascript
const str = "apple,banana,orange";

str.split(',')    // ['apple', 'banana', 'orange']
str.split('')     // ['a', 'p', 'p', 'l', 'e', ',', ...]
str.split()       // ['apple,banana,orange'] (whole string in array)

// Limit
str.split(',', 2)  // ['apple', 'banana']
```

### Joining (Array to String)

```javascript
const arr = ['apple', 'banana', 'orange'];

arr.join()       // "apple,banana,orange"
arr.join('')     // "applebananaorange"
arr.join(' ')    // "apple banana orange"
arr.join(' - ')  // "apple - banana - orange"
```

### Concatenation

```javascript
const str1 = "Hello";
const str2 = "World";

// Using +
str1 + " " + str2  // "Hello World"

// Using concat()
str1.concat(" ", str2)  // "Hello World"

// Template literals (preferred)
`${str1} ${str2}`  // "Hello World"
```

### Padding

```javascript
const str = "5";

str.padStart(3, '0')  // "005"
str.padEnd(3, '0')    // "500"

// Default padding is space
"Hi".padStart(5)      // "   Hi"
```

### Repeating

```javascript
"Ha".repeat(3)   // "HaHaHa"
"*".repeat(5)    // "*****"
"".repeat(3)     // ""
```

## String Comparison

```javascript
// Lexicographical comparison
"apple" < "banana"   // true
"z" > "a"            // true
"10" < "2"           // true (string comparison!)

// Case matters
"A" < "a"            // true (uppercase comes first)

// For proper numeric comparison
parseInt("10") < parseInt("2")  // false

// Case-insensitive comparison
str1.toLowerCase() === str2.toLowerCase()
```

## String to Number Conversion

```javascript
// parseInt()
parseInt("123")      // 123
parseInt("123.45")   // 123
parseInt("abc")      // NaN
parseInt("12px")     // 12

// parseFloat()
parseFloat("123.45") // 123.45
parseFloat("12.5px") // 12.5

// Number()
Number("123")        // 123
Number("123.45")     // 123.45
Number("abc")        // NaN

// Unary +
+"123"               // 123
+"123.45"            // 123.45
```

## Common String Patterns

### Check if string is empty
```javascript
if (str === "" || str.length === 0) { }

// Or with trim (ignores whitespace)
if (str.trim() === "") { }
```

### Reverse a string
```javascript
const reversed = str.split('').reverse().join('');
```

### Count character frequency
```javascript
const freq = {};
for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}
```

### Check palindrome (basic)
```javascript
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
```

### Remove spaces
```javascript
str.replace(/\s/g, '')  // All whitespace
str.split(' ').join('') // Only spaces
```

### Title case
```javascript
function titleCase(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}
```

## Escape Sequences

```javascript
'\n'   // Newline
'\t'   // Tab
'\\'   // Backslash
'\''   // Single quote
'\"'   // Double quote
'\r'   // Carriage return
'\b'   // Backspace

// Unicode
'\u0041'  // 'A'
'\u2764'  // '❤'
```

## Performance Tips

1. **Use template literals** for concatenation
2. **Cache length** in loops: `const len = str.length`
3. **Use indexOf over includes** when you need position
4. **Use === for comparison** (strict equality)
5. **Avoid repeated concatenation** in loops (use array + join)

## Common Mistakes

❌ **Modifying strings directly**
```javascript
str[0] = 'X';  // No effect
```

❌ **Confusing slice/substring parameters**
```javascript
slice(-3)      // Last 3 chars ✅
substring(-3)  // From start (treats as 0) ❌
```

❌ **Case-sensitive comparisons**
```javascript
"Hello" === "hello"  // false
```

❌ **String vs Number comparison**
```javascript
"10" < "2"     // true (string comparison)
10 < 2         // false (number comparison)
```

## Time Complexity

| Operation | Time | Example |
|-----------|------|---------|
| Access by index | O(1) | str[i] |
| Length | O(1) | str.length |
| indexOf/includes | O(n) | str.indexOf('x') |
| slice/substring | O(k) | str.slice(0, k) |
| split | O(n) | str.split(',') |
| replace | O(n) | str.replace('a', 'b') |
| concat/+ | O(n+m) | str1 + str2 |
| toLowerCase/Upper | O(n) | str.toLowerCase() |

Where n = string length, k = substring length, m = second string length
