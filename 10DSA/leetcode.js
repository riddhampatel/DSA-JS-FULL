// Day 10: LeetCode Array Intermediate Problems
// Array Methods, Searching, Sorting, Manipulation

console.log("=== Day 10: LeetCode Arrays Intermediate ===\n");

// ==================== EASY ====================

// Problem 1: Two Sum (LeetCode 1)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
  return [];
}
console.log("1. Two Sum:");
console.log("   [2,7,11,15], target=9 =>", twoSum([2,7,11,15], 9)); // [0,1]
console.log();

// Problem 2: Best Time to Buy and Sell Stock (LeetCode 121)
function maxProfit(prices) {
  let minPrice = Infinity, maxProfit = 0;
  for (let price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }
  return maxProfit;
}
console.log("2. Max Profit:");
console.log("   [7,1,5,3,6,4] =>", maxProfit([7,1,5,3,6,4])); // 5
console.log();

// Problem 3: Contains Duplicate (LeetCode 217)
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}
console.log("3. Contains Duplicate:");
console.log("   [1,2,3,1] =>", containsDuplicate([1,2,3,1])); // true
console.log();

// Problem 4: Majority Element (LeetCode 169)
function majorityElement(nums) {
  let candidate = null, count = 0;
  for (let num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
console.log("4. Majority Element:");
console.log("   [3,2,3] =>", majorityElement([3,2,3])); // 3
console.log("   [2,2,1,1,1,2,2] =>", majorityElement([2,2,1,1,1,2,2])); // 2
console.log();

// Problem 5: Move Zeroes (LeetCode 283)
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
console.log("5. Move Zeroes:");
console.log("   [0,1,0,3,12] =>", moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log();

// ==================== MEDIUM ====================

// Problem 6: Product of Array Except Self (LeetCode 238)
function productExceptSelf(nums) {
  let n = nums.length;
  let answer = new Array(n).fill(1);
  
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }
  
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }
  return answer;
}
console.log("6. Product Except Self:");
console.log("   [1,2,3,4] =>", productExceptSelf([1,2,3,4])); // [24,12,8,6]
console.log();

// Problem 7: Find the Duplicate Number (LeetCode 287)
function findDuplicate(nums) {
  let slow = nums[0], fast = nums[0];
  
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
console.log("7. Find Duplicate:");
console.log("   [3,1,3,4,2] =>", findDuplicate([3,1,3,4,2])); // 3
console.log();

// Problem 8: Container With Most Water (LeetCode 11)
function maxArea(height) {
  let left = 0, right = height.length - 1, maxWater = 0;
  while (left < right) {
    let minHeight = Math.min(height[left], height[right]);
    let area = minHeight * (right - left);
    maxWater = Math.max(maxWater, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return maxWater;
}
console.log("8. Max Area:");
console.log("   [1,8,6,2,5,4,8,3,7] =>", maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log();

// Problem 9: Rotate Array (LeetCode 189)
function rotate(nums, k) {
  let n = nums.length;
  k = k % n;
  
  function reverse(left, right) {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++; right--;
    }
  }
  
  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
  return nums;
}
console.log("9. Rotate Array:");
console.log("   [1,2,3,4,5,6,7], k=3 =>", rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log();

// Problem 10: Subarray Sum Equals K (LeetCode 560)
function subarraySum(nums, k) {
  let map = new Map();
  map.set(0, 1);
  let sum = 0, count = 0;
  
  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
console.log("10. Subarray Sum K:");
console.log("   [1,1,1], k=2 =>", subarraySum([1,1,1], 2)); // 2
console.log();

// Problem 11: 3Sum (LeetCode 15)
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = nums.length - 1;
    
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        result.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        l++; r--;
      } else if (sum < 0) l++;
      else r--;
    }
  }
  return result;
}
console.log("11. 3Sum:");
console.log("   [-1,0,1,2,-1,-4] =>", threeSum([-1,0,1,2,-1,-4]));
console.log();

// Problem 12: Sort Colors (LeetCode 75)
function sortColors(nums) {
  let low = 0, mid = 0, high = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++; mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }
  return nums;
}
console.log("12. Sort Colors:");
console.log("   [2,0,2,1,1,0] =>", sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log();

// Problem 13: Maximum Subarray (Kadane's) (LeetCode 53)
function maxSubArray(nums) {
  let maxSum = nums[0], currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
console.log("13. Max Subarray (Kadane's):");
console.log("   [-2,1,-3,4,-1,2,1,-5,4] =>", maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log();

// Problem 14: Merge Intervals (LeetCode 56)
function merge(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    if (intervals[i][0] <= last[1]) {
      last[1] = Math.max(last[1], intervals[i][1]);
    } else {
      result.push(intervals[i]);
    }
  }
  return result;
}
console.log("14. Merge Intervals:");
console.log("   [[1,3],[2,6],[8,10],[15,18]] =>", merge([[1,3],[2,6],[8,10],[15,18]]));
console.log();

// Problem 15: Search in Rotated Sorted Array (LeetCode 33)
function search(nums, target) {
  let left = 0, right = nums.length - 1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[mid] < target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}
console.log("15. Search in Rotated Array:");
console.log("   [4,5,6,7,0,1,2], target=0 =>", search([4,5,6,7,0,1,2], 0)); // 4
console.log();

console.log("✅ Day 10 Array Intermediate Complete - 15 Problems!");
