// Day 15: LeetCode Sliding Window Problems
// Fixed-size, Variable-size, and Advanced Window Techniques

console.log("=== Day 15: LeetCode Sliding Window ===\n");

// Problem 1: Maximum Average Subarray I (LeetCode 643)
// Find contiguous subarray of length k with maximum average
function findMaxAverage(nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) sum += nums[i];
  let maxSum = sum;
  
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
}
console.log("1. Maximum Average Subarray I:");
console.log("   [1,12,-5,-6,50,3], k=4 =>", findMaxAverage([1,12,-5,-6,50,3], 4)); // 12.75
console.log();

// Problem 2: Longest Substring Without Repeating Characters (LeetCode 3)
// Find length of longest substring without repeating characters
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log("2. Longest Substring Without Repeating:");
console.log("   'abcabcbb' =>", lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
console.log("   'pwwkew' =>", lengthOfLongestSubstring("pwwkew")); // 3 ("wke")
console.log();

// Problem 3: Minimum Size Subarray Sum (LeetCode 209)
// Find minimal length of contiguous subarray with sum >= target
function minSubArrayLen(target, nums) {
  let left = 0, sum = 0, minLen = Infinity;
  
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
console.log("3. Minimum Size Subarray Sum:");
console.log("   target=7, [2,3,1,2,4,3] =>", minSubArrayLen(7, [2,3,1,2,4,3])); // 2 ([4,3])
console.log();

// Problem 4: Longest Repeating Character Replacement (LeetCode 424)
// Replace at most k characters to get longest substring with same letter
function characterReplacement(s, k) {
  const count = {};
  let left = 0, maxCount = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    count[s[right]] = (count[s[right]] || 0) + 1;
    maxCount = Math.max(maxCount, count[s[right]]);
    
    // If window size - most frequent char count > k, shrink
    while (right - left + 1 - maxCount > k) {
      count[s[left]]--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log("4. Longest Repeating Character Replacement:");
console.log("   'ABAB', k=2 =>", characterReplacement("ABAB", 2)); // 4
console.log("   'AABABBA', k=1 =>", characterReplacement("AABABBA", 1)); // 4
console.log();

// Problem 5: Permutation in String (LeetCode 567)
// Check if s2 contains permutation of s1
function checkInclusion(s1, s2) {
  if (s1.length > s2.length) return false;
  
  const need = {}, window = {};
  for (let c of s1) need[c] = (need[c] || 0) + 1;
  
  let left = 0, right = 0, valid = 0;
  const required = Object.keys(need).length;
  
  while (right < s2.length) {
    const c = s2[right];
    right++;
    
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) valid++;
    }
    
    while (right - left >= s1.length) {
      if (valid === required) return true;
      
      const d = s2[left];
      left++;
      if (need[d]) {
        if (window[d] === need[d]) valid--;
        window[d]--;
      }
    }
  }
  return false;
}
console.log("5. Permutation in String:");
console.log("   s1='ab', s2='eidbaooo' =>", checkInclusion("ab", "eidbaooo")); // true
console.log("   s1='ab', s2='eidboaoo' =>", checkInclusion("ab", "eidboaoo")); // false
console.log();

// Problem 6: Find All Anagrams in a String (LeetCode 438)
// Find all start indices of anagrams of p in s
function findAnagrams(s, p) {
  const result = [];
  if (p.length > s.length) return result;
  
  const need = {}, window = {};
  for (let c of p) need[c] = (need[c] || 0) + 1;
  
  let left = 0, right = 0, valid = 0;
  const required = Object.keys(need).length;
  
  while (right < s.length) {
    const c = s[right];
    right++;
    
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) valid++;
    }
    
    while (right - left >= p.length) {
      if (valid === required) result.push(left);
      
      const d = s[left];
      left++;
      if (need[d]) {
        if (window[d] === need[d]) valid--;
        window[d]--;
      }
    }
  }
  return result;
}
console.log("6. Find All Anagrams:");
console.log("   s='cbaebabacd', p='abc' =>", findAnagrams("cbaebabacd", "abc")); // [0,6]
console.log();

