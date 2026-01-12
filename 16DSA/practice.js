// Day 16: Practice Problems - Hashing & Set/Map

console.log("===== Day 16: Practice Problems =====\n");

// ========================================
// Problem 1: Check if array has duplicates
// ========================================
console.log("1. Check if Array has Duplicates");
const hasDuplicates = (arr) => {
  return new Set(arr).size !== arr.length;
};

console.log("Input: [1, 2, 3, 1]");
console.log("Output:", hasDuplicates([1, 2, 3, 1])); // true
console.log();

// ========================================
// Problem 2: Find unique elements
// ========================================
console.log("2. Find Unique Elements");
const findUnique = (arr) => {
  return [...new Set(arr)];
};

console.log("Input: [1, 2, 2, 3, 3, 3, 4]");
console.log("Output:", findUnique([1, 2, 2, 3, 3, 3, 4])); // [1, 2, 3, 4]
console.log();

// ========================================
// Problem 3: Count frequency of elements
// ========================================
console.log("3. Count Frequency of Elements");
const countFrequency = (arr) => {
  const freq = new Map();
  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  return freq;
};

console.log("Input: [1, 2, 2, 3, 3, 3]");
console.log("Output:", countFrequency([1, 2, 2, 3, 3, 3]));
console.log();

// ========================================
// Problem 4: Most frequent element
// ========================================
console.log("4. Most Frequent Element");
const mostFrequent = (arr) => {
  const freq = new Map();
  let maxFreq = 0;
  let maxElement = null;
  
  for (let num of arr) {
    const count = (freq.get(num) || 0) + 1;
    freq.set(num, count);
    if (count > maxFreq) {
      maxFreq = count;
      maxElement = num;
    }
  }
  
  return { element: maxElement, frequency: maxFreq };
};

console.log("Input: [1, 2, 2, 3, 3, 3, 4, 4]");
console.log("Output:", mostFrequent([1, 2, 2, 3, 3, 3, 4, 4])); // {element: 3, frequency: 3}
console.log();

// ========================================
// Problem 5: Two Sum variations
// ========================================
console.log("5. Two Sum Variations");
const twoSumCount = (arr, target) => {
  const seen = new Set();
  let count = 0;
  
  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      count++;
    }
    seen.add(num);
  }
  
  return count;
};

console.log("Input: [1, 5, 7, -1, 5], target = 6");
console.log("Count of pairs:", twoSumCount([1, 5, 7, -1, 5], 6)); // 2 (1+5, 1+5)
console.log();

// ========================================
// Problem 6: Find missing number
// ========================================
console.log("6. Find Missing Number");
const findMissing = (arr) => {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  const arrSum = arr.reduce((a, b) => a + b, 0);
  return sum - arrSum;
};

console.log("Input: [1, 2, 3, 5] (missing 4)");
console.log("Output:", findMissing([1, 2, 3, 5])); // 4
console.log();

// ========================================
// Problem 7: Longest substring without repeating
// ========================================
console.log("7. Longest Substring Without Repeating Characters");
const lengthOfLongestSubstring = (s) => {
  const charIndex = new Map();
  let maxLen = 0;
  let start = 0;
  
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charIndex.has(char)) {
      start = Math.max(start, charIndex.get(char) + 1);
    }
    charIndex.set(char, i);
    maxLen = Math.max(maxLen, i - start + 1);
  }
  
  return maxLen;
};

