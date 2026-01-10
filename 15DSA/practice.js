// ============================================
// Day 15: Sliding Window - Practice Problems
// ============================================

// 1. LONGEST SUBSTRING WITH AT MOST K DISTINCT CHARACTERS
// Given a string, find the longest substring with at most k distinct characters

function longestSubstringKDistinct(s, k) {
    let windowStart = 0;
    let maxLength = 0;
    let charCount = {};
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];
        charCount[rightChar] = (charCount[rightChar] || 0) + 1;
        
        // Shrink window if distinct characters exceed k
        while (Object.keys(charCount).length > k) {
            let leftChar = s[windowStart];
            charCount[leftChar]--;
            if (charCount[leftChar] === 0) {
                delete charCount[leftChar];
            }
            windowStart++;
        }
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
}

console.log("=== 1. Longest Substring with K Distinct ===");
console.log(longestSubstringKDistinct("araaci", 2)); // 4 ("araa")
console.log(longestSubstringKDistinct("araaci", 1)); // 2 ("aa")
console.log(longestSubstringKDistinct("cbbebi", 3)); // 5 ("bbebi")

// 2. MINIMUM WINDOW SUBSTRING
// Find minimum window in s that contains all characters from t

function minWindowSubstring(s, t) {
    if (t.length > s.length) return "";
    
    const tCount = {};
    for (let char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }
    
    let windowStart = 0;
    let minLength = Infinity;
    let minStart = 0;
    let matched = 0;
    let windowCount = {};
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let rightChar = s[windowEnd];
        windowCount[rightChar] = (windowCount[rightChar] || 0) + 1;
        
        // If frequency of character matches, increment matched count
        if (rightChar in tCount && windowCount[rightChar] === tCount[rightChar]) {
            matched++;
        }
        
        // Try to shrink window
        while (matched === Object.keys(tCount).length) {
            if (windowEnd - windowStart + 1 < minLength) {
                minLength = windowEnd - windowStart + 1;
                minStart = windowStart;
            }
            
            let leftChar = s[windowStart];
            if (leftChar in tCount && windowCount[leftChar] === tCount[leftChar]) {
                matched--;
            }
            windowCount[leftChar]--;
            windowStart++;
        }
    }
    
    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);
}

console.log("\n=== 2. Minimum Window Substring ===");
console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindowSubstring("a", "a")); // "a"
console.log(minWindowSubstring("a", "aa")); // ""

// 3. SUBSTRING WITH CONCATENATION OF ALL WORDS
// Find all starting indices where a concatenation of all words is found

function findSubstringIndices(s, words) {
    if (!words.length) return [];
    
    let result = [];
    const wordLength = words[0].length;
    const totalLength = wordLength * words.length;
    const wordCount = {};
    
    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }
    
    for (let i = 0; i <= s.length - totalLength; i++) {
        let windowCount = {};
        
        for (let j = 0; j < words.length; j++) {
            let word = s.substring(i + j * wordLength, i + (j + 1) * wordLength);
            if (!(word in wordCount)) {
                break;
            }
            windowCount[word] = (windowCount[word] || 0) + 1;
            if (windowCount[word] > wordCount[word]) {
                break;
            }
            
            if (j === words.length - 1) {
                result.push(i);
            }
        }
    }
    
    return result;
}

console.log("\n=== 3. Substring with Concatenation ===");
console.log(findSubstringIndices("barfoothefoobarman", ["foo", "bar"])); // [0, 9]
console.log(findSubstringIndices("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])); // []
console.log(findSubstringIndices("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // [6, 9, 12]

// 4. CONTAINS DUPLICATE II
// Find if array contains duplicates within distance k

function containsDuplicateK(nums, k) {
    let windowStart = 0;
    let seen = new Set();
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        // If window size exceeds k, remove leftmost
        if (windowEnd - windowStart > k) {
            seen.delete(nums[windowStart]);
            windowStart++;
        }
        
        // Check if current element exists in window
        if (seen.has(nums[windowEnd])) {
            return true;
        }
        
        seen.add(nums[windowEnd]);
    }
    
    return false;
}

console.log("\n=== 4. Contains Duplicate II ===");
console.log(containsDuplicateK([99, 99], 2)); // true
console.log(containsDuplicateK([99, 99], 1)); // false
console.log(containsDuplicateK([1, 2, 3, 1], 3)); // true
console.log(containsDuplicateK([1, 2, 3, 1, 2, 3], 2)); // false

// 5. REPEATING CHARACTER REPLACEMENT
// Maximum length of substring with at most k character replacements

function characterReplacement(s, k) {
    let windowStart = 0;
    let maxLength = 0;
    let charCount = {};
    let maxCharCount = 0;
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        let char = s[windowEnd];
        charCount[char] = (charCount[char] || 0) + 1;
        maxCharCount = Math.max(maxCharCount, charCount[char]);
        
        // If number of changes needed > k, shrink window
        while (windowEnd - windowStart + 1 - maxCharCount > k) {
            let leftChar = s[windowStart];
            charCount[leftChar]--;
            windowStart++;
        }
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
}

console.log("\n=== 5. Character Replacement ===");
console.log(characterReplacement("ABAB", 2)); // 4 (all can be same)
console.log(characterReplacement("ABBB", 2)); // 4 (all can be B)
console.log(characterReplacement("AABCCCCCCCD", 2)); // 5 (CCCCC)

// 6. MAX CONSECUTIVE ONES III
// Maximum consecutive 1s with at most k flips

function maxConsecutiveOnes(nums, k) {
    let windowStart = 0;
    let maxOnes = 0;
    let zeroCount = 0;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] === 0) {
            zeroCount++;
        }
        
        // Shrink window if zeros exceed k
        while (zeroCount > k) {
            if (nums[windowStart] === 0) {
                zeroCount--;
            }
            windowStart++;
        }
        
        maxOnes = Math.max(maxOnes, windowEnd - windowStart + 1);
    }
    
    return maxOnes;
}

