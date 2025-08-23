// Math.round() -> Rounds to the nearest integer
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.4)); // 4

// Math.ceil() -> Rounds UP to the nearest integer
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(7.9)); // 8

// Math.floor() -> Rounds DOWN to the nearest integer
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(7.1)); // 7

// Math.trunc() -> Removes decimal part (keeps integer only)
console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(-4.9)); // -4

// Math.pow(x, y) -> Returns x raised to the power y (x^y)
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(5, 2)); // 25

// Math.sqrt() -> Returns square root
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(49)); // 7

// Math.cbrt() -> Returns cube root
console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(64)); // 4

// Math.abs() -> Returns absolute value (always positive)
console.log(Math.abs(-7)); // 7
console.log(Math.abs(7));  // 7

// Math.max() -> Returns maximum number from given values
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.max(-10, -2, -30)); // -2

// Math.min() -> Returns minimum number from given values
console.log(Math.min(1, 2, 3, 4, 5)); // 1
console.log(Math.min(-10, -2, -30)); // -30

// Math.random() -> Returns random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // e.g. 0.3745
// Example: random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// toFixed() -> Converts number to string, keeping fixed decimal places
let num = 5.6789;
console.log(num.toFixed(2)); // "5.68"
console.log(num.toFixed(0)); // "6"
