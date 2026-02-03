# Day 18: Matrix/2D Arrays

## Topics Covered:
- Matrix traversal (row-wise, column-wise)
- Diagonal traversal
- Matrix rotation (90°, 180°)
- Spiral traversal
- Search in 2D matrix

## Key Concepts:

### 1. Matrix Traversal
- **Row-wise:** Navigate through each row from left to right
- **Column-wise:** Navigate through each column from top to bottom
- **Reverse traversal:** Backward iteration

### 2. Diagonal Traversal
- **Primary diagonal:** Top-left to bottom-right (i === j)
- **Secondary diagonal:** Top-right to bottom-left (i + j === n - 1)
- **Anti-diagonal traversal:** Multiple diagonals

### 3. Matrix Rotation
- **90° clockwise:** Transpose + reverse rows
- **90° counter-clockwise:** Transpose + reverse columns
- **180°:** Reverse entire matrix

### 4. Spiral Traversal
- Outer layer → inner layers
- Track boundaries: top, bottom, left, right
- Decrease boundaries after each direction

### 5. Search in 2D Matrix
- Start from top-right or bottom-left corner
- Elimination-based search approach
