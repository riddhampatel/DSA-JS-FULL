# Day 8: Functions

## Function Basics

### Function Declaration
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Function Expression
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

### Arrow Function
```javascript
const greet = (name) => `Hello, ${name}!`;

// Single parameter - parentheses optional
const square = x => x * x;

// Multiple statements - need braces
const calculate = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```

## Parameters and Arguments

### Default Parameters
```javascript
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

### Rest Parameters
```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
sum(1, 2, 3, 4);  // 10
```

### Destructuring Parameters
```javascript
function printUser({name, age}) {
  console.log(`${name} is ${age} years old`);
}
printUser({name: "John", age: 30});
```

## Scope

### Global Scope
```javascript
let globalVar = "I'm global";

function test() {
  console.log(globalVar);  // Accessible
}
```

### Function Scope
```javascript
function test() {
  var x = 10;  // Function-scoped
  let y = 20;  // Block-scoped
}
// x and y not accessible here
```

### Block Scope
```javascript
if (true) {
  let x = 10;  // Block-scoped
  var y = 20;  // Function-scoped (escapes block)
}
// x not accessible, y is accessible
```

### Lexical Scope
```javascript
function outer() {
  const x = 10;
  function inner() {
    console.log(x);  // Can access outer's variables
  }
  inner();
}
```

## Closures

A function that remembers variables from its outer scope

```javascript
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const counter = createCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3
```

### Practical Use Cases
```javascript
// Private variables
function bankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => balance -= amount,
    getBalance: () => balance
  };
}

const account = bankAccount(100);
account.deposit(50);   // balance = 150
account.withdraw(30);  // balance = 120
console.log(account.getBalance());  // 120
```

## Recursion

Function calling itself

### Basic Structure
```javascript
function recursive(n) {
  // Base case - stops recursion
  if (n === 0) return;
  
  // Recursive case
  console.log(n);
  recursive(n - 1);
}
```

### Classic Examples

#### Factorial
```javascript
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

#### Fibonacci
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Optimized with memoization
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```

#### Sum of Array
```javascript
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}
```

## Higher-Order Functions

Functions that take or return functions

### Function as Parameter
```javascript
function operate(a, b, operation) {
  return operation(a, b);
}

operate(5, 3, (x, y) => x + y);  // 8
operate(5, 3, (x, y) => x * y);  // 15
```

### Function as Return Value
```javascript
function multiplier(factor) {
  return (number) => number * factor;
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

## Pure Functions

- Same input always returns same output
- No side effects

```javascript
// Pure
function add(a, b) {
  return a + b;
}

// Impure (modifies external state)
let total = 0;
function addToTotal(num) {
  total += num;
  return total;
}
```

## Function Methods

### call()
```javascript
function greet(greeting) {
  return `${greeting}, ${this.name}`;
}

const person = { name: "John" };
greet.call(person, "Hello");  // "Hello, John"
```

### apply()
```javascript
function sum(a, b, c) {
  return a + b + c;
}

sum.apply(null, [1, 2, 3]);  // 6
```

### bind()
```javascript
const person = {
  name: "John",
  greet: function() {
    console.log(`Hello, ${this.name}`);
  }
};

const greetFunction = person.greet.bind(person);
setTimeout(greetFunction, 1000);
```

## IIFE (Immediately Invoked Function Expression)

```javascript
(function() {
  console.log("I run immediately!");
})();

// With arrow function
(() => {
  console.log("I also run immediately!");
})();
```

## Best Practices

1. **Use descriptive names**
   ```javascript
   // Bad
   function f(x, y) { return x + y; }
   
   // Good
   function calculateSum(num1, num2) { return num1 + num2; }
   ```

2. **Keep functions small and focused**
   - One function, one purpose
   - Easier to test and debug

3. **Use arrow functions for callbacks**
   ```javascript
   array.map(x => x * 2);
   ```

4. **Avoid deep nesting**
   - Use early returns
   - Extract logic to separate functions

5. **Document complex functions**
   ```javascript
   /**
    * Calculates factorial of a number
    * @param {number} n - The input number
    * @returns {number} The factorial
    */
   function factorial(n) {
     // implementation
   }
   ```

## Common Patterns

### Callback Pattern
```javascript
function fetchData(callback) {
  // Async operation
  setTimeout(() => {
    callback({ data: "result" });
  }, 1000);
}
```

### Factory Pattern
```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hi, I'm ${this.name}`);
    }
  };
}
```

### Module Pattern
```javascript
const calculator = (function() {
  let result = 0;
  
  return {
    add: (x) => result += x,
    subtract: (x) => result -= x,
    getResult: () => result
  };
})();
```
