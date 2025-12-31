// ===============================================
// DAY 7 – NUMBER CONVERSION: PROBLEMS & SOLUTIONS
// ===============================================

// ======================== PROBLEM 1 ========================
// Problem: Convert Decimal to Binary using manual method (without built-in toString)
// Logic: Keep dividing by 2 and collect remainders, then reverse

function decimalToBinaryManual(n) {
  if (n === 0) return "0";
  
  let binary = "";
  
  while (n > 0) {
    binary = (n % 2) + binary;  // Get remainder (0 or 1) and add to front
    n = Math.floor(n / 2);       // Divide by 2
  }
  
  return binary;
}

console.log("PROBLEM 1: Decimal to Binary (Manual)");
console.log(decimalToBinaryManual(10));    // 1010
console.log(decimalToBinaryManual(25));    // 11001
console.log(decimalToBinaryManual(0));     // 0
console.log("---");


// ======================== PROBLEM 2 ========================
// Problem: Convert Binary to Decimal using manual method (without parseInt)
// Logic: Multiply each digit by power of 2 and sum

function binaryToDecimalManual(binary) {
  let decimal = 0;
  let power = 0;
  
  // Reverse through the binary string from right to left
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      decimal += Math.pow(2, power);  // Add 2^power if digit is 1
    }
    power++;
  }
  
  return decimal;
}

console.log("PROBLEM 2: Binary to Decimal (Manual)");
console.log(binaryToDecimalManual("1010"));      // 10
console.log(binaryToDecimalManual("11001"));     // 25
console.log(binaryToDecimalManual("1111"));      // 15
console.log("---");


// ======================== PROBLEM 3 ========================
// Problem: Convert Decimal to Octal using manual method
// Logic: Keep dividing by 8 and collect remainders, then reverse

function decimalToOctalManual(n) {
  if (n === 0) return "0";
  
  let octal = "";
  
  while (n > 0) {
    octal = (n % 8) + octal;     // Get remainder (0-7) and add to front
    n = Math.floor(n / 8);        // Divide by 8
  }
  
  return octal;
}

console.log("PROBLEM 3: Decimal to Octal (Manual)");
console.log(decimalToOctalManual(10));    // 12
console.log(decimalToOctalManual(64));    // 100
console.log(decimalToOctalManual(255));   // 377
console.log("---");


// ======================== PROBLEM 4 ========================
// Problem: Convert Octal to Decimal using manual method
// Logic: Multiply each digit by power of 8 and sum

function octalToDecimalManual(octal) {
  let decimal = 0;
  let power = 0;
  
  for (let i = octal.length - 1; i >= 0; i--) {
    let digit = parseInt(octal[i]);
    decimal += digit * Math.pow(8, power);  // digit * 8^power
    power++;
  }
  
  return decimal;
}

console.log("PROBLEM 4: Octal to Decimal (Manual)");
console.log(octalToDecimalManual("12"));         // 10
console.log(octalToDecimalManual("100"));        // 64
console.log(octalToDecimalManual("377"));        // 255
console.log("---");


// ======================== PROBLEM 5 ========================
// Problem: Convert Decimal to Hexadecimal using manual method
// Logic: Keep dividing by 16 and collect remainders, convert to hex letters

function decimalToHexManual(n) {
  if (n === 0) return "0";
  
  const hexChars = "0123456789abcdef";
  let hex = "";
  
  while (n > 0) {
    hex = hexChars[n % 16] + hex;  // Get remainder (0-15) and map to hex character
    n = Math.floor(n / 16);         // Divide by 16
  }
  
  return hex;
}

console.log("PROBLEM 5: Decimal to Hexadecimal (Manual)");
console.log(decimalToHexManual(255));     // ff
console.log(decimalToHexManual(4095));    // fff
console.log(decimalToHexManual(256));     // 100
console.log("---");


// ======================== PROBLEM 6 ========================
// Problem: Convert Hexadecimal to Decimal using manual method
// Logic: Multiply each hex digit by power of 16 and sum

function hexToDecimalManual(hex) {
  let decimal = 0;
  let power = 0;
  
  // Convert to lowercase for easier processing
  hex = hex.toLowerCase();
  
  for (let i = hex.length - 1; i >= 0; i--) {
    let digit;
    
    // Convert hex character to decimal value (0-15)
    if (hex[i] >= "0" && hex[i] <= "9") {
      digit = parseInt(hex[i]);
    } else {
      digit = hex.charCodeAt(i) - "a".charCodeAt(0) + 10;  // a=10, b=11, ..., f=15
    }
    
    decimal += digit * Math.pow(16, power);
    power++;
  }
  
  return decimal;
}

