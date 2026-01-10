// Day 1: Variables, Data Types & Operators - Practice Problems

console.log("=== Day 1 Practice Problems ===\n");

// Problem 1: Simple Calculator
function calculator(num1, num2, operator) {
  switch(operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default: return "Invalid operator";
  }
}
console.log("1. Calculator:");
console.log("   10 + 5 =", calculator(10, 5, '+'));
console.log("   10 - 5 =", calculator(10, 5, '-'));
console.log();

// Problem 2: Area and Perimeter of Rectangle
function rectangleCalc(length, width) {
  return {
    area: length * width,
    perimeter: 2 * (length + width)
  };
}
console.log("2. Rectangle:");
console.log("   Length=5, Width=3:", rectangleCalc(5, 3));
console.log();

// Problem 3: Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log("3. Temperature Conversion:");
console.log("   0°C =", celsiusToFahrenheit(0), "°F");
console.log("   25°C =", celsiusToFahrenheit(25), "°F");
console.log();

// Problem 4: Check Even or Odd
function isEven(num) {
  return num % 2 === 0;
}
console.log("4. Even/Odd Check:");
console.log("   10 is even:", isEven(10));
console.log("   7 is even:", isEven(7));
console.log();

// Problem 5: Simple Interest Calculator
function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}
console.log("5. Simple Interest:");
console.log("   P=1000, R=5%, T=2 years:", simpleInterest(1000, 5, 2));
console.log();

console.log("✅ Day 1 Practice Complete!");
