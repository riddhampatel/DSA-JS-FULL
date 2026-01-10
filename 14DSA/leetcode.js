// Day 14: LeetCode Two-Pointer Problems
// Converging, Fast/Slow, and Two-Array pointer patterns

console.log("=== Day 14: LeetCode Two Pointers ===\n");

// ==================== EASY ====================

// Problem 1: Valid Palindrome (LeetCode 125)
function isPalindrome(s) {
  const clean = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
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

// Problem 2: Two Sum II - Input array is sorted (LeetCode 167)
function twoSumII(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    if (sum < target) l++;
    else r--;
  }
  return [-1, -1];
}
console.log("2. Two Sum II:");
console.log("   [2,7,11,15], target=9 =>", twoSumII([2, 7, 11, 15], 9)); // [1,2]
console.log();

// Problem 3: Remove Duplicates from Sorted Array (LeetCode 26)
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) nums[write++] = nums[read];
  }
  return write;
}
console.log("3. Remove Duplicates:");
const dup = [0,0,1,1,1,2,2,3,3,4];
const len = removeDuplicates(dup);
console.log("   new length:", len, "array:", dup.slice(0, len)); // [0,1,2,3,4]
console.log();

// Problem 4: Move Zeroes (LeetCode 283)
function moveZeroes(nums) {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      [nums[write], nums[read]] = [nums[read], nums[write]];
      write++;
    }
  }
  return nums;
}
console.log("4. Move Zeroes:");
console.log("   [0,1,0,3,12] =>", moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log();

// Problem 5: Reverse String (LeetCode 344)
function reverseString(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++; r--;
  }
  return s;
}
console.log("5. Reverse String:");
const str1 = ['h','e','l','l','o'];
reverseString(str1);
console.log("   ['h','e','l','l','o'] =>", str1); // ['o','l','l','e','h']
console.log();

// Problem 6: Squares of a Sorted Array (LeetCode 977)
function sortedSquares(nums) {
  const result = new Array(nums.length);
  let l = 0, r = nums.length - 1, pos = r;
  
  while (l <= r) {
    const leftSq = nums[l] * nums[l];
    const rightSq = nums[r] * nums[r];
    if (leftSq > rightSq) {
      result[pos--] = leftSq;
      l++;
    } else {
      result[pos--] = rightSq;
      r--;
    }
  }
  return result;
}
console.log("6. Squares of Sorted Array:");
console.log("   [-4,-1,0,3,10] =>", sortedSquares([-4,-1,0,3,10])); // [0,1,9,16,100]
console.log();

// ==================== MEDIUM ====================

// Problem 7: Container With Most Water (LeetCode 11)
function maxArea(height) {
  let l = 0, r = height.length - 1, best = 0;
  while (l < r) {
    const h = Math.min(height[l], height[r]);
    best = Math.max(best, h * (r - l));
    if (height[l] < height[r]) l++;
    else r--;
  }
  return best;
}
console.log("7. Container With Most Water:");
console.log("   [1,8,6,2,5,4,8,3,7] =>", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log();

// Problem 8: 3Sum (LeetCode 15)
function threeSumLC(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++; r--;
        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else if (sum < 0) l++;
      else r--;
    }
  }
  return res;
}
console.log("8. 3Sum:");
console.log("   [-1,0,1,2,-1,-4] =>", threeSumLC([-1, 0, 1, 2, -1, -4]));
console.log();

// Problem 9: 3Sum Closest (LeetCode 16)
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(sum - target) < Math.abs(closest - target)) {
        closest = sum;
      }
      if (sum < target) l++;
      else if (sum > target) r--;
      else return sum;
    }
  }
  return closest;
}
console.log("9. 3Sum Closest:");
console.log("   [-1,2,1,-4], target=1 =>", threeSumClosest([-1,2,1,-4], 1)); // 2
console.log();

// Problem 10: 4Sum (LeetCode 18)
function fourSum(nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1, r = nums.length - 1;
      
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[l], nums[r]]);
          l++; r--;
          while (l < r && nums[l] === nums[l - 1]) l++;
          while (l < r && nums[r] === nums[r + 1]) r--;
        } else if (sum < target) l++;
        else r--;
      }
    }
  }
  return result;
}
console.log("10. 4Sum:");
console.log("   [1,0,-1,0,-2,2], target=0 =>", fourSum([1,0,-1,0,-2,2], 0));
console.log();

// Problem 11: Remove Nth Node From End (LeetCode 19 - two pointer)
function removeNthFromEnd(head, n) {
  const dummy = { val: 0, next: head };
  let fast = dummy, slow = dummy;
  
  for (let i = 0; i <= n; i++) fast = fast.next;
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}
console.log("11. Remove Nth From End (concept shown - needs LinkedList)");
console.log();

// ==================== HARD ====================

// Problem 12: Trapping Rain Water (LeetCode 42)
function trap(height) {
  let l = 0, r = height.length - 1;
  let leftMax = 0, rightMax = 0, water = 0;
  while (l < r) {
    if (height[l] < height[r]) {
      leftMax = Math.max(leftMax, height[l]);
      water += leftMax - height[l];
      l++;
    } else {
      rightMax = Math.max(rightMax, height[r]);
      water += rightMax - height[r];
      r--;
    }
  }
  return water;
}
console.log("12. Trapping Rain Water:");
console.log("   [0,1,0,2,1,0,1,3,2,1,2,1] =>", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log();

// Problem 13: Minimum Window Substring (LeetCode 76 - uses two pointer)
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
console.log("13. Minimum Window Substring:");
console.log("   s='ADOBECODEBANC', t='ABC' =>", minWindow("ADOBECODEBANC", "ABC")); // "BANC"
console.log();

console.log("✅ Day 14 Two Pointers Complete - 13 Problems!");

module.exports = {
  twoSumII,
  removeDuplicates,
  maxArea,
  trap,
  threeSumLC,
  isPalindrome,
};
