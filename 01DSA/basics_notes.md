# Day 1: Variables, Data Types & Operators

## Variables in JavaScript

### Declaration Types
```javascript
let x = 10;        // Block-scoped, can be reassigned
const y = 20;      // Block-scoped, cannot be reassigned
var z = 30;        // Function-scoped (avoid using)
```

### Rules
- Use `const` by default
- Use `let` when reassignment is needed
- Avoid `var` (has hoisting issues)

## Data Types

### Primitive Types
1. **Number**: `42`, `3.14`, `NaN`, `Infinity`
2. **String**: `"hello"`, `'world'`, `` `template` ``
3. **Boolean**: `true`, `false`
4. **Undefined**: Variable declared but not assigned
5. **Null**: Intentional absence of value
6. **Symbol**: Unique identifier
7. **BigInt**: Large integers

### Type Checking
```javascript
typeof 42;           // "number"
typeof "hello";      // "string"
typeof true;         // "boolean"
```

## Operators

### Arithmetic Operators
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `%` Modulus (remainder)
- `**` Exponentiation

### Comparison Operators
- `==` Loose equality (type coercion)
- `===` Strict equality (no type coercion) ✅ Preferred
- `!=` Loose inequality
- `!==` Strict inequality
- `>`, `<`, `>=`, `<=`

### Logical Operators
- `&&` AND
- `||` OR
- `!` NOT

### Assignment Operators
- `=` Assign
- `+=`, `-=`, `*=`, `/=` Compound assignment

## Key Concepts

1. **Type Coercion**: Automatic type conversion
   ```javascript
   "5" + 2  // "52" (string concatenation)
   "5" - 2  // 3 (numeric subtraction)
   ```

2. **Truthy/Falsy Values**
   - Falsy: `false`, `0`, `""`, `null`, `undefined`, `NaN`
   - Everything else is truthy

## Practice Tips
- Always use `===` instead of `==`
- Declare variables at the top of scope
- Use meaningful variable names
- Test with different data types
