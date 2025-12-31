// ===============================================
// DAY 2 – TYPE CONVERSION & STRING OPERATIONS
// ===============================================

// // // Number("10")   // 10
// // // parseInt("10") // 10



// // // "5" + 2   // "52"
// // // "5" - 2   // 3
// // // "5" * 2   // 10
// // // console.log("5"+2);//52
// // // console.log("5"*"2"); //10



// // // //Two numbers are given as strings. Convert them and return the sum.

// // function sumStrings(a, b) {
// //     return Number(a) + Number(b);
// // }
// // console.log(sumStrings("10", "20")); // 30


// // //Given an array, count how many values are truthy and falsy.

// function countTruthyFalsy(arr) {
//     let truthy = 0, falsy = 0;

//     for (let val of arr) {
//         if (val) truthy++;
//         else falsy++;
//     }

//     return { truthy, falsy };
// }

// console.log(countTruthyFalsy([0, 1, "", "hi", null, true]));
// // { truthy: 3, falsy: 3 }


// //Array contains numbers and numeric strings. Find total sum.

// function mixedSum(arr) {
//     let sum = 0;

//     for (let val of arr) {
//         sum += Number(val);
//     }

//     return sum;
// }

// New functions
// console.log(mixedSum([1, "2", 3, "4"])); // 10


function convertBooleanToNumbers(arr) {
    return arr.map(bool => bool ? 1 : 0);
}

function countStrings(arr) {
    return arr.filter(item => typeof item === 'string').length;
}

// function findMaxFromStringNumbers(arr) {
//     return Math.max(...arr.map(str => Number(str)));
// }

function mixedSum(arr) {
    let sum = 0;
    for (let val of arr) {
        sum += Number(val); // Convert each value to number
    }
    return sum;
}

function isNumber(input) {
    return typeof input === 'number' && !isNaN(input);
}

console.log(mixedSum([1, "2", 3, "4"])); // 10

// Test new functions
console.log(convertBooleanToNumbers([true, false, true])); // [1, 0, 1]
console.log(countStrings([1, "hello", true, "world"])); // 2
console.log(findMaxFromStringNumbers(["10", "5", "20"])); // 20
console.log(isNumber(5)); // true
console.log(isNumber("5")); // false
