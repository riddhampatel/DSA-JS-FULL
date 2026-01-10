// Day 6: LeetCode Digit Manipulation Problems

console.log("=== Day 6: LeetCode Digit Problems ===\n");

// ==================== EASY ====================

// Problem 1: Sum of Digits in Base K (LeetCode 1837)
function sumBase(n, k) {
  let sum = 0;
  while (n > 0) {
    sum += n % k;
    n = Math.floor(n / k);
  }
  return sum;
}
console.log("1. Sum of Digits in Base K:");
console.log("   n=34, k=6 =>", sumBase(34, 6)); // 9
console.log();

// Problem 2: Count Largest Group (LeetCode 1399)
function countLargestGroup(n) {
  const groups = {};
  for (let i = 1; i <= n; i++) {
    const sum = sumDigits(i);
    groups[sum] = (groups[sum] || 0) + 1;
  }
  const maxSize = Math.max(...Object.values(groups));
  return Object.values(groups).filter(size => size === maxSize).length;
  
  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
}
console.log("2. Count Largest Group:");
console.log("   n=13 =>", countLargestGroup(13)); // 4
console.log();

// Problem 3: Monotone Increasing Digits (LeetCode 738)
function monotoneIncreasingDigits(n) {
  const digits = n.toString().split('');
  let mark = digits.length;
  
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] < digits[i - 1]) {
      mark = i;
      digits[i - 1]--;
    }
  }
  
  for (let i = mark; i < digits.length; i++) {
    digits[i] = '9';
  }
  
  return parseInt(digits.join(''));
}
console.log("3. Monotone Increasing Digits:");
console.log("   n=332 =>", monotoneIncreasingDigits(332)); // 299
console.log();

// Problem 4: Maximum Product of Three Numbers (LeetCode 628)
function maximumProduct(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(
    nums[n-1] * nums[n-2] * nums[n-3],
    nums[0] * nums[1] * nums[n-1]
  );
}
console.log("4. Maximum Product of Three:");
console.log("   [1,2,3,4] =>", maximumProduct([1,2,3,4])); // 24
console.log();

// Problem 5: Largest Number At Least Twice of Others (LeetCode 747)
function dominantIndex(nums) {
  let maxIdx = 0, secondMax = -1;
  
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[maxIdx]) {
      secondMax = nums[maxIdx];
      maxIdx = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }
  
  return nums[maxIdx] >= 2 * secondMax ? maxIdx : -1;
}
console.log("5. Dominant Index:");
console.log("   [3,6,1,0] =>", dominantIndex([3,6,1,0])); // 1
console.log();

console.log("✅ Day 6 LeetCode Complete!");
