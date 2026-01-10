// Day 9: LeetCode Array Basics Problems

console.log("=== Day 9: LeetCode Arrays Basics ===\n");

// ==================== EASY ====================

// Problem 1: Running Sum of 1d Array (LeetCode 1480)
function runningSum(nums) {
  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    result.push(result[i - 1] + nums[i]);
  }
  return result;
}
console.log("1. Running Sum:");
console.log("   [1,2,3,4] =>", runningSum([1,2,3,4])); // [1,3,6,10]
console.log();

// Problem 2: Shuffle the Array (LeetCode 1470)
function shuffle(nums, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i]);
  }
  return result;
}
console.log("2. Shuffle Array:");
console.log("   [2,5,1,3,4,7], n=3 =>", shuffle([2,5,1,3,4,7], 3)); // [2,3,5,4,1,7]
console.log();

// Problem 3: Kids With Candies (LeetCode 1431)
function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map(candy => candy + extraCandies >= max);
}
console.log("3. Kids With Candies:");
console.log("   [2,3,5,1,3], extra=3 =>", kidsWithCandies([2,3,5,1,3], 3));
console.log();

// Problem 4: Number of Good Pairs (LeetCode 1512)
function numIdenticalPairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
}
console.log("4. Good Pairs:");
console.log("   [1,2,3,1,1,3] =>", numIdenticalPairs([1,2,3,1,1,3])); // 4
console.log();

// Problem 5: How Many Numbers Are Smaller (LeetCode 1365)
function smallerNumbersThanCurrent(nums) {
  return nums.map(num => nums.filter(x => x < num).length);
}
console.log("5. Smaller Numbers:");
console.log("   [8,1,2,2,3] =>", smallerNumbersThanCurrent([8,1,2,2,3]));
console.log();

// Problem 6: Create Target Array (LeetCode 1389)
function createTargetArray(nums, index) {
  const target = [];
  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i]);
  }
  return target;
}
console.log("6. Create Target Array:");
console.log("   nums=[0,1,2,3,4], index=[0,1,2,2,1] =>");
console.log("   ", createTargetArray([0,1,2,3,4], [0,1,2,2,1]));
console.log();

// Problem 7: Decompress Run-Length Encoded List (LeetCode 1313)
function decompressRLElist(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    for (let j = 0; j < freq; j++) {
      result.push(val);
    }
  }
  return result;
}
console.log("7. Decompress List:");
console.log("   [1,2,3,4] =>", decompressRLElist([1,2,3,4]));
console.log();

// Problem 8: Find Numbers with Even Digits (LeetCode 1295)
function findNumbers(nums) {
  return nums.filter(num => num.toString().length % 2 === 0).length;
}
console.log("8. Even Digit Numbers:");
console.log("   [12,345,2,6,7896] =>", findNumbers([12,345,2,6,7896])); // 2
console.log();

// Problem 9: Concatenation of Array (LeetCode 1929)
function getConcatenation(nums) {
  return [...nums, ...nums];
}
console.log("9. Concatenation:");
console.log("   [1,2,1] =>", getConcatenation([1,2,1])); // [1,2,1,1,2,1]
console.log();

// Problem 10: Build Array from Permutation (LeetCode 1920)
function buildArray(nums) {
  return nums.map(i => nums[i]);
}
console.log("10. Build Array:");
console.log("   [0,2,1,5,3,4] =>", buildArray([0,2,1,5,3,4]));
console.log();

console.log("✅ Day 9 LeetCode Complete!");
