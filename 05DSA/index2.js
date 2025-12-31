// ===============================================
// DAY 5 – LOOP-BASED DSA QUESTIONS (EASY TO MEDIUM)
// ===============================================


// ===========================================
// 1. Print all even numbers from 1 to 100
// ===========================================
console.log("1. Even numbers from 1 to 100:");
for (let i = 2; i <= 100; i += 2) {
    process.stdout.write(i + " ");
}
console.log("\n\n");


// ===========================================
// 2. Count digits in a number
// ===========================================
console.log("2. Count digits:");
let num = 12345;
let count = 0;
let temp = num;
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}
console.log(`Number of digits in ${num}: ${count}`);
console.log("\n\n");


// ===========================================
// 3. Reverse a number
// ===========================================
console.log("3. Reverse a number:");
let original = 12345;
let reversed = 0;
let n = original;
while (n > 0) {
    let digit = n % 10;
    reversed = reversed * 10 + digit;
    n = Math.floor(n / 10);
}
console.log(`Original: ${original}, Reversed: ${reversed}`);
console.log("\n\n");


// ===========================================
// 4. Check if a number is palindrome
// ===========================================
console.log("4. Check palindrome:");
let number = 12321;
let originalNum = number;
let reversedNum = 0;
while (number > 0) {
    reversedNum = reversedNum * 10 + (number % 10);
    number = Math.floor(number / 10);
}
console.log(`${originalNum} is ${originalNum === reversedNum ? "palindrome" : "not palindrome"}`);
console.log("\n\n");


// ===========================================
// 5. Sum of digits
// ===========================================
console.log("5. Sum of digits:");
let n1 = 12345;
let sum = 0;
while (n1 > 0) {
    sum += n1 % 10;
    n1 = Math.floor(n1 / 10);
}
console.log(`Sum of digits: ${sum}`);
console.log("\n\n");


// ===========================================
// 6. Print Fibonacci series up to n terms
// ===========================================
console.log("6. Fibonacci series (10 terms):");
let terms = 10;
let a = 0, b = 1;
for (let i = 0; i < terms; i++) {
    process.stdout.write(a + " ");
    let next = a + b;
    a = b;
    b = next;
}
console.log("\n\n");


// ===========================================
// 7. Find factorial using different loops
// ===========================================
console.log("7. Factorial using different loops:");
// Using for loop
let factNum = 5;
let factorial = 1;
for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}
console.log(`Factorial of ${factNum} (for loop): ${factorial}`);

// Using while loop
factorial = 1;
let i = 1;
while (i <= factNum) {
    factorial *= i;
    i++;
}
console.log(`Factorial of ${factNum} (while loop): ${factorial}`);

// Using do-while loop
factorial = 1;
i = 1;
do {
    factorial *= i;
    i++;
} while (i <= factNum);
console.log(`Factorial of ${factNum} (do-while loop): ${factorial}`);
console.log("\n\n");


// ===========================================
// 8. Print multiplication table
// ===========================================
console.log("8. Multiplication table of 7:");
let tableNum = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}
console.log("\n\n");


// ===========================================
// 9. Find sum of even and odd numbers separately (1 to 100)
// ===========================================
console.log("9. Sum of even and odd numbers:");
let evenSum = 0, oddSum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i;
    } else {
        oddSum += i;
    }
}
console.log(`Sum of even numbers: ${evenSum}`);
console.log(`Sum of odd numbers: ${oddSum}`);
console.log("\n\n");


// ===========================================
// 10. Power of a number (base^exponent)
// ===========================================
console.log("10. Power calculation:");
let base = 2, exponent = 10;
let result = 1;
for (let i = 0; i < exponent; i++) {
    result *= base;
}
console.log(`${base}^${exponent} = ${result}`);
console.log("\n\n");


// ===========================================
// 11. Print pattern - Right triangle
// ===========================================
console.log("11. Right triangle pattern:");
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
console.log("\n\n");


// ===========================================
// 12. Print pattern - Inverted right triangle
// ===========================================
console.log("12. Inverted right triangle:");
for (let i = rows; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}
console.log("\n\n");


// ===========================================
// 13. Print pattern - Pyramid
// ===========================================
console.log("13. Pyramid pattern:");
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    // Print spaces
    for (let j = 1; j <= rows - i; j++) {
        pattern += " ";
    }
    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    console.log(pattern);
}
console.log("\n\n");


// ===========================================
// 14. Find all factors of a number
// ===========================================
console.log("14. Factors of a number:");
let factorNum = 36;
process.stdout.write(`Factors of ${factorNum}: `);
for (let i = 1; i <= factorNum; i++) {
    if (factorNum % i === 0) {
        process.stdout.write(i + " ");
    }
}
console.log("\n\n");


// ===========================================
// 15. Find sum of series: 1 + 2 + 3 + ... + n
// ===========================================
console.log("15. Sum of series 1+2+3...+n:");
let seriesN = 100;
let seriesSum = 0;
for (let i = 1; i <= seriesN; i++) {
    seriesSum += i;
}
console.log(`Sum of 1 to ${seriesN}: ${seriesSum}`);
console.log("\n\n");


console.log("=== Easy to Medium loop questions completed! ===");
