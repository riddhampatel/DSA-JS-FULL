// Day 12: LeetCode String Problems (Basics)
// String manipulation, pattern matching, character operations

console.log("=== Day 12: LeetCode String Problems ===\n");

// ==================== EASY ====================

// Problem 1: Valid Palindrome (LeetCode 125)
function isPalindrome(s) {
  const clean = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let l = 0, r = clean.length - 1;
  while (l < r) {
    if (clean[l] !== clean[r]) return false;
    l++; r--;
  }
  return true;
}
console.log("1. Valid Palindrome:");
console.log("   'A man, a plan, a canal: Panama' =>", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("   'race a car' =>", isPalindrome("race a car")); // false
console.log();

// Problem 2: Length of Last Word (LeetCode 58)
function lengthOfLastWord(s) {
  const trimmed = s.trim();
  let length = 0;
  for (let i = trimmed.length - 1; i >= 0; i--) {
    if (trimmed[i] === ' ') break;
    length++;
  }
  return length;
}
console.log("2. Length of Last Word:");
console.log("   'Hello World' =>", lengthOfLastWord("Hello World")); // 5
console.log("   '   fly me   to   the moon  ' =>", lengthOfLastWord("   fly me   to   the moon  ")); // 4
console.log();

// Problem 3: Reverse String (LeetCode 344)
function reverseString(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++; r--;
  }
  return s;
}
let test1 = ["h", "e", "l", "l", "o"];
reverseString(test1);
console.log("3. Reverse String:");
console.log("   ['h','e','l','l','o'] =>", test1); // ["o","l","l","e","h"]
console.log();

// Problem 4: First Unique Character (LeetCode 387)
function firstUniqChar(s) {
  const count = {};
  for (let ch of s) count[ch] = (count[ch] || 0) + 1;
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }
  return -1;
}
console.log("4. First Unique Character:");
console.log("   'leetcode' =>", firstUniqChar("leetcode")); // 0
console.log("   'loveleetcode' =>", firstUniqChar("loveleetcode")); // 2
console.log();

// Problem 5: Valid Anagram (LeetCode 242)
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  const count = {};
  for (let ch of s) count[ch] = (count[ch] || 0) + 1;
  for (let ch of t) {
    if (!count[ch]) return false;
    count[ch]--;
  }
  return true;
}
console.log("5. Valid Anagram:");
console.log("   'anagram', 'nagaram' =>", isAnagram("anagram", "nagaram")); // true
console.log("   'rat', 'car' =>", isAnagram("rat", "car")); // false
console.log();

// Problem 6: Reverse Vowels of a String (LeetCode 345)
function reverseVowels(s) {
  const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  const arr = s.split('');
  let l = 0, r = arr.length - 1;
  
  while (l < r) {
    while (l < r && !vowels.has(arr[l])) l++;
    while (l < r && !vowels.has(arr[r])) r--;
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
  return arr.join('');
}
console.log("6. Reverse Vowels:");
console.log("   'hello' =>", reverseVowels("hello")); // "holle"
console.log("   'leetcode' =>", reverseVowels("leetcode")); // "leotcede"
console.log();

// Problem 7: Implement strStr() (LeetCode 28)
function strStr(haystack, needle) {
  if (needle === '') return 0;
  return haystack.indexOf(needle);
}
console.log("7. Implement strStr:");
console.log("   'hello', 'll' =>", strStr("hello", "ll")); // 2
console.log("   'aaaaa', 'bba' =>", strStr("aaaaa", "bba")); // -1
console.log();

// Problem 8: Roman to Integer (LeetCode 13)
function romanToInt(s) {
  const map = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
  let result = 0;
  
  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]];
    const next = map[s[i + 1]];
    if (next && curr < next) result -= curr;
    else result += curr;
  }
  return result;
}
console.log("8. Roman to Integer:");
console.log("   'III' =>", romanToInt("III")); // 3
console.log("   'LVIII' =>", romanToInt("LVIII")); // 58
console.log("   'MCMXCIV' =>", romanToInt("MCMXCIV")); // 1994
console.log();

