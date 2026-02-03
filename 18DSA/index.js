// Day 18: Matrix/2D Arrays - Additional Practice & Problems

// ========================================
// Problem 1: Print Matrix in Spiral Form
// ========================================

function spiralPrint(matrix) {
  if (matrix.length === 0) return [];
  
  const result = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Print right
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;
    
    // Print down
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;
    
    // Print left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }
    
    // Print up
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        result.push(matrix[row][left]);
      }
      left++;
    }
  }
  
  return result;
}

// ========================================
// Problem 2: Transpose of Matrix
// ========================================

function transpose(matrix) {
  const result = [];
  if (matrix.length === 0) return result;
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let col = 0; col < cols; col++) {
    const row = [];
    for (let r = 0; r < rows; r++) {
      row.push(matrix[r][col]);
    }
    result.push(row);
  }
  
  return result;
}

// In-place transpose (for square matrix)
function transposeInPlace(matrix) {
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix;
}

// ========================================
// Problem 3: Count Elements in Sorted 2D Matrix
// ========================================

function countElementsLessThan(matrix, target) {
  if (matrix.length === 0) return 0;
  
  let row = 0;
  let col = matrix[0].length - 1;
  let count = 0;
  
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] < target) {
      count += col + 1; // All elements in this row before current col
      row++;
    } else {
      col--;
    }
  }
  
  return count;
}

// ========================================
// Problem 4: Matrix Border Sum
// ========================================

function matrixBorderSum(matrix) {
  if (matrix.length === 0) return 0;
  
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Top row
  for (let col = 0; col < cols; col++) {
    sum += matrix[0][col];
  }
  
  // Bottom row
  for (let col = 0; col < cols; col++) {
    sum += matrix[rows - 1][col];
  }
  
  // Left column (excluding corners)
  for (let row = 1; row < rows - 1; row++) {
    sum += matrix[row][0];
  }
  
  // Right column (excluding corners)
  for (let row = 1; row < rows - 1; row++) {
    sum += matrix[row][cols - 1];
  }
  
  return sum;
}

// ========================================
// Problem 5: Find Peak Element in 2D (LC 1901)
// ========================================
// Peak element: greater than adjacent (up, down, left, right)

function findPeakElement(matrix) {
  if (matrix.length === 0) return [-1, -1];
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let isPeak = true;
      
      // Check all 4 directions
      if (i > 0 && matrix[i - 1][j] > matrix[i][j]) isPeak = false;
      if (i < rows - 1 && matrix[i + 1][j] > matrix[i][j]) isPeak = false;
      if (j > 0 && matrix[i][j - 1] > matrix[i][j]) isPeak = false;
      if (j < cols - 1 && matrix[i][j + 1] > matrix[i][j]) isPeak = false;
      
      if (isPeak) return [i, j];
    }
  }
  
  return [-1, -1];
}

// ========================================
// Problem 6: Matrix Path Sum (LeetCode 120)
// ========================================
// Find minimum path sum from top-left to bottom-right

function minPathSum(matrix) {
  if (matrix.length === 0) return 0;
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  const dp = Array(rows).fill(0).map(() => Array(cols).fill(0));
  
  // Initialize first cell
  dp[0][0] = matrix[0][0];
  
  // Initialize first column
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + matrix[i][0];
  }
  
  // Initialize first row
  for (let j = 1; j < cols; j++) {
    dp[0][j] = dp[0][j - 1] + matrix[0][j];
  }
  
  // Fill remaining cells
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
    }
  }
  
  return dp[rows - 1][cols - 1];
}

// ========================================
// Problem 7: Rotate Matrix 90 (Different Approach)
// ========================================

function rotateMatrixClockwise(matrix) {
  const n = matrix.length;
  
  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  
  return matrix;
}

// ========================================
// Test Cases
// ========================================

console.log("=== Spiral Print ===");
const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
console.log(spiralPrint(matrix1));

console.log("\n=== Transpose ===");
const matrix2 = [[1, 2, 3], [4, 5, 6]];
console.log("Original:", matrix2);
console.log("Transposed:", transpose(matrix2));

console.log("\n=== Border Sum ===");
const matrix3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log("Border sum:", matrixBorderSum(matrix3));

console.log("\n=== Min Path Sum ===");
const matrix4 = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
console.log("Min path sum:", minPathSum(matrix4));

console.log("\n=== Count Elements Less Than ===");
const matrix5 = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
console.log("Elements < 6:", countElementsLessThan(matrix5, 6));

console.log("\n=== Find Peak Element ===");
const matrix6 = [[1, 4, 3], [13, 15, 14], [11, 6, 5]];
console.log("Peak element:", findPeakElement(matrix6));
