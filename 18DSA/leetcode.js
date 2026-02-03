// Day 18: Matrix/2D Arrays - LeetCode Problems

// ========================================
// Problem 1: Rotate Image (LC 48)
// ========================================
// Rotate a n x n matrix 90 degrees clockwise in-place
// Constraints: Do it in-place

function rotate(matrix) {
  const n = matrix.length;
  
  // Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
}

// Time: O(n²), Space: O(1)

// ========================================
// Problem 2: Spiral Matrix (LC 54)
// ========================================
// Return all elements of matrix in spiral order

function spiralOrder(matrix) {
  const result = [];
  if (matrix.length === 0) return result;
  
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Right
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;
    
    // Down
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;
    
    // Left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }
    
    // Up
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }
  
  return result;
}

// Time: O(m*n), Space: O(1) excluding output

// ========================================
// Problem 3: Search a 2D Matrix II (LC 240)
// ========================================
// Search target in 2D matrix where rows and columns are sorted
// Return true if target found, else false

function searchMatrix(matrix, target) {
  if (matrix.length === 0) return false;
  
  // Start from top-right corner
  let row = 0;
  let col = matrix[0].length - 1;
  
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }
    // If current element > target, move left
    if (matrix[row][col] > target) {
      col--;
    } else {
      // If current element < target, move down
      row++;
    }
  }
  
  return false;
}

// Time: O(m + n), Space: O(1)

// ========================================
// Problem 4: Set Matrix Zeroes (LC 73)
// ========================================
// Set entire row and column to 0 if element is 0
// Do it in-place with O(1) space

function setZeroes(matrix) {
  let firstRowZero = false;
  let firstColZero = false;
  
  // Check if first row needs to be zeroed
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowZero = true;
      break;
    }
  }
  
  // Check if first column needs to be zeroed
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColZero = true;
      break;
    }
  }
  
  // Use first row and column as markers
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  
  // Set rows to zero based on markers
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  
  // Set first row
  if (firstRowZero) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }
  
  // Set first column
  if (firstColZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
}

// Time: O(m*n), Space: O(1)

// ========================================
// Problem 5: Diagonal Traverse (LC 498)
// ========================================
// Return diagonal elements in zigzag pattern

function findDiagonalOrder(matrix) {
  if (matrix.length === 0) return [];
  
  const result = [];
  const m = matrix.length;
  const n = matrix[0].length;
  
  for (let d = 0; d < m + n - 1; d++) {
    const diagonal = [];
    
    // Get elements on diagonal d
    for (let row = 0; row < m; row++) {
      const col = d - row;
      if (col >= 0 && col < n) {
        diagonal.push(matrix[row][col]);
      }
    }
    
    // Reverse every other diagonal
    if (d % 2 === 1) {
      diagonal.reverse();
    }
    
    result.push(...diagonal);
  }
  
  return result;
}

// Time: O(m*n), Space: O(1) excluding output

// ========================================
// Problem 6: Rotate Image 90 (In-place, different approach)
// ========================================

function rotateOptimized(matrix) {
  const n = matrix.length;
  
  // Layer by layer rotation
  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer;
    const last = n - 1 - layer;
    
    for (let i = first; i < last; i++) {
      const offset = i - first;
      
      // Save top
      const top = matrix[first][i];
      
      // Left -> Top
      matrix[first][i] = matrix[last - offset][first];
      
      // Bottom -> Left
      matrix[last - offset][first] = matrix[last][last - offset];
      
      // Right -> Bottom
      matrix[last][last - offset] = matrix[i][last];
      
      // Top -> Right
      matrix[i][last] = top;
    }
  }
}

// Time: O(n²), Space: O(1)

// ========================================
// Test Cases
// ========================================

console.log("=== Problem 1: Rotate Image ===");
const test1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(test1);
console.log("Rotated:", test1);

console.log("\n=== Problem 2: Spiral Order ===");
const test2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Spiral:", spiralOrder(test2));

console.log("\n=== Problem 3: Search in 2D Matrix ===");
const test3 = [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16]];
console.log("Search 5:", searchMatrix(test3, 5));
console.log("Search 13:", searchMatrix(test3, 13));

console.log("\n=== Problem 4: Set Matrix Zeroes ===");
const test4 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
setZeroes(test4);
console.log("After setting zeroes:", test4);

console.log("\n=== Problem 5: Diagonal Traverse ===");
const test5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Diagonal:", findDiagonalOrder(test5));
