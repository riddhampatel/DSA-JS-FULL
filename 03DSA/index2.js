// ===============================================
// DAY 3 – OPERATORS & MATHEMATICAL FUNCTIONS
// ===============================================

// 1️⃣ Arithmetic Operators
let a = 10, b = 3;
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.3333
console.log("a % b =", a % b); // 1
console.log("a ** b =", a ** b); // 1000
console.log("++a =", ++a); // 11
console.log("--b =", --b); // 2

// 2️⃣ Assignment Operators
let x = 5;
x += 3; console.log("x += 3 ->", x); // 8
x -= 2; console.log("x -= 2 ->", x); // 6
x *= 2; console.log("x *= 2 ->", x); // 12
x /= 3; console.log("x /= 3 ->", x); // 4
x %= 3; console.log("x %= 3 ->", x); // 1

// 3️⃣ Comparison Operators
console.log("5 == '5' ->", 5 == '5'); // true
console.log("5 === '5' ->", 5 === '5'); // false
console.log("5 != 3 ->", 5 != 3); // true
console.log("5 !== '5' ->", 5 !== '5'); // true
console.log("5 > 3 ->", 5 > 3); // true
console.log("3 < 5 ->", 3 < 5); // true
console.log("5 >= 5 ->", 5 >= 5); // true
console.log("3 <= 5 ->", 3 <= 5); // true

// 4️⃣ Logical Operators
let p = true, q = false;
console.log("p && q ->", p && q); // false
console.log("p || q ->", p || q); // true
console.log("!p ->", !p);         // false

// 5️⃣ String Operators
let str = "Hello";
str += " JS";
console.log("Concatenated string ->", str); // Hello JS

// 6️⃣ Unary Operators
console.log("typeof 10 ->", typeof 10);       // number
console.log("Unary plus +'5' ->", +"5");      // 5
console.log("Unary minus -5 ->", -5);         // -5

// 7️⃣ Ternary Operator
let age = 20;
console.log("Ternary check:", age >= 18 ? "Adult" : "Minor"); // Adult

// 8️⃣ Math Object Examples
console.log("Math.round(4.7) ->", Math.round(4.7)); // 5
console.log("Math.floor(4.7) ->", Math.floor(4.7)); // 4
console.log("Math.ceil(4.1) ->", Math.ceil(4.1));   // 5
console.log("Math.sqrt(16) ->", Math.sqrt(16));     // 4
console.log("Math.pow(2,3) ->", Math.pow(2,3));     // 8
console.log("Math.abs(-7) ->", Math.abs(-7));       // 7
console.log("Math.PI ->", Math.PI);                 // 3.14159...
console.log("Random 0-1 ->", Math.random());        // random 0-1

// 9️⃣ Problem Solving – Geometry

// Area of Rectangle
function rectangleArea(length, width) {
    return length * width;
}
console.log("Rectangle area 5x10 ->", rectangleArea(5,10));

// Perimeter of Rectangle
function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}
console.log("Rectangle perimeter 5x10 ->", rectanglePerimeter(5,10));

// Area of Circle
function circleArea(radius) {
    return Math.PI * radius ** 2;
}
console.log("Circle area radius 7 ->", circleArea(7));

// Circumference of Circle
function circleCircumference(radius) {
    return 2 * Math.PI * radius;
}
console.log("Circle circumference radius 7 ->", circleCircumference(7));

// Heron's Formula for Triangle Area
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2; // semi-perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log("Triangle area 3,4,5 ->", triangleArea(3,4,5));

// 10️⃣ DSA Practice Questions

// Largest of three numbers
function largestOfThree(x, y, z) {
    return x > y ? (x > z ? x : z) : (y > z ? y : z);
}
console.log("Largest of 10, 20, 15 ->", largestOfThree(10,20,15));

// Check Even or Odd
function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Even/Odd 17 ->", evenOdd(17));

// Random Number between 1-100
function random1to100() {
    return Math.floor(Math.random() * 100) + 1;
}
console.log("Random 1-100 ->", random1to100());

// Sum, Difference, Product, Division, Remainder
function allOperations(a,b) {
    return {
        sum: a+b,
        difference: a-b,
        product: a*b,
        division: a/b,
        remainder: a%b
    };
}
console.log("Operations for 10,3 ->", allOperations(10,3));

