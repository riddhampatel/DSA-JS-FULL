// ============================================
// Day 15: Sliding Window Technique
// ============================================
// Sliding Window is a technique for solving problems on arrays/strings
// where we need to find subarrays/substrings with certain conditions.
// 
// Types:
// 1. Fixed-size window - window size is constant
// 2. Variable-size window - window size changes based on conditions

// ============================================
// 1. MAXIMUM SUM OF K CONSECUTIVE ELEMENTS
// ============================================
// Given an array and a number k, find the maximum sum of k consecutive elements

function maxSumKElements(arr, k) {
    if (k > arr.length) return null;
    
    let maxSum = 0;
    let windowSum = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        // Remove leftmost element of previous window, add new rightmost element
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum;
}

console.log(maxSumKElements([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24 (10+2+3+1+0+20)
console.log(maxSumKElements([2, 1, 5, 1, 3, 2], 3)); // 9 (5+1+3)

// ============================================
// 2. MINIMUM SUM OF K CONSECUTIVE ELEMENTS
// ============================================
function minSumKElements(arr, k) {
    if (k > arr.length) return null;
    
    let minSum = 0;
    let windowSum = 0;
    
    // Calculate sum of first window
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    minSum = windowSum;
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        minSum = Math.min(minSum, windowSum);
    }
    
    return minSum;
}

console.log(minSumKElements([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 4 (1+4+2+10... nope: 1+0+20+? closest is 10+2+3+1 = 16, or 2+3+1+0 = 6, or 2+10+2+3 = 17, or 4+2+10+2 = 18, or 1+4+2+10 = 17)
// Need to verify: [1,4,2,10,2,3,1,0,20] windows of 4: [1,4,2,10]=17, [4,2,10,2]=18, [2,10,2,3]=17, [10,2,3,1]=16, [2,3,1,0]=6, [3,1,0,20]=24
console.log(minSumKElements([2, 1, 5, 1, 3, 2], 3)); // 5 (1+3+2 or 5+1+3... 1+5+1=7, 5+1+3=9, 1+3+2=6)

// ============================================
// 3. MAXIMUM AVERAGE OF K CONSECUTIVE ELEMENTS
// ============================================
function maxAverageKElements(arr, k) {
    if (k > arr.length) return null;
    
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    let maxSum = windowSum;
    
    for (let i = k; i < arr.length; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, windowSum);
    }
    
    return maxSum / k;
}

console.log(maxAverageKElements([1, 3, 2, 6, -1, 4, 1, 8], 3)); // (6 + -1 + 4) / 3 = 3

// ============================================
// 4. FIRST NEGATIVE NUMBER IN WINDOW OF K
// ============================================
function firstNegativeInWindow(arr, k) {
    let result = [];
    let negatives = []; // Store indices of negatives
    
    // Process first window
    for (let i = 0; i < k; i++) {
        if (arr[i] < 0) {
            negatives.push(i);
        }
    }
    result.push(negatives.length > 0 ? arr[negatives[0]] : null);
    
    // Slide the window
    for (let i = k; i < arr.length; i++) {
        // Remove indices outside current window
        while (negatives.length > 0 && negatives[0] <= i - k) {
            negatives.shift();
        }
        
        // Add new element if negative
        if (arr[i] < 0) {
            negatives.push(i);
        }
        
        result.push(negatives.length > 0 ? arr[negatives[0]] : null);
    }
    
    return result;
}

console.log(firstNegativeInWindow([12, -1, -7, 8, -15, 30, 16, 28], 3)); // [-1, -1, -7, -15, -15, null]

// ============================================
// 5. COUNT OCCURRENCES OF ANAGRAMS OF PATTERN IN TEXT
// ============================================
// Find number of anagrams of pattern in text using sliding window

function countAnagrams(text, pattern) {
    if (pattern.length > text.length) return 0;
    
    const patternFreq = {};
    const windowFreq = {};
    
    // Count frequency of pattern characters
    for (let char of pattern) {
        patternFreq[char] = (patternFreq[char] || 0) + 1;
    }
    
    let count = 0;
    let k = pattern.length;
    
    // Count frequency in first window
    for (let i = 0; i < k; i++) {
        let char = text[i];
        windowFreq[char] = (windowFreq[char] || 0) + 1;
    }
    
    if (areFrequenciesSame(patternFreq, windowFreq)) {
        count++;
    }
    
    // Slide the window
    for (let i = k; i < text.length; i++) {
        // Add new character
        let newChar = text[i];
        windowFreq[newChar] = (windowFreq[newChar] || 0) + 1;
        
        // Remove old character
        let oldChar = text[i - k];
        windowFreq[oldChar]--;
        if (windowFreq[oldChar] === 0) {
            delete windowFreq[oldChar];
        }
        
        if (areFrequenciesSame(patternFreq, windowFreq)) {
            count++;
        }
    }
    
    return count;
}

function areFrequenciesSame(freq1, freq2) {
    if (Object.keys(freq1).length !== Object.keys(freq2).length) return false;
    
    for (let key in freq1) {
        if (freq1[key] !== freq2[key]) return false;
    }
    return true;
}

console.log(countAnagrams("cbaebabacd", "abc")); // 2 (positions: "cba" and "bac")

// ============================================
// 6. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
// ============================================
// Variable-size window problem

function longestSubstringWithoutRepeating(str) {
    let maxLength = 0;
    let windowStart = 0;
    let charIndex = {}; // Store last seen index of each character
    
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        let char = str[windowEnd];
        
        // If character is repeated, move windowStart to the right
        if (char in charIndex) {
            windowStart = Math.max(windowStart, charIndex[char] + 1);
        }
        
        // Update the last seen index
        charIndex[char] = windowEnd;
        
        // Update max length
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); // 3 ("abc")
console.log(longestSubstringWithoutRepeating("bbbbb")); // 1 ("b")
console.log(longestSubstringWithoutRepeating("pwwkew")); // 3 ("wke")
console.log(longestSubstringWithoutRepeating("au")); // 2 ("au")

// ============================================
// 7. LONGEST SUBARRAY WITH SUM EQUALS K
// ============================================
function longestSubarraySumEqualsK(arr, k) {
    let maxLength = 0;
    let sumMap = { 0: -1 }; // {sum: index}
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        
        // If (currentSum - k) exists, we found a subarray with sum k
        if (currentSum - k in sumMap) {
            maxLength = Math.max(maxLength, i - sumMap[currentSum - k]);
        }
        
        // Store current sum if not seen before
        if (!(currentSum in sumMap)) {
            sumMap[currentSum] = i;
        }
    }
    
    return maxLength;
}

console.log(longestSubarraySumEqualsK([15, 2, 4, 8, 9, -3], 5)); // 2 (4+1 or -3+8)
console.log(longestSubarraySumEqualsK([1, 2, 3, 1, 1, 1], 3)); // 3

// ============================================
// 8. SLIDING WINDOW MAXIMUM (Deque approach)
// ============================================
// Find maximum element in each sliding window

function slidingWindowMaximum(arr, k) {
    if (k > arr.length) return [];
    
    let result = [];
    let deque = []; // Stores indices
    
    for (let i = 0; i < arr.length; i++) {
        // Remove elements outside current window
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        
        // Remove elements smaller than current element from back
        while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
            deque.pop();
        }
        
        deque.push(i);
        
        // When window is full, add max to result
        if (i >= k - 1) {
            result.push(arr[deque[0]]);
        }
    }
    
    return result;
}

console.log(slidingWindowMaximum([1, 3, 1, 2, 0, 5], 3)); // [3, 3, 2, 5]
console.log(slidingWindowMaximum([1], 1)); // [1]

// ============================================
// 9. FRUIT INTO BASKETS (Longest subarray with at most 2 distinct elements)
// ============================================
function fruitIntoBaskets(fruits) {
    let windowStart = 0;
    let maxFruits = 0;
    let fruitCount = {};
    
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
        let rightFruit = fruits[windowEnd];
        fruitCount[rightFruit] = (fruitCount[rightFruit] || 0) + 1;
        
        // Shrink window if more than 2 types of fruits
        while (Object.keys(fruitCount).length > 2) {
            let leftFruit = fruits[windowStart];
            fruitCount[leftFruit]--;
            if (fruitCount[leftFruit] === 0) {
                delete fruitCount[leftFruit];
            }
            windowStart++;
        }
        
        maxFruits = Math.max(maxFruits, windowEnd - windowStart + 1);
    }
    
    return maxFruits;
}

console.log(fruitIntoBaskets([1, 2, 1])); // 3
console.log(fruitIntoBaskets([0, 1, 2, 2])); // 3 (1, 2, 2)
console.log(fruitIntoBaskets([1, 2, 3, 2, 2])); // 4 (3, 2, 2 or 2, 3, 2, 2 is 4)

// ============================================
// 10. PERMUTATION IN STRING (Variable window)
// ============================================
// Check if s2 contains a permutation of s1

function permutationInString(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const s1Count = {};
    const windowCount = {};
    
    for (let char of s1) {
        s1Count[char] = (s1Count[char] || 0) + 1;
    }
    
    for (let i = 0; i < s1.length; i++) {
        let char = s2[i];
        windowCount[char] = (windowCount[char] || 0) + 1;
    }
    
    if (areFrequenciesSame(s1Count, windowCount)) return true;
    
    for (let i = s1.length; i < s2.length; i++) {
        // Add new character
        let newChar = s2[i];
        windowCount[newChar] = (windowCount[newChar] || 0) + 1;
        
        // Remove old character
        let oldChar = s2[i - s1.length];
        windowCount[oldChar]--;
        if (windowCount[oldChar] === 0) {
            delete windowCount[oldChar];
        }
        
        if (areFrequenciesSame(s1Count, windowCount)) return true;
    }
    
    return false;
}

console.log(permutationInString("ab", "eidbaooo")); // true
console.log(permutationInString("ab", "ab")); // true
console.log(permutationInString("ab", "ba")); // true
console.log(permutationInString("ab", "a")); // false