console.log("Input: 'abcabcbb'");
console.log("Output:", lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log("Input: 'bbbbb'");
console.log("Output:", lengthOfLongestSubstring("bbbbb")); // 1
console.log();

// ========================================
// Problem 8: Anagram check
// ========================================
console.log("8. Check if Anagram");
const checkAnagram = (str1, str2) => {
  const normalize = (str) => str.replace(/\s/g, '').toLowerCase();
  const s1 = normalize(str1);
  const s2 = normalize(str2);
  
  if (s1.length !== s2.length) return false;
  
  const freq = new Map();
  for (let char of s1) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  
  for (let char of s2) {
    if (!freq.has(char)) return false;
    freq.set(char, freq.get(char) - 1);
  }
  
  return true;
};

console.log("Input: 'listen', 'silent'");
console.log("Output:", checkAnagram("listen", "silent")); // true
console.log();

// ========================================
// Problem 9: Majority element (using Map)
// ========================================
console.log("9. Majority Element (> n/3)");
const majorityElementsNBy3 = (arr) => {
  const freq = new Map();
  const result = [];
  const threshold = arr.length / 3;
  
  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  
  for (let [num, count] of freq) {
    if (count > threshold) {
      result.push(num);
    }
  }
  
  return result;
};

console.log("Input: [1, 1, 1, 3, 3, 2, 2, 2]");
console.log("Output:", majorityElementsNBy3([1, 1, 1, 3, 3, 2, 2, 2])); // [1, 2]
console.log();

// ========================================
// Problem 10: Index of first occurrence
// ========================================
console.log("10. First Occurrence Index");
const firstOccurrence = (arr, target) => {
  const indexMap = new Map();
  
  for (let i = 0; i < arr.length; i++) {
    if (!indexMap.has(arr[i])) {
      indexMap.set(arr[i], i);
    }
  }
  
  return indexMap.has(target) ? indexMap.get(target) : -1;
};

console.log("Input: [2, 5, 7, 2, 9], target = 2");
console.log("Output:", firstOccurrence([2, 5, 7, 2, 9], 2)); // 0
console.log();

// ========================================
// Problem 11: Anagram pairs
// ========================================
console.log("11. Find All Anagram Pairs");
const findAnagramPairs = (words) => {
  const map = new Map();
  const result = [];
  
  for (let word of words) {
    const sorted = word.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(word);
  }
  
  for (let group of map.values()) {
    if (group.length > 1) {
      result.push(group);
    }
  }
  
  return result;
};

console.log("Input: ['eat', 'tea', 'tan', 'ate', 'nat']");
console.log("Output:", findAnagramPairs(['eat', 'tea', 'tan', 'ate', 'nat']));
console.log();

// ========================================
// Problem 12: Set operations
// ========================================
console.log("12. Set Operations");

const union = (set1, set2) => new Set([...set1, ...set2]);
const intersection = (set1, set2) => new Set([...set1].filter(x => set2.has(x)));
const difference = (set1, set2) => new Set([...set1].filter(x => !set2.has(x)));

const s1 = new Set([1, 2, 3, 4]);
const s2 = new Set([3, 4, 5, 6]);

console.log("Set 1:", s1);
console.log("Set 2:", s2);
console.log("Union:", union(s1, s2));
console.log("Intersection:", intersection(s1, s2));
console.log("Difference (S1 - S2):", difference(s1, s2));
console.log();

// ========================================
// Problem 13: Convert array to Set and back
// ========================================
console.log("13. Array ↔ Set Conversion");
const arr = [1, 2, 2, 3, 3, 3];
const set = new Set(arr);
const backToArray = [...set];

console.log("Original array:", arr);
console.log("Converted to Set:", set);
console.log("Back to array (unique):", backToArray);
console.log();

// ========================================
// Problem 14: Check if two arrays are equal
// ========================================
console.log("14. Check if Two Arrays are Equal");
const areEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return set1.size === set2.size && [...set1].every(x => set2.has(x));
};

console.log("Array 1: [1, 2, 3], Array 2: [3, 1, 2]");
console.log("Are equal:", areEqual([1, 2, 3], [3, 1, 2])); // true
console.log();

// ========================================
// Problem 15: Custom object hashing
// ========================================
console.log("15. Store Objects in Map");
const userMap = new Map();
const user1 = { id: 1, name: 'Alice' };
const user2 = { id: 2, name: 'Bob' };

userMap.set(user1.id, user1);
userMap.set(user2.id, user2);

console.log("User Map:");
for (let [id, user] of userMap) {
  console.log(`  ${id}:`, user);
}
console.log();