// Problem 7: Longest Substring with At Most K Distinct Characters (LeetCode 340)
// Find longest substring with at most k distinct characters
function lengthOfLongestSubstringKDistinct(s, k) {
  if (k === 0) return 0;
  const map = {};
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    map[s[right]] = (map[s[right]] || 0) + 1;
    
    while (Object.keys(map).length > k) {
      map[s[left]]--;
      if (map[s[left]] === 0) delete map[s[left]];
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log("7. Longest Substring K Distinct:");
console.log("   'eceba', k=2 =>", lengthOfLongestSubstringKDistinct("eceba", 2)); // 3 ("ece")
console.log("   'aa', k=1 =>", lengthOfLongestSubstringKDistinct("aa", 1)); // 2
console.log();

// Problem 8: Fruit Into Baskets (LeetCode 904)
// Pick at most 2 types of fruits, find max total fruits
function totalFruit(fruits) {
  const basket = {};
  let left = 0, maxFruits = 0;
  
  for (let right = 0; right < fruits.length; right++) {
    basket[fruits[right]] = (basket[fruits[right]] || 0) + 1;
    
    while (Object.keys(basket).length > 2) {
      basket[fruits[left]]--;
      if (basket[fruits[left]] === 0) delete basket[fruits[left]];
      left++;
    }
    maxFruits = Math.max(maxFruits, right - left + 1);
  }
  return maxFruits;
}
console.log("8. Fruit Into Baskets:");
console.log("   [1,2,1] =>", totalFruit([1,2,1])); // 3
console.log("   [0,1,2,2] =>", totalFruit([0,1,2,2])); // 3
console.log();

// Problem 9: Minimum Window Substring (LeetCode 76)
// Find minimum window in s that contains all characters of t
function minWindow(s, t) {
  const need = {}, window = {};
  for (let c of t) need[c] = (need[c] || 0) + 1;
  
  let left = 0, right = 0, valid = 0;
  let start = 0, minLen = Infinity;
  const required = Object.keys(need).length;
  
  while (right < s.length) {
    const c = s[right];
    right++;
    
    if (need[c]) {
      window[c] = (window[c] || 0) + 1;
      if (window[c] === need[c]) valid++;
    }
    
    while (valid === required) {
      if (right - left < minLen) {
        start = left;
        minLen = right - left;
      }
      
      const d = s[left];
      left++;
      if (need[d]) {
        if (window[d] === need[d]) valid--;
        window[d]--;
      }
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen);
}
console.log("9. Minimum Window Substring:");
console.log("   s='ADOBECODEBANC', t='ABC' =>", minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log();

// Problem 10: Subarray Product Less Than K (LeetCode 713)
// Count subarrays where product < k
function numSubarrayProductLessThanK(nums, k) {
  if (k <= 1) return 0;
  let prod = 1, left = 0, count = 0;
  
  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k) {
      prod /= nums[left];
      left++;
    }
    count += right - left + 1;
  }
  return count;
}
console.log("10. Subarray Product Less Than K:");
console.log("   [10,5,2,6], k=100 =>", numSubarrayProductLessThanK([10,5,2,6], 100)); // 8
console.log();

// Problem 11: Max Consecutive Ones III (LeetCode 1004)
// Flip at most k zeros to get longest sequence of 1s
function longestOnes(nums, k) {
  let left = 0, zeroCount = 0, maxLen = 0;
  
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;
    
    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log("11. Max Consecutive Ones III:");
console.log("   [1,1,1,0,0,0,1,1,1,1,0], k=2 =>", longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)); // 6
console.log();

// Problem 12: Grumpy Bookstore Owner (LeetCode 1052)
// Maximize satisfied customers by using technique for X minutes
function maxSatisfied(customers, grumpy, minutes) {
  let alreadySatisfied = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) alreadySatisfied += customers[i];
  }
  
  let maxExtra = 0, extra = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 1) extra += customers[i];
    if (i >= minutes && grumpy[i - minutes] === 1) extra -= customers[i - minutes];
    maxExtra = Math.max(maxExtra, extra);
  }
  return alreadySatisfied + maxExtra;
}
console.log("12. Grumpy Bookstore Owner:");
console.log("   customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], minutes=3 =>");
console.log("   ", maxSatisfied([1,0,1,2,1,1,7,5], [0,1,0,1,0,1,0,1], 3)); // 16
console.log();

