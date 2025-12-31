// ===============================================
// DAY 5 – LOOP-BASED DSA QUESTIONS (HARD LEVEL)
// ===============================================


// ===========================================
// 1. Find GCD (Greatest Common Divisor) using Euclidean Algorithm
// ===========================================
console.log("1. GCD of two numbers:");
let num1 = 48, num2 = 18;
let x = num1, y = num2;
while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
}
console.log(`GCD of ${num1} and ${num2}: ${x}`);
console.log("\n\n");


// ===========================================
// 2. Find LCM (Least Common Multiple)
// ===========================================
console.log("2. LCM of two numbers:");
let a1 = 12, b1 = 18;
let max = Math.max(a1, b1);
let lcm = max;
while (true) {
    if (lcm % a1 === 0 && lcm % b1 === 0) {
        break;
    }
    lcm += max;
}
console.log(`LCM of ${a1} and ${b1}: ${lcm}`);
console.log("\n\n");


// ===========================================
// 3. Check Armstrong number (narcissistic number)
// Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153
// ===========================================
console.log("3. Check Armstrong number:");
let armNum = 153;
let originalArm = armNum;
let armSum = 0;
let digits = armNum.toString().length;
while (armNum > 0) {
    let digit = armNum % 10;
    armSum += Math.pow(digit, digits);
    armNum = Math.floor(armNum / 10);
}
console.log(`${originalArm} is ${originalArm === armSum ? "Armstrong" : "not Armstrong"}`);
console.log("\n\n");


// ===========================================
// 4. Print all prime numbers up to n (Sieve of Eratosthenes approach)
// ===========================================
console.log("4. Prime numbers up to 100:");
let limit = 100;
for (let i = 2; i <= limit; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        process.stdout.write(i + " ");
    }
}
console.log("\n\n");


// ===========================================
// 5. Check if a number is perfect number
// Perfect number = sum of its proper divisors (excluding itself)
// Example: 28 = 1 + 2 + 4 + 7 + 14 = 28
// ===========================================
console.log("5. Check perfect number:");
let perfectNum = 28;
let factorSum = 0;
for (let i = 1; i < perfectNum; i++) {
    if (perfectNum % i === 0) {
        factorSum += i;
    }
}
console.log(`${perfectNum} is ${factorSum === perfectNum ? "perfect" : "not perfect"}`);
console.log("\n\n");


// ===========================================
// 6. Find nth Fibonacci number efficiently
// ===========================================
console.log("6. Nth Fibonacci number:");
let nth = 20;
let fib1 = 0, fib2 = 1;
if (nth === 1) {
    console.log(`${nth}th Fibonacci: ${fib1}`);
} else if (nth === 2) {
    console.log(`${nth}th Fibonacci: ${fib2}`);
} else {
    for (let i = 3; i <= nth; i++) {
        let fibNext = fib1 + fib2;
        fib1 = fib2;
        fib2 = fibNext;
    }
    console.log(`${nth}th Fibonacci: ${fib2}`);
}
console.log("\n\n");


// ===========================================
// 7. Binary to Decimal conversion
// ===========================================
console.log("7. Binary to Decimal:");
let binary = "11010110";
let decimal = 0;
let power = 0;
for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === '1') {
        decimal += Math.pow(2, power);
    }
    power++;
}
console.log(`Binary ${binary} = Decimal ${decimal}`);
console.log("\n\n");


// ===========================================
// 8. Decimal to Binary conversion
// ===========================================
console.log("8. Decimal to Binary:");
let decNum = 214;
let binaryResult = "";
let tempDec = decNum;
if (tempDec === 0) {
    binaryResult = "0";
} else {
    while (tempDec > 0) {
        binaryResult = (tempDec % 2) + binaryResult;
        tempDec = Math.floor(tempDec / 2);
    }
}
console.log(`Decimal ${decNum} = Binary ${binaryResult}`);
console.log("\n\n");


