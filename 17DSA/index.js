// Day 17: Array Advanced Problems - Implementation

console.log("=== Day 17: Array Advanced Problems ===\n");

// ========================================
// 1. KADANE'S ALGORITHM - Maximum Subarray Sum
// ========================================

function maxSubarraySum(arr) {
    let currentSum = 0;
    let maxSum = -Infinity;
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        maxSum = Math.max(maxSum, currentSum);
        
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    
    return maxSum;
}

console.log("1. Kadane's Algorithm (Max Subarray Sum):");
console.log("[-2, 1, -3, 4, -1, 2, 1, -5, 4] =>", maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log("[1] =>", maxSubarraySum([1])); // 1
console.log("[-1] =>", maxSubarraySum([-1])); // -1
console.log("[5, 4, -1, 7, 8] =>", maxSubarraySum([5, 4, -1, 7, 8])); // 23

// With subarray indices
function maxSubarraySumWithIndices(arr) {
    let currentSum = 0;
    let maxSum = -Infinity;
    let start = 0, end = 0, tempStart = 0;
    
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
        
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }
    
    return { maxSum, start, end, subarray: arr.slice(start, end + 1) };
}

console.log("\nWith subarray indices:");
console.log(maxSubarraySumWithIndices([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// ========================================
// 2. DUTCH NATIONAL FLAG - Sort 0s, 1s, 2s
// ========================================

function sortColors(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
    
    while (mid <= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else { // arr[mid] === 2
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    
    return arr;
}

console.log("\n2. Dutch National Flag (Sort 0s, 1s, 2s):");
console.log("[2, 0, 2, 1, 1, 0] =>", sortColors([2, 0, 2, 1, 1, 0]));
console.log("[2, 0, 1] =>", sortColors([2, 0, 1]));
console.log("[1, 1, 1] =>", sortColors([1, 1, 1]));
console.log("[1, 2, 0, 0, 1, 2, 1, 0] =>", sortColors([1, 2, 0, 0, 1, 2, 1, 0]));

// ========================================
// 3. ARRAY ROTATION
// ========================================

// Approach 1: Using extra space
function rotateRightSimple(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// Approach 2: Reversal Algorithm (Space Optimal)
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

function rotateRight(arr, k) {
    k = k % arr.length;
    let n = arr.length;
    
    // Reverse entire array
    reverse(arr, 0, n - 1);
    // Reverse first k elements
    reverse(arr, 0, k - 1);
    // Reverse remaining n-k elements
    reverse(arr, k, n - 1);
    
    return arr;
}

function rotateLeft(arr, k) {
    k = k % arr.length;
    let n = arr.length;
    
    // Reverse first k elements
    reverse(arr, 0, k - 1);
    // Reverse remaining n-k elements
    reverse(arr, k, n - 1);
    // Reverse entire array
    reverse(arr, 0, n - 1);
    
    return arr;
}

console.log("\n3. Array Rotation:");
console.log("Rotate right [1,2,3,4,5,6,7] by 3 =>", rotateRight([1,2,3,4,5,6,7], 3));
console.log("Rotate left [1,2,3,4,5,6,7] by 3 =>", rotateLeft([1,2,3,4,5,6,7], 3));
console.log("Rotate right [-1,-100,3,99] by 2 =>", rotateRight([-1,-100,3,99], 2));

// ========================================
// 4. MERGE SORTED ARRAYS
// ========================================

function mergeSortedArrays(arr1, arr2) {
    let i = 0, j = 0;
    let result = [];
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    
    // Copy remaining elements
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    
    return result;
}

console.log("\n4. Merge Sorted Arrays:");
console.log("[1,3,5,7] & [2,4,6,8] =>", mergeSortedArrays([1,3,5,7], [2,4,6,8]));
console.log("[1,2,3] & [4,5,6] =>", mergeSortedArrays([1,2,3], [4,5,6]));
console.log("[1] & [] =>", mergeSortedArrays([1], []));

// Merge in-place (for arr1 with extra space at end)
function mergeInPlace(arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }
    
    while (j >= 0) {
        arr1[k] = arr2[j];
        j--;
        k--;
    }
    
    return arr1;
}

console.log("\nMerge in place:");
let arr1 = [1, 2, 3, 0, 0, 0];
console.log("[1,2,3,0,0,0] (m=3) & [2,5,6] =>", mergeInPlace(arr1, 3, [2, 5, 6], 3));

// ========================================
// 5. TRAPPING RAIN WATER
// ========================================

// Approach 1: Using extra space
function trapWaterWithSpace(height) {
    let n = height.length;
    if (n === 0) return 0;
    
    let leftMax = new Array(n);
    let rightMax = new Array(n);
    
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    
    let water = 0;
    for (let i = 0; i < n; i++) {
        water += Math.min(leftMax[i], rightMax[i]) - height[i];
    }
    
    return water;
}

// Approach 2: Two Pointer (Space Optimal)
function trapWater(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}

console.log("\n5. Trapping Rain Water:");
console.log("[0,1,0,2,1,0,1,3,2,1,2,1] =>", trapWater([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log("[4,2,0,3,2,5] =>", trapWater([4,2,0,3,2,5])); // 9
console.log("[4,2,3] =>", trapWater([4,2,3])); // 1

// ========================================
// BONUS: Container With Most Water
// ========================================

function maxArea(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        maxWater = Math.max(maxWater, width * h);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}

console.log("\nBonus - Container With Most Water:");
console.log("[1,8,6,2,5,4,8,3,7] =>", maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log("[1,1] =>", maxArea([1,1])); // 1

console.log("\n✅ All implementations completed!");
