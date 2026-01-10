# Day 9: Arrays - Basics

## Array Creation

### Methods to Create Arrays
```javascript
// Array literal
const arr1 = [1, 2, 3];

// Array constructor
const arr2 = new Array(5);  // Creates array with 5 empty slots
const arr3 = new Array(1, 2, 3);  // Creates [1, 2, 3]

// Array.of()
const arr4 = Array.of(7);  // [7]

// Array.from()
const arr5 = Array.from('hello');  // ['h', 'e', 'l', 'l', 'o']
const arr6 = Array.from({length: 5}, (_, i) => i);  // [0,1,2,3,4]

// Fill method
const arr7 = new Array(5).fill(0);  // [0,0,0,0,0]
```

## Array Properties

```javascript
const arr = [1, 2, 3, 4, 5];
arr.length;  // 5

// Length is mutable
arr.length = 3;  // arr becomes [1, 2, 3]
arr.length = 5;  // arr becomes [1, 2, 3, undefined, undefined]
```

## Accessing Elements

```javascript
const arr = [10, 20, 30, 40, 50];

// By index
arr[0];  // 10
arr[arr.length - 1];  // 50 (last element)

// at() method (supports negative indices)
arr.at(0);  // 10
arr.at(-1);  // 50 (last element)
arr.at(-2);  // 40 (second last)
```

## Adding/Removing Elements

### At End
```javascript
const arr = [1, 2, 3];

// push() - add to end
arr.push(4);  // [1, 2, 3, 4], returns 4 (new length)

// pop() - remove from end
const last = arr.pop();  // [1, 2, 3], returns 4
```

### At Beginning
```javascript
const arr = [1, 2, 3];

// unshift() - add to beginning
arr.unshift(0);  // [0, 1, 2, 3], returns 4

// shift() - remove from beginning
const first = arr.shift();  // [1, 2, 3], returns 0
```

### At Specific Position
```javascript
const arr = [1, 2, 3, 4, 5];

// splice(start, deleteCount, ...items)
arr.splice(2, 0, 'a', 'b');  // [1, 2, 'a', 'b', 3, 4, 5]
arr.splice(2, 2);  // [1, 2, 3, 4, 5] (removes 'a', 'b')
arr.splice(1, 1, 'x');  // [1, 'x', 3, 4, 5] (replaces 2 with 'x')
```

## Array Traversal

### For Loop
```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### For...of
```javascript
for (const element of arr) {
  console.log(element);
}
```

### For...in (avoid - iterates indices)
```javascript
for (const index in arr) {
  console.log(arr[index]);
}
```

### forEach()
```javascript
arr.forEach((element, index, array) => {
  console.log(element, index);
});
```

## Common Array Operations

### Finding Elements
```javascript
const arr = [1, 2, 3, 4, 5];

// indexOf() - returns index or -1
arr.indexOf(3);  // 2
arr.indexOf(10);  // -1

// lastIndexOf() - searches from end
[1, 2, 3, 2, 1].lastIndexOf(2);  // 3

// includes() - returns boolean
arr.includes(3);  // true
arr.includes(10);  // false

// find() - returns first matching element
arr.find(x => x > 3);  // 4

// findIndex() - returns index of first match
arr.findIndex(x => x > 3);  // 3
```

### Checking Conditions
```javascript
const arr = [1, 2, 3, 4, 5];

// every() - all elements satisfy condition
arr.every(x => x > 0);  // true
arr.every(x => x > 3);  // false

// some() - at least one satisfies condition
arr.some(x => x > 3);  // true
arr.some(x => x > 10);  // false
```

## Array Slicing & Joining

### slice()
Extract portion (doesn't modify original)
```javascript
const arr = [1, 2, 3, 4, 5];

arr.slice(1, 3);  // [2, 3]
arr.slice(2);  // [3, 4, 5]
arr.slice(-2);  // [4, 5]
arr.slice();  // [1, 2, 3, 4, 5] (copy)
```

### concat()
Join arrays
```javascript
const arr1 = [1, 2];
const arr2 = [3, 4];

arr1.concat(arr2);  // [1, 2, 3, 4]
arr1.concat(arr2, [5, 6]);  // [1, 2, 3, 4, 5, 6]
```

### join()
Convert to string
```javascript
const arr = ['Hello', 'World'];

arr.join();  // "Hello,World"
arr.join(' ');  // "Hello World"
arr.join('-');  // "Hello-World"
```

## Array Modification

### reverse()
Reverse in-place
```javascript
const arr = [1, 2, 3];
arr.reverse();  // [3, 2, 1] (modifies original)
```

### sort()
Sort in-place
```javascript
const arr = [3, 1, 4, 1, 5];

// Default: lexicographic sort
arr.sort();  // [1, 1, 3, 4, 5]

// Custom comparator for numbers
arr.sort((a, b) => a - b);  // Ascending
arr.sort((a, b) => b - a);  // Descending
```

### fill()
Fill with value
```javascript
const arr = [1, 2, 3, 4, 5];

arr.fill(0);  // [0, 0, 0, 0, 0]
arr.fill(7, 2, 4);  // [0, 0, 7, 7, 0]
```

## Array Copying

### Shallow Copy
```javascript
const original = [1, 2, 3];

// Spread operator
const copy1 = [...original];

// slice()
const copy2 = original.slice();

// Array.from()
const copy3 = Array.from(original);
```

### Deep Copy (for nested arrays)
```javascript
const nested = [[1, 2], [3, 4]];

// JSON method (limitations: no functions, undefined, etc.)
const deepCopy = JSON.parse(JSON.stringify(nested));

// structuredClone() (modern browsers)
const deepCopy2 = structuredClone(nested);
```

## Multidimensional Arrays

```javascript
// Create 2D array
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Access elements
matrix[0][0];  // 1
matrix[1][2];  // 6

// Create with Array.from
const matrix2 = Array.from({length: 3}, () => Array(3).fill(0));
```

## Common Patterns

### Sum of array
```javascript
const sum = arr.reduce((acc, val) => acc + val, 0);
```

### Max/Min
```javascript
const max = Math.max(...arr);
const min = Math.min(...arr);
```

### Remove duplicates
```javascript
const unique = [...new Set(arr)];
```

### Flatten array
```javascript
const nested = [1, [2, 3], [4, [5]]];
const flat = nested.flat(2);  // [1, 2, 3, 4, 5]
```

## Performance Considerations

| Operation | Time Complexity |
|-----------|----------------|
| Access by index | O(1) |
| Push/Pop | O(1) |
| Shift/Unshift | O(n) |
| Splice | O(n) |
| indexOf/includes | O(n) |
| sort | O(n log n) |

## Best Practices

1. **Use const for arrays** (prevents reassignment, not mutation)
2. **Prefer functional methods** (map, filter, reduce)
3. **Avoid modifying during iteration**
4. **Cache length in performance-critical loops**
5. **Use spread operator for copying**