// ===========================================
// 9. Print Floyd's Triangle
// ===========================================
console.log("9. Floyd's Triangle (7 rows):");
let floydRows = 7;
let floydNum = 1;
for (let i = 1; i <= floydRows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += floydNum + " ";
        floydNum++;
    }
    console.log(line);
}
console.log("\n\n");


// ===========================================
// 10. Strong number check
// Strong number: sum of factorial of digits equals the number
// Example: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
// ===========================================
console.log("10. Check strong number:");
let strongNum = 145;
let strongTemp = strongNum;
let strongSum = 0;
while (strongTemp > 0) {
    let digit = strongTemp % 10;
    let digitFact = 1;
    for (let i = 1; i <= digit; i++) {
        digitFact *= i;
    }
    strongSum += digitFact;
    strongTemp = Math.floor(strongTemp / 10);
}
console.log(`${strongNum} is ${strongSum === strongNum ? "strong" : "not strong"}`);
console.log("\n\n");


// ===========================================
// 11. Count frequency of each digit in a number
// ===========================================
console.log("11. Frequency of digits:");
let freqNum = 1122334455;
let freq = {};
let tempFreq = freqNum;
while (tempFreq > 0) {
    let digit = tempFreq % 10;
    freq[digit] = (freq[digit] || 0) + 1;
    tempFreq = Math.floor(tempFreq / 10);
}
console.log(`Digit frequency in ${freqNum}:`, freq);
console.log("\n\n");


// ===========================================
// 12. Find largest and smallest digit in a number
// ===========================================
console.log("12. Largest and smallest digit:");
let digitNum = 583629;
let largest = 0;
let smallest = 9;
let tempDigit = digitNum;
while (tempDigit > 0) {
    let digit = tempDigit % 10;
    if (digit > largest) largest = digit;
    if (digit < smallest) smallest = digit;
    tempDigit = Math.floor(tempDigit / 10);
}
console.log(`In ${digitNum}: Largest = ${largest}, Smallest = ${smallest}`);
console.log("\n\n");


// ===========================================
// 13. Sum of series: 1/1 + 1/2 + 1/3 + ... + 1/n (Harmonic Series)
// ===========================================
console.log("13. Harmonic series sum:");
let harmN = 10;
let harmSum = 0;
for (let i = 1; i <= harmN; i++) {
    harmSum += 1 / i;
}
console.log(`Sum of 1/1 + 1/2 + ... + 1/${harmN} = ${harmSum.toFixed(6)}`);
console.log("\n\n");


// ===========================================
// 14. Print pattern - Diamond
// ===========================================
console.log("14. Diamond pattern:");
let diamondRows = 7;
// Upper half
for (let i = 1; i <= diamondRows; i++) {
    let pattern = "";
    for (let j = 1; j <= diamondRows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    console.log(pattern);
}
// Lower half
for (let i = diamondRows - 1; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= diamondRows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += "*";
    }
    console.log(pattern);
}
console.log("\n\n");


// ===========================================
// 15. Find sum of series: 1² + 2² + 3² + ... + n²
// ===========================================
console.log("15. Sum of squares:");
let sqN = 20;
let sqSum = 0;
for (let i = 1; i <= sqN; i++) {
    sqSum += i * i;
}
console.log(`Sum of squares 1² to ${sqN}²: ${sqSum}`);
console.log("\n\n");


// ===========================================
// 16. Decimal to Octal conversion
// ===========================================
console.log("16. Decimal to Octal:");
let octNum = 125;
let octalResult = "";
let tempOct = octNum;
if (tempOct === 0) {
    octalResult = "0";
} else {
    while (tempOct > 0) {
        octalResult = (tempOct % 8) + octalResult;
        tempOct = Math.floor(tempOct / 8);
    }
}
console.log(`Decimal ${octNum} = Octal ${octalResult}`);
console.log("\n\n");


