//1. LEETCODE PROBLEM - PRODUCT OF ARRAY EXCEPT SELF

var productExceptSelf = function(nums) {
    let n = nums.length;
    let answer = new Array(n).fill(1);

    // Step 1: Prefix product
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = prefix;
        prefix *= nums[i];
    }

    // Step 2: Suffix product
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= suffix;
        suffix *= nums[i];
    }

    return answer;
};
console.log(productExceptSelf([1,2,3,4])); // [24,12,8,6]




//2. LEETCODE PROBLEM - FIND THE DUPLICATE NUMBER
var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Phase 1: Detect cycle
    do {
        slow = nums[slow];          // move 1 step
        fast = nums[nums[fast]];    // move 2 steps
    } while (slow !== fast);

    // Phase 2: Find entry point of cycle
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow; // duplicate number
};
console.log(findDuplicate([3,1,3,4,2])); // 3


//3. LEETCODE PROBLEM - CONTAINER WITH MOST WATER
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let minHeight = Math.min(height[left], height[right]);
        let width = right - left;
        let area = minHeight * width;
        maxWater = Math.max(maxWater, area);

        // Move the pointer with the smaller height
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};



//4. LEETCODE PROBLEM - ROTATE ARRAY
var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // handle k > n

    // helper function to reverse array in-place
    function reverse(left, right) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }

    // Step 1: reverse whole array
    reverse(0, n - 1);

    // Step 2: reverse first k elements
    reverse(0, k - 1);

    // Step 3: reverse remaining elements
    reverse(k, n - 1);
};




//5. LEETCODE PROBLEM - SUBARRAY SUM EQUALS K
var subarraySum = function(nums, k) {
    let map = new Map();
    map.set(0, 1); // prefix sum 0 occurs once

    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;

        // check if (sum - k) exists
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // store current prefix sum
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
};
console.log(subarraySum([1,1,1], 2)); // 2




//6. LEETCODE PROBLEM - MAJORITY ELEMENT
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};
