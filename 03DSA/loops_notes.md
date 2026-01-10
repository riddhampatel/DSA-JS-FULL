# Day 3: Loops - Part 1 (for, while)

## For Loop

### Basic Syntax
```javascript
for (initialization; condition; increment) {
  // code to execute
}
```

### Examples
```javascript
// Print 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Iterate backwards
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Skip by 2
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}
```

## While Loop

### Syntax
```javascript
while (condition) {
  // code
  // update condition
}
```

### Example
```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### When to Use While
- Unknown number of iterations
- Condition-based loops
- Reading input until certain value

## Do-While Loop

### Syntax
```javascript
do {
  // code (executes at least once)
} while (condition);
```

### Example
```javascript
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);
```

### Key Difference
- Executes at least once (condition checked after)
- Use for menu systems, input validation

## Loop Control Statements

### Break
Exits the loop immediately
```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);  // 1, 2, 3, 4
}
```

### Continue
Skips current iteration
```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);  // 1, 2, 4, 5
}
```

## Common Loop Patterns

### Sum Pattern
```javascript
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
```

### Product Pattern
```javascript
let product = 1;
for (let i = 1; i <= n; i++) {
  product *= i;
}
```

### Counting Pattern
```javascript
let count = 0;
for (let i = 0; i < n; i++) {
  if (condition) count++;
}
```

### Digit Extraction
```javascript
let num = 12345;
while (num > 0) {
  let digit = num % 10;
  // process digit
  num = Math.floor(num / 10);
}
```

## Performance Tips

1. **Cache array length**
   ```javascript
   const len = arr.length;
   for (let i = 0; i < len; i++) {
     // process arr[i]
   }
   ```

2. **Avoid infinite loops**
   ```javascript
   // BAD - infinite loop
   while (true) {
     // no break condition
   }
   
   // GOOD
   while (condition) {
     // modify condition
   }
   ```

3. **Choose right loop type**
   - For: Known iterations
   - While: Unknown iterations, condition-based
   - Do-While: At least one execution needed

## Common Mistakes

1. **Off-by-one errors**
   ```javascript
   // Wrong: runs 11 times (0-10)
   for (let i = 0; i <= 10; i++) {}
   
   // Right: runs 10 times (0-9)
   for (let i = 0; i < 10; i++) {}
   ```

2. **Infinite loops**
   ```javascript
   // Wrong: i never changes
   let i = 0;
   while (i < 10) {
     console.log(i);
   }
   
   // Right
   while (i < 10) {
     console.log(i);
     i++;
   }
   ```

3. **Variable scope**
   ```javascript
   // Use let in for loop
   for (let i = 0; i < 5; i++) {}  // ✅
   for (var i = 0; i < 5; i++) {}  // ❌
   ```

## Practice Exercises

1. Sum of first N natural numbers
2. Factorial of N
3. Check if number is prime
4. Reverse a number
5. Count digits in a number
6. Sum of digits
7. Print multiplication table
8. Fibonacci sequence
9. GCD of two numbers
10. LCM of two numbers