// ===========================================
// 17. Decimal to Hexadecimal conversion
// ===========================================
console.log("17. Decimal to Hexadecimal:");
let hexNum = 255;
let hexResult = "";
let tempHex = hexNum;
let hexChars = "0123456789ABCDEF";
if (tempHex === 0) {
    hexResult = "0";
} else {
    while (tempHex > 0) {
        hexResult = hexChars[tempHex % 16] + hexResult;
        tempHex = Math.floor(tempHex / 16);
    }
}
console.log(`Decimal ${hexNum} = Hexadecimal ${hexResult}`);
console.log("\n\n");


// ===========================================
// 18. Print Pascal's Triangle
// ===========================================
console.log("18. Pascal's Triangle:");
let pascalRows = 6;
for (let i = 0; i < pascalRows; i++) {
    let line = "";
    // Print spaces for alignment
    for (let j = 0; j < pascalRows - i; j++) {
        line += " ";
    }
    let num = 1;
    for (let j = 0; j <= i; j++) {
        line += num + " ";
        num = num * (i - j) / (j + 1);
    }
    console.log(line);
}
console.log("\n\n");


// ===========================================
// 19. Find all prime factors of a number
// ===========================================
console.log("19. Prime factors of a number:");
let primeFactNum = 315;
process.stdout.write(`Prime factors of ${primeFactNum}: `);
let tempPrime = primeFactNum;
for (let i = 2; i <= tempPrime; i++) {
    while (tempPrime % i === 0) {
        process.stdout.write(i + " ");
        tempPrime = tempPrime / i;
    }
}
console.log("\n\n");


// ===========================================
// 20. Check if a number is a perfect square
// ===========================================
console.log("20. Check perfect square:");
let sqrNum = 144;
let sqrtVal = 1;
let found = false;
while (sqrtVal * sqrtVal <= sqrNum) {
    if (sqrtVal * sqrtVal === sqrNum) {
        found = true;
        break;
    }
    sqrtVal++;
}
console.log(`${sqrNum} is ${found ? "a perfect square" : "not a perfect square"}`);
if (found) console.log(`Square root: ${sqrtVal}`);
console.log("\n\n");


// ===========================================
// 21. Sum of series: 1 - 2 + 3 - 4 + 5 - 6 + ... ± n
// ===========================================
console.log("21. Alternating sum series:");
let altN = 100;
let altSum = 0;
for (let i = 1; i <= altN; i++) {
    if (i % 2 === 0) {
        altSum -= i;
    } else {
        altSum += i;
    }
}
console.log(`Sum of 1 - 2 + 3 - 4 + ... ± ${altN} = ${altSum}`);
console.log("\n\n");


// ===========================================
// 22. Sum of series: 1³ + 2³ + 3³ + ... + n³
// ===========================================
console.log("22. Sum of cubes:");
let cubeN = 10;
let cubeSum = 0;
for (let i = 1; i <= cubeN; i++) {
    cubeSum += i * i * i;
}
console.log(`Sum of cubes 1³ to ${cubeN}³: ${cubeSum}`);
console.log("\n\n");


// ===========================================
// 23. Print Hollow Diamond Pattern
// ===========================================
console.log("23. Hollow Diamond Pattern:");
let hollowRows = 5;
// Upper half
for (let i = 1; i <= hollowRows; i++) {
    let pattern = "";
    // Leading spaces
    for (let j = 1; j <= hollowRows - i; j++) {
        pattern += " ";
    }
    // Stars with hollow center
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    console.log(pattern);
}
// Lower half
for (let i = hollowRows - 1; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= hollowRows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        if (k === 1 || k === 2 * i - 1) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    console.log(pattern);
}
console.log("\n\n");


// ===========================================
// 24. Find number of trailing zeros in factorial
// Example: 10! = 3628800 has 2 trailing zeros
// ===========================================
console.log("24. Trailing zeros in factorial:");
let factorialNum = 25;
let trailingZeros = 0;
for (let i = 5; factorialNum / i >= 1; i *= 5) {
    trailingZeros += Math.floor(factorialNum / i);
}
console.log(`${factorialNum}! has ${trailingZeros} trailing zeros`);
console.log("\n\n");


