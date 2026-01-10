# Day 4: Nested Loops & Pattern Printing

## Nested Loop Basics

### Structure
```javascript
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    // Inner loop body
  }
}
```

### Key Concepts
- Outer loop controls rows
- Inner loop controls columns
- Each outer iteration runs all inner iterations

## Common Pattern Types

### 1. Square Pattern
```
* * * *
* * * *
* * * *
* * * *
```
```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    process.stdout.write('* ');
  }
  console.log();
}
```

### 2. Right Triangle
```
*
* *
* * *
* * * *
```
```javascript
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write('* ');
  }
  console.log();
}
```

### 3. Inverted Triangle
```
* * * *
* * *
* *
*
```
```javascript
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write('* ');
  }
  console.log();
}
```

### 4. Pyramid
```
   *
  ***
 *****
*******
```
```javascript
for (let i = 1; i <= n; i++) {
  // Print spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ');
  }
  // Print stars
  for (let k = 1; k <= 2 * i - 1; k++) {
    process.stdout.write('*');
  }
  console.log();
}
```

### 5. Diamond
```
   *
  ***
 *****
  ***
   *
```
```javascript
// Upper half
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) process.stdout.write(' ');
  for (let k = 1; k <= 2 * i - 1; k++) process.stdout.write('*');
  console.log();
}
// Lower half
for (let i = n - 1; i >= 1; i--) {
  for (let j = 1; j <= n - i; j++) process.stdout.write(' ');
  for (let k = 1; k <= 2 * i - 1; k++) process.stdout.write('*');
  console.log();
}
```

## Number Patterns

### Number Triangle
```
1
1 2
1 2 3
1 2 3 4
```
```javascript
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + ' ');
  }
  console.log();
}
```

### Floyd's Triangle
```
1
2 3
4 5 6
7 8 9 10
```
```javascript
let num = 1;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(num + ' ');
    num++;
  }
  console.log();
}
```

## Matrix Operations

### 2D Array Declaration
```javascript
// Method 1
const matrix = [[1,2,3], [4,5,6], [7,8,9]];

// Method 2
const rows = 3, cols = 3;
const mat = Array(rows).fill(0).map(() => Array(cols).fill(0));
```

### Traversal Patterns

#### Row-wise
```javascript
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    console.log(matrix[i][j]);
  }
}
```

#### Column-wise
```javascript
for (let j = 0; j < cols; j++) {
  for (let i = 0; i < rows; i++) {
    console.log(matrix[i][j]);
  }
}
```

#### Diagonal
```javascript
// Main diagonal
for (let i = 0; i < n; i++) {
  console.log(matrix[i][i]);
}

// Anti-diagonal
for (let i = 0; i < n; i++) {
  console.log(matrix[i][n - 1 - i]);
}
```

## Pattern Formula Reference

| Pattern | Outer Loop | Inner Loop | Notes |
|---------|-----------|------------|-------|
| Square | `i < n` | `j < n` | All rows same |
| Right Triangle | `i <= n` | `j <= i` | Increasing stars |
| Inverted | `i = n to 1` | `j <= i` | Decreasing stars |
| Pyramid | `i <= n` | spaces: `j < n-i`<br>stars: `j < 2*i-1` | Centered |
| Diamond | Two loops | Upper + Lower | Combine pyramid |

## Time Complexity

- Single loop: O(n)
- Nested loop (square): O(n²)
- Nested loop (triangle): O(n²/2) = O(n²)
- Triple nested: O(n³)

## Common Mistakes

1. **Off-by-one in loops**
   ```javascript
   // Wrong
   for (let i = 0; i <= n; i++)  // runs n+1 times
   
   // Right
   for (let i = 0; i < n; i++)   // runs n times
   ```

2. **Not resetting inner loop variable**
   ```javascript
   // Good - j resets each iteration
   for (let i = 0; i < n; i++) {
     for (let j = 0; j < n; j++) {
       // ...
     }
   }
   ```

3. **Printing issues**
   ```javascript
   // Use process.stdout.write() for same line
   process.stdout.write('*');
   
   // Use console.log() for new line
   console.log();
   ```

## Practice Tips

1. Draw the pattern on paper first
2. Identify row and column relationships
3. Count spaces and stars manually
4. Test with small values (n=3, n=4)
5. Build complex patterns from simpler ones
