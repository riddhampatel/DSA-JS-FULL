// Day 10-11: Arrays - Basics
// Practice: 15 Basic Array Problems

console.log("=== 15 Basic Array Problems ===\n");

// Problem 1: Find the sum of all elements in an array
function problem1_sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Problem 1: Sum of array elements");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", problem1_sumArray([1, 2, 3, 4, 5]));
console.log();

// Problem 2: Find the largest element in an array
function problem2_findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log("Problem 2: Find maximum element");
console.log("Input: [3, 7, 2, 9, 1]");
console.log("Output:", problem2_findMax([3, 7, 2, 9, 1]));
console.log();

// Problem 3: Find the smallest element in an array
function problem3_findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log("Problem 3: Find minimum element");
console.log("Input: [3, 7, 2, 9, 1]");
console.log("Output:", problem3_findMin([3, 7, 2, 9, 1]));
console.log();

// Problem 4: Reverse an array
function problem4_reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

console.log("Problem 4: Reverse an array");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", problem4_reverseArray([1, 2, 3, 4, 5]));
console.log();

// Problem 5: Count even numbers in an array
function problem5_countEven(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log("Problem 5: Count even numbers");
console.log("Input: [1, 2, 3, 4, 5, 6]");
console.log("Output:", problem5_countEven([1, 2, 3, 4, 5, 6]));
console.log();

// Problem 6: Count odd numbers in an array
function problem6_countOdd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log("Problem 6: Count odd numbers");
console.log("Input: [1, 2, 3, 4, 5, 6]");
console.log("Output:", problem6_countOdd([1, 2, 3, 4, 5, 6]));
console.log();

// Problem 7: Find average of array elements
function problem7_findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log("Problem 7: Find average");
console.log("Input: [10, 20, 30, 40, 50]");
console.log("Output:", problem7_findAverage([10, 20, 30, 40, 50]));
console.log();

// Problem 8: Search for an element in an array
function problem8_searchElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

console.log("Problem 8: Search for element");
console.log("Input: [5, 8, 3, 9, 2], target: 9");
console.log("Output:", problem8_searchElement([5, 8, 3, 9, 2], 9));
console.log();

// Problem 9: Copy array elements to another array
function problem9_copyArray(arr) {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
        copy.push(arr[i]);
    }
    return copy;
}

console.log("Problem 9: Copy array");
console.log("Input: [1, 2, 3, 4]");
console.log("Output:", problem9_copyArray([1, 2, 3, 4]));
console.log();

// Problem 10: Insert element at a specific position
function problem10_insertElement(arr, element, position) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === position) {
            result.push(element);
        }
        result.push(arr[i]);
    }
    if (position >= arr.length) {
        result.push(element);
    }
    return result;
}

console.log("Problem 10: Insert element at position");
console.log("Input: [1, 2, 4, 5], element: 3, position: 2");
console.log("Output:", problem10_insertElement([1, 2, 4, 5], 3, 2));
console.log();

// Problem 11: Delete element at a specific position
function problem11_deleteElement(arr, position) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== position) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log("Problem 11: Delete element at position");
console.log("Input: [1, 2, 3, 4, 5], position: 2");
console.log("Output:", problem11_deleteElement([1, 2, 3, 4, 5], 2));
console.log();

// Problem 12: Count frequency of each element
function problem12_countFrequency(arr) {
    let frequency = {};
    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }
    return frequency;
}

console.log("Problem 12: Count frequency of elements");
console.log("Input: [1, 2, 2, 3, 3, 3, 4]");
console.log("Output:", problem12_countFrequency([1, 2, 2, 3, 3, 3, 4]));
console.log();

// Problem 13: Print all unique elements
function problem13_uniqueElements(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < unique.length; j++) {
            if (arr[i] === unique[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            unique.push(arr[i]);
        }
    }
    return unique;
}

console.log("Problem 13: Get unique elements");
console.log("Input: [1, 2, 2, 3, 4, 4, 5]");
console.log("Output:", problem13_uniqueElements([1, 2, 2, 3, 4, 4, 5]));
console.log();

// Problem 14: Merge two arrays
function problem14_mergeArrays(arr1, arr2) {
    let merged = [];
    for (let i = 0; i < arr1.length; i++) {
        merged.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        merged.push(arr2[i]);
    }
    return merged;
}

console.log("Problem 14: Merge two arrays");
console.log("Input: [1, 2, 3] and [4, 5, 6]");
console.log("Output:", problem14_mergeArrays([1, 2, 3], [4, 5, 6]));
console.log();

// Problem 15: Check if array is sorted (ascending)
function problem15_isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

console.log("Problem 15: Check if array is sorted");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output:", problem15_isSorted([1, 2, 3, 4, 5]));
console.log("Input: [1, 3, 2, 4, 5]");
console.log("Output:", problem15_isSorted([1, 3, 2, 4, 5]));
console.log();

console.log("=== All 15 Basic Array Problems Completed! ===");
