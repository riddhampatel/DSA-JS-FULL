// Day 3: Loops Part 1 - Practice Problems

console.log("=== Day 3 Practice Problems ===\n");

// Problem 1: Factorial
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("1. Factorial:");
console.log("   5! =", factorial(5));
console.log("   0! =", factorial(0));
console.log();

// Problem 2: Sum of Natural Numbers
function sumOfN(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}
console.log("2. Sum of N Natural Numbers:");
console.log("   Sum(10) =", sumOfN(10));
console.log();

// Problem 3: Print Even Numbers
function printEvens(limit) {
  const evens = [];
  for (let i = 2; i <= limit; i += 2) {
    evens.push(i);
  }
  return evens;
}
console.log("3. Even Numbers up to 20:");
console.log("  ", printEvens(20));
console.log();

// Problem 4: Reverse a Number
function reverseNumber(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
console.log("4. Reverse Number:");
console.log("   12345 =>", reverseNumber(12345));
console.log();

// Problem 5: Count Digits
function countDigits(num) {
  let count = 0;
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}
console.log("5. Count Digits:");
console.log("   12345 has", countDigits(12345), "digits");
console.log();

// Problem 6: Multiplication Table
function multiplicationTable(num) {
  console.log(`6. Multiplication Table of ${num}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`   ${num} x ${i} = ${num * i}`);
  }
}
multiplicationTable(5);
console.log();

// Problem 7: Sum of Digits
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("7. Sum of Digits:");
console.log("   123 =>", sumOfDigits(123));
console.log();

// Problem 8: Power Calculation
function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
console.log("8. Power:");
console.log("   2^10 =", power(2, 10));
console.log();

// Problem 9: Check Prime Number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("9. Prime Check:");
console.log("   17 is prime:", isPrime(17));
console.log("   20 is prime:", isPrime(20));
console.log();

// Problem 10: Fibonacci Sequence
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  return fib.slice(0, n);
}
console.log("10. Fibonacci:");
console.log("   First 10:", fibonacci(10));
console.log();

console.log("✅ Day 3 Practice Complete!");
