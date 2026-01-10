// Day 4: Nested Loops & Patterns - Practice Problems

console.log("=== Day 4 Practice: Pattern Problems ===\n");

// Problem 1: Square Pattern
function squarePattern(n) {
  console.log("1. Square Pattern:");
  for (let i = 0; i < n; i++) {
    let row = '';
    for (let j = 0; j < n; j++) {
      row += '* ';
    }
    console.log("   " + row);
  }
}
squarePattern(4);
console.log();

// Problem 2: Right Triangle
function rightTriangle(n) {
  console.log("2. Right Triangle:");
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log("   " + row);
  }
}
rightTriangle(5);
console.log();

// Problem 3: Inverted Triangle
function invertedTriangle(n) {
  console.log("3. Inverted Triangle:");
  for (let i = n; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '* ';
    }
    console.log("   " + row);
  }
}
invertedTriangle(5);
console.log();

// Problem 4: Pyramid
function pyramid(n) {
  console.log("4. Pyramid:");
  for (let i = 1; i <= n; i++) {
    let row = ' '.repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += '*';
    }
    console.log("   " + row);
  }
}
pyramid(5);
console.log();

// Problem 5: Number Triangle
function numberTriangle(n) {
  console.log("5. Number Triangle:");
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log("   " + row);
  }
}
numberTriangle(5);
console.log();

// Problem 6: Floyd's Triangle
function floydsTriangle(n) {
  console.log("6. Floyd's Triangle:");
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += num + ' ';
      num++;
    }
    console.log("   " + row);
  }
}
floydsTriangle(5);
console.log();

// Problem 7: Diamond Pattern
function diamond(n) {
  console.log("7. Diamond Pattern:");
  // Upper half
  for (let i = 1; i <= n; i++) {
    let row = ' '.repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += '*';
    }
    console.log("   " + row);
  }
  // Lower half
  for (let i = n - 1; i >= 1; i--) {
    let row = ' '.repeat(n - i);
    for (let j = 1; j <= 2 * i - 1; j++) {
      row += '*';
    }
    console.log("   " + row);
  }
}
diamond(5);
console.log();

// Problem 8: Hollow Square
function hollowSquare(n) {
  console.log("8. Hollow Square:");
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        row += '* ';
      } else {
        row += '  ';
      }
    }
    console.log("   " + row);
  }
}
hollowSquare(5);
console.log();

// Problem 9: Multiplication Table Grid
function multiplicationGrid(n) {
  console.log("9. Multiplication Table Grid:");
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
      row += (i * j).toString().padStart(4, ' ');
    }
    console.log("   " + row);
  }
}
multiplicationGrid(5);
console.log();

console.log("✅ Day 4 Practice Complete!");
