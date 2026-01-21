# Day 17: Array Advanced Problems

## 📚 Topics Covered
1. Kadane's Algorithm (Maximum Subarray Sum)
2. Dutch National Flag Algorithm (Sort 0s, 1s, 2s)
3. Array Rotation Variations
4. Merge Sorted Arrays
5. Trapping Rain Water

---

## 1️⃣ Kadane's Algorithm (Maximum Subarray Sum)

### Concept
Find the maximum sum of a contiguous subarray within a one-dimensional array.

### Approach
- Keep track of current sum and maximum sum
- If current sum becomes negative, reset it to 0
- Update maximum sum at each step

### Algorithm
```
currentSum = 0
maxSum = -Infinity

for each element in array:
    currentSum += element
    maxSum = max(maxSum, currentSum)
    if currentSum < 0:
        currentSum = 0
```

### Time Complexity: O(n)
### Space Complexity: O(1)

### Example
```javascript
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: [4, -1, 2, 1] has the largest sum = 6
```

---

## 2️⃣ Dutch National Flag Algorithm (Sort 0s, 1s, 2s)

### Concept
Sort an array containing only 0s, 1s, and 2s in a single pass without using any sorting algorithm.

### Three Pointer Approach
- **low**: boundary for 0s (everything before low is 0)
- **mid**: current element being processed
- **high**: boundary for 2s (everything after high is 2)

### Algorithm
```
low = 0, mid = 0, high = n-1

while mid <= high:
    if arr[mid] == 0:
        swap(arr[low], arr[mid])
        low++, mid++
    else if arr[mid] == 1:
        mid++
    else:  // arr[mid] == 2
        swap(arr[mid], arr[high])
        high--
```

### Time Complexity: O(n)
### Space Complexity: O(1)

### Example
```javascript
// Input: [2, 0, 2, 1, 1, 0]
// Output: [0, 0, 1, 1, 2, 2]
```

---

## 3️⃣ Array Rotation Variations

### A. Rotate Array by K positions (Right Rotation)

#### Approach 1: Using Extra Space
```javascript
// Time: O(n), Space: O(n)
function rotateRight(arr, k) {
    k = k % arr.length;
    return [...arr.slice(-k), ...arr.slice(0, -k)];
}
```

#### Approach 2: Reversal Algorithm (Optimal)
```javascript
// Time: O(n), Space: O(1)
// Steps:
// 1. Reverse entire array
// 2. Reverse first k elements
// 3. Reverse remaining n-k elements
```

### B. Left Rotation
Similar logic but reverse in different order

### C. Cyclic Rotation
Rotate by 1 position multiple times

---

## 4️⃣ Merge Sorted Arrays

### Problem
Given two sorted arrays, merge them into one sorted array.

### Two Pointer Approach
```
i = 0, j = 0, k = 0
result = []

while i < arr1.length AND j < arr2.length:
    if arr1[i] < arr2[j]:
        result[k++] = arr1[i++]
    else:
        result[k++] = arr2[j++]

// Copy remaining elements
while i < arr1.length:
    result[k++] = arr1[i++]
while j < arr2.length:
    result[k++] = arr2[j++]
```

### Time Complexity: O(n + m)
### Space Complexity: O(n + m)

### Example
```javascript
// arr1 = [1, 3, 5, 7]
// arr2 = [2, 4, 6, 8]
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
```

---

## 5️⃣ Trapping Rain Water

### Problem
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Approach 1: Using Extra Space
```javascript
// Pre-compute left max and right max for each position
// Water at position i = min(leftMax[i], rightMax[i]) - height[i]
// Time: O(n), Space: O(n)
```

### Approach 2: Two Pointer (Optimal)
```javascript
// Use two pointers from both ends
// Keep track of leftMax and rightMax
// Time: O(n), Space: O(1)
```

### Algorithm
```
left = 0, right = n-1
leftMax = 0, rightMax = 0
water = 0

while left < right:
    if height[left] < height[right]:
        if height[left] >= leftMax:
            leftMax = height[left]
        else:
            water += leftMax - height[left]
        left++
    else:
        if height[right] >= rightMax:
            rightMax = height[right]
        else:
            water += rightMax - height[right]
        right--
```

### Example
```javascript
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: 6 units of rain water can be trapped
```

---

## 🎯 Practice Problems (20 Problems)

### Kadane's Algorithm (4 problems)
1. Maximum subarray sum
2. Maximum circular subarray sum
3. Maximum product subarray
4. Largest sum contiguous subarray with at least k elements

### Dutch National Flag (4 problems)
5. Sort 0s, 1s, 2s
6. Sort array by parity (even before odd)
7. Move all zeros to end
8. Segregate positive and negative numbers

### Array Rotation (4 problems)
9. Rotate array right by k positions
10. Rotate array left by k positions
11. Find minimum in rotated sorted array
12. Search in rotated sorted array

### Merge Arrays (4 problems)
13. Merge two sorted arrays
14. Merge k sorted arrays
15. Median of two sorted arrays
16. Intersection of two sorted arrays

### Trapping Rain Water (4 problems)
17. Trapping rain water (1D)
18. Container with most water
19. Trapping rain water (2D)
20. Pour water problem

---

## 💡 Key Takeaways

1. **Kadane's Algorithm**: Essential for subarray problems, O(n) solution for max sum
2. **Dutch National Flag**: Three-way partitioning using three pointers
3. **Rotation**: Reversal algorithm is space-efficient
4. **Merge**: Two pointer technique is fundamental
5. **Trapping Water**: Two pointer approach saves space over pre-computation

---

## 📖 Additional Resources

- **Kadane's Algorithm**: [GeeksforGeeks](https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/)
- **Dutch National Flag**: [Wikipedia](https://en.wikipedia.org/wiki/Dutch_national_flag_problem)
- **Array Rotation**: [LeetCode Discuss](https://leetcode.com/problems/rotate-array/discuss/)

---

**Time Allocated**: 6 hours
**Difficulty**: Medium to Hard
**Focus**: Space-time optimization, Multiple pointer techniques