// Problem 13: Longest Substring with At Most Two Distinct Characters (LeetCode 159)
function lengthOfLongestSubstringTwoDistinct(s) {
  const map = {};
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    map[s[right]] = (map[s[right]] || 0) + 1;
    
    while (Object.keys(map).length > 2) {
      map[s[left]]--;
      if (map[s[left]] === 0) delete map[s[left]];
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}
console.log("13. Longest Substring Two Distinct:");
console.log("   'eceba' =>", lengthOfLongestSubstringTwoDistinct("eceba")); // 3 ("ece")
console.log("   'ccaabbb' =>", lengthOfLongestSubstringTwoDistinct("ccaabbb")); // 5
console.log();

// Problem 14: Count Number of Nice Subarrays (LeetCode 1248)
// Count subarrays with exactly k odd numbers
function numberOfSubarrays(nums, k) {
  const count = { 0: 1 };
  let oddCount = 0, result = 0;
  
  for (let num of nums) {
    if (num % 2 === 1) oddCount++;
    if (count[oddCount - k]) result += count[oddCount - k];
    count[oddCount] = (count[oddCount] || 0) + 1;
  }
  return result;
}
console.log("14. Count Nice Subarrays:");
console.log("   [1,1,2,1,1], k=3 =>", numberOfSubarrays([1,1,2,1,1], 3)); // 2
console.log("   [2,4,6], k=1 =>", numberOfSubarrays([2,4,6], 1)); // 0
console.log();

// Problem 15: Binary Subarrays With Sum (LeetCode 930)
function numSubarraysWithSum(nums, goal) {
  const count = { 0: 1 };
  let sum = 0, result = 0;
  
  for (let num of nums) {
    sum += num;
    if (count[sum - goal]) result += count[sum - goal];
    count[sum] = (count[sum] || 0) + 1;
  }
  return result;
}
console.log("15. Binary Subarrays With Sum:");
console.log("   [1,0,1,0,1], goal=2 =>", numSubarraysWithSum([1,0,1,0,1], 2)); // 4
console.log();

// Problem 16: Replace the Substring for Balanced String (LeetCode 1234)
// Only Q, W, E, R. Make string balanced by replacing substring
function balancedString(s) {
  const count = {};
  for (let c of s) count[c] = (count[c] || 0) + 1;
  
  const n = s.length;
  const target = n / 4;
  
  // Check if already balanced
  if (Math.max(...Object.values(count)) <= target) return 0;
  
  let left = 0, minLen = n;
  
  for (let right = 0; right < n; right++) {
    count[s[right]]--;
    
    while (left < n && Math.max(count['Q'] || 0, count['W'] || 0, 
                                 count['E'] || 0, count['R'] || 0) <= target) {
      minLen = Math.min(minLen, right - left + 1);
      count[s[left]] = (count[s[left]] || 0) + 1;
      left++;
    }
  }
  return minLen;
}
console.log("16. Replace Substring for Balanced String:");
console.log("   'QWER' =>", balancedString("QWER")); // 0
console.log("   'QQWE' =>", balancedString("QQWE")); // 1
console.log("   'QQQW' =>", balancedString("QQQW")); // 2
console.log();

// Problem 17: Sliding Window Median (LeetCode 480) - HARD
// Find median in each window of size k
function medianSlidingWindow(nums, k) {
  const result = [];
  const window = [];
  
  // Helper to maintain sorted window and calculate median
  function getMedian() {
    const mid = Math.floor(k / 2);
    return k % 2 === 1 
      ? window[mid] 
      : (window[mid - 1] + window[mid]) / 2;
  }
  
  for (let i = 0; i < nums.length; i++) {
    // Insert nums[i] in sorted position
    let pos = window.findIndex(x => x >= nums[i]);
    if (pos === -1) window.push(nums[i]);
    else window.splice(pos, 0, nums[i]);
    
    // Remove oldest element if window exceeds k
    if (window.length > k) {
      const toRemove = nums[i - k];
      const idx = window.indexOf(toRemove);
      window.splice(idx, 1);
    }
    
    // Add median when window is full
    if (window.length === k) {
      result.push(getMedian());
    }
  }
  return result;
}
console.log("17. Sliding Window Median:");
console.log("   [1,3,-1,-3,5,3,6,7], k=3 =>", medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
console.log("   [1,2,3,4,2,3,1,4,2], k=3 =>", medianSlidingWindow([1,2,3,4,2,3,1,4,2], 3));
console.log();

// Problem 18: Shortest Subarray with Sum at Least K (LeetCode 862) - HARD
// Uses monotonic deque with prefix sums
function shortestSubarray(nums, k) {
  const n = nums.length;
  const prefix = new Array(n + 1).fill(0);
  
  // Build prefix sum
  for (let i = 0; i < n; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  
  const deque = [];
  let minLen = Infinity;
  
  for (let i = 0; i < prefix.length; i++) {
    // Check if we can form valid subarray
    while (deque.length > 0 && prefix[i] - prefix[deque[0]] >= k) {
      minLen = Math.min(minLen, i - deque.shift());
    }
    
    // Maintain monotonic increasing deque
    while (deque.length > 0 && prefix[i] <= prefix[deque[deque.length - 1]]) {
      deque.pop();
    }
    
    deque.push(i);
  }
  
  return minLen === Infinity ? -1 : minLen;
}
console.log("18. Shortest Subarray with Sum >= K:");
console.log("   [1], k=1 =>", shortestSubarray([1], 1)); // 1
console.log("   [1,2], k=4 =>", shortestSubarray([1,2], 4)); // -1
console.log("   [2,-1,2], k=3 =>", shortestSubarray([2,-1,2], 3)); // 3
console.log();

console.log("✅ Day 15 Sliding Window Complete - 18 Problems!");
console.log("Practice Tips:");
console.log("- Identify if window is fixed or variable size");
console.log("- Track what makes the window 'valid'");
console.log("- Know when to expand (right++) vs shrink (left++)");
console.log("- Use hashmap/set for frequency tracking");
console.log("- Consider prefix sum for subarray sum problems");
console.log("- Use deque for monotonic window problems");
console.log("- Use heaps/sorted structure for median problems");
