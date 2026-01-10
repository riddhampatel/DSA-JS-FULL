// Day 7: LeetCode Number Conversion Problems

console.log("=== Day 7: LeetCode Conversions ===\n");

// ==================== EASY ====================

// Problem 1: Binary Number with Alternating Bits (LeetCode 693)
function hasAlternatingBits(n) {
  const xor = n ^ (n >> 1);
  return (xor & (xor + 1)) === 0;
}
console.log("1. Alternating Bits:");
console.log("   5 (101) =>", hasAlternatingBits(5)); // true
console.log("   7 (111) =>", hasAlternatingBits(7)); // false
console.log();

// Problem 2: Base 7 (LeetCode 504)
function convertToBase7(num) {
  if (num === 0) return "0";
  const negative = num < 0;
  num = Math.abs(num);
  let result = '';
  
  while (num > 0) {
    result = (num % 7) + result;
    num = Math.floor(num / 7);
  }
  return negative ? '-' + result : result;
}
console.log("2. Convert to Base 7:");
console.log("   100 =>", convertToBase7(100)); // "202"
console.log();

// Problem 3: Add Binary (LeetCode 67)
function addBinary(a, b) {
  let i = a.length - 1, j = b.length - 1;
  let carry = 0, result = '';
  
  while (i >= 0 || j >= 0 || carry) {
    const sum = (i >= 0 ? parseInt(a[i--]) : 0) +
                (j >= 0 ? parseInt(b[j--]) : 0) + carry;
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}
console.log("3. Add Binary:");
console.log("   '1010' + '1011' =>", addBinary("1010", "1011")); // "10101"
console.log();

// Problem 4: Convert a Number to Hexadecimal (LeetCode 405)
function toHex(num) {
  if (num === 0) return "0";
  if (num < 0) num = 0xFFFFFFFF + num + 1;
  
  const hex = "0123456789abcdef";
  let result = '';
  
  while (num > 0) {
    result = hex[num % 16] + result;
    num = Math.floor(num / 16);
  }
  return result;
}
console.log("4. Convert to Hexadecimal:");
console.log("   26 =>", toHex(26)); // "1a"
console.log("   -1 =>", toHex(-1)); // "ffffffff"
console.log();

// Problem 5: Excel Sheet Column Number (LeetCode 171)
function titleToNumber(columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    result = result * 26 + (columnTitle.charCodeAt(i) - 64);
  }
  return result;
}
console.log("5. Excel Column Number:");
console.log("   'A' =>", titleToNumber("A")); // 1
console.log("   'AB' =>", titleToNumber("AB")); // 28
console.log("   'ZY' =>", titleToNumber("ZY")); // 701
console.log();

// Problem 6: Excel Sheet Column Title (LeetCode 168)
function convertToTitle(columnNumber) {
  let result = '';
  while (columnNumber > 0) {
    columnNumber--;
    result = String.fromCharCode(65 + (columnNumber % 26)) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
}
console.log("6. Excel Column Title:");
console.log("   1 =>", convertToTitle(1)); // "A"
console.log("   28 =>", convertToTitle(28)); // "AB"
console.log("   701 =>", convertToTitle(701)); // "ZY"
console.log();

// Problem 7: Number of 1 Bits (LeetCode 191)
function hammingWeight(n) {
  let count = 0;
  while (n > 0) {
    count += n & 1;
    n = n >>> 1;
  }
  return count;
}
console.log("7. Number of 1 Bits:");
console.log("   11 (1011) =>", hammingWeight(11)); // 3
console.log();

// Problem 8: Reverse Bits (LeetCode 190)
function reverseBits(n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result = (result << 1) | (n & 1);
    n = n >>> 1;
  }
  return result >>> 0;
}
console.log("8. Reverse Bits:");
console.log("   43261596 =>", reverseBits(43261596));
console.log();

console.log("✅ Day 7 LeetCode Complete!");