console.log("PROBLEM 6: Hexadecimal to Decimal (Manual)");
console.log(hexToDecimalManual("ff"));           // 255
console.log(hexToDecimalManual("fff"));          // 4095
console.log(hexToDecimalManual("100"));          // 256
console.log("---");


// ======================== PROBLEM 7 ========================
// Problem: Convert between any two bases (2-36)
// Logic: Convert to decimal first, then to target base

function convertBase(number, fromBase, toBase) {
  // Step 1: Convert from source base to decimal
  let decimal = parseInt(number.toString(), fromBase);
  
  // Step 2: Convert from decimal to target base
  if (decimal === 0) return "0";
  
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";
  
  while (decimal > 0) {
    result = digits[decimal % toBase] + result;
    decimal = Math.floor(decimal / toBase);
  }
  
  return result;
}

console.log("PROBLEM 7: Convert Any Base to Any Base");
console.log(convertBase("1010", 2, 8));     // Binary to Octal: 12
console.log(convertBase("ff", 16, 2));      // Hex to Binary: 11111111
console.log(convertBase("12", 8, 16));      // Octal to Hex: a
console.log("---");


// ======================== PROBLEM 8 ========================
// Problem: Validate if a number is valid for a given base
// Logic: Check if all digits are less than the base

function isValidInBase(number, base) {
  // Check if base is valid (2-36)
  if (base < 2 || base > 36) return false;
  
  // Convert to string and check each character
  const validChars = "0123456789abcdefghijklmnopqrstuvwxyz".substring(0, base);
  
  for (let char of number.toLowerCase()) {
    if (!validChars.includes(char)) {
      return false;  // Character not valid in this base
    }
  }
  
  return true;
}

console.log("PROBLEM 8: Validate Number in Given Base");
console.log(isValidInBase("1010", 2));      // true (binary)
console.log(isValidInBase("1010", 8));      // true (octal)
console.log(isValidInBase("ff", 16));       // true (hexadecimal)
console.log(isValidInBase("2", 2));         // false (2 is not valid in binary)
console.log(isValidInBase("fg", 16));       // false (g is not valid in hex)
console.log("---");


// ======================== PROBLEM 9 ========================
// Problem: Find the sum of two numbers in different bases
// Logic: Convert both to decimal, add, convert back to desired base

function addNumbersInBase(num1, base1, num2, base2, resultBase) {
  // Convert both numbers to decimal
  let decimal1 = parseInt(num1, base1);
  let decimal2 = parseInt(num2, base2);
  
  // Add them
  let sum = decimal1 + decimal2;
  
  // Convert result back to desired base
  if (sum === 0) return "0";
  
  const digits = "0123456789abcdefghijklmnopqrstuvwxyz";
  let result = "";
  
  while (sum > 0) {
    result = digits[sum % resultBase] + result;
    sum = Math.floor(sum / resultBase);
  }
  
  return result;
}

console.log("PROBLEM 9: Add Numbers in Different Bases");
console.log(addNumbersInBase("1010", 2, "1010", 2, 2));    // Binary: 1010 + 1010 = 10100
console.log(addNumbersInBase("a", 16, "5", 10, 10));       // 10 + 5 = 15
console.log(addNumbersInBase("12", 8, "ff", 16, 16));      // Octal + Hex = Hex
console.log("---");


// ======================== PROBLEM 10 ========================
// Problem: Find the largest number when written in a specific base
// Logic: Count how many digits each base representation has

function compareInDifferentBases(num1, base1, num2, base2) {
  // Convert both to decimal for comparison
  let decimal1 = parseInt(num1, base1);
  let decimal2 = parseInt(num2, base2);
  
  console.log(`${num1} (base ${base1}) = ${decimal1} (decimal)`);
  console.log(`${num2} (base ${base2}) = ${decimal2} (decimal)`);
  
  if (decimal1 > decimal2) {
    console.log(`${num1} (base ${base1}) is larger`);
  } else if (decimal2 > decimal1) {
    console.log(`${num2} (base ${base2}) is larger`);
  } else {
    console.log("Both numbers are equal");
  }
}

console.log("PROBLEM 10: Compare Numbers in Different Bases");
compareInDifferentBases("ff", 16, "377", 8);  // ff (255) vs 377 (255)
console.log("---");