// Problem 9: Longest Common Prefix (LeetCode 14)
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
}
console.log("9. Longest Common Prefix:");
console.log("   ['flower','flow','flight'] =>", longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log("   ['dog','racecar','car'] =>", longestCommonPrefix(["dog","racecar","car"])); // ""
console.log();

// Problem 10: Add Binary (LeetCode 67)
function addBinary(a, b) {
  let i = a.length - 1, j = b.length - 1;
  let carry = 0, result = '';
  
  while (i >= 0 || j >= 0 || carry) {
    const sum = (i >= 0 ? parseInt(a[i--]) : 0) + 
                (j >= 0 ? parseInt(b[j--]) : 0) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}
console.log("10. Add Binary:");
console.log("   '11', '1' =>", addBinary("11", "1")); // "100"
console.log("   '1010', '1011' =>", addBinary("1010", "1011")); // "10101"
console.log();

// ==================== MEDIUM ====================

// Problem 11: Longest Substring Without Repeating (LeetCode 3)
function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let maxLen = 0, start = 0;
  
  for (let end = 0; end < s.length; end++) {
    if (seen.has(s[end])) {
      start = Math.max(start, seen.get(s[end]) + 1);
    }
    seen.set(s[end], end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}
console.log("11. Longest Substring Without Repeating:");
console.log("   'abcabcbb' =>", lengthOfLongestSubstring("abcabcbb")); // 3
console.log("   'pwwkew' =>", lengthOfLongestSubstring("pwwkew")); // 3
console.log();

// Problem 12: Longest Palindromic Substring (LeetCode 5)
function longestPalindrome(s) {
  if (s.length < 2) return s;
  let start = 0, maxLen = 1;
  
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--; right++;
    }
    return right - left - 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    const len1 = expand(i, i);
    const len2 = expand(i, i + 1);
    const len = Math.max(len1, len2);
    
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.substring(start, start + maxLen);
}
console.log("12. Longest Palindromic Substring:");
console.log("   'babad' =>", longestPalindrome("babad")); // "bab" or "aba"
console.log();

// Problem 13: Zigzag Conversion (LeetCode 6)
function convert(s, numRows) {
  if (numRows === 1) return s;
  const rows = Array(numRows).fill('');
  let curRow = 0, goingDown = false;
  
  for (let ch of s) {
    rows[curRow] += ch;
    if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }
  return rows.join('');
}
console.log("13. Zigzag Conversion:");
console.log("   'PAYPALISHIRING', 3 =>", convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log();

// Problem 14: String to Integer (atoi) (LeetCode 8)
function myAtoi(s) {
  s = s.trim();
  if (!s) return 0;
  
  let sign = 1, i = 0, result = 0;
  if (s[0] === '-' || s[0] === '+') {
    sign = s[0] === '-' ? -1 : 1;
    i++;
  }
  
  while (i < s.length && s[i] >= '0' && s[i] <= '9') {
    result = result * 10 + (s[i] - '0');
    i++;
  }
  
  result *= sign;
  const MAX = 2**31 - 1, MIN = -(2**31);
  if (result > MAX) return MAX;
  if (result < MIN) return MIN;
  return result;
}
console.log("14. String to Integer (atoi):");
console.log("   '42' =>", myAtoi("42")); // 42
console.log("   '   -42' =>", myAtoi("   -42")); // -42
console.log();

// Problem 15: Letter Combinations of Phone Number (LeetCode 17)
function letterCombinations(digits) {
  if (!digits) return [];
  const map = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };
  const result = [];
  
  function backtrack(i, current) {
    if (i === digits.length) {
      result.push(current);
      return;
    }
    for (let ch of map[digits[i]]) {
      backtrack(i + 1, current + ch);
    }
  }
  
  backtrack(0, '');
  return result;
}
console.log("15. Letter Combinations:");
console.log("   '23' =>", letterCombinations("23"));
console.log();

console.log("✅ Day 12 String Basics Complete - 15 Problems!");
console.log("   'leetcode' =>", firstUniqChar("leetcode")); // 0
console.log("   'loveleetcode' =>", firstUniqChar("loveleetcode")); // 2
console.log("   'aabb' =>", firstUniqChar("aabb")); // -1
console.log();

// Problem 5: Valid Anagram (LeetCode 242)
// Given two strings s and t, return true if t is an anagram of s
function isAnagram(s, t) {
  // Your code here
}
console.log("5. Valid Anagram:");
console.log("   'anagram', 'nagaram' =>", isAnagram("anagram", "nagaram")); // true
console.log("   'rat', 'car' =>", isAnagram("rat", "car")); // false
console.log();

// Problem 6: Reverse Words in a String III (LeetCode 557)
// Reverse the order of characters in each word while preserving whitespace
function reverseWords(s) {
  // Your code here
}
console.log("6. Reverse Words III:");
console.log(
  "   'Let's take LeetCode contest' =>",
  reverseWords("Let's take LeetCode contest")
);
// Expected: "s'teL ekat edoCteeL tsetnoc"
console.log();

// Problem 7: Repeated Substring Pattern (LeetCode 459)
// Check if string can be constructed by taking a substring and appending copies
function repeatedSubstringPattern(s) {
  // Your code here
}
console.log("7. Repeated Substring Pattern:");
console.log("   'abab' =>", repeatedSubstringPattern("abab")); // true
console.log("   'aba' =>", repeatedSubstringPattern("aba")); // false
console.log("   'abcabcabcabc' =>", repeatedSubstringPattern("abcabcabcabc")); // true
console.log();

// Problem 8: Detect Capital (LeetCode 520)
// Return true if usage of capitals in word is right
function detectCapitalUse(word) {
  // Your code here
}
console.log("8. Detect Capital:");
console.log("   'USA' =>", detectCapitalUse("USA")); // true
console.log("   'FlaG' =>", detectCapitalUse("FlaG")); // false
console.log("   'leetcode' =>", detectCapitalUse("leetcode")); // true
console.log();

// Problem 9: Add Strings (LeetCode 415)
// Add two non-negative integers represented as strings
function addStrings(num1, num2) {
  // Your code here (without using BigInt)
}
console.log("9. Add Strings:");
console.log("   '11' + '123' =>", addStrings("11", "123")); // "134"
console.log("   '456' + '77' =>", addStrings("456", "77")); // "533"
console.log();

// Problem 10: Excel Sheet Column Title (LeetCode 168)
// Given column number, return its corresponding column title (A, B, C...Z, AA, AB...)
function convertToTitle(columnNumber) {
  // Your code here
}
console.log("10. Excel Sheet Column Title:");
console.log("   1 =>", convertToTitle(1)); // "A"
console.log("   28 =>", convertToTitle(28)); // "AB"
console.log("   701 =>", convertToTitle(701)); // "ZY"
console.log();
