# Day 6: Digit Manipulation

## Digit Extraction Techniques

### Basic Digit Operations
```javascript
// Get last digit
const lastDigit = num % 10;

// Remove last digit
num = Math.floor(num / 10);

// Count digits
const digitCount = num.toString().length;
// OR
const digitCount = Math.floor(Math.log10(num)) + 1;
```

### Common Patterns

#### 1. Sum of Digits
```javascript
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
```

#### 2. Product of Digits
```javascript
function productOfDigits(num) {
  let product = 1;
  while (num > 0) {
    product *= num % 10;
    num = Math.floor(num / 10);
  }
  return product;
}
```

#### 3. Largest/Smallest Digit
```javascript
function largestDigit(num) {
  let max = 0;
  while (num > 0) {
    max = Math.max(max, num % 10);
    num = Math.floor(num / 10);
  }
  return max;
}

function smallestDigit(num) {
  let min = 9;
  while (num > 0) {
    min = Math.min(min, num % 10);
    num = Math.floor(num / 10);
  }
  return min;
}
```

#### 4. Frequency of Digits
```javascript
function digitFrequency(num) {
  const freq = Array(10).fill(0);
  while (num > 0) {
    freq[num % 10]++;
    num = Math.floor(num / 10);
  }
  return freq;
}
```

## Advanced Operations

### Reverse Digits
```javascript
function reverseDigits(num) {
  let reversed = 0;
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversed;
}
```

### Digit Sorting
```javascript
// Ascending
function sortDigitsAsc(num) {
  return parseInt(num.toString().split('').sort().join(''));
}

// Descending
function sortDigitsDesc(num) {
  return parseInt(num.toString().split('').sort((a,b) => b-a).join(''));
}
```

### Digit Replacement
```javascript
function replaceDigit(num, old, newDigit) {
  return parseInt(num.toString().replace(new RegExp(old, 'g'), newDigit));
}
```

## Digit-Based Number Properties

### 1. Happy Number
```javascript
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
```

### 2. Harshad Number
Number divisible by sum of its digits
```javascript
function isHarshad(num) {
  return num % sumOfDigits(num) === 0;
}
// Examples: 18 (1+8=9, 18%9=0), 21 (2+1=3, 21%3=0)
```

### 3. Disarium Number
Sum of powered digits equals number
```javascript
function isDisarium(num) {
  const digits = num.toString();
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(parseInt(digits[i]), i + 1);
  }
  return sum === num;
}
// Example: 135 (1^1 + 3^2 + 5^3 = 1+9+125 = 135)
```

### 4. Kaprekar Number
Square can be split into two parts that add to number
```javascript
function isKaprekar(num) {
  const square = num * num;
  const str = square.toString();
  for (let i = 1; i < str.length; i++) {
    const left = parseInt(str.substring(0, i)) || 0;
    const right = parseInt(str.substring(i));
    if (right > 0 && left + right === num) return true;
  }
  return false;
}
// Example: 45 (45^2 = 2025, 20+25 = 45)
```

## Practical Algorithms

### Digital Root
Single digit obtained by repeatedly summing digits
```javascript
function digitalRoot(num) {
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

// Mathematical trick
function digitalRootFast(num) {
  return num === 0 ? 0 : 1 + (num - 1) % 9;
}
```

### Missing Digit in Sequence
```javascript
function findMissingDigit(num) {
  const digits = new Set(num.toString().split('').map(Number));
  for (let i = 0; i <= 9; i++) {
    if (!digits.has(i)) return i;
  }
  return -1;
}
```

## Time Complexity

| Operation | Time | Space |
|-----------|------|-------|
| Extract all digits | O(d) | O(1) |
| Sum/Product digits | O(d) | O(1) |
| Frequency count | O(d) | O(10) = O(1) |
| Reverse digits | O(d) | O(1) |

where d = number of digits = log₁₀(n)

## Tips & Tricks

1. **Fast digit sum for repeated operations**
   ```javascript
   // Digital root formula
   const digitSum = n === 0 ? 0 : 1 + (n - 1) % 9;
   ```

2. **Check if all digits are same**
   ```javascript
   const allSame = new Set(num.toString()).size === 1;
   ```

3. **Check if digits are sorted**
   ```javascript
   const isSorted = num.toString() === 
                    num.toString().split('').sort().join('');
   ```

4. **Concatenate two numbers**
   ```javascript
   const combined = parseInt(num1.toString() + num2.toString());
   ```

## Practice Problems

1. Count digits
2. Sum of digits
3. Product of digits
4. Largest/smallest digit
5. Frequency of each digit
6. Reverse digits
7. Check if digits are sorted
8. Digital root
9. Happy number
10. Harshad number
