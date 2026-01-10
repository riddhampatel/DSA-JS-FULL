# Day 11: Week 1-2 Review

## Topics Covered (Days 1-10)

### Day 1: Variables, Data Types & Operators
- `let`, `const`, `var`
- Primitive types: Number, String, Boolean, null, undefined
- Arithmetic, comparison, logical operators
- Type coercion

### Day 2: Conditional Statements
- if-else, else if chains
- switch-case statements
- Ternary operator
- Logical operators (&&, ||, !)

### Day 3: Loops - Part 1
- for loop (basic, variations)
- while loop
- do-while loop
- break and continue
- Common loop patterns

### Day 4: Nested Loops & Patterns
- Nested for loops
- Pattern printing (square, triangle, pyramid, diamond)
- Matrix traversal
- 2D array operations

### Day 5: Number-Based Problems
- Palindrome, Armstrong, Perfect numbers
- Prime number check
- Strong, Neon, Automorphic numbers
- GCD, LCM
- Factorial, Fibonacci

### Day 6: Digit Manipulation
- Extracting digits
- Sum/Product of digits
- Largest/Smallest digit
- Digit frequency
- Happy, Harshad numbers

### Day 7: Number Conversions
- Decimal ↔ Binary
- Decimal ↔ Octal
- Decimal ↔ Hexadecimal
- Bit manipulation basics

### Day 8: Functions
- Function declaration, expression, arrow
- Parameters, default values, rest parameters
- Scope (global, function, block, lexical)
- Closures
- Recursion basics
- Higher-order functions

### Day 9: Arrays - Basics
- Array creation methods
- push, pop, shift, unshift
- Accessing elements
- Array traversal methods
- slice, splice, concat, join

### Day 10: Arrays - Intermediate
- map, filter, reduce
- Array searching (linear, binary)
- Sorting algorithms
- Two pointer technique
- Common array patterns

## Key Concepts Review

### 1. Type System
```javascript
// Always use === not ==
5 === "5"  // false (strict equality)
5 == "5"   // true (loose equality - avoid)
```

### 2. Scope Rules
```javascript
// Block scope (let, const)
if (true) {
  let x = 10;  // Only accessible in block
}

// Function scope (var)
function test() {
  var y = 20;  // Accessible in entire function
}
```

### 3. Common Loop Patterns
```javascript
// Iteration
for (let i = 0; i < n; i++) { }

// Digit extraction
while (num > 0) {
  digit = num % 10;
  num = Math.floor(num / 10);
}

// Array traversal
for (const item of array) { }
array.forEach(item => { });
```

### 4. Recursion Pattern
```javascript
function recursive(n) {
  // Base case
  if (n === 0) return baseValue;
  
  // Recursive case
  return combine(recursive(n - 1));
}
```

### 5. Array Methods Chain
```javascript
arr
  .filter(x => condition)
  .map(x => transform)
  .reduce((acc, x) => acc + x, 0);
```

## Problem-Solving Strategies

### 1. Understand the Problem
- Read carefully
- Identify inputs and outputs
- Check constraints
- Consider edge cases

### 2. Plan Your Approach
- Break into smaller steps
- Choose appropriate data structures
- Consider time/space complexity

### 3. Code Implementation
- Write clean, readable code
- Use meaningful variable names
- Add comments for complex logic

### 4. Test Thoroughly
- Test normal cases
- Test edge cases (empty, single element, large)
- Test boundary values

## Common Mistakes to Avoid

1. **Off-by-one errors**
   ```javascript
   // Wrong
   for (let i = 0; i <= arr.length; i++)
   
   // Right
   for (let i = 0; i < arr.length; i++)
   ```

2. **Modifying array while iterating**
   ```javascript
   // Wrong
   for (let i = 0; i < arr.length; i++) {
     arr.splice(i, 1);  // Changes length during iteration
   }
   
   // Right
   const filtered = arr.filter(x => condition);
   ```

3. **Not handling edge cases**
   ```javascript
   // Handle empty arrays
   if (arr.length === 0) return defaultValue;
   
   // Handle null/undefined
   if (!value) return;
   ```

4. **Incorrect use of == vs ===**
   ```javascript
   // Always use ===
   if (x === 5) { }  // ✅
   if (x == 5) { }   // ❌
   ```

5. **Forgetting to return in recursion**
   ```javascript
   function factorial(n) {
     if (n <= 1) return 1;  // ✅ return
     return n * factorial(n - 1);  // ✅ return
   }
   ```

## Practice Problem Categories

### Easy (Warm-up)
- Print patterns
- Basic math operations
- Simple loops
- Array traversal

### Medium
- Number properties (palindrome, prime)
- Array manipulation
- String operations
- Basic recursion

### Hard
- Complex patterns
- Optimization problems
- Multiple pointer techniques
- Advanced recursion

## Recommended Practice Set

### Numbers (15 problems)
1. Reverse number
2. Palindrome check
3. Prime number
4. Armstrong number
5. Perfect number
6. Strong number
7. GCD of two numbers
8. LCM of two numbers
9. Factorial
10. Fibonacci nth term
11. Sum of digits
12. Product of digits
13. Count digits
14. Happy number
15. Automorphic number

### Arrays (15 problems)
1. Find max/min
2. Reverse array
3. Rotate array
4. Remove duplicates
5. Find second largest
6. Two sum problem
7. Array leaders
8. Kadane's algorithm
9. Merge sorted arrays
10. Dutch national flag
11. Stock buy/sell
12. Array rotation
13. Missing number
14. Duplicate number
15. Majority element

### Patterns (10 problems)
1. Square pattern
2. Right triangle
3. Inverted triangle
4. Pyramid
5. Diamond
6. Hollow square
7. Number triangle
8. Floyd's triangle
9. Alphabet patterns
10. Complex nested patterns

## Time Complexity Quick Reference

| Operation | Time | Example |
|-----------|------|---------|
| Single loop | O(n) | Sum array |
| Nested loop | O(n²) | Bubble sort |
| Binary search | O(log n) | Search sorted |
| Sorting | O(n log n) | Merge sort |
| Recursion | Varies | Depends on recurrence |

## Next Steps (Week 3-4)

- Strings (basic & advanced)
- Two pointer technique
- Sliding window
- Matrix operations
- More array problems

## Daily Practice Routine

1. **Morning (30 min)**
   - Review one previous topic
   - Solve 2 easy problems

2. **Afternoon (1-2 hours)**
   - Learn new concept
   - Take notes
   - Understand examples

3. **Evening (1-2 hours)**
   - Solve practice problems
   - Implement from scratch
   - Test edge cases

4. **Night (15 min)**
   - Review what you learned
   - Identify weak areas
   - Plan tomorrow

## Key Takeaways

✅ Master fundamentals before moving to advanced topics  
✅ Practice regularly - consistency > intensity  
✅ Understand WHY, not just HOW  
✅ Test your code thoroughly  
✅ Learn from mistakes  
✅ Build problem-solving intuition  
✅ Keep notes for quick revision  

**Remember:** DSA is a marathon, not a sprint. Focus on understanding concepts deeply rather than rushing through topics.
