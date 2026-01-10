// Day 4: LeetCode Nested Loop Problems

console.log("=== Day 4: LeetCode Nested Loops ===\n");

// ==================== EASY ====================

// Problem 1: Matrix Diagonal Sum (LeetCode 1572)
function diagonalSum(mat) {
  let sum = 0, n = mat.length;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];  // Primary diagonal
    if (i !== n - 1 - i) {
      sum += mat[i][n - 1 - i];  // Secondary diagonal
    }
  }
  return sum;
}
console.log("1. Matrix Diagonal Sum:");
console.log("   [[1,2,3],[4,5,6],[7,8,9]] =>", diagonalSum([[1,2,3],[4,5,6],[7,8,9]])); // 25
console.log();

// Problem 2: Lucky Numbers in a Matrix (LeetCode 1380)
function luckyNumbers(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    let minCol = 0;
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] < matrix[i][minCol]) minCol = j;
    }
    
    let isMax = true;
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][minCol] > matrix[i][minCol]) {
        isMax = false;
        break;
      }
    }
    if (isMax) result.push(matrix[i][minCol]);
  }
  return result;
}
console.log("2. Lucky Numbers:");
console.log("   [[3,7,8],[9,11,13],[15,16,17]] =>", luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])); // [15]
console.log();

// Problem 3: Transpose Matrix (LeetCode 867)
function transpose(matrix) {
  const rows = matrix.length, cols = matrix[0].length;
  const result = [];
  for (let j = 0; j < cols; j++) {
    const row = [];
    for (let i = 0; i < rows; i++) {
      row.push(matrix[i][j]);
    }
    result.push(row);
  }
  return result;
}
console.log("3. Transpose Matrix:");
console.log("   [[1,2,3],[4,5,6]] =>");
console.log("   ", transpose([[1,2,3],[4,5,6]])); // [[1,4],[2,5],[3,6]]
console.log();

// Problem 4: Toeplitz Matrix (LeetCode 766)
function isToeplitzMatrix(matrix) {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length - 1; j++) {
      if (matrix[i][j] !== matrix[i + 1][j + 1]) return false;
    }
  }
  return true;
}
console.log("4. Toeplitz Matrix:");
console.log("   [[1,2,3,4],[5,1,2,3],[9,5,1,2]] =>", isToeplitzMatrix([[1,2,3,4],[5,1,2,3],[9,5,1,2]])); // true
console.log();

// Problem 5: Reshape the Matrix (LeetCode 566)
function matrixReshape(mat, r, c) {
  const m = mat.length, n = mat[0].length;
  if (m * n !== r * c) return mat;
  
  const result = Array(r).fill(0).map(() => Array(c).fill(0));
  let row = 0, col = 0;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[row][col] = mat[i][j];
      col++;
      if (col === c) {
        col = 0;
        row++;
      }
    }
  }
  return result;
}
console.log("5. Reshape Matrix:");
console.log("   [[1,2],[3,4]], r=1, c=4 =>", matrixReshape([[1,2],[3,4]], 1, 4));
console.log();

// ==================== MEDIUM ====================

// Problem 6: Spiral Matrix (LeetCode 54)
function spiralOrder(matrix) {
  const result = [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    for (let j = left; j <= right; j++) result.push(matrix[top][j]);
    top++;
    
    for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
    right--;
    
    if (top <= bottom) {
      for (let j = right; j >= left; j--) result.push(matrix[bottom][j]);
      bottom--;
    }
    
    if (left <= right) {
      for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
      left++;
    }
  }
  return result;
}
console.log("6. Spiral Matrix:");
console.log("   [[1,2,3],[4,5,6],[7,8,9]] =>", spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log();

// Problem 7: Rotate Image (LeetCode 48)
function rotate(matrix) {
  const n = matrix.length;
  // Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}
console.log("7. Rotate Image 90°:");
console.log("   [[1,2,3],[4,5,6],[7,8,9]] =>");
console.log("   ", rotate([[1,2,3],[4,5,6],[7,8,9]]));
console.log();

console.log("✅ Day 4 LeetCode Complete!");
