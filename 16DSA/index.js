// Day 16: Hashing & Set/Map - Complete Problems

console.log("===== Day 16: Hashing & Set/Map =====\n");

// ========================================
// Problem 1: Two Sum
// ========================================
console.log("1. Two Sum");
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

console.log("Array: [2, 7, 11, 15], Target: 9");
console.log("Result:", twoSum([2, 7, 11, 15], 9)); // [2, 7]
console.log();

// ========================================
// Problem 2: Group Anagrams
// ========================================
console.log("2. Group Anagrams");
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

const words = ["eat", "tea", "ate", "bat", "tab", "cat"];
console.log("Words:", words);
console.log("Result:", groupAnagrams(words));
console.log();

// ========================================
// Problem 3: First Unique Character
// ========================================
console.log("3. First Unique Character in String");
const firstUnique = (s) => {
  const freq = new Map();
  
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  
  for (let char of s) {
    if (freq.get(char) === 1) {
      return char;
    }
  }
  return null;
};

console.log("String: 'leetcode'");
console.log("First unique:", firstUnique("leetcode")); // 'l'
console.log("String: 'loveleetcode'");
console.log("First unique:", firstUnique("loveleetcode")); // 'v'
console.log();

// ========================================
// Problem 4: Majority Element
// ========================================
console.log("4. Majority Element");
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

console.log("Array: [3, 2, 3]");
console.log("Majority element:", majorityElement([3, 2, 3])); // 3
console.log("Array: [2, 2, 1, 1, 1, 2, 2]");
console.log("Majority element:", majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log();

// ========================================
// Problem 5: Contains Duplicate
// ========================================
console.log("5. Contains Duplicate");
const containsDuplicate = (arr) => {
  return new Set(arr).size !== arr.length;
};

console.log("Array: [1, 2, 3, 1]");
console.log("Has duplicate:", containsDuplicate([1, 2, 3, 1])); // true
console.log("Array: [1, 2, 3, 4]");
console.log("Has duplicate:", containsDuplicate([1, 2, 3, 4])); // false
console.log();

// ========================================
// Problem 6: Valid Anagram
// ========================================
console.log("6. Valid Anagram");
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

console.log("s: 'anagram', t: 'nagaram'");
console.log("Is anagram:", isAnagram("anagram", "nagaram")); // true
console.log("s: 'rat', t: 'car'");
console.log("Is anagram:", isAnagram("rat", "car")); // false
console.log();

// ========================================
// Problem 7: Character Frequency Counter
// ========================================
console.log("7. Character Frequency Counter");
const charFrequency = (s) => {
  const freq = new Map();
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  return freq;
};

const str = "hello";
console.log("String:", str);
console.log("Frequency:", charFrequency(str));
console.log();

// ========================================
// Problem 8: Intersection of Two Arrays
// ========================================
console.log("8. Intersection of Two Arrays");
const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  return [...new Set(arr2.filter(num => set1.has(num)))];
};

console.log("Array 1: [1, 2, 2, 1], Array 2: [2, 2]");
console.log("Intersection:", intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log();

// ========================================
// Problem 9: Union of Two Arrays
// ========================================
console.log("9. Union of Two Arrays");
const union = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

console.log("Array 1: [1, 2, 3], Array 2: [2, 3, 4]");
console.log("Union:", union([1, 2, 3], [2, 3, 4])); // [1, 2, 3, 4]
console.log();

// ========================================
// Problem 10: Remove Duplicates from Array
// ========================================
console.log("10. Remove Duplicates");
const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log("Array: [1, 2, 2, 3, 3, 3, 4]");
console.log("Without duplicates:", removeDuplicates([1, 2, 2, 3, 3, 3, 4]));
console.log();
