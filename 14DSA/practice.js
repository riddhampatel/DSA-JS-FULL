// Day 14 - Two Pointer Practice
// Exercises to reinforce converging pointers and fast/slow patterns

console.log("=== Day 14 Practice: Two Pointers ===\n");

// Practice 1: Three Sum (unique triplets summing to zero)
function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates on i
    let l = i + 1, r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        l++; r--;
        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else if (sum < 0) l++;
      else r--;
    }
  }
  return res;
}
console.log("Practice 1: Three Sum ([-1,0,1,2,-1,-4]) =>", threeSum([-1, 0, 1, 2, -1, -4]));
console.log();

// Practice 2: Sorted Squares (merge-from-ends)
function sortedSquares(nums) {
  let l = 0, r = nums.length - 1;
  const res = new Array(nums.length);
  for (let i = nums.length - 1; i >= 0; i--) {
    const leftSq = nums[l] * nums[l];
    const rightSq = nums[r] * nums[r];
    if (leftSq > rightSq) {
      res[i] = leftSq;
      l++;
    } else {
      res[i] = rightSq;
      r--;
    }
  }
  return res;
}
console.log("Practice 2: Sorted Squares ([-4,-1,0,3,10]) =>", sortedSquares([-4, -1, 0, 3, 10]));
console.log();

// Practice 3: Intersection of Two Sorted Arrays (skip duplicates)
function intersectSorted(a, b) {
  let i = 0, j = 0;
  const res = [];
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      if (res.length === 0 || res[res.length - 1] !== a[i]) res.push(a[i]);
      i++; j++;
    } else if (a[i] < b[j]) i++;
    else j++;
  }
  return res;
}
console.log("Practice 3: Intersect Sorted ([1,2,2,3,4], [2,2,3,5]) =>", intersectSorted([1, 2, 2, 3, 4], [2, 2, 3, 5]));
console.log();

// Practice 4: Merge Two Sorted Arrays (no extra sort)
function mergeSorted(a, b) {
  const res = [];
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) res.push(a[i++]);
    else res.push(b[j++]);
  }
  while (i < a.length) res.push(a[i++]);
  while (j < b.length) res.push(b[j++]);
  return res;
}
console.log("Practice 4: Merge Sorted ([1,3,5], [2,4,6]) =>", mergeSorted([1, 3, 5], [2, 4, 6]));
console.log();

// Practice 5: Minimum Difference Pair (two sorted arrays)
function minDiffPair(a, b) {
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  let i = 0, j = 0;
  let best = [Infinity, null, null];
  while (i < a.length && j < b.length) {
    const diff = Math.abs(a[i] - b[j]);
    if (diff < best[0]) best = [diff, a[i], b[j]];
    if (a[i] < b[j]) i++;
    else j++;
  }
  return { diff: best[0], pair: [best[1], best[2]] };
}
console.log("Practice 5: Min Diff Pair ([1,3,15,11,2], [23,127,235,19,8]) =>", minDiffPair([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]));
console.log();

module.exports = {
  threeSum,
  sortedSquares,
  intersectSorted,
  mergeSorted,
  minDiffPair,
};
