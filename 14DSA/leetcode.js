// Day 14: LeetCode Two-Pointer Problems
// Focus on classic converging and fast/slow pointer patterns

console.log("=== Day 14: LeetCode Two Pointers ===\n");

// Problem 1: Two Sum II - Input array is sorted (LeetCode 167)
function twoSumII(numbers, target) {
  let l = 0, r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1]; // 1-indexed per problem
    if (sum < target) l++;
    else r--;
  }
  return [-1, -1];
}
console.log("1. Two Sum II:");
console.log("   [2,7,11,15], target=9 =>", twoSumII([2, 7, 11, 15], 9));
console.log();

// Problem 2: Remove Duplicates from Sorted Array (LeetCode 26)
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) nums[write++] = nums[read];
  }
  return write;
}
console.log("2. Remove Duplicates:");
const dup = [0,0,1,1,1,2,2,3,3,4];
const len = removeDuplicates(dup);
console.log("   new length:", len, "array:", dup.slice(0, len));
console.log();

// Problem 3: Container With Most Water (LeetCode 11)
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
console.log("3. Max Area:");
console.log("   [1,8,6,2,5,4,8,3,7] =>", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log();

// Problem 4: Trapping Rain Water (LeetCode 42)
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
console.log("4. Trapping Rain Water:");
console.log("   [0,1,0,2,1,0,1,3,2,1,2,1] =>", trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log();

// Problem 5: Three Sum (LeetCode 15)
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
console.log("5. Three Sum:");
console.log("   [-1,0,1,2,-1,-4] =>", threeSumLC([-1, 0, 1, 2, -1, -4]));
console.log();

// Problem 6: Valid Palindrome (LeetCode 125)
function isPalindrome(s) {
  const clean = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let l = 0, r = clean.length - 1;
  while (l < r) {
    if (clean[l] !== clean[r]) return false;
    l++; r--;
  }
  return true;
}
console.log("6. Valid Palindrome:");
console.log("   'A man, a plan, a canal: Panama' =>", isPalindrome("A man, a plan, a canal: Panama"));
console.log("   'race a car' =>", isPalindrome("race a car"));
console.log();

module.exports = {
  twoSumII,
  removeDuplicates,
  maxArea,
  trap,
  threeSumLC,
  isPalindrome,
};
