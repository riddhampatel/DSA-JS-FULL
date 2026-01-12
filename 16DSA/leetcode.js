// Day 16: LeetCode Problems - Hashing & Set/Map

console.log("===== Day 16: LeetCode Problems =====\n");

// ========================================
// LeetCode 1: Two Sum (Easy)
// https://leetcode.com/problems/two-sum/
// ========================================
console.log("LeetCode 1: Two Sum");
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
};

console.log("Input: nums = [2,7,11,15], target = 9");
console.log("Output:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log("Input: nums = [3,2,4], target = 6");
console.log("Output:", twoSum([3, 2, 4], 6)); // [1, 2]
console.log();

// ========================================
// LeetCode 49: Group Anagrams (Medium)
// https://leetcode.com/problems/group-anagrams/
// ========================================
console.log("LeetCode 49: Group Anagrams");
const groupAnagrams = (strs) => {
  const map = new Map();
  for (let str of strs) {
    const key = str.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
};

console.log("Input: ['eat','tea','tan','ate','nat','bat']");
console.log("Output:", groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log();

// ========================================
// LeetCode 387: First Unique Character (Easy)
// https://leetcode.com/problems/first-unique-character-in-a-string/
// ========================================
console.log("LeetCode 387: First Unique Character");
const firstUniqChar = (s) => {
  const freq = new Map();
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (freq.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

console.log("Input: 'leetcode'");
console.log("Output:", firstUniqChar("leetcode")); // 0
console.log("Input: 'loveleetcode'");
console.log("Output:", firstUniqChar("loveleetcode")); // 2
console.log();

// ========================================
// LeetCode 169: Majority Element (Easy)
// https://leetcode.com/problems/majority-element/
// ========================================
console.log("LeetCode 169: Majority Element");
const majorityElement = (nums) => {
  const map = new Map();
  const n = nums.length;
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > n / 2) {
      return num;
    }
  }
};

console.log("Input: [3,2,3]");
console.log("Output:", majorityElement([3, 2, 3])); // 3
console.log("Input: [2,2,1,1,1,2,2]");
console.log("Output:", majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
console.log();

// ========================================
// LeetCode 217: Contains Duplicate (Easy)
// https://leetcode.com/problems/contains-duplicate/
// ========================================
console.log("LeetCode 217: Contains Duplicate");
const containsDuplicate = (nums) => {
  return new Set(nums).size !== nums.length;
};

console.log("Input: [1,2,3,1]");
console.log("Output:", containsDuplicate([1, 2, 3, 1])); // true
console.log("Input: [1,2,3,4]");
console.log("Output:", containsDuplicate([1, 2, 3, 4])); // false
console.log();

// ========================================
// LeetCode 242: Valid Anagram (Easy)
// https://leetcode.com/problems/valid-anagram/
// ========================================
console.log("LeetCode 242: Valid Anagram");
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

console.log("Input: s = 'anagram', t = 'nagaram'");
console.log("Output:", isAnagram("anagram", "nagaram")); // true
console.log("Input: s = 'rat', t = 'car'");
console.log("Output:", isAnagram("rat", "car")); // false
console.log();

// ========================================
// LeetCode 349: Intersection of Two Arrays (Easy)
// https://leetcode.com/problems/intersection-of-two-arrays/
// ========================================
console.log("LeetCode 349: Intersection of Two Arrays");
const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  return [...new Set(nums2.filter(num => set1.has(num)))];
};

console.log("Input: nums1 = [1,2,2,1], nums2 = [2,2]");
console.log("Output:", intersection([1, 2, 2, 1], [2, 2])); // [2]
console.log();

// ========================================
// LeetCode 350: Intersection of Two Arrays II (Easy)
// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// ========================================
console.log("LeetCode 350: Intersection of Two Arrays II");
const intersect = (nums1, nums2) => {
  const freq = new Map();
  for (let num of nums1) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  const result = [];
  for (let num of nums2) {
    if (freq.has(num) && freq.get(num) > 0) {
      result.push(num);
      freq.set(num, freq.get(num) - 1);
    }
  }
  return result;
};

console.log("Input: nums1 = [1,2,2,1], nums2 = [2,2]");
console.log("Output:", intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log();

// ========================================
// LeetCode 290: Word Pattern (Easy)
// https://leetcode.com/problems/word-pattern/
// ========================================
console.log("LeetCode 290: Word Pattern");
const wordPattern = (pattern, s) => {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  
  const charToWord = new Map();
  const wordToChar = new Map();
  
  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];
    
    if (charToWord.has(char)) {
      if (charToWord.get(char) !== word) return false;
    } else {
      charToWord.set(char, word);
    }
    
    if (wordToChar.has(word)) {
      if (wordToChar.get(word) !== char) return false;
    } else {
      wordToChar.set(word, char);
    }
  }
  
  return true;
};

console.log("Input: pattern = 'abba', s = 'dog cat cat dog'");
console.log("Output:", wordPattern("abba", "dog cat cat dog")); // true
console.log("Input: pattern = 'badc', s = 'dog cat cat fish'");
console.log("Output:", wordPattern("badc", "dog cat cat fish")); // false
console.log();

// ========================================
// LeetCode 202: Happy Number (Easy)
// https://leetcode.com/problems/happy-number/
// ========================================
console.log("LeetCode 202: Happy Number");
const isHappy = (n) => {
  const seen = new Set();
  
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit) ** 2, 0);
  }
  
  return n === 1;
};

console.log("Input: 7");
console.log("Output:", isHappy(7)); // true
console.log("Input: 2");
console.log("Output:", isHappy(2)); // false
console.log();
