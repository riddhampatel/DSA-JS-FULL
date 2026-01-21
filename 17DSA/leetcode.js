// Day 17: Array Advanced Problems - LeetCode Problems

console.log("=== Day 17: LeetCode Problems ===\n");

// ========================================
// KADANE'S ALGORITHM
// ========================================

// LeetCode 53: Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums) {
    let currentSum = 0;
    let maxSum = nums[0];
    
    for (let num of nums) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

console.log("LeetCode 53: Maximum Subarray");
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5,4,-1,7,8])); // 23

// LeetCode 918: Maximum Sum Circular Subarray
// https://leetcode.com/problems/maximum-sum-circular-subarray/
function maxSubarraySumCircular(nums) {
    let total = 0, maxSum = -Infinity, curMax = 0;
    let minSum = Infinity, curMin = 0;
    
    for (let num of nums) {
        curMax = Math.max(curMax + num, num);
        maxSum = Math.max(maxSum, curMax);
        curMin = Math.min(curMin + num, num);
        minSum = Math.min(minSum, curMin);
        total += num;
    }
    
    return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
}

console.log("\nLeetCode 918: Maximum Sum Circular Subarray");
console.log(maxSubarraySumCircular([1,-2,3,-2])); // 3
console.log(maxSubarraySumCircular([5,-3,5])); // 10

// LeetCode 152: Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/
function maxProduct(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let temp = maxProd;
        maxProd = Math.max(nums[i], nums[i] * maxProd, nums[i] * minProd);
        minProd = Math.min(nums[i], nums[i] * temp, nums[i] * minProd);
        result = Math.max(result, maxProd);
    }
    
    return result;
}

console.log("\nLeetCode 152: Maximum Product Subarray");
console.log(maxProduct([2,3,-2,4])); // 6
console.log(maxProduct([-2,0,-1])); // 0

// ========================================
// DUTCH NATIONAL FLAG
// ========================================

// LeetCode 75: Sort Colors
// https://leetcode.com/problems/sort-colors/
function sortColors(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    
    return nums;
}

console.log("\nLeetCode 75: Sort Colors");
console.log(sortColors([2,0,2,1,1,0])); // [0,0,1,1,2,2]
console.log(sortColors([2,0,1])); // [0,1,2]

// LeetCode 283: Move Zeroes
// https://leetcode.com/problems/move-zeroes/
function moveZeroes(nums) {
    let left = 0;
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
        }
    }
    
    return nums;
}

console.log("\nLeetCode 283: Move Zeroes");
console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]

// LeetCode 905: Sort Array By Parity
// https://leetcode.com/problems/sort-array-by-parity/
function sortArrayByParity(nums) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        if (nums[left] % 2 > nums[right] % 2) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
        }
        
        if (nums[left] % 2 === 0) left++;
        if (nums[right] % 2 === 1) right--;
    }
    
    return nums;
}

console.log("\nLeetCode 905: Sort Array By Parity");
console.log(sortArrayByParity([3,1,2,4])); // [2,4,3,1] or [4,2,1,3]

// ========================================
// ARRAY ROTATION
// ========================================

// LeetCode 189: Rotate Array
// https://leetcode.com/problems/rotate-array/
function rotate(nums, k) {
    k = k % nums.length;
    
    const reverse = (start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    };
    
    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
    
    return nums;
}

console.log("\nLeetCode 189: Rotate Array");
console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]

// LeetCode 153: Find Minimum in Rotated Sorted Array
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
function findMin(nums) {
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return nums[left];
}

console.log("\nLeetCode 153: Find Minimum in Rotated Sorted Array");
console.log(findMin([3,4,5,1,2])); // 1
console.log(findMin([4,5,6,7,0,1,2])); // 0

// LeetCode 33: Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}

console.log("\nLeetCode 33: Search in Rotated Sorted Array");
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([4,5,6,7,0,1,2], 3)); // -1

// ========================================
// MERGE ARRAYS
// ========================================

// LeetCode 88: Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    
    return nums1;
}

console.log("\nLeetCode 88: Merge Sorted Array");
let arr1 = [1,2,3,0,0,0];
console.log(merge(arr1, 3, [2,5,6], 3)); // [1,2,2,3,5,6]

// LeetCode 4: Median of Two Sorted Arrays (HARD)
// https://leetcode.com/problems/median-of-two-sorted-arrays/
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    
    let m = nums1.length, n = nums2.length;
    let left = 0, right = m;
    
    while (left <= right) {
        let partitionX = Math.floor((left + right) / 2);
        let partitionY = Math.floor((m + n + 1) / 2) - partitionX;
        
        let maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        let minRightX = partitionX === m ? Infinity : nums1[partitionX];
        
        let maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        let minRightY = partitionY === n ? Infinity : nums2[partitionY];
        
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            right = partitionX - 1;
        } else {
            left = partitionX + 1;
        }
    }
}

console.log("\nLeetCode 4: Median of Two Sorted Arrays");
console.log(findMedianSortedArrays([1,3], [2])); // 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // 2.5

// ========================================
// TRAPPING RAIN WATER
// ========================================

// LeetCode 42: Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/
function trap(height) {
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

console.log("\nLeetCode 42: Trapping Rain Water");
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5])); // 9

// LeetCode 11: Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
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

console.log("\nLeetCode 11: Container With Most Water");
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1

console.log("\n✅ All LeetCode problems solved!");
console.log("\n📚 Additional Problems to Practice:");
console.log("- LeetCode 238: Product of Array Except Self");
console.log("- LeetCode 560: Subarray Sum Equals K");
console.log("- LeetCode 525: Contiguous Array");
console.log("- LeetCode 1499: Max Value of Equation");
console.log("- LeetCode 407: Trapping Rain Water II (Hard)");
