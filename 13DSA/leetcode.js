// Day 13: LeetCode String Advanced Problems
// Palindrome, Anagram, Frequency, Substring Problems

console.log("=== Day 13: LeetCode String Advanced ===\n");

// Problem 1: Longest Palindromic Substring (LeetCode 5)
// Given string s, return the longest palindromic substring
function longestPalindrome(s) {
  if (s.length < 2) return s;
  let start = 0, maxLen = 1;
  
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--; right++;
    }
    return right - left - 1; // length
  }
  
  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(i, i);       // odd length
    const len2 = expandAroundCenter(i, i + 1);   // even length
    const len = Math.max(len1, len2);
    
    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return s.substring(start, start + maxLen);
}
console.log("1. Longest Palindromic Substring:");
console.log("   'babad' =>", longestPalindrome("babad")); // "bab" or "aba"
console.log("   'cbbd' =>", longestPalindrome("cbbd")); // "bb"
console.log();

// Problem 2: Group Anagrams (LeetCode 49)
// Group words that are anagrams together
function groupAnagrams(strs) {
  const map = new Map();
  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) map.set(sorted, []);
    map.get(sorted).push(str);
  }
  return Array.from(map.values());
}
console.log("2. Group Anagrams:");
console.log("   ['eat','tea','ate','nat','bat'] =>");
console.log("   ", groupAnagrams(["eat", "tea", "ate", "nat", "bat"]));
console.log();

// Problem 3: Longest Substring Without Repeating Characters (LeetCode 3)
// Find length of longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  const charIndex = new Map();
  let maxLen = 0, start = 0;
  
  for (let end = 0; end < s.length; end++) {
    const ch = s[end];
    if (charIndex.has(ch)) {
      start = Math.max(start, charIndex.get(ch) + 1);
    }
    charIndex.set(ch, end);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
}
console.log("3. Longest Substring Without Repeating:");
console.log("   'abcabcbb' =>", lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log("   'bbbbb' =>", lengthOfLongestSubstring("bbbbb")); // 1
console.log("   'au' =>", lengthOfLongestSubstring("au")); // 2
console.log();

// Problem 4: Minimum Window Substring (LeetCode 76)
// Find minimum window that contains all characters of t
function minWindow(s, t) {
  if (s.length < t.length) return "";
  const need = new Map();
  for (const ch of t) need.set(ch, (need.get(ch) || 0) + 1);
  
  let formed = 0, required = need.size;
  const window = new Map();
  let ans = [Infinity, 0, 0];
  let l = 0;
  
  for (let r = 0; r < s.length; r++) {
    const ch = s[r];
    window.set(ch, (window.get(ch) || 0) + 1);
    if (need.has(ch) && window.get(ch) === need.get(ch)) formed++;
    
    while (l <= r && formed === required) {
      if (r - l + 1 < ans[0]) {
        ans = [r - l + 1, l, r];
      }
      const left = s[l];
      window.set(left, window.get(left) - 1);
      if (need.has(left) && window.get(left) < need.get(left)) formed--;
      l++;
    }
  }
  return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
}
console.log("4. Minimum Window Substring:");
console.log("   s='ADOBECODEBANC', t='ABC' =>", minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log();

// Problem 5: Isomorphic Strings (LeetCode 205)
// Check if pattern of characters matches
function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const sMap = new Map(), tMap = new Map();
  
  for (let i = 0; i < s.length; i++) {
    const cs = s[i], ct = t[i];
    if (sMap.has(cs) && sMap.get(cs) !== ct) return false;
    if (tMap.has(ct) && tMap.get(ct) !== cs) return false;
    sMap.set(cs, ct);
    tMap.set(ct, cs);
  }
  return true;
}
console.log("5. Isomorphic Strings:");
console.log("   'egg', 'add' =>", isIsomorphic("egg", "add")); // true
console.log("   'paper', 'title' =>", isIsomorphic("paper", "title")); // true
console.log("   'badc', 'baba' =>", isIsomorphic("badc", "baba")); // false
console.log();

// Problem 6: Valid Palindrome II (LeetCode 680)
// Check if can delete at most one character to make palindrome
function validPalindromeII(s) {
  function isPalin(l, r) {
    while (l < r) {
      if (s[l] !== s[r]) return false;
      l++; r--;
    }
    return true;
  }
  
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalin(l + 1, r) || isPalin(l, r - 1);
    }
    l++; r--;
  }
  return true;
}
console.log("6. Valid Palindrome II:");
console.log("   'aba' =>", validPalindromeII("aba")); // true
console.log("   'abca' =>", validPalindromeII("abca")); // true
console.log("   'abc' =>", validPalindromeII("abc")); // false
console.log();

// Problem 7: Word Pattern (LeetCode 290)
// Check if pattern of words matches
function wordPattern(pattern, s) {
  const words = s.split(' ');
  if (pattern.length !== words.length) return false;
  
  const pMap = new Map(), wMap = new Map();
  for (let i = 0; i < pattern.length; i++) {
    const p = pattern[i], w = words[i];
    if (pMap.has(p) && pMap.get(p) !== w) return false;
    if (wMap.has(w) && wMap.get(w) !== p) return false;
    pMap.set(p, w);
    wMap.set(w, p);
  }
  return true;
}
console.log("7. Word Pattern:");
console.log("   pattern='abba', s='dog cat cat dog' =>", wordPattern("abba", "dog cat cat dog")); // true
console.log("   pattern='abba', s='dog cat cat fish' =>", wordPattern("abba", "dog cat cat fish")); // false
console.log();
