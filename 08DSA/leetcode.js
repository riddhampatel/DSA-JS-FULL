// Day 8: LeetCode Function Problems

console.log("=== Day 8: LeetCode Functions ===\n");

// ==================== EASY ====================

// Problem 1: Fibonacci Number (LeetCode 509)
function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log("1. Fibonacci:");
console.log("   fib(10) =", fib(10)); // 55
console.log();

// Problem 2: Tribonacci Number (LeetCode 1137)
function tribonacci(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  let a = 0, b = 1, c = 1;
  for (let i = 3; i <= n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }
  return c;
}
console.log("2. Tribonacci:");
console.log("   trib(10) =", tribonacci(10)); // 149
console.log();

// Problem 3: Recursion - N-th Tribonacci (Recursive)
function tribonacciRec(n, memo = {}) {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  if (memo[n]) return memo[n];
  memo[n] = tribonacciRec(n-1, memo) + tribonacciRec(n-2, memo) + tribonacciRec(n-3, memo);
  return memo[n];
}
console.log("3. Tribonacci (Recursive):");
console.log("   trib(10) =", tribonacciRec(10));
console.log();

// Problem 4: Power of Four (LeetCode 342)
function isPowerOfFour(n) {
  if (n <= 0) return false;
  while (n % 4 === 0) {
    n /= 4;
  }
  return n === 1;
}
console.log("4. Power of Four:");
console.log("   16:", isPowerOfFour(16)); // true
console.log("   5:", isPowerOfFour(5)); // false
console.log();

// Problem 5: Sum of All Subset XOR Totals (LeetCode 1863)
function subsetXORSum(nums) {
  function helper(index, currentXOR) {
    if (index === nums.length) return currentXOR;
    return helper(index + 1, currentXOR) + helper(index + 1, currentXOR ^ nums[index]);
  }
  return helper(0, 0);
}
console.log("5. Subset XOR Sum:");
console.log("   [1,3] =>", subsetXORSum([1,3])); // 6
console.log();

// ==================== MEDIUM ====================

// Problem 6: Decode String (LeetCode 394)
function decodeString(s) {
  const stack = [];
  let currentNum = 0;
  let currentStr = '';
  
  for (let char of s) {
    if (char >= '0' && char <= '9') {
      currentNum = currentNum * 10 + parseInt(char);
    } else if (char === '[') {
      stack.push(currentStr);
      stack.push(currentNum);
      currentStr = '';
      currentNum = 0;
    } else if (char === ']') {
      const num = stack.pop();
      const prevStr = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
}
console.log("6. Decode String:");
console.log("   '3[a]2[bc]' =>", decodeString("3[a]2[bc]")); // "aaabcbc"
console.log();

// Problem 7: Generate Parentheses (LeetCode 22)
function generateParenthesis(n) {
  const result = [];
  
  function backtrack(current, open, close) {
    if (current.length === 2 * n) {
      result.push(current);
      return;
    }
    if (open < n) backtrack(current + '(', open + 1, close);
    if (close < open) backtrack(current + ')', open, close + 1);
  }
  
  backtrack('', 0, 0);
  return result;
}
console.log("7. Generate Parentheses:");
console.log("   n=3 =>", generateParenthesis(3));
console.log();

// Problem 8: Letter Case Permutation (LeetCode 784)
function letterCasePermutation(s) {
  const result = [];
  
  function backtrack(index, current) {
    if (index === s.length) {
      result.push(current);
      return;
    }
    
    const char = s[index];
    if (char >= '0' && char <= '9') {
      backtrack(index + 1, current + char);
    } else {
      backtrack(index + 1, current + char.toLowerCase());
      backtrack(index + 1, current + char.toUpperCase());
    }
  }
  
  backtrack(0, '');
  return result;
}
console.log("8. Letter Case Permutation:");
console.log("   'a1b2' =>", letterCasePermutation("a1b2"));
console.log();

console.log("✅ Day 8 LeetCode Complete!");
