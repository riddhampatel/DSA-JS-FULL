// find the subarray with the largest sum and return it s sum
/**
 * @param {number[]} nums
 * @returns {number}
 */

var maxSubArray = function (nums) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    max = Math.max(max, sum);
    if (sum < 0) sum = 0;
  }
  return max;
};
