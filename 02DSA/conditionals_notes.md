# Day 2: Conditional Statements

## if-else Statement

### Basic Syntax
```javascript
if (condition) {
  // code if true
} else {
  // code if false
}
```

### else if Chain
```javascript
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("Grade F");
}
```

## Switch Statement

### Syntax
```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // default code
}
```

### When to Use Switch
- Multiple discrete values to check
- More readable than long if-else chains
- Each case must have `break` (unless fall-through intended)

## Ternary Operator

### Syntax
```javascript
condition ? valueIfTrue : valueIfFalse
```

### Examples
```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";

// Nested ternary (use sparingly)
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';
```

## Comparison Operators

### Equality
- `===` Strict equality (recommended)
- `!==` Strict inequality
- `==` Loose equality (avoid - type coercion)
- `!=` Loose inequality (avoid)

### Relational
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal

## Logical Operators

### AND (`&&`)
```javascript
if (age >= 18 && hasLicense) {
  console.log("Can drive");
}
```

### OR (`||`)
```javascript
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend");
}
```

### NOT (`!`)
```javascript
if (!isRaining) {
  console.log("Go outside");
}
```

## Short-Circuit Evaluation

```javascript
// AND: stops at first falsy
true && true && false && true  // false

// OR: stops at first truthy
false || false || true || false  // true

// Practical use
const name = userName || "Guest";  // Default value
user && user.showProfile();  // Safe method call
```

## Best Practices

1. **Use `===` instead of `==`**
2. **Keep conditions simple and readable**
3. **Avoid deeply nested conditionals**
4. **Use early returns in functions**
   ```javascript
   if (!isValid) return;
   // rest of code
   ```
5. **Use switch for many discrete values**
6. **Use ternary for simple conditional assignments**

## Common Patterns

### Range Checking
```javascript
if (age >= 13 && age <= 19) {
  console.log("Teenager");
}
```

### Multiple Conditions
```javascript
if (x > 0 && x < 10 || x === 100) {
  // complex condition
}
```

### Validation
```javascript
if (!username || username.length < 3) {
  return "Invalid username";
}
```
