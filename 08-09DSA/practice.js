// ===============================================
// DAY 8-9 - FUNCTION PRACTICE QUESTIONS
// ===============================================

// PROBLEM 1: Check if a number is even
function isEven(n) {
  return n % 2 === 0;
}
console.log("isEven(10) ->", isEven(10)); // true
console.log("isEven(7) ->", isEven(7));   // false
console.log("---");

// PROBLEM 2: Sum all numbers in an array
function sumArray(arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log("sumArray([1, 2, 3, 4]) ->", sumArray([1, 2, 3, 4])); // 10
console.log("sumArray([-5, 5, 10]) ->", sumArray([-5, 5, 10]));    // 10
console.log("---");

// PROBLEM 3: Reverse a string without built-ins
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("reverseString('hello') ->", reverseString("hello"));
console.log("reverseString('DSA') ->", reverseString("DSA"));
console.log("---");

// PROBLEM 4: Count vowels in a string
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const ch of str) {
    if (vowels.includes(ch)) count++;
  }
  return count;
}
console.log("countVowels('javascript') ->", countVowels("javascript")); // 3
console.log("countVowels('ROADMAP') ->", countVowels("ROADMAP"));       // 3
console.log("---");

// PROBLEM 5: Find the factorial iteratively
function factorialIterative(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log("factorialIterative(5) ->", factorialIterative(5)); // 120
console.log("factorialIterative(0) ->", factorialIterative(0)); // 1
console.log("---");

// PROBLEM 6: Get nth Fibonacci number (iterative)
function fibonacci(n) {
  if (n < 0) return undefined;
  if (n === 0) return 0;
  if (n === 1) return 1;
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
console.log("fibonacci(6) ->", fibonacci(6)); // 8
console.log("fibonacci(10) ->", fibonacci(10)); // 55
console.log("---");

// PROBLEM 7: Count how many times a function is called (using closure)
function makeCallCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const tracker = makeCallCounter();
console.log("tracker() ->", tracker()); // 1
console.log("tracker() ->", tracker()); // 2
console.log("tracker() ->", tracker()); // 3
console.log("---");

// PROBLEM 8: Create a function that returns another function (power factory)
function makePower(exponent) {
  return function (base) {
    return base ** exponent;
  };
}

const square = makePower(2);
const cube = makePower(3);
console.log("square(6) ->", square(6)); // 36
console.log("cube(3) ->", cube(3));     // 27
