# Day 7: Number Conversions

## Base Conversion Overview

### Decimal (Base 10)
- Digits: 0-9
- Standard number system we use daily

### Binary (Base 2)
- Digits: 0, 1
- Used in computers (machine language)

### Octal (Base 8)
- Digits: 0-7
- Used in file permissions (Unix/Linux)

### Hexadecimal (Base 16)
- Digits: 0-9, A-F
- Used in colors, memory addresses

## Decimal to Other Bases

### Decimal to Binary
```javascript
function decimalToBinary(num) {
  if (num === 0) return "0";
  let binary = '';
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

// Using built-in
num.toString(2);
```

### Decimal to Octal
```javascript
function decimalToOctal(num) {
  if (num === 0) return "0";
  let octal = '';
  while (num > 0) {
    octal = (num % 8) + octal;
    num = Math.floor(num / 8);
  }
  return octal;
}

// Using built-in
num.toString(8);
```

### Decimal to Hexadecimal
```javascript
function decimalToHex(num) {
  if (num === 0) return "0";
  const hex = "0123456789ABCDEF";
  let result = '';
  while (num > 0) {
    result = hex[num % 16] + result;
    num = Math.floor(num / 16);
  }
  return result;
}

// Using built-in
num.toString(16).toUpperCase();
```

## Other Bases to Decimal

### Binary to Decimal
```javascript
function binaryToDecimal(binary) {
  let decimal = 0;
  let power = 0;
  
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
      decimal += Math.pow(2, power);
    }
    power++;
  }
  return decimal;
}

// Using built-in
parseInt(binary, 2);
```

### Octal to Decimal
```javascript
function octalToDecimal(octal) {
  let decimal = 0;
  let power = 0;
  
  for (let i = octal.length - 1; i >= 0; i--) {
    decimal += parseInt(octal[i]) * Math.pow(8, power);
    power++;
  }
  return decimal;
}

// Using built-in
parseInt(octal, 8);
```

### Hexadecimal to Decimal
```javascript
function hexToDecimal(hex) {
  const values = {
    '0':0,'1':1,'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,
    'A':10,'B':11,'C':12,'D':13,'E':14,'F':15
  };
  
  let decimal = 0;
  let power = 0;
  
  for (let i = hex.length - 1; i >= 0; i--) {
    decimal += values[hex[i].toUpperCase()] * Math.pow(16, power);
    power++;
  }
  return decimal;
}

// Using built-in
parseInt(hex, 16);
```

## Direct Conversions (Non-Decimal)

### Binary ↔ Octal
```javascript
// Binary to Octal: Group by 3 bits
function binaryToOctal(binary) {
  return parseInt(binary, 2).toString(8);
}

// Octal to Binary: Each digit = 3 bits
function octalToBinary(octal) {
  return parseInt(octal, 8).toString(2);
}
```

### Binary ↔ Hexadecimal
```javascript
// Binary to Hex: Group by 4 bits
function binaryToHex(binary) {
  return parseInt(binary, 2).toString(16).toUpperCase();
}

// Hex to Binary: Each digit = 4 bits
function hexToBinary(hex) {
  return parseInt(hex, 16).toString(2);
}
```

## Bit Manipulation Basics

### Common Bit Operations
```javascript
// Get bit at position i
function getBit(num, i) {
  return (num >> i) & 1;
}

// Set bit at position i
function setBit(num, i) {
  return num | (1 << i);
}

// Clear bit at position i
function clearBit(num, i) {
  return num & ~(1 << i);
}

// Toggle bit at position i
function toggleBit(num, i) {
  return num ^ (1 << i);
}

// Count number of 1 bits
function countBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1;
    num = num >>> 1;
  }
  return count;
}
```

## Conversion Table

### Decimal (0-15) ↔ Binary ↔ Octal ↔ Hex

| Dec | Binary | Octal | Hex |
|-----|--------|-------|-----|
| 0   | 0000   | 0     | 0   |
| 1   | 0001   | 1     | 1   |
| 2   | 0010   | 2     | 2   |
| 3   | 0011   | 3     | 3   |
| 4   | 0100   | 4     | 4   |
| 5   | 0101   | 5     | 5   |
| 6   | 0110   | 6     | 6   |
| 7   | 0111   | 7     | 7   |
| 8   | 1000   | 10    | 8   |
| 9   | 1001   | 11    | 9   |
| 10  | 1010   | 12    | A   |
| 11  | 1011   | 13    | B   |
| 12  | 1100   | 14    | C   |
| 13  | 1101   | 15    | D   |
| 14  | 1110   | 16    | E   |
| 15  | 1111   | 17    | F   |

## JavaScript Built-in Methods

```javascript
let num = 255;

// To string in different bases
num.toString(2);   // "11111111" (binary)
num.toString(8);   // "377" (octal)
num.toString(16);  // "ff" (hex)

// From string in different bases
parseInt("11111111", 2);  // 255
parseInt("377", 8);       // 255
parseInt("ff", 16);       // 255

// Number literals
const bin = 0b11111111;   // 255
const oct = 0o377;        // 255
const hex = 0xFF;         // 255
```

## Conversion Algorithm Template

```javascript
function toBase(num, base) {
  if (num === 0) return "0";
  const digits = "0123456789ABCDEF";
  let result = '';
  
  while (num > 0) {
    result = digits[num % base] + result;
    num = Math.floor(num / base);
  }
  return result;
}

function fromBase(str, base) {
  const digits = "0123456789ABCDEF";
  let result = 0;
  
  for (let i = 0; i < str.length; i++) {
    const digit = digits.indexOf(str[i].toUpperCase());
    result = result * base + digit;
  }
  return result;
}
```

## Practice Problems

1. Decimal to Binary
2. Binary to Decimal
3. Decimal to Octal
4. Octal to Decimal
5. Decimal to Hexadecimal
6. Hexadecimal to Decimal
7. Binary to Hexadecimal
8. Count 1 bits in binary
9. Check if power of 2
10. Add two binary strings
