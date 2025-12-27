// ===============================================
// DAY 2 – Variables, Data Types & Type Conversion
// DSA Practice – Ready to Run
// ===============================================

// 1️⃣ Sum of Two Numbers (String to Number)
function sumStrings(a, b) {
    return Number(a) + Number(b);
}
console.log("Sum of '10' + '20':", sumStrings("10", "20")); // 30

// 2️⃣ Check Data Type
function checkType(value) {
    return typeof value;
}
console.log("Type of 10:", checkType(10));       // number
console.log("Type of 'Hello':", checkType("Hello")); // string

// 3️⃣ Count Truthy & Falsy Values
function countTruthyFalsy(arr) {
    let truthy = 0, falsy = 0;
    for (let val of arr) {
        if (val) truthy++;
        else falsy++;
    }
    return { truthy, falsy };
}
console.log("Truthy & Falsy count:", countTruthyFalsy([0, 1, "", "hi", null, true])); // {truthy:3, falsy:3}

// 4️⃣ Convert String Array to Number Array
function convertToNumbers(arr) {
    return arr.map(Number);
}
console.log("String to Number Array:", convertToNumbers(["1", "2", "3"])); // [1,2,3]

// 5️⃣ Sum of Mixed Numbers
function mixedSum(arr) {
    let sum = 0;
    for (let val of arr) {
        sum += Number(val);
    }
    return sum;
}
console.log("Mixed Array Sum:", mixedSum([1, "2", 3, "4"])); // 10

// 6️⃣ Check null vs undefined
function checkNullUndefined(value) {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    return "value exists";
}
console.log("Check null:", checkNullUndefined(null));      // null
console.log("Check undefined:", checkNullUndefined(undefined)); // undefined
console.log("Check number:", checkNullUndefined(5));       // value exists

// 7️⃣ Swap Two Variables Without Extra Variable
let a = 5, b = 10;
[a, b] = [b, a];
console.log("Swapped values:", a, b); // 10 5

// 8️⃣ Even or Odd (String Input)
function evenOdd(num) {
    num = Number(num);
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Even/Odd check '7':", evenOdd("7")); // Odd

// 9️⃣ Count Digits in String
function countDigits(str) {
    return str.length;
}
console.log("Number of digits in '12345':", countDigits("12345")); // 5

// 🔟 Remove Non-Number Values
function filterNumbers(arr) {
    return arr.filter(val => typeof val === "number");
}
console.log("Filter numbers:", filterNumbers([1, "2", 3, null, 4])); // [1,3,4]

// 🔥 Interview-Level Type Coercion
console.log("'5' + 2 =", "5" + 2); // "52"
console.log("'5' - 2 =", "5" - 2); // 3

// ==================================================
// ✅ All functions are defined before calling

