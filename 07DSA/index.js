// ===============================================
// DAY 7 – NUMBER CONVERSION (DECIMAL, BINARY, OCTAL, HEXADECIMAL)
// ===============================================

// 1. Decimal to Binary
function decimalToBinary(n) {
  return n.toString(2);
}

console.log("Decimal to Binary:");
console.log(decimalToBinary(10));   // 1010
console.log(decimalToBinary(25));   // 11001
console.log("---");


// 2. Decimal to Octal
function decimalToOctal(n) {
  return n.toString(8);
}

console.log("Decimal to Octal:");
console.log(decimalToOctal(10));    // 12
console.log(decimalToOctal(64));    // 100
console.log("---");


// 3. Decimal to Hexadecimal
function decimalToHex(n) {
  return n.toString(16);
}

console.log("Decimal to Hexadecimal:");
console.log(decimalToHex(255));     // ff
console.log(decimalToHex(4095));    // fff
console.log("---");


// 4. Binary to Decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

console.log("Binary to Decimal:");
console.log(binaryToDecimal("1010"));      // 10
console.log(binaryToDecimal("11001"));     // 25
console.log("---");


// 5. Octal to Decimal
function octalToDecimal(octal) {
  return parseInt(octal, 8);
}

console.log("Octal to Decimal:");
console.log(octalToDecimal("12"));         // 10
console.log(octalToDecimal("100"));        // 64
console.log("---");


// 6. Hexadecimal to Decimal
function hexToDecimal(hex) {
  return parseInt(hex, 16);
}

console.log("Hexadecimal to Decimal:");
console.log(hexToDecimal("ff"));           // 255
console.log(hexToDecimal("fff"));          // 4095
console.log("---");
