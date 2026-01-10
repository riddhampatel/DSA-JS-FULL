# Day 15: Sliding Window Technique

## 📖 What is Sliding Window?

Sliding Window is a technique used to efficiently solve problems that involve finding subarrays or substrings with certain properties. Instead of checking every possible subarray (which would be O(n²)), we maintain a "window" that slides across the data structure.

### Key Idea:
- Expand the window by moving the right pointer
- Contract the window by moving the left pointer
- Avoid redundant computations by reusing previous window calculations

### Time Complexity: O(n) - each element is visited at most twice

---

## Types of Sliding Window

### 1. **Fixed-Size Window**
Window size is constant (always k elements).

**When to use:**
- Find max/min sum of k consecutive elements
- Find average of k consecutive elements
- Find pattern in fixed-size window

**Pattern:**
```javascript
for (let i = 0; i < arr.length - k + 1; i++) {
    // Process window from i to i+k-1
}
```

### 2. **Variable-Size Window**
Window size changes dynamically based on conditions.

**When to use:**
- Find longest/shortest substring with certain properties
- Find substring with at most k distinct characters
- Find subarray with sum equals k

**Pattern:**
```javascript
let left = 0;
for (let right = 0; right < arr.length; right++) {
    // Add element at right
    
    while (condition_not_met) {
        // Remove element at left
        left++;
    }
    
    // Update result
}
```

---

## Core Concepts

### 1. Frequency Map/Counter
Keep track of character/element frequencies in current window.

```javascript
let freq = {};
freq[element] = (freq[element] || 0) + 1;
```

### 2. Deque (Double-Ended Queue)
For problems requiring min/max in window efficiently.

```javascript
let deque = [];
// Add at back, remove from front/back
deque.push(element);      // Add to back
deque.shift();            // Remove from front
deque.pop();              // Remove from back
```

### 3. Hash Map for Indices
Store last seen index of elements to avoid duplicates.

```javascript
let lastIndex = {};
lastIndex[element] = currentIndex;
```

---

## Common Patterns

### Pattern 1: Fixed Window - Max/Min Sum
```javascript
// Calculate first window
let sum = 0;
for (let i = 0; i < k; i++) sum += arr[i];

// Slide
for (let i = k; i < arr.length; i++) {
    sum = sum - arr[i-k] + arr[i];
    result = Math.max(result, sum);
}
```

### Pattern 2: Variable Window - Longest Substring
```javascript
let left = 0, result = 0;
let freq = {};

for (let right = 0; right < str.length; right++) {
    freq[str[right]]++;
    
    while (freq[str[right]] > 1) { // Shrink if invalid
        freq[str[left]]--;
        left++;
    }
    
    result = Math.max(result, right - left + 1);
}
```

### Pattern 3: Variable Window - At Most K Elements
```javascript
let left = 0;
let count = 0;

for (let right = 0; right < arr.length; right++) {
    if (condition(arr[right])) count++;
    
    while (count > k) {
        if (condition(arr[left])) count--;
        left++;
    }
    
    result = Math.max(result, right - left + 1);
}
```

### Pattern 4: Two Pointers in Window
```javascript
// For checking if window contains required elements
let required = new Set(targetChars);
let formed = 0;

for (let right = 0; right < arr.length; right++) {
    // Add right element
    
    while (formed === required.size) {
        // Update result with minimum window
        
        // Remove left element
        left++;
    }
}
```

---

## Common Problems by Type

### Fixed-Size Window
1. Maximum Sum of K Consecutive Elements
2. Average of K Consecutive Elements
3. First Negative Number in Window
4. Count Occurrences of Anagrams

### Variable-Size Window (Longest)
1. Longest Substring Without Repeating Characters
2. Longest Substring with At Most K Distinct Characters
3. Longest Subarray with Sum Equals K
4. Fruit Into Baskets

### Variable-Size Window (Shortest)
1. Minimum Window Substring
2. Minimum Size Subarray with Sum

### Window with Extremum
1. Sliding Window Maximum
2. Max Consecutive Ones
3. Longest Turbulent Subarray

---

## Tips & Tricks

### 1. **Know When to Stop**
Identify the stopping condition for window expansion/contraction:
- Duplicate found?
- Sum exceeded?
- Distinct elements limit?
- Condition satisfied?

### 2. **Update Result at Right Time**
- For longest: Update when condition is valid
- For shortest: Update before shrinking
- For extremum: Update with deque front

### 3. **Use Appropriate Data Structures**
- Frequency: Object/Map
- Indices: Object/Map
- Min/Max in window: Deque
- Duplicates: Set

### 4. **Edge Cases**
- Empty input
- Single element
- Window size larger than array
- All same elements
- No valid window

### 5. **Space Optimization**
Sliding window naturally optimizes space:
- Only track current window, not entire array
- Space: O(k) instead of O(n)

---

## Algorithm Complexity Analysis

| Problem | Time | Space | Notes |
|---------|------|-------|-------|
| Max Sum K Elements | O(n) | O(1) | Fixed window |
| Longest Substring No Repeat | O(n) | O(min(m,n)) | Char count map |
| Minimum Window Substring | O(m+n) | O(1) | 26 chars max |
| Sliding Window Max | O(n) | O(k) | Deque approach |
| Fruit Into Baskets | O(n) | O(1) | At most 2 fruits |

---

## Related Techniques

1. **Two Pointers** - Similar but usually for sorted arrays
2. **Prefix Sum** - Pre-calculate sums for O(1) range queries
3. **Binary Search** - Can complement sliding window
4. **Prefix Hash** - For substring matching

---

## Practice Strategy

1. **Day 1:** Learn fixed-size window (max sum, average)
2. **Day 2:** Learn variable-size window (longest substring)
3. **Day 3:** Practice medium-level problems
4. **Day 4:** Practice with deque (sliding window max)
5. **Day 5:** Mix of easy to hard problems

---

## Checklist for Sliding Window Problems

- [ ] Is it about consecutive elements/characters?
- [ ] Is condition based on current window content?
- [ ] Can I avoid redundant computation by sliding?
- [ ] What's the expansion condition?
- [ ] What's the contraction/shrinking condition?
- [ ] When should I update the result?
- [ ] What data structure tracks window content?
- [ ] Are there edge cases for empty/single element?

---

## Code Template

```javascript
function slidingWindow(input, condition) {
    let left = 0;
    let result = 0;
    let windowData = {}; // Frequency/state tracking
    
    for (let right = 0; right < input.length; right++) {
        // 1. Add right element to window
        windowData[input[right]]++;
        
        // 2. Shrink window while condition not met
        while (!condition(windowData)) {
            windowData[input[left]]--;
            left++;
        }
        
        // 3. Update result
        result = Math.max(result, right - left + 1);
    }
    
    return result;
}
```

---

## Remember

✅ **DO:**
- Identify which pointer to move (left or right)
- Track only what's necessary in the window
- Use appropriate data structure for window tracking
- Think about when condition changes

❌ **DON'T:**
- Process same element multiple times unnecessarily
- Use nested loops (that defeats the purpose)
- Forget to handle window boundaries
- Ignore edge cases like k > length

---

## Key Interview Tips

1. **Clarify the problem:** Fixed or variable window?
2. **Identify the condition:** What makes window invalid?
3. **Choose data structure:** What to track in window?
4. **Optimize:** Can I reduce space? Can I reduce time further?
5. **Test:** Edge cases before submitting

---

*Practice makes perfect! The more sliding window problems you solve, the quicker you'll recognize them in interviews.*
