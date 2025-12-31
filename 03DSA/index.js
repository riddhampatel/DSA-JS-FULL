// ===============================================
// DAY 3 – BASIC OPERATORS (ARITHMETIC, LOGICAL, COMPARISON)
// ===============================================

let a = 10, b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
console.log(a ** b); // 1000


console.log(5 === '5'); // false
console.log(5 == '5');  // true


let x = true, y = false;
console.log(x && y); // false
console.log(x || y); // true
console.log(!x);     // false


console.log(2 + 3 * 4); // 14, * has higher precedence
console.log((2 + 3) * 4); // 20, parentheses first


console.log(Math.sqrt(16)); // 4
console.log(Math.PI);       // 3.141592653589793
console.log(Math.round(4.7)); // 5



//Area of recteange
function rectangleArea(length, width) {
    return length * width;
}
console.log(rectangleArea(5, 10)); // 50



//Heron’s Formula (Triangle Area)
function triangleArea(a, b, c) {
    let s = (a + b + c) / 2; // semi-perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(triangleArea(3, 4, 5)); // 6
