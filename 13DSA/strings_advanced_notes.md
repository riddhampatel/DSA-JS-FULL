# Day 13: Strings - Advanced

## Advanced String Operations

### Palindrome Checking

#### Basic Palindrome
```javascript
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

isPalindrome("racecar");  // true
isPalindrome("hello");    // false
```

#### Two-Pointer Approach (More Efficient)
```javascript
function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
```

#### Case-Insensitive, Alphanumeric Only
```javascript
function isPalindrome(str) {
  // Remove non-alphanumeric and convert to lowercase
  const cleaned = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  let left = 0, right = cleaned.length - 1;
  while (left < right) {
    if (cleaned[left] !== cleaned[right]) return false;
    left++;
    right--;
  }
  return true;
}

isPalindrome("A man, a plan, a canal: Panama");  // true
```

### Anagram Checking

#### Sorting Method
```javascript
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  const sorted1 = s1.split('').sort().join('');
  const sorted2 = s2.split('').sort().join('');
  
  return sorted1 === sorted2;
}

isAnagram("listen", "silent");  // true
```

#### Frequency Count Method (Better)
```javascript
function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  
  const freq = {};
  
  for (let char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }
  
  for (let char of s2) {
    if (!freq[char]) return false;
    freq[char]--;
  }
  
  return true;
}
```

### String Reversal

#### Using Built-in Methods
```javascript
function reverse(str) {
  return str.split('').reverse().join('');
}
```

#### Manual Approach
```javascript
function reverse(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
```

#### Two-Pointer (In-place for array)
```javascript
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
```

#### Reverse Words in String
```javascript
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

reverseWords("Hello World");  // "World Hello"
```

### Character Frequency

#### Using Object
```javascript
function charFrequency(str) {
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
}

charFrequency("hello");  // {h: 1, e: 1, l: 2, o: 1}
```

#### Using Map
```javascript
function charFrequency(str) {
  const freq = new Map();
  for (let char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  return freq;
}
```

#### Find Most Frequent Character
```javascript
function mostFrequent(str) {
  const freq = {};
  let maxChar = '', maxCount = 0;
  
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
    
    if (freq[char] > maxCount) {
      maxCount = freq[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}
```

### Case Toggling

#### Toggle Case
```javascript
function toggleCase(str) {
  let result = '';
  for (let char of str) {
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

toggleCase("Hello World");  // "hELLO wORLD"
```

#### Swap Case (Keeping Non-letters)
```javascript
function swapCase(str) {
  return str.split('').map(char => {
    if (char >= 'a' && char <= 'z') return char.toUpperCase();
    if (char >= 'A' && char <= 'Z') return char.toLowerCase();
    return char;
  }).join('');
}
```

### Substring Problems

#### All Substrings
```javascript
function allSubstrings(str) {
  const substrings = [];
  
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  
  return substrings;
}

allSubstrings("abc");  // ['a', 'ab', 'abc', 'b', 'bc', 'c']
```

#### Longest Substring Without Repeating Characters
```javascript
function lengthOfLongestSubstring(str) {
  const seen = new Set();
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < str.length; right++) {
    while (seen.has(str[right])) {
      seen.delete(str[left]);
      left++;
    }
    seen.add(str[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  
  return maxLen;
}
```

### Pattern Matching

#### Check if Pattern Exists
```javascript
function hasPattern(str, pattern) {
  return str.includes(pattern);
}
```

#### Count Pattern Occurrences
```javascript
function countOccurrences(str, pattern) {
  let count = 0, pos = 0;
  
  while ((pos = str.indexOf(pattern, pos)) !== -1) {
    count++;
    pos += pattern.length;
  }
  
  return count;
}

countOccurrences("ababab", "ab");  // 3
```

#### Find All Pattern Positions
```javascript
function findAllPositions(str, pattern) {
  const positions = [];
  let pos = 0;
  
  while ((pos = str.indexOf(pattern, pos)) !== -1) {
    positions.push(pos);
    pos++;
  }
  
  return positions;
}
```

### String Compression

