// Day 14: Two Pointer Technique - Core
// Patterns: converging pointers, expanding/shrinking windows, and fast/slow pointers on arrays/strings

console.log("=== Day 14: Two Pointers - Core ===\n");

// 1. Pair Sum in Sorted Array (converging pointers)
function pairSumSorted(arr, target) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    const sum = arr[l] + arr[r];
    if (sum === target) return [l, r];
    if (sum < target) l++;
    else r--;
  }
  return [-1, -1];
}
console.log("1. Pair Sum Sorted:");
console.log("   [1,2,3,4,6], target=6 =>", pairSumSorted([1, 2, 3, 4, 6], 6)); // [1,3]
console.log("   [2,3,4,8,9,11], target=19 =>", pairSumSorted([2, 3, 4, 8, 9, 11], 19)); // [3,5]
console.log();

// 2. Remove Duplicates In-Place (fast/slow pointers)
function removeDuplicatesSorted(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write; // new length
}
console.log("2. Remove Duplicates Sorted:");
const dupArr = [1, 1, 2, 2, 3, 3, 3, 4];
const newLen = removeDuplicatesSorted(dupArr);
console.log("   new length:", newLen, "array:", dupArr.slice(0, newLen));
console.log();

// 3. Reverse Array In-Place (swap ends)
function reverseArray(arr) {
  let l = 0, r = arr.length - 1;
  while (l < r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++; r--;
  }
  return arr;
}
console.log("3. Reverse Array:");
const arrToReverse = [1, 2, 3, 4, 5];
console.log("   [1,2,3,4,5] =>", reverseArray(arrToReverse));
console.log();

// 4. Move Zeroes to End (stable, fast/slow swap)
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
const zerosArr = [0, 1, 0, 3, 12];
console.log("   [0,1,0,3,12] =>", moveZeroes(zerosArr));
console.log();

// 5. Is Subsequence (walk through bigger string once)
function isSubsequence(s, t) {
  let i = 0, j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) i++;
    j++;
  }
  return i === s.length;
}
console.log("5. Is Subsequence:");
console.log("   'ace' in 'abcde' =>", isSubsequence("ace", "abcde")); // true
console.log("   'aec' in 'abcde' =>", isSubsequence("aec", "abcde")); // false
console.log();

module.exports = {
  pairSumSorted,
  removeDuplicatesSorted,
  reverseArray,
  moveZeroes,
  isSubsequence,
};
