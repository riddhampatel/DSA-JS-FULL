# Day 10: Arrays - Intermediate

## Array Methods (map, filter, reduce)

### map()
Transform each element
```javascript
const nums = [1, 2, 3, 4];

// Double each number
nums.map(x => x * 2);  // [2, 4, 6, 8]

// With index
nums.map((x, i) => x + i);  // [1, 3, 5, 7]

// Object transformation
const users = [{name: 'John', age: 30}];
users.map(u => u.name);  // ['John']
```

### filter()
Keep elements matching condition
```javascript
const nums = [1, 2, 3, 4, 5, 6];

// Even numbers
nums.filter(x => x % 2 === 0);  // [2, 4, 6]

// Greater than 3
nums.filter(x => x > 3);  // [4, 5, 6]

// Filter objects
const users = [
  {name: 'John', age: 30},
  {name: 'Jane', age: 25}
];
users.filter(u => u.age > 26);  // [{name: 'John', age: 30}]
```

### reduce()
Reduce to single value
```javascript
const nums = [1, 2, 3, 4, 5];

// Sum
nums.reduce((acc, val) => acc + val, 0);  // 15

// Product
nums.reduce((acc, val) => acc * val, 1);  // 120

// Max
nums.reduce((max, val) => Math.max(max, val), -Infinity);  // 5

// Group by
const people = [
  {name: 'John', age: 30},
  {name: 'Jane', age: 25},
  {name: 'Bob', age: 30}
];
people.reduce((groups, person) => {
  (groups[person.age] = groups[person.age] || []).push(person);
  return groups;
}, {});
```

## Chaining Methods

```javascript
const nums = [1, 2, 3, 4, 5, 6];

nums
  .filter(x => x % 2 === 0)  // [2, 4, 6]
  .map(x => x * 2)           // [4, 8, 12]
  .reduce((sum, x) => sum + x, 0);  // 24
```

## Array Searching

### Linear Search
```javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

### Binary Search (sorted array)
```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

### Find first/last occurrence
```javascript
function findFirst(arr, target) {
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}

function findLast(arr, target) {
  let index = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      index = i;
      break;
    }
  }
  return index;
}
```

## Array Sorting

### Built-in sort()
```javascript
// Numbers (ascending)
arr.sort((a, b) => a - b);

// Numbers (descending)
arr.sort((a, b) => b - a);

// Strings (case-insensitive)
arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// Objects by property
arr.sort((a, b) => a.age - b.age);
```

### Custom Sorting Algorithms

#### Bubble Sort
```javascript
function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

#### Selection Sort
```javascript
function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}
```

#### Insertion Sort
```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
```

## Advanced Array Operations

### Rotating Array
```javascript
// Rotate right by k positions
function rotateRight(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// Rotate left by k positions
function rotateLeft(arr, k) {
  k = k % arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
}
```

### Chunk Array
```javascript
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

chunk([1,2,3,4,5], 2);  // [[1,2], [3,4], [5]]
```

### Zip Arrays
```javascript
function zip(...arrays) {
  const maxLength = Math.max(...arrays.map(a => a.length));
  return Array.from({length: maxLength}, (_, i) =>
    arrays.map(arr => arr[i])
  );
}

zip([1,2,3], ['a','b','c']);  // [[1,'a'], [2,'b'], [3,'c']]
```

### Partition Array
```javascript
function partition(arr, predicate) {
  const pass = [];
  const fail = [];
  arr.forEach(item => {
    (predicate(item) ? pass : fail).push(item);
  });
  return [pass, fail];
}

partition([1,2,3,4,5], x => x % 2 === 0);  // [[2,4], [1,3,5]]
```

## Two Pointer Technique

### Remove Duplicates (sorted)
```javascript
function removeDuplicates(arr) {
  if (arr.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < arr.length; read++) {
    if (arr[read] !== arr[read - 1]) {
      arr[write++] = arr[read];
    }
  }
  return write;
}
```

### Two Sum
```javascript
function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  return [];
}
```

### Merge Sorted Arrays
```javascript
function merge(arr1, arr2) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}
```

## Sliding Window

### Max Sum Subarray of Size K
```javascript
function maxSumSubarray(arr, k) {
  let maxSum = 0, windowSum = 0;
  
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  
  return maxSum;
}
```

## Performance Tips

1. **Use map over forEach for transformations**
2. **Use filter + map instead of forEach with if**
3. **Cache array length in tight loops**
4. **Use Set for membership tests** (O(1) vs O(n))
5. **Use binary search for sorted arrays**

## Common Patterns

### Frequency Counter
```javascript
const freq = arr.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
```

### Cumulative Sum
```javascript
const cumSum = arr.reduce((acc, val) => {
  acc.push((acc[acc.length - 1] || 0) + val);
  return acc;
}, []);
```

### Finding Min/Max
```javascript
const max = arr.reduce((max, val) => Math.max(max, val), -Infinity);
const min = arr.reduce((min, val) => Math.min(min, val), Infinity);
```

### Array Difference
```javascript
const diff = arr1.filter(x => !arr2.includes(x));
// Better with Set
const set2 = new Set(arr2);
const diff = arr1.filter(x => !set2.has(x));
```

## Time Complexity Reference

| Operation | Time |
|-----------|------|
| map/filter/reduce | O(n) |
| sort | O(n log n) |
| indexOf/includes | O(n) |
| Binary search | O(log n) |
| Two pointer | O(n) |
| Sliding window | O(n) |