#### Basic Compression (Run-Length Encoding)
```javascript
function compress(str) {
  let result = '';
  let count = 1;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + (count > 1 ? count : '');
      count = 1;
    }
  }
  
  return result.length < str.length ? result : str;
}

compress("aaabbcccaa");  // "a3b2c3a2"
```

### String Rotation

#### Check if Rotation
```javascript
function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}

isRotation("waterbottle", "erbottlewat");  // true
```

### Permutations

#### All Permutations
```javascript
function permutations(str) {
  if (str.length <= 1) return [str];
  
  const result = [];
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const perms = permutations(remaining);
    
    for (let perm of perms) {
      result.push(char + perm);
    }
  }
  
  return result;
}

permutations("abc");  // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
```

### String to Integer (atoi)

```javascript
function atoi(str) {
  // Trim whitespace
  str = str.trim();
  
  if (str.length === 0) return 0;
  
  // Check sign
  let sign = 1, index = 0;
  if (str[0] === '-' || str[0] === '+') {
    sign = str[0] === '-' ? -1 : 1;
    index++;
  }
  
  // Convert digits
  let result = 0;
  while (index < str.length && str[index] >= '0' && str[index] <= '9') {
    result = result * 10 + parseInt(str[index]);
    index++;
  }
  
  result *= sign;
  
  // Handle overflow
  const MAX = 2147483647, MIN = -2147483648;
  if (result > MAX) return MAX;
  if (result < MIN) return MIN;
  
  return result;
}
```

### Remove Duplicates

#### Remove Adjacent Duplicates
```javascript
function removeAdjacentDuplicates(str) {
  const stack = [];
  
  for (let char of str) {
    if (stack.length && stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  
  return stack.join('');
}

removeAdjacentDuplicates("abbaca");  // "ca"
```

#### Remove All Duplicates
```javascript
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

removeDuplicates("hello");  // "helo"
```

### Longest Common Prefix

```javascript
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }
  
  return prefix;
}

longestCommonPrefix(["flower", "flow", "flight"]);  // "fl"
```

### Valid Parentheses

```javascript
function isValidParentheses(str) {
  const stack = [];
  const pairs = { ')': '(', '}': '{', ']': '[' };
  
  for (let char of str) {
    if (!pairs[char]) {
      stack.push(char);
    } else if (stack.pop() !== pairs[char]) {
      return false;
    }
  }
  
  return stack.length === 0;
}
```

### String Matching (KMP Algorithm - Advanced)

```javascript
function kmpSearch(text, pattern) {
  const lps = buildLPS(pattern);
  const matches = [];
  
  let i = 0, j = 0;
  
  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }
    
    if (j === pattern.length) {
      matches.push(i - j);
      j = lps[j - 1];
    } else if (i < text.length && text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  
  return matches;
}

function buildLPS(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let len = 0, i = 1;
  
  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  
  return lps;
}
```

## Time Complexity Reference

| Operation | Time | Space |
|-----------|------|-------|
| Palindrome (two-pointer) | O(n) | O(1) |
| Anagram (sorting) | O(n log n) | O(1) |
| Anagram (frequency) | O(n) | O(k) |
| Reverse | O(n) | O(n) |
| Character frequency | O(n) | O(k) |
| Substring search | O(nm) | O(1) |
| KMP search | O(n+m) | O(m) |
| All substrings | O(n²) | O(n²) |
| Permutations | O(n!) | O(n!) |

Where:
- n = string length
- m = pattern length
- k = unique characters (max 26 for lowercase English)

## Common Patterns Summary

1. **Two Pointers**: Palindrome, reverse, remove duplicates
2. **Sliding Window**: Longest substring problems
3. **Frequency Count**: Anagram, character frequency
4. **Stack**: Valid parentheses, adjacent duplicates
5. **Recursion**: Permutations, subsets
6. **Hash Map/Set**: Unique characters, pattern matching

## Best Practices

✅ Use two-pointer for O(1) space when possible  
✅ Cache string length in loops  
✅ Use Set for uniqueness checks  
✅ Use Map for frequency counting  
✅ Consider case-sensitivity requirements  
✅ Handle empty strings and edge cases  
✅ Use appropriate string methods (slice vs substring)  
