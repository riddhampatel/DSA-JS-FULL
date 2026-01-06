// Day 12: LeetCode String Problems (Easy Level)
// String basics related problems

console.log("=== Day 12: LeetCode String Problems ===\n");

// Problem 1: Valid Palindrome (LeetCode 125)
// Given a string s, return true if it is a palindrome, false otherwise
// Consider only alphanumeric characters and ignore cases
function isPalindrome(s) {
  // Your code here
}
console.log("1. Valid Palindrome:");
console.log(
  "   'A man, a plan, a canal: Panama' =>",
  isPalindrome("A man, a plan, a canal: Panama")
); // true
console.log("   'race a car' =>", isPalindrome("race a car")); // false
console.log();

// Problem 2: Length of Last Word (LeetCode 58)
// Given a string s consisting of words and spaces, return the length of the last word
function lengthOfLastWord(s) {
  // Your code here
}
console.log("2. Length of Last Word:");
console.log("   'Hello World' =>", lengthOfLastWord("Hello World")); // 5
console.log(
  "   '   fly me   to   the moon  ' =>",
  lengthOfLastWord("   fly me   to   the moon  ")
); // 4
console.log();

// Problem 3: Reverse String (LeetCode 344)
// Reverse the input array of characters in-place
function reverseString(s) {
  // Your code here (modify array in-place)
}
let test1 = ["h", "e", "l", "l", "o"];
reverseString(test1);
console.log("3. Reverse String:");
console.log("   ['h','e','l','l','o'] =>", test1); // ["o","l","l","e","h"]
console.log();

// Problem 4: First Unique Character (LeetCode 387)
// Given a string s, find the first non-repeating character and return its index
// If it does not exist, return -1
function firstUniqChar(s) {
  // Your code here
}
console.log("4. First Unique Character:");
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
