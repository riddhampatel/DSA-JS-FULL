// Given an integer year, return true if it is a leap year, otherwise return false.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const isLeapYear = year =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;


// Test
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true


// power of 2 no loop 
var isPowerOfTwo = function(n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
};




