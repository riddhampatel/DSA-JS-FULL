// Day 17: Array Advanced Problems - Practice

console.log("=== Day 17: Practice Problems ===\n");

// ========================================
// KADANE'S ALGORITHM PROBLEMS
// ========================================

// Problem 1: Maximum Subarray Sum
function maxSubarraySum(arr) {
    // Your code here
}

// Problem 2: Maximum Circular Subarray Sum
function maxCircularSum(arr) {
    // Your code here
    // Hint: Max circular = max(normal kadane, total_sum - min_subarray)
}

// Problem 3: Maximum Product Subarray
function maxProductSubarray(arr) {
    // Your code here
    // Hint: Keep track of both max and min (negative * negative = positive)
}

// Problem 4: Largest Sum Contiguous Subarray with at least K elements
function maxSumWithKElements(arr, k) {
    // Your code here
}

// ========================================
// DUTCH NATIONAL FLAG PROBLEMS
// ========================================

// Problem 5: Sort 0s, 1s, 2s
function sortColors(arr) {
    // Your code here
}

// Problem 6: Sort Array by Parity (Even before Odd)
function sortByParity(arr) {
    // Your code here
}

// Problem 7: Move All Zeros to End
function moveZeros(arr) {
    // Your code here
}

// Problem 8: Segregate Positive and Negative Numbers
function segregateNumbers(arr) {
    // Your code here
}

// ========================================
// ARRAY ROTATION PROBLEMS
// ========================================

// Problem 9: Rotate Array Right by K Positions
function rotateRight(arr, k) {
    // Your code here
}

// Problem 10: Rotate Array Left by K Positions
function rotateLeft(arr, k) {
    // Your code here
}

// Problem 11: Find Minimum in Rotated Sorted Array
function findMin(arr) {
    // Your code here
    // Hint: Use binary search
}

// Problem 12: Search in Rotated Sorted Array
function searchRotated(arr, target) {
    // Your code here
}

// ========================================
// MERGE ARRAYS PROBLEMS
// ========================================

// Problem 13: Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    // Your code here
}

// Problem 14: Merge K Sorted Arrays
function mergeKArrays(arrays) {
    // Your code here
    // Hint: Use a min heap or merge two at a time
}

// Problem 15: Median of Two Sorted Arrays
function findMedianSortedArrays(arr1, arr2) {
    // Your code here
}

// Problem 16: Intersection of Two Sorted Arrays
function intersection(arr1, arr2) {
    // Your code here
}

// ========================================
// TRAPPING RAIN WATER PROBLEMS
// ========================================

// Problem 17: Trapping Rain Water (1D)
function trapWater(height) {
    // Your code here
}

// Problem 18: Container With Most Water
function maxArea(height) {
    // Your code here
}

// Problem 19: Trapping Rain Water 2D (HARD)
function trapRainWater2D(heightMap) {
    // Your code here
    // Hint: Use priority queue (min heap) to process cells from outside to inside
}

// Problem 20: Pour Water
function pourWater(heights, volume, k) {
    // Your code here
    // Water is poured at index k
}

// ========================================
// TEST CASES
// ========================================

console.log("Test your solutions below:\n");

// Test Problem 1
console.log("Problem 1: Maximum Subarray Sum");
// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
// console.log(maxSubarraySum([1])); // Expected: 1
// console.log(maxSubarraySum([5, 4, -1, 7, 8])); // Expected: 23

// Test Problem 2
console.log("\nProblem 2: Maximum Circular Subarray Sum");
// console.log(maxCircularSum([8, -8, 9, -9, 10, -11, 12])); // Expected: 22
// console.log(maxCircularSum([10, -3, -4, 7, 6, 5, -4, -1])); // Expected: 23

// Test Problem 3
console.log("\nProblem 3: Maximum Product Subarray");
// console.log(maxProductSubarray([2, 3, -2, 4])); // Expected: 6
// console.log(maxProductSubarray([-2, 0, -1])); // Expected: 0

// Test Problem 5
console.log("\nProblem 5: Sort 0s, 1s, 2s");
// console.log(sortColors([2, 0, 2, 1, 1, 0])); // Expected: [0, 0, 1, 1, 2, 2]

// Test Problem 7
console.log("\nProblem 7: Move All Zeros to End");
// console.log(moveZeros([0, 1, 0, 3, 12])); // Expected: [1, 3, 12, 0, 0]

// Test Problem 9
console.log("\nProblem 9: Rotate Array Right");
// console.log(rotateRight([1, 2, 3, 4, 5, 6, 7], 3)); // Expected: [5, 6, 7, 1, 2, 3, 4]

// Test Problem 11
console.log("\nProblem 11: Find Minimum in Rotated Sorted Array");
// console.log(findMin([3, 4, 5, 1, 2])); // Expected: 1
// console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // Expected: 0

// Test Problem 13
console.log("\nProblem 13: Merge Two Sorted Arrays");
// console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8])); // Expected: [1,2,3,4,5,6,7,8]

// Test Problem 17
console.log("\nProblem 17: Trapping Rain Water");
// console.log(trapWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Expected: 6
// console.log(trapWater([4, 2, 0, 3, 2, 5])); // Expected: 9

// Test Problem 18
console.log("\nProblem 18: Container With Most Water");
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49

console.log("\n📝 Complete all 20 problems and uncomment the test cases!");
console.log("⏰ Time Allocated: 6 hours");
console.log("💪 Good luck!");
