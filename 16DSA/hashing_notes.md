# Day 16: Hashing & Set/Map 📚

## Hashing Concepts

### What is Hashing?
- **Hash Function:** A function that converts input into a fixed-size value (hash code)
- **Hash Table:** Data structure for mapping keys to values
- **Collision:** When multiple keys hash to same index (handled by chaining or open addressing)
- **Load Factor:** Ratio of elements to table size

### Hash Map vs Object vs Map

#### JavaScript Object (as Hash Map)
```javascript
const obj = {};
obj['key'] = 'value';
console.log(obj['key']); // 'value'
```
- Simple key-value pairs
- Keys are converted to strings
- Prototype chain can affect lookups

#### Map Data Structure
```javascript
const map = new Map();
map.set('key', 'value');
console.log(map.get('key')); // 'value'
```
- Keys can be any data type
- Maintains insertion order
- Better for frequent additions/deletions
- Has built-in methods: set, get, has, delete, clear

#### Set Data Structure
```javascript
const set = new Set([1, 2, 3]);
set.add(4);
console.log(set.has(3)); // true
```
- Stores unique values only
- No duplicates allowed
- Fast lookup: O(1)
- No key-value pairs, only values

---

## Common Hashing Problems

### 1. **Two Sum**
Problem: Find two numbers in array that add up to target
```javascript
// Using Hash Map - O(n) time
const twoSum = (arr, target) => {
  const seen = new Map();
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      return [complement, num];
    }
    seen.set(num, true);
  }
  return null;
};
```

### 2. **Group Anagrams**
Problem: Group strings that are anagrams
```javascript
// Using sorted strings as key
const groupAnagrams = (words) => {
  const map = new Map();
  for (let word of words) {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }
  return Array.from(map.values());
};
```

### 3. **First Unique Character in String**
```javascript
const firstUnique = (s) => {
  const freq = new Map();
  
  // Count frequency
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  
  // Find first unique
  for (let char of s) {
    if (freq.get(char) === 1) {
      return s.indexOf(char);
    }
  }
  return -1;
};
```

### 4. **Majority Element**
Problem: Find element appearing more than n/2 times
```javascript
const majorityElement = (arr) => {
  const freq = new Map();
  const n = arr.length;
  
  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
    if (freq.get(num) > n / 2) {
      return num;
    }
  }
  return null;
};
```

### 5. **Contains Duplicate**
```javascript
const containsDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
};
```

### 6. **Valid Anagram**
```javascript
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  const freq = new Map();
  
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  
  for (let char of t) {
    if (!freq.has(char)) return false;
    freq.set(char, freq.get(char) - 1);
    if (freq.get(char) < 0) return false;
  }
  
  return true;
};
```

---

## Time Complexities
| Operation | Time | Space |
|-----------|------|-------|
| Insert (Hash Map) | O(1) avg, O(n) worst | O(n) |
| Search (Hash Map) | O(1) avg, O(n) worst | O(n) |
| Delete (Hash Map) | O(1) avg, O(n) worst | O(n) |
| Insert (Set) | O(1) avg | O(n) |
| Contains (Set) | O(1) avg | O(n) |

---

## Key Points to Remember
✅ Hash maps are great for lookups and frequency counting
✅ Sets are perfect for finding unique elements
✅ Maps maintain insertion order in JavaScript
✅ Objects convert keys to strings (be careful!)
✅ For most problems, O(1) lookup beats sorting
✅ Use Map/Set for better performance with non-string keys
