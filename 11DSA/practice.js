// Day 11: Week 1-2 Review - Mixed Practice Problems

console.log("=== Day 11: Week 1-2 Review Practice ===\n");

// Problem 1: FizzBuzz (Loops + Conditionals)
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i);
  }
  return result;
}
console.log("1. FizzBuzz(15):");
console.log("  ", fizzBuzz(15));
console.log();

// Problem 2: Is Prime (Number manipulation)
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
console.log("2. Prime Check:");
console.log("   17:", isPrime(17));
console.log("   20:", isPrime(20));
console.log();

// Problem 3: Fibonacci Sequence (Recursion)
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log("3. Fibonacci:");
console.log("   fib(10) =", fibonacci(10));
console.log();

// Problem 4: Reverse Array (Arrays)
function reverseArray(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}
console.log("4. Reverse Array:");
console.log("   [1,2,3,4,5] =>", reverseArray([1,2,3,4,5]));
console.log();

// Problem 5: Second Largest Element
function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      second = num;
    }
  }
  return second === -Infinity ? -1 : second;
}
console.log("5. Second Largest:");
console.log("   [12, 35, 1, 10, 34, 1] =>", secondLargest([12, 35, 1, 10, 34, 1]));
console.log();

// Problem 6: Sum of Digits (Digit manipulation)
function sumDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log("6. Sum of Digits:");
console.log("   12345 =>", sumDigits(12345));
console.log();

// Problem 7: Palindrome String (Strings + Two Pointer)
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0, right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log("7. Palindrome String:");
console.log("   'A man, a plan, a canal: Panama' =>", isPalindrome("A man, a plan, a canal: Panama"));
console.log();

// Problem 8: Rotate Array (Array manipulation)
function rotateArray(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log("8. Rotate Array:");
console.log("   [1,2,3,4,5,6,7], k=3 =>", rotateArray([1,2,3,4,5,6,7], 3));
console.log();

// Problem 9: GCD (Number theory)
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log("9. GCD:");
console.log("   gcd(48, 18) =", gcd(48, 18));
console.log();

// Problem 10: Remove Duplicates (Array)
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log("10. Remove Duplicates:");
console.log("   [1,2,2,3,4,4,5] =>", removeDuplicates([1,2,2,3,4,4,5]));
console.log();

// Problem 11: Factorial (Functions + Recursion)
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log("11. Factorial:");
console.log("   5! =", factorial(5));
console.log();

// Problem 12: Missing Number (Arrays)
function missingNumber(arr, n) {
  const expectedSum = n * (n + 1) / 2;
  const actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}
console.log("12. Missing Number:");
console.log("   [1,2,4,5], n=5 =>", missingNumber([1,2,4,5], 5));
console.log();

// Problem 13: Print Pattern (Nested loops)
function printTriangle(n) {
  console.log("13. Triangle Pattern:");
  for (let i = 1; i <= n; i++) {
    console.log("   " + "*".repeat(i));
  }
}
printTriangle(5);
console.log();

// Problem 14: Binary to Decimal (Conversions)
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}
console.log("14. Binary to Decimal:");
console.log("   '1010' =>", binaryToDecimal("1010"));
console.log();

// Problem 15: Max Sum Subarray (Kadane's Algorithm)
function maxSubarraySum(arr) {
  let maxSum = arr[0], currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
console.log("15. Max Subarray Sum:");
console.log("   [-2,1,-3,4,-1,2,1,-5,4] =>", maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));
console.log();

console.log("✅ Day 11 Review Complete!");
console.log("\n📚 Week 1-2 Topics Covered:");
console.log("   ✓ Variables, Data Types, Operators");
console.log("   ✓ Conditional Statements");
console.log("   ✓ Loops (for, while, do-while)");
console.log("   ✓ Nested Loops & Patterns");
console.log("   ✓ Number-Based Problems");
console.log("   ✓ Digit Manipulation");
console.log("   ✓ Number Conversions");
console.log("   ✓ Functions & Recursion");
console.log("   ✓ Arrays - Basics");
console.log("   ✓ Arrays - Intermediate");
