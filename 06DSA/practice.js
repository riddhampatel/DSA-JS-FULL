// ==================== DAY 6: DIGIT MANIPULATION PROBLEMS ====================

// PROBLEM 1: Count the number of digits in a number
// Logic: Keep dividing the number by 10 until it becomes 0
function countDigits(n) {
  let count = 0;
  
  // Handle negative numbers
  n = Math.abs(n);
  
  // If number is 0, it has 1 digit
  if (n === 0) return 1;
  
  while (n > 0) {
    count++;           // Increment count for each digit
    n = Math.floor(n / 10);  // Remove the last digit
  }
  
  return count;
}

console.log("Problem 1 - Count Digits:");
console.log(countDigits(12345));   // Output: 5
console.log(countDigits(0));       // Output: 1
console.log(countDigits(-987));    // Output: 3
console.log("---");


// PROBLEM 2: Reverse a number
// Logic: Extract last digit using %, add to result, remove last digit using division
function reverseNumber(n) {
  let reversed = 0;
  let isNegative = n < 0;
  n = Math.abs(n);
  
  while (n > 0) {
    let lastDigit = n % 10;              // Get last digit
    reversed = reversed * 10 + lastDigit; // Add to reversed (shift left and add)
    n = Math.floor(n / 10);              // Remove last digit
  }
  
  return isNegative ? -reversed : reversed;
}

console.log("Problem 2 - Reverse Number:");
console.log(reverseNumber(12345));   // Output: 54321
console.log(reverseNumber(400));     // Output: 4
console.log(reverseNumber(-789));    // Output: -987
console.log("---");


// PROBLEM 3: Check if a number is palindrome
// Logic: A number is palindrome if it reads same forwards and backwards
function isPalindrome(n) {
  // Negative numbers are not palindromes
  if (n < 0) return false;
  
  let original = n;
  let reversed = 0;
  
  while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  
  return original === reversed;
}

console.log("Problem 3 - Palindrome Check:");
console.log(isPalindrome(121));    // Output: true
console.log(isPalindrome(12321));  // Output: true
console.log(isPalindrome(123));    // Output: false
console.log("---");


// PROBLEM 4: Sum of even and odd digits separately
// Logic: Extract each digit, check if even or odd, add to respective sum
function sumEvenOddDigits(n) {
  let evenSum = 0;
  let oddSum = 0;
  n = Math.abs(n);
  
  while (n > 0) {
    let digit = n % 10;
    
    if (digit % 2 === 0) {
      evenSum += digit;  // Add to even sum if digit is even
    } else {
      oddSum += digit;   // Add to odd sum if digit is odd
    }
    
    n = Math.floor(n / 10);
  }
  
  return { evenSum, oddSum };
}

console.log("Problem 4 - Sum Even/Odd Digits:");
console.log(sumEvenOddDigits(123456));  // Output: { evenSum: 12, oddSum: 9 }
console.log(sumEvenOddDigits(2468));    // Output: { evenSum: 20, oddSum: 0 }
console.log("---");


// PROBLEM 5: Check if number is Armstrong number (Narcissistic number)
// Armstrong number: Sum of cubes of digits equals the number itself
// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
function isArmstrong(n) {
  let sum = 0;
  let temp = n;
  let digits = countDigits(n);  // Count total digits
  
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);  // Add digit raised to power of total digits
    temp = Math.floor(temp / 10);
  }
  
  return sum === n;
}

console.log("Problem 5 - Armstrong Number:");
console.log(isArmstrong(153));   // Output: true (1³ + 5³ + 3³ = 153)
console.log(isArmstrong(9474));  // Output: true (9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474)
console.log(isArmstrong(123));   // Output: false
console.log("---");


// PROBLEM 6: Find product of digits
// Logic: Multiply all digits together
function productOfDigits(n) {
  let product = 1;
  n = Math.abs(n);
  
  // Special case: if number is 0, product is 0
  if (n === 0) return 0;
  
  while (n > 0) {
    let digit = n % 10;
    product *= digit;        // Multiply digit to product
    n = Math.floor(n / 10);
  }
  
  return product;
}

console.log("Problem 6 - Product of Digits:");
console.log(productOfDigits(234));   // Output: 24 (2 * 3 * 4)
console.log(productOfDigits(105));   // Output: 0 (1 * 0 * 5)
console.log(productOfDigits(999));   // Output: 729 (9 * 9 * 9)
console.log("---");


