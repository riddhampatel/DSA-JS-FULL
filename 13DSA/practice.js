// Day 13 - String Advanced Practice
// Hands-on exercises for palindrome, anagram, frequency, and substring problems

console.log("=== Day 13 Practice: String Advanced ===\n");

// Practice 1: Check if string can be rearranged to form palindrome
// Hint: Only one character can have odd frequency
function canFormPalindrome(str) {
  const freq = new Map();
  for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  let oddCount = 0;
  for (const count of freq.values()) {
    if (count % 2 === 1) oddCount++;
  }
  return oddCount <= 1;
}
console.log("Practice 1: Can Form Palindrome");
console.log("   'aab' (can rearrange to 'aba') =>", canFormPalindrome("aab")); // true
console.log("   'abc' =>", canFormPalindrome("abc")); // false
console.log();

// Practice 2: Compress string (e.g., 'aaabbc' -> 'a3b2c')
function compressString(str) {
  let compressed = "";
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (i + 1 >= str.length || str[i] !== str[i + 1]) {
      compressed += str[i] + count;
      count = 1;
    } else {
      count++;
    }
  }
  
  return compressed.length < str.length ? compressed : str;
}
console.log("Practice 2: Compress String");
console.log("   'aaabbc' =>", compressString("aaabbc")); // "a3b2c"
console.log("   'ab' =>", compressString("ab")); // "ab"
console.log();

// Practice 3: Rotate string (check if s2 is rotation of s1)
// Hint: If s2 is rotation of s1, it will be a substring of s1+s1
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}
console.log("Practice 3: Is Rotation of String");
console.log("   'waterbottle' rotated to 'erbottlewat' =>", isRotation("waterbottle", "erbottlewat")); // true
console.log("   'hello' rotated to 'world' =>", isRotation("hello", "world")); // false
console.log();

// Practice 4: Find all permutations of a string
function getPermutations(str) {
  const result = [];
  
  function permute(chars, start) {
    if (start === chars.length - 1) {
      result.push(chars.join(''));
      return;
    }
    
    for (let i = start; i < chars.length; i++) {
      [chars[start], chars[i]] = [chars[i], chars[start]];
      permute(chars, start + 1);
      [chars[start], chars[i]] = [chars[i], chars[start]];
    }
  }
  
  permute(str.split(''), 0);
  return result;
}
console.log("Practice 4: All Permutations");
console.log("   'abc' =>", getPermutations("abc")); // ["abc", "acb", "bac", "bca", "cab", "cba"]
console.log();

// Practice 5: Remove consecutive duplicates
function removeConsecutiveDuplicates(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i] !== str[i - 1]) {
      result += str[i];
    }
  }
  return result;
}
console.log("Practice 5: Remove Consecutive Duplicates");
console.log("   'aabbcc' =>", removeConsecutiveDuplicates("aabbcc")); // "abc"
console.log("   'aabbbcccc' =>", removeConsecutiveDuplicates("aabbbcccc")); // "abc"
console.log();

// Practice 6: Most frequent character
function mostFrequentChar(str) {
  const freq = new Map();
  let maxChar = str[0], maxCount = 0;
  
  for (const ch of str) {
    if (ch === ' ') continue;
    const count = (freq.get(ch) || 0) + 1;
    freq.set(ch, count);
    if (count > maxCount) {
      maxCount = count;
      maxChar = ch;
    }
  }
  return { char: maxChar, count: maxCount };
}
console.log("Practice 6: Most Frequent Character");
console.log("   'hello world' =>", mostFrequentChar("hello world")); // { char: 'l', count: 3 }
console.log();

// Practice 7: Find longest common prefix
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  
  for (let i = 0; i < strs[0].length; i++) {
    const ch = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== ch) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}
console.log("Practice 7: Longest Common Prefix");
console.log("   ['flower','flow','flight'] =>", longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log();

// Practice 8: Check if all unique characters
function hasAllUniqueChars(str) {
  return new Set(str).size === str.length;
}
console.log("Practice 8: All Unique Characters");
console.log("   'hello' =>", hasAllUniqueChars("hello")); // false
console.log("   'abcd' =>", hasAllUniqueChars("abcd")); // true
console.log();

module.exports = {
  canFormPalindrome,
  compressString,
  isRotation,
  getPermutations,
  removeConsecutiveDuplicates,
  mostFrequentChar,
  longestCommonPrefix,
  hasAllUniqueChars,
};