console.log("\n=== 6. Max Consecutive Ones III ===");
console.log(maxConsecutiveOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
console.log(maxConsecutiveOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); // 10

// 7. BEST TIME TO BUY AND SELL STOCK WITH COOLDOWN (Uses sliding window concept)
// Find maximum profit with buy-sell-cooldown

function maxProfitWithCooldown(prices) {
    if (prices.length < 2) return 0;
    
    // dp[0] = max profit without stock
    // dp[1] = max profit holding stock
    let rest = 0, hold = -prices[0], sold = 0;
    
    for (let i = 1; i < prices.length; i++) {
        let newRest = Math.max(rest, sold);
        let newHold = Math.max(hold, rest - prices[i]);
        let newSold = hold + prices[i];
        
        rest = newRest;
        hold = newHold;
        sold = newSold;
    }
    
    return Math.max(rest, sold);
}

console.log("\n=== 7. Best Time Buy/Sell with Cooldown ===");
console.log(maxProfitWithCooldown([3, 3, 5, 0, 0, 3, 1, 4])); // 4 (buy at 3, sell at 4)

// 8. EQUAL SUBSTRING WITHIN BUDGET
// Maximum length of substring with cost <= budget (cost = |s[i] - t[i]|)

function equalSubstring(s, t, maxCost) {
    let windowStart = 0;
    let maxLength = 0;
    let currentCost = 0;
    
    for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        currentCost += Math.abs(s.charCodeAt(windowEnd) - t.charCodeAt(windowEnd));
        
        while (currentCost > maxCost) {
            currentCost -= Math.abs(s.charCodeAt(windowStart) - t.charCodeAt(windowStart));
            windowStart++;
        }
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    return maxLength;
}

console.log("\n=== 8. Equal Substring Within Budget ===");
console.log(equalSubstring("abcd", "bcda", 3)); // 3
console.log(equalSubstring("abcd", "cdef", 3)); // 1
console.log(equalSubstring("krpgjbeffa", "mcoswxamtp", 5)); // 6

// 9. LONGEST TURBULENT SUBARRAY
// Find longest subarray where |arr[i] - arr[i+1]| > 0 and direction alternates

function longestTurbulentSubarray(arr) {
    if (arr.length <= 1) return arr.length;
    
    let maxLength = 1;
    let inc = 1, dec = 1;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            inc = dec + 1;
            dec = 1;
        } else if (arr[i] < arr[i - 1]) {
            dec = inc + 1;
            inc = 1;
        } else {
            inc = 1;
            dec = 1;
        }
        
        maxLength = Math.max(maxLength, inc, dec);
    }
    
    return maxLength;
}

console.log("\n=== 9. Longest Turbulent Subarray ===");
console.log(longestTurbulentSubarray([9, 4, 2, 10, 7, 8, 9, 9, 9, 9, 9, 9])); // 5
console.log(longestTurbulentSubarray([4, 8, 12, 16])); // 2

// 10. LONGEST SUBARRAY OF 1'S AFTER DELETING ONE ELEMENT
// Maximum consecutive 1s after removing at most one element

function longestSubarray(nums) {
    let windowStart = 0;
    let maxLength = 0;
    let zeroCount = 0;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if (nums[windowEnd] === 0) {
            zeroCount++;
        }
        
        while (zeroCount > 1) {
            if (nums[windowStart] === 0) {
                zeroCount--;
            }
            windowStart++;
        }
        
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    
    // Return length - 1 because we must delete one element
    return maxLength - 1;
}

console.log("\n=== 10. Longest Subarray of 1s ===");
console.log(longestSubarray([1, 1, 0, 1])); // 3 (delete 0)
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); // 5
