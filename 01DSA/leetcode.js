// Day 1: LeetCode Basic Problems
// Focus on simple operations and logic

console.log("=== Day 1: LeetCode Basics ===\n");

// ==================== EASY ====================

// Problem 1: Add Two Integers (LeetCode 2235)
function sum(num1, num2) {
  return num1 + num2;
}
console.log("1. Add Two Integers:");
console.log("   12 + 5 =", sum(12, 5)); // 17
console.log();

// Problem 2: Number of Good Pairs (LeetCode 1512)
function numIdenticalPairs(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
  }
  return count;
}
console.log("2. Number of Good Pairs:");
console.log("   [1,2,3,1,1,3] =>", numIdenticalPairs([1,2,3,1,1,3])); // 4
console.log();

// Problem 3: Subtract Product and Sum (LeetCode 1281)
function subtractProductAndSum(n) {
  let product = 1, sum = 0;
  while (n > 0) {
    const digit = n % 10;
    product *= digit;
    sum += digit;
    n = Math.floor(n / 10);
  }
  return product - sum;
}
console.log("3. Subtract Product and Sum:");
console.log("   234 =>", subtractProductAndSum(234)); // 15
console.log();

// Problem 4: Convert the Temperature (LeetCode 2469)
function convertTemperature(celsius) {
  return [celsius + 273.15, celsius * 1.8 + 32];
}
console.log("4. Convert Temperature:");
console.log("   36.50°C =>", convertTemperature(36.50));
console.log();

// Problem 5: Richest Customer Wealth (LeetCode 1672)
function maximumWealth(accounts) {
  let maxWealth = 0;
  for (let account of accounts) {
    let wealth = account.reduce((sum, val) => sum + val, 0);
    maxWealth = Math.max(maxWealth, wealth);
  }
  return maxWealth;
}
console.log("5. Richest Customer:");
console.log("   [[1,2,3],[3,2,1]] =>", maximumWealth([[1,2,3],[3,2,1]])); // 6
console.log();

console.log("✅ Day 1 LeetCode Complete!");
