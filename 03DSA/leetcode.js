// Day 3: LeetCode Loop Problems

console.log("=== Day 3: LeetCode Loops ===\n");

// ==================== EASY ====================

// Problem 1: FizzBuzz (LeetCode 412)
function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(i.toString());
  }
  return result;
}
console.log("1. FizzBuzz:");
console.log("   n=15:", fizzBuzz(15));
console.log();

// Problem 2: Sqrt(x) (LeetCode 69)
function mySqrt(x) {
  if (x < 2) return x;
  let left = 1, right = Math.floor(x / 2);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}
console.log("2. Sqrt:");
console.log("   sqrt(8) =", mySqrt(8)); // 2
console.log();

// Problem 3: Power of Two (LeetCode 231)
function isPowerOfTwo(n) {
  if (n <= 0) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = Math.floor(n / 2);
  }
  return true;
}
console.log("3. Power of Two:");
console.log("   16:", isPowerOfTwo(16)); // true
console.log("   3:", isPowerOfTwo(3)); // false
console.log();

// Problem 4: Happy Number (LeetCode 202)
function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let sum = 0;
    while (n > 0) {
      const digit = n % 10;
      sum += digit * digit;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n === 1;
}
console.log("4. Happy Number:");
console.log("   19:", isHappy(19)); // true
console.log();

// Problem 5: Climbing Stairs (LeetCode 70)
function climbStairs(n) {
  if (n <= 2) return n;
  let prev1 = 2, prev2 = 1;
  for (let i = 3; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}
console.log("5. Climbing Stairs:");
console.log("   n=5:", climbStairs(5)); // 8
console.log();

// Problem 6: Reverse Integer (LeetCode 7)
function reverse(x) {
  const sign = x < 0 ? -1 : 1;
  let num = Math.abs(x);
  let reversed = 0;
  
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  
  reversed *= sign;
  return (reversed < -(2**31) || reversed > 2**31 - 1) ? 0 : reversed;
}
console.log("6. Reverse Integer:");
console.log("   123 =>", reverse(123)); // 321
console.log("   -123 =>", reverse(-123)); // -321
console.log();

// Problem 7: Palindrome Number (LeetCode 9)
function isPalindrome(x) {
  if (x < 0) return false;
  let original = x, reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return original === reversed;
}
console.log("7. Palindrome Number:");
console.log("   121:", isPalindrome(121)); // true
console.log("   -121:", isPalindrome(-121)); // false
console.log();

// Problem 8: Count Primes (LeetCode 204)
function countPrimes(n) {
  if (n <= 2) return 0;
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  return isPrime.filter(p => p).length;
}
console.log("8. Count Primes:");
console.log("   n=10:", countPrimes(10)); // 4 (2,3,5,7)
console.log();

console.log("✅ Day 3 LeetCode Complete!");
