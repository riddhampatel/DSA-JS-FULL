// Day 5: Number-Based Problems - Practice

console.log("=== Day 5 Practice: Number Problems ===\n");

// Problem 1: Reverse Number
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log("1. Reverse Number:");
console.log("   12345 =>", reverseNumber(12345));
console.log();

// Problem 2: Palindrome Number
function isPalindromeNum(num) {
  return num === reverseNumber(num);
}
console.log("2. Palindrome Number:");
console.log("   121:", isPalindromeNum(121));
console.log("   123:", isPalindromeNum(123));
console.log();

// Problem 3: Armstrong Number
function isArmstrong(num) {
  const digits = num.toString().length;
  let sum = 0, temp = num;
  while (temp > 0) {
    const digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
console.log("3. Armstrong Number:");
console.log("   153:", isArmstrong(153)); // 1^3 + 5^3 + 3^3 = 153
console.log("   9474:", isArmstrong(9474)); // 9^4 + 4^4 + 7^4 + 4^4
console.log();

// Problem 4: Perfect Number
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}
console.log("4. Perfect Number:");
console.log("   6:", isPerfect(6)); // 1+2+3 = 6
console.log("   28:", isPerfect(28)); // 1+2+4+7+14 = 28
console.log();

// Problem 5: Prime Number
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
console.log("5. Prime Number:");
console.log("   17:", isPrime(17));
console.log("   20:", isPrime(20));
console.log();

// Problem 6: Strong Number (Sum of factorials of digits)
function isStrong(num) {
  const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
  let sum = 0, temp = num;
  while (temp > 0) {
    sum += factorial(temp % 10);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
console.log("6. Strong Number:");
console.log("   145:", isStrong(145)); // 1! + 4! + 5! = 1+24+120 = 145
console.log();

// Problem 7: Sum of Divisors
function sumOfDivisors(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}
console.log("7. Sum of Divisors:");
console.log("   12:", sumOfDivisors(12)); // 1+2+3+4+6+12 = 28
console.log();

// Problem 8: GCD (Greatest Common Divisor)
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
console.log("8. GCD:");
console.log("   gcd(48, 18) =", gcd(48, 18)); // 6
console.log();

// Problem 9: LCM (Least Common Multiple)
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
console.log("9. LCM:");
console.log("   lcm(12, 18) =", lcm(12, 18)); // 36
console.log();

// Problem 10: Fibonacci Number at position n
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log("10. Fibonacci:");
console.log("   fib(10) =", fibonacci(10)); // 55
console.log();

// Problem 11: Sum of digits
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("11. Sum of Digits:");
console.log("   12345 =>", sumDigits(12345)); // 15
console.log();

// Problem 12: Product of digits
function productDigits(num) {
  let product = 1;
  while (num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
  }
  return product;
}
console.log("12. Product of Digits:");
console.log("   123 =>", productDigits(123)); // 6
console.log();

// Problem 13: Neon Number (sum of digits of square equals number)
function isNeon(num) {
  const square = num * num;
  return sumDigits(square) === num;
}
console.log("13. Neon Number:");
console.log("   9:", isNeon(9)); // 9^2 = 81, 8+1 = 9
console.log();

// Problem 14: Automorphic Number (square ends with number)
function isAutomorphic(num) {
  const square = num * num;
  return square.toString().endsWith(num.toString());
}
console.log("14. Automorphic Number:");
console.log("   5:", isAutomorphic(5)); // 25 ends with 5
console.log("   76:", isAutomorphic(76)); // 5776 ends with 76
console.log();

// Problem 15: Spy Number (sum of digits = product of digits)
function isSpyNumber(num) {
  return sumDigits(num) === productDigits(num);
}
console.log("15. Spy Number:");
console.log("   1124:", isSpyNumber(1124)); // 1+1+2+4=8, 1*1*2*4=8
console.log();

console.log("✅ Day 5 Practice Complete!");
