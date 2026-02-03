// Day 18: Matrix/2D Arrays - Practice Problems

// ========================================
// 1. MATRIX TRAVERSAL
// ========================================

// 1.1 Row-wise Traversal
function traverseRowWise(matrix) {
  const result = [];
  for (let row of matrix) {
    for (let val of row) {
      result.push(val);
    }
  }
  return result;
}

// 1.2 Column-wise Traversal
function traverseColumnWise(matrix) {
  const result = [];
  if (matrix.length === 0) return result;
  
  const cols = matrix[0].length;
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < matrix.length; row++) {
      result.push(matrix[row][col]);
    }
  }
  return result;
}

// 1.3 Print Matrix Diagonals (All diagonals)
function printDiagonals(matrix) {
  const diagonals = [];
  if (matrix.length === 0) return diagonals;
  
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Upper half including main diagonal
  for (let col = 0; col < cols; col++) {
    const diagonal = [];
    let r = 0, c = col;
    while (r < rows && c < cols) {
      diagonal.push(matrix[r][c]);
      r++;
      c++;
    }
    diagonals.push(diagonal);
  }
  
  // Lower half
  for (let row = 1; row < rows; row++) {
    const diagonal = [];
    let r = row, c = 0;
    while (r < rows && c < cols) {
      diagonal.push(matrix[r][c]);
      r++;
      c++;
    }
    diagonals.push(diagonal);
  }
  
  return diagonals;
}

// ========================================
// 2. MATRIX ROTATION
// ========================================

// 2.1 Rotate Matrix 90 Degrees Clockwise (In-place)
function rotateClockwise(matrix) {
  const n = matrix.length;
  
  // Step 1: Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  
  return matrix;
}

// 2.2 Rotate Matrix 90 Degrees Counter-Clockwise (In-place)
function rotateCounterClockwise(matrix) {
  const n = matrix.length;
  
  // Step 1: Transpose
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  
  // Step 2: Reverse each column (reverse the rows)
  matrix.reverse();
  
  return matrix;
}

// 2.3 Rotate Matrix 180 Degrees
function rotate180(matrix) {
  const n = matrix.length;
  
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - i][matrix[0].length - 1 - j];
      matrix[n - 1 - i][matrix[0].length - 1 - j] = temp;
    }
  }
  
  return matrix;
}

// ========================================
// 3. SPIRAL TRAVERSAL
// ========================================

// 3.1 Spiral Traversal (Clockwise)
function spiralTraversal(matrix) {
  const result = [];
  if (matrix.length === 0) return result;
  
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  
  while (top <= bottom && left <= right) {
    // Traverse right
    for (let col = left; col <= right; col++) {
      result.push(matrix[top][col]);
    }
    top++;
    
    // Traverse down
    for (let row = top; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    right--;
    
    // Traverse left (if row exists)
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        result.push(matrix[bottom][col]);
      }
      bottom--;
    }
    
    // Traverse up (if column exists)
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
// 4. SEARCH IN 2D MATRIX
// ========================================

// 4.1 Search in Sorted 2D Matrix (Each row sorted, each column sorted)
function searchMatrix(matrix, target) {
  if (matrix.length === 0) return false;
  
  // Start from top-right corner
  let row = 0;
  let col = matrix[0].length - 1;
  
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }
    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }
  
  return false;
}

// 4.2 Search in Row-wise and Column-wise Sorted Matrix
function searchSortedMatrix(matrix, target) {
  if (matrix.length === 0) return [-1, -1];
  
  // Can start from bottom-left as well
  let row = matrix.length - 1;
  let col = 0;
  
  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) {
      return [row, col];
    }
    if (matrix[row][col] > target) {
      row--;
    } else {
      col++;
    }
  }
  
  return [-1, -1];
}

// ========================================
// Test Cases
// ========================================

// Test Matrix
const testMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const testMatrix2D = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 16],
  [10, 13, 14, 17]
];

console.log("=== Matrix Traversal ===");
console.log("Row-wise:", traverseRowWise(testMatrix));
console.log("Column-wise:", traverseColumnWise(testMatrix));

console.log("\n=== Diagonal Traversal ===");
console.log("Diagonals:", printDiagonals(testMatrix));

console.log("\n=== Spiral Traversal ===");
console.log("Spiral:", spiralTraversal(testMatrix));

console.log("\n=== Search in Matrix ===");
console.log("Search 5:", searchMatrix(testMatrix2D, 5));
console.log("Search 100:", searchMatrix(testMatrix2D, 100));

console.log("\n=== Rotation ===");
const rotateTest = [[1, 2], [3, 4]];
console.log("Original:", rotateTest);
console.log("After 90° clockwise:", rotateClockwise(JSON.parse(JSON.stringify(rotateTest))));
