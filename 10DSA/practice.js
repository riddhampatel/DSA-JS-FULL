// Day 10: Arrays - Intermediate
// Practice: 20 Array Manipulation Problems

console.log("=== 20 Array Manipulation Problems ===\n");

// Problem 1: Double all numbers in array using map
function problem1_doubleNumbers(arr) {
    return arr.map(num => num * 2);
}

console.log("Problem 1: Double all numbers");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", problem1_doubleNumbers([1, 2, 3, 4, 5]));
console.log();

// Problem 2: Filter even numbers
function problem2_filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log("Problem 2: Filter even numbers");
console.log("Input: [1, 2, 3, 4, 5, 6, 7, 8]");
console.log("Output:", problem2_filterEven([1, 2, 3, 4, 5, 6, 7, 8]));
console.log();

// Problem 3: Sum of all numbers using reduce
function problem3_sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log("Problem 3: Sum of all numbers");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", problem3_sumArray([1, 2, 3, 4, 5]));
console.log();

// Problem 4: Find maximum using reduce
function problem4_findMax(arr) {
    return arr.reduce((max, num) => Math.max(max, num), arr[0]);
}

console.log("Problem 4: Find maximum");
console.log("Input: [3, 7, 2, 9, 1, 5]");
console.log("Output:", problem4_findMax([3, 7, 2, 9, 1, 5]));
console.log();

// Problem 5: Check if all numbers are positive using every
function problem5_allPositive(arr) {
    return arr.every(num => num > 0);
}

console.log("Problem 5: Check if all numbers are positive");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", problem5_allPositive([1, 2, 3, 4, 5]));
console.log("Input: [1, -2, 3, 4, 5]");
console.log("Output:", problem5_allPositive([1, -2, 3, 4, 5]));
console.log();

// Problem 6: Check if array has negative number using some
function problem6_hasNegative(arr) {
    return arr.some(num => num < 0);
}

console.log("Problem 6: Check if array has negative number");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", problem6_hasNegative([1, 2, 3, 4, 5]));
console.log("Input: [1, 2, -3, 4, 5]");
console.log("Output:", problem6_hasNegative([1, 2, -3, 4, 5]));
console.log();

// Problem 7: Get names from array of objects using map
function problem7_getNames(people) {
    return people.map(person => person.name);
}

console.log("Problem 7: Extract names from objects");
const people = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
console.log("Input:", people);
console.log("Output:", problem7_getNames(people));
console.log();

// Problem 8: Filter adults (age >= 18)
function problem8_filterAdults(people) {
    return people.filter(person => person.age >= 18);
}

console.log("Problem 8: Filter adults (age >= 18)");
const people2 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 }
];
console.log("Input:", people2);
console.log("Output:", problem8_filterAdults(people2));
console.log();

// Problem 9: Find first number greater than 50
function problem9_findFirstGreaterThan50(arr) {
    return arr.find(num => num > 50);
}

console.log("Problem 9: Find first number > 50");
console.log("Input: [10, 20, 60, 30, 70]");
console.log("Output:", problem9_findFirstGreaterThan50([10, 20, 60, 30, 70]));
console.log();

// Problem 10: Find index of first negative number
function problem10_findNegativeIndex(arr) {
    return arr.findIndex(num => num < 0);
}

console.log("Problem 10: Find index of first negative number");
console.log("Input: [5, 3, -2, 8, -1]");
console.log("Output:", problem10_findNegativeIndex([5, 3, -2, 8, -1]));
console.log();

// Problem 11: Sort numbers in ascending order
function problem11_sortAscending(arr) {
    return [...arr].sort((a, b) => a - b);
}

console.log("Problem 11: Sort in ascending order");
console.log("Input: [40, 10, 30, 20, 50]");
console.log("Output:", problem11_sortAscending([40, 10, 30, 20, 50]));
console.log();

// Problem 12: Sort numbers in descending order
function problem12_sortDescending(arr) {
    return [...arr].sort((a, b) => b - a);
}

console.log("Problem 12: Sort in descending order");
console.log("Input: [40, 10, 30, 20, 50]");
console.log("Output:", problem12_sortDescending([40, 10, 30, 20, 50]));
console.log();

// Problem 13: Remove duplicates using filter and indexOf
function problem13_removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log("Problem 13: Remove duplicates");
console.log("Input: [1, 2, 2, 3, 4, 4, 5]");
console.log("Output:", problem13_removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log();

// Problem 14: Count occurrences using reduce
function problem14_countOccurrences(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

console.log("Problem 14: Count occurrences");
console.log("Input: ['a', 'b', 'a', 'c', 'b', 'a']");
console.log("Output:", problem14_countOccurrences(['a', 'b', 'a', 'c', 'b', 'a']));
console.log();

// Problem 15: Flatten 2D array using reduce
function problem15_flatten2D(arr) {
    return arr.reduce((flat, subArr) => flat.concat(subArr), []);
}

console.log("Problem 15: Flatten 2D array");
console.log("Input: [[1, 2], [3, 4], [5, 6]]");
console.log("Output:", problem15_flatten2D([[1, 2], [3, 4], [5, 6]]));
console.log();

// Problem 16: Get sum of even numbers (filter + reduce)
function problem16_sumEvenNumbers(arr) {
    return arr
        .filter(num => num % 2 === 0)
        .reduce((sum, num) => sum + num, 0);
}

console.log("Problem 16: Sum of even numbers");
console.log("Input: [1, 2, 3, 4, 5, 6, 7, 8]");
console.log("Output:", problem16_sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));
console.log();

// Problem 17: Square odd numbers (filter + map)
function problem17_squareOddNumbers(arr) {
    return arr
        .filter(num => num % 2 !== 0)
        .map(num => num ** 2);
}

console.log("Problem 17: Square odd numbers");
console.log("Input: [1, 2, 3, 4, 5, 6]");
console.log("Output:", problem17_squareOddNumbers([1, 2, 3, 4, 5, 6]));
console.log();

// Problem 18: Sort strings by length
function problem18_sortByLength(arr) {
    return [...arr].sort((a, b) => a.length - b.length);
}

console.log("Problem 18: Sort strings by length");
console.log("Input: ['hi', 'hello', 'hey', 'javascript']");
console.log("Output:", problem18_sortByLength(['hi', 'hello', 'hey', 'javascript']));
console.log();

// Problem 19: Group by property (reduce with objects)
function problem19_groupByAge(people) {
    return people.reduce((groups, person) => {
        const age = person.age;
        if (!groups[age]) {
            groups[age] = [];
        }
        groups[age].push(person.name);
        return groups;
    }, {});
}

console.log("Problem 19: Group people by age");
const people3 = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 30 }
];
console.log("Input:", people3);
console.log("Output:", problem19_groupByAge(people3));
console.log();

// Problem 20: Average of array using reduce
function problem20_average(arr) {
    if (arr.length === 0) return 0;
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

console.log("Problem 20: Calculate average");
console.log("Input: [10, 20, 30, 40, 50]");
console.log("Output:", problem20_average([10, 20, 30, 40, 50]));
console.log();

console.log("=== All 20 Array Manipulation Problems Completed! ===");
