// Day 5: LeetCode Number Problems

console.log("=== Day 5: LeetCode Number Problems ===\n");

// ==================== EASY ====================

// Problem 1: Palindrome Number (LeetCode 9)
function isPalindrome(x) {
  if (x < 0) return false;
  let original = x, reversed = 0;
  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return original === reversed;
}
console.log("1. Palindrome Number:");
console.log("   121:", isPalindrome(121));
console.log("   -121:", isPalindrome(-121));
console.log();

// Problem 2: Power of Three (LeetCode 326)
function isPowerOfThree(n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}
console.log("2. Power of Three:");
console.log("   27:", isPowerOfThree(27));
console.log("   28:", isPowerOfThree(28));
console.log();

// Problem 3: Add Digits (LeetCode 258)
function addDigits(num) {
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}
console.log("3. Add Digits:");
console.log("   38 =>", addDigits(38)); // 3+8=11, 1+1=2
console.log();

// Problem 4: Self Dividing Numbers (LeetCode 728)
function selfDividingNumbers(left, right) {
  const result = [];
  for (let num = left; num <= right; num++) {
    if (isSelfDividing(num)) result.push(num);
  }
  return result;
  
  function isSelfDividing(n) {
    let temp = n;
    while (temp > 0) {
      const digit = temp % 10;
      if (digit === 0 || n % digit !== 0) return false;
      temp = Math.floor(temp / 10);
    }
    return true;
  }
}
console.log("4. Self Dividing Numbers:");
console.log("   [1, 22] =>", selfDividingNumbers(1, 22));
console.log();

// Problem 5: Perfect Number (LeetCode 507)
function checkPerfectNumber(num) {
  if (num <= 1) return false;
  let sum = 1;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      sum += i;
      if (i !== num / i) sum += num / i;
    }
  }
  return sum === num;
}
console.log("5. Perfect Number:");
console.log("   28:", checkPerfectNumber(28));
console.log();

// Problem 6: Ugly Number (LeetCode 263)
function isUgly(n) {
  if (n <= 0) return false;
  while (n % 2 === 0) n /= 2;
  while (n % 3 === 0) n /= 3;
  while (n % 5 === 0) n /= 5;
  return n === 1;
}
console.log("6. Ugly Number:");
console.log("   6:", isUgly(6)); // 2*3
console.log("   14:", isUgly(14)); // has 7
console.log();

// Problem 7: Factorial Trailing Zeroes (LeetCode 172)
function trailingZeroes(n) {
  let count = 0;
  while (n >= 5) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
}
console.log("7. Factorial Trailing Zeroes:");
console.log("   5! =>", trailingZeroes(5)); // 1
console.log("   25! =>", trailingZeroes(25)); // 6
console.log();

// Problem 8: Number of 1 Bits (LeetCode 191)
function hammingWeight(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}
console.log("8. Number of 1 Bits:");
console.log("   11 (1011) =>", hammingWeight(11)); // 3
console.log();

// ==================== MEDIUM ====================

// Problem 9: Reverse Integer (LeetCode 7)
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
console.log("9. Reverse Integer:");
console.log("   123 =>", reverse(123));
console.log("   -123 =>", reverse(-123));
console.log();

// Problem 10: Pow(x, n) (LeetCode 50)
function myPow(x, n) {
  if (n === 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) result *= x;
    x *= x;
    n = Math.floor(n / 2);
  }
  return result;
}
console.log("10. Power:");
console.log("   2^10 =", myPow(2, 10));
console.log("   2^-2 =", myPow(2, -2));
console.log();

console.log("✅ Day 5 LeetCode Complete!");
