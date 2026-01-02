// ===============================================
// DAY 8-9 - FUNCTIONS BASICS
// ===============================================

// 1) Function Declaration
function add(a, b) {
  return a + b;
}
console.log("add(2, 3) =", add(2, 3));

// 2) Function Expression
const multiply = function (a, b) {
  return a * b;
};
console.log("multiply(4, 5) =", multiply(4, 5));

// 3) Arrow Function
const greet = (name) => `Hello, ${name}!`;
console.log(greet("DSA Learner"));

// 4) Default Parameters
function power(base, exponent = 2) {
  return base ** exponent;
}
console.log("power(5) =", power(5));       // squares by default
console.log("power(2, 5) =", power(2, 5)); // custom exponent

// 5) Recursion Example: Factorial
function factorial(n) {
  if (n < 0) return undefined; // factorial not defined for negatives
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log("factorial(5) =", factorial(5));

// 6) Closure Example: Simple Counter
function createCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log("counter() ->", counter()); // 1
console.log("counter() ->", counter()); // 2
console.log("counter() ->", counter()); // 3