// PROBLEM 7: Find the difference between largest and smallest digit
// Logic: Track max and min digit while iterating through all digits
function digitDifference(n) {
  let max = 0;
  let min = 9;
  n = Math.abs(n);
  
  while (n > 0) {
    let digit = n % 10;
    
    if (digit > max) max = digit;  // Update max if current digit is larger
    if (digit < min) min = digit;  // Update min if current digit is smaller
    
    n = Math.floor(n / 10);
  }
  
  return max - min;
}

console.log("Problem 7 - Digit Difference:");
console.log(digitDifference(593));    // Output: 7 (9 - 2)
console.log(digitDifference(111));    // Output: 0 (1 - 1)
console.log(digitDifference(13579));  // Output: 8 (9 - 1)
console.log("---");


// PROBLEM 8: Check if all digits are unique (no repetition)
// Logic: Use a Set or frequency array to track seen digits
function hasUniqueDigits(n) {
  let digitSet = new Set();
  n = Math.abs(n);
  
  while (n > 0) {
    let digit = n % 10;
    
    // If digit already exists in set, it's not unique
    if (digitSet.has(digit)) {
      return false;
    }
    
    digitSet.add(digit);  // Add digit to set
    n = Math.floor(n / 10);
  }
  
  return true;
}

console.log("Problem 8 - Unique Digits Check:");
console.log(hasUniqueDigits(12345));  // Output: true
console.log(hasUniqueDigits(112));    // Output: false
console.log(hasUniqueDigits(9876));   // Output: true
console.log("---");


// PROBLEM 9: Find the sum of digits at even and odd positions
// Logic: Track position (from right), add to respective sum based on position
function sumByPosition(n) {
  let evenPosSum = 0;  // Sum of digits at even positions (2nd, 4th, 6th from right)
  let oddPosSum = 0;   // Sum of digits at odd positions (1st, 3rd, 5th from right)
  let position = 1;    // Start from position 1 (rightmost)
  n = Math.abs(n);
  
  while (n > 0) {
    let digit = n % 10;
    
    if (position % 2 === 0) {
      evenPosSum += digit;  // Even position
    } else {
      oddPosSum += digit;   // Odd position
    }
    
    position++;
    n = Math.floor(n / 10);
  }
  
  return { evenPosSum, oddPosSum };
}

console.log("Problem 9 - Sum by Position:");
console.log(sumByPosition(12345));   // Output: { evenPosSum: 6, oddPosSum: 9 }
// Positions from right: 5(1st), 4(2nd), 3(3rd), 2(4th), 1(5th)
// Odd positions: 5 + 3 + 1 = 9
// Even positions: 4 + 2 = 6
console.log("---");


// PROBLEM 10: Convert number to words (0-9999)
// Logic: Break number into thousands, hundreds, tens, and ones
function numberToWords(n) {
  if (n === 0) return "Zero";
  
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
                 "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
  let result = "";
  
  // Handle thousands place
  if (n >= 1000) {
    result += ones[Math.floor(n / 1000)] + " Thousand ";
    n %= 1000;
  }
  
  // Handle hundreds place
  if (n >= 100) {
    result += ones[Math.floor(n / 100)] + " Hundred ";
    n %= 100;
  }
  
  // Handle tens and ones place
  if (n >= 20) {
    result += tens[Math.floor(n / 10)] + " ";
    n %= 10;
  } else if (n >= 10) {
    result += teens[n - 10] + " ";
    return result.trim();
  }
  
  // Handle ones place
  if (n > 0) {
    result += ones[n] + " ";
  }
  
  return result.trim();
}

console.log("Problem 10 - Number to Words:");
console.log(numberToWords(0));      // Output: Zero
console.log(numberToWords(25));     // Output: Twenty Five
console.log(numberToWords(153));    // Output: One Hundred Fifty Three
console.log(numberToWords(1234));   // Output: One Thousand Two Hundred Thirty Four
console.log("---");


// ==================== BONUS CHALLENGE ====================
// Try to solve these on your own!

// Challenge 1: Find the nth digit from right in a number
// Challenge 2: Remove all occurrences of a specific digit from a number
// Challenge 3: Check if a number is a "strong number" (sum of factorial of digits equals number)
// Challenge 4: Find the missing digit in a sequence (1-9) given 8 digits
// Challenge 5: Rotate digits left or right by k positions
