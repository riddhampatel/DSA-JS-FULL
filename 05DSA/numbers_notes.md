# Day 5: Number-Based Problems

## Number Manipulation Techniques

### Extracting Digits
```javascript
let num = 12345;
while (num > 0) {
  let digit = num % 10;  // Get last digit
  // Process digit
  num = Math.floor(num / 10);  // Remove last digit
}
```

### Reversing a Number
```javascript
function reverse(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
```

### Counting Digits
```javascript
function countDigits(num) {
  // Method 1: Loop
  let count = 0;
  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
  
  // Method 2: String
  return num.toString().length;
  
  // Method 3: Math
  return Math.floor(Math.log10(num)) + 1;
}
```

## Special Number Types

### 1. Palindrome Number
Number that reads same forwards and backwards
```javascript
function isPalindrome(num) {
  let original = num;
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return original === reversed;
}
// Examples: 121, 1331, 12321
```

### 2. Armstrong Number
Sum of cubes of digits equals number (for 3-digit)
```javascript
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
// Examples: 153 (1³+5³+3³), 9474 (9⁴+4⁴+7⁴+4⁴)
```

### 3. Perfect Number
Sum of proper divisors equals number
```javascript
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}
// Examples: 6 (1+2+3), 28 (1+2+4+7+14)
```

### 4. Prime Number
Only divisible by 1 and itself
```javascript
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  // Check from 5 to sqrt(num)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}
// Optimized: check divisibility by 2, 3, then 6k±1
```

### 5. Strong Number
Sum of factorials of digits equals number
```javascript
function isStrong(num) {
  const factorial = n => n <= 1 ? 1 : n * factorial(n-1);
  let sum = 0, temp = num;
  while (temp > 0) {
    sum += factorial(temp % 10);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
// Examples: 145 (1!+4!+5! = 1+24+120)
```

## Mathematical Operations

### GCD (Greatest Common Divisor)
```javascript
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}
// Euclidean algorithm
```

### LCM (Least Common Multiple)
```javascript
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
```

### Factorial
```javascript
// Iterative
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive
function factorialRec(n) {
  return n <= 1 ? 1 : n * factorialRec(n - 1);
}
```

### Power Calculation
```javascript
// Iterative
function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}

// Fast exponentiation O(log n)
function fastPower(base, exp) {
  let result = 1;
  while (exp > 0) {
    if (exp % 2 === 1) result *= base;
    base *= base;
    exp = Math.floor(exp / 2);
  }
  return result;
}
```

## Digit Operations

### Sum of Digits
```javascript
function sumDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
```

### Product of Digits
```javascript
function productDigits(num) {
  let product = 1;
  while (num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
  }
  return product;
}
```

### Largest Digit
```javascript
function largestDigit(num) {
  let max = 0;
  while (num > 0) {
    max = Math.max(max, num % 10);
    num = Math.floor(num / 10);
  }
  return max;
}
```

## Number Properties to Check

| Type | Condition | Example |
|------|-----------|---------|
| Even | `n % 2 === 0` | 2, 4, 6 |
| Odd | `n % 2 === 1` | 1, 3, 5 |
| Palindrome | `n === reverse(n)` | 121, 1331 |
| Armstrong | `sum(digit^k) === n` | 153, 370 |
| Perfect | `sum(divisors) === n` | 6, 28 |
| Prime | Only 1 and n divide | 2, 3, 5, 7 |
| Strong | `sum(digit!) === n` | 1, 2, 145 |

## Optimization Tips

1. **Use Math.sqrt() for divisor checks**
   ```javascript
   for (let i = 2; i <= Math.sqrt(n); i++) {
     // Only check up to square root
   }
   ```

2. **Skip even numbers in prime check**
   ```javascript
   if (n % 2 === 0) return false;
   for (let i = 3; i <= Math.sqrt(n); i += 2) {
     // Check only odd numbers
   }
   ```

3. **Use bitwise for power of 2**
   ```javascript
   return n > 0 && (n & (n - 1)) === 0;
   ```

4. **Cache factorial values**
   ```javascript
   const fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
   ```

## Common Patterns

1. **Digit extraction loop**
2. **Divisor checking loop**
3. **Prime sieve for multiple primes**
4. **Fast exponentiation for large powers**
5. **Euclidean algorithm for GCD**
