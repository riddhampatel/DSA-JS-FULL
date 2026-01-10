// Day 2: LeetCode Conditional Problems

console.log("=== Day 2: LeetCode Conditionals ===\n");

// ==================== EASY ====================

// Problem 1: Maximum 69 Number (LeetCode 1323)
function maximum69Number(num) {
  return parseInt(num.toString().replace('6', '9'));
}
console.log("1. Maximum 69 Number:");
console.log("   9669 =>", maximum69Number(9669)); // 9969
console.log();

// Problem 2: Check If N and Its Double Exist (LeetCode 1346)
function checkIfExist(arr) {
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num * 2) || seen.has(num / 2)) return true;
    seen.add(num);
  }
  return false;
}
console.log("2. Check Double Exists:");
console.log("   [10,2,5,3] =>", checkIfExist([10,2,5,3])); // true
console.log();

// Problem 3: Sign of Product of Array (LeetCode 1822)
function arraySign(nums) {
  let negCount = 0;
  for (let num of nums) {
    if (num === 0) return 0;
    if (num < 0) negCount++;
  }
  return negCount % 2 === 0 ? 1 : -1;
}
console.log("3. Sign of Product:");
console.log("   [-1,-2,-3,-4,3,2,1] =>", arraySign([-1,-2,-3,-4,3,2,1])); // 1
console.log();

// Problem 4: Difference Between Element Sum and Digit Sum (LeetCode 2535)
function differenceOfSum(nums) {
  let elemSum = 0, digitSum = 0;
  for (let num of nums) {
    elemSum += num;
    let n = num;
    while (n > 0) {
      digitSum += n % 10;
      n = Math.floor(n / 10);
    }
  }
  return Math.abs(elemSum - digitSum);
}
console.log("4. Difference of Sums:");
console.log("   [1,15,6,3] =>", differenceOfSum([1,15,6,3])); // 9
console.log();

// Problem 5: Count Negative Numbers in Matrix (LeetCode 1351)
function countNegatives(grid) {
  let count = 0;
  for (let row of grid) {
    for (let num of row) {
      if (num < 0) count++;
    }
  }
  return count;
}
console.log("5. Count Negatives:");
console.log("   [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]] =>");
console.log("   ", countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // 8
console.log();

console.log("✅ Day 2 LeetCode Complete!");
