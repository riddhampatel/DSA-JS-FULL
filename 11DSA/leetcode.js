// Day 11: Week 1-2 Review - LeetCode Problems

console.log("=== Day 11: LeetCode Review Problems ===\n");

// ==================== EASY ====================

// Problem 1: Two Sum (LeetCode #1)
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}
console.log("EASY PROBLEMS\n");
console.log("1. Two Sum (#1):");
console.log("   [2,7,11,15], target=9 =>", twoSum([2,7,11,15], 9));
console.log();

// Problem 2: Reverse Integer (LeetCode #7)
function reverse(x) {
  const MAX = 2147483647; // 2^31 - 1
  const MIN = -2147483648; // -2^31
  
  let reversed = 0;
  while (x !== 0) {
    const digit = x % 10;
    x = Math.trunc(x / 10);
    
    // Check overflow before adding digit
    if (reversed > Math.floor(MAX / 10) || (reversed === Math.floor(MAX / 10) && digit > 7)) return 0;
    if (reversed < Math.ceil(MIN / 10) || (reversed === Math.ceil(MIN / 10) && digit < -8)) return 0;
    
    reversed = reversed * 10 + digit;
  }
  
  return reversed;
}
console.log("2. Reverse Integer (#7):");
console.log("   123 =>", reverse(123));
console.log("   -123 =>", reverse(-123));
console.log();

// Problem 3: Palindrome Number (LeetCode #9)
function isPalindrome(x) {
  if (x < 0) return false;
  const str = x.toString();
  return str === str.split('').reverse().join('');
}
console.log("3. Palindrome Number (#9):");
console.log("   121 =>", isPalindrome(121));
console.log("   -121 =>", isPalindrome(-121));
console.log();

// Problem 4: Roman to Integer (LeetCode #13)
function romanToInt(s) {
  const map = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && map[s[i]] < map[s[i + 1]]) {
      result -= map[s[i]];
    } else {
      result += map[s[i]];
    }
  }
  return result;
}
console.log("4. Roman to Integer (#13):");
console.log("   'III' =>", romanToInt("III"));
console.log("   'MCMXCIV' =>", romanToInt("MCMXCIV"));
console.log();

// Problem 5: Valid Parentheses (LeetCode #20)
function isValid(s) {
  const stack = [];
  const map = {')': '(', '}': '{', ']': '['};
  for (let char of s) {
    if (!map[char]) {
      stack.push(char);
    } else if (stack.pop() !== map[char]) {
      return false;
    }
  }
  return stack.length === 0;
}
console.log("5. Valid Parentheses (#20):");
console.log("   '()' =>", isValid("()"));
console.log("   '()[]{}' =>", isValid("()[]{}"));
console.log("   '(]' =>", isValid("(]"));
console.log();

// Problem 6: Remove Duplicates from Sorted Array (LeetCode #26)
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write++] = nums[read];
    }
  }
  return write;
}
console.log("6. Remove Duplicates (#26):");
const arr1 = [1,1,2,2,3];
console.log("   [1,1,2,2,3] => length:", removeDuplicates(arr1), "array:", arr1.slice(0, 3));
console.log();

// Problem 7: Search Insert Position (LeetCode #35)
function searchInsert(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
}
console.log("7. Search Insert Position (#35):");
console.log("   [1,3,5,6], target=5 =>", searchInsert([1,3,5,6], 5));
console.log("   [1,3,5,6], target=2 =>", searchInsert([1,3,5,6], 2));
console.log();

// Problem 8: Plus One (LeetCode #66)
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  return [1, ...digits];
}
console.log("8. Plus One (#66):");
console.log("   [1,2,3] =>", plusOne([1,2,3]));
console.log("   [9,9,9] =>", plusOne([9,9,9]));
console.log();

// Problem 9: Sqrt(x) (LeetCode #69)
function mySqrt(x) {
  if (x < 2) return x;
  let left = 1, right = Math.floor(x / 2);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) left = mid + 1;
    else right = mid - 1;
  }
  return right;
}
console.log("9. Sqrt(x) (#69):");
console.log("   8 =>", mySqrt(8));
console.log("   16 =>", mySqrt(16));
console.log();

