// ===============================================
// DAY 1 – LOOPS & BASIC PATTERNS (FOR & WHILE LOOPS)
// ===============================================

// for (let i = 1; i <= 5; i++) {
//     console.log("Hello World");
// }


// // 1 to 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// // 10 to 1
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }


// // Sum of first 5 natural numbers
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//     sum += i; // Add i to sum
// }
// console.log("Sum:", sum);


// // swape numbers
// let x = 10;
// let y = 20;
// let temp = x;
// x = y;
// y = temp;
// console.log("x:", x, "y:", y);


// without temp var
let x = 10;
let y = 20;
x = x + y;//30
y = x - y;//10
x = x - y;//20
console.log("x:", x, "y:", y); // x: 20 y: 10


// find largest in two number 
let a = 15;
let b = 25;

if (a > b) {
    console.log(a, "is larger");
} else {
    console.log(b, "is larger");
}