// ===========================================
// 25. Check if number is a Harshad (Niven) number
// Harshad number: divisible by sum of its digits
// Example: 18 is Harshad (1+8=9, and 18%9=0)
// ===========================================
console.log("25. Check Harshad number:");
let harshadNum = 18;
let harshadTemp = harshadNum;
let digitSum = 0;
while (harshadTemp > 0) {
    digitSum += harshadTemp % 10;
    harshadTemp = Math.floor(harshadTemp / 10);
}
console.log(`${harshadNum} is ${harshadNum % digitSum === 0 ? "Harshad" : "not Harshad"}`);
console.log("\n\n");


// ===========================================
// 26. Print number pattern - Sandglass
// ===========================================
console.log("26. Sandglass number pattern:");
let sandRows = 5;
// Upper half (decreasing)
for (let i = sandRows; i >= 1; i--) {
    let pattern = "";
    // Leading spaces
    for (let j = 1; j <= sandRows - i; j++) {
        pattern += " ";
    }
    // Numbers
    for (let k = 1; k <= i; k++) {
        pattern += k + " ";
    }
    console.log(pattern);
}
// Lower half (increasing)
for (let i = 2; i <= sandRows; i++) {
    let pattern = "";
    for (let j = 1; j <= sandRows - i; j++) {
        pattern += " ";
    }
    for (let k = 1; k <= i; k++) {
        pattern += k + " ";
    }
    console.log(pattern);
}
console.log("\n\n");


// ===========================================
// 27. Find sum of GP series: a + ar + ar² + ar³ + ... + ar^(n-1)
// ===========================================
console.log("27. Sum of Geometric Progression:");
let gpA = 2;      // first term
let gpR = 3;      // common ratio
let gpN = 5;      // number of terms
let gpSum = 0;
for (let i = 0; i < gpN; i++) {
    gpSum += gpA * Math.pow(gpR, i);
}
console.log(`Sum of GP (a=${gpA}, r=${gpR}, n=${gpN}): ${gpSum}`);
console.log("\n\n");


// ===========================================
// 28. Find all abundant numbers up to n
// Abundant number: sum of proper divisors > number
// Example: 12 (1+2+3+4+6=16 > 12)
// ===========================================
console.log("28. Abundant numbers up to 50:");
process.stdout.write("Abundant numbers: ");
for (let num = 1; num <= 50; num++) {
    let divSum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            divSum += i;
        }
    }
    if (divSum > num) {
        process.stdout.write(num + " ");
    }
}
console.log("\n\n");


// ===========================================
// 29. Print Butterfly Pattern
// ===========================================
console.log("29. Butterfly Pattern:");
let butterflyRows = 5;
// Upper half
for (let i = 1; i <= butterflyRows; i++) {
    let pattern = "";
    // Left stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    // Middle spaces
    for (let j = 1; j <= 2 * (butterflyRows - i); j++) {
        pattern += " ";
    }
    // Right stars
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
// Lower half
for (let i = butterflyRows; i >= 1; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    for (let j = 1; j <= 2 * (butterflyRows - i); j++) {
        pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
console.log("\n\n");


// ===========================================
// 30. Calculate nCr (Combination) using loops
// nCr = n! / (r! * (n-r)!)
// ===========================================
console.log("30. Calculate nCr (Combination):");
let nVal = 10;
let rVal = 3;
// Calculate factorials
let nFact = 1, rFact = 1, nrFact = 1;
for (let i = 1; i <= nVal; i++) {
    nFact *= i;
}
for (let i = 1; i <= rVal; i++) {
    rFact *= i;
}
for (let i = 1; i <= (nVal - rVal); i++) {
    nrFact *= i;
}
let nCr = nFact / (rFact * nrFact);
console.log(`${nVal}C${rVal} = ${nCr}`);
console.log("\n\n");


console.log("=== All HARD loop questions completed! ===");