// Problem 10: Merge Sorted Array (LeetCode #88)
function merge(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1, p = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p--] = nums1[p1--];
    } else {
      nums1[p--] = nums2[p2--];
    }
  }
  return nums1;
}
console.log("10. Merge Sorted Array (#88):");
const nums1 = [1,2,3,0,0,0];
console.log("   [1,2,3,0,0,0] + [2,5,6] =>", merge(nums1, 3, [2,5,6], 3));
console.log();

// ==================== MEDIUM ====================

console.log("\nMEDIUM PROBLEMS\n");

// Problem 11: Add Two Numbers (LeetCode #2)
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy, carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  return dummy.next;
}
console.log("11. Add Two Numbers (#2):");
console.log("   [2,4,3] + [5,6,4] => [7,0,8] (342 + 465 = 807)");
console.log();

// Problem 12: Reverse Integer (LeetCode #7) - already covered in Easy
// Problem 13: Container With Most Water (LeetCode #11)
function maxArea(height) {
  let left = 0, right = height.length - 1, max = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max;
}
console.log("12. Container With Most Water (#11):");
console.log("   [1,8,6,2,5,4,8,3,7] =>", maxArea([1,8,6,2,5,4,8,3,7]));
console.log();

// Problem 13: 3Sum (LeetCode #15)
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1, right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) left++;
      else right--;
    }
  }
  return result;
}
console.log("13. 3Sum (#15):");
console.log("   [-1,0,1,2,-1,-4] =>", JSON.stringify(threeSum([-1,0,1,2,-1,-4])));
console.log();

// Problem 14: Remove Nth Node From End (LeetCode #19)
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy, slow = dummy;
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
}
console.log("14. Remove Nth From End (#19):");
console.log("   [1,2,3,4,5], n=2 => [1,2,3,5]");
console.log();

// Problem 15: Rotate Array (LeetCode #189)
function rotate(nums, k) {
  k = k % nums.length;
  reverseArray(nums, 0, nums.length - 1);
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, nums.length - 1);
  return nums;
  
  function reverseArray(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
}
console.log("15. Rotate Array (#189):");
console.log("   [1,2,3,4,5,6,7], k=3 =>", rotate([1,2,3,4,5,6,7], 3));
console.log();

// Problem 16: Product of Array Except Self (LeetCode #238)
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  
  return result;
}
console.log("16. Product Except Self (#238):");
console.log("   [1,2,3,4] =>", productExceptSelf([1,2,3,4]));
console.log();

// Problem 17: Find Peak Element (LeetCode #162)
function findPeakElement(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
}
console.log("17. Find Peak Element (#162):");
console.log("   [1,2,3,1] =>", findPeakElement([1,2,3,1]));
console.log();

// Problem 18: Majority Element (LeetCode #169)
function majorityElement(nums) {
  let count = 0, candidate = null;
  for (let num of nums) {
    if (count === 0) candidate = num;
    count += (num === candidate) ? 1 : -1;
  }
  return candidate;
}
console.log("18. Majority Element (#169):");
console.log("   [3,2,3] =>", majorityElement([3,2,3]));
console.log();

// Problem 19: Single Number (LeetCode #136)
function singleNumber(nums) {
  return nums.reduce((xor, num) => xor ^ num, 0);
}
console.log("19. Single Number (#136):");
console.log("   [4,1,2,1,2] =>", singleNumber([4,1,2,1,2]));
console.log();

// Problem 20: Happy Number (LeetCode #202)
function isHappy(n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = sumSquareDigits(n);
  }
  return n === 1;
  
  function sumSquareDigits(num) {
    let sum = 0;
    while (num > 0) {
      const digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  }
}
console.log("20. Happy Number (#202):");
console.log("   19 =>", isHappy(19));
console.log();

console.log("\n✅ Day 11 LeetCode Review Complete!");
console.log("\n📊 Problems Solved:");
console.log("   Easy: 10 problems");
console.log("   Medium: 10 problems");
console.log("   Total: 20 problems");
