// ===============================================
// DAY 4 – CONDITIONAL PROBLEMS (LEAP YEAR, VOWEL/CONSONANT, CALCULATOR)
// ===============================================

// check leap year

let year = 2028;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not Leap Year");
}



//Given a character, check if it is a vowel or consonant.

let ch = 'e';

if (
    ch === 'a' || ch === 'e' || ch === 'i' ||
    ch === 'o' || ch === 'u'
) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}



let a = 10, b = 5;
let op = '*';

switch (op) {
    case '+':
        console.log(a + b);
        break;
    case '-':
        console.log(a - b);
        break;
    case '*':
        console.log(a * b);
        break;
    case '/':
        console.log(a / b);
        break;
    default:
        console.log("Invalid Operator");
}
