# Day 14: Two-Pointer Technique (Theory)

## What it is
Two-pointers is a pattern where you maintain two indices that move through a sequence (array/string) according to rules that shrink or expand the search space. It lets you turn many O(n^2) scans into O(n) by avoiding nested loops.

## When to reach for it
- Sorted arrays where you need pair/triple relations (sum, difference, merge-like work).
- Problems about symmetry or inward scans (palindrome checks, reverse in-place).
- Fast/slow traversal to detect cycles or compress data (dedupe, move-zeroes, linked list cycle detection conceptually).
- Window expansion/shrink decisions (a precursor to sliding window; still two indices but with window semantics).

## Core patterns
1) Converging pointers (sorted arrays)
   - Start at both ends; move the side that helps you get closer to the goal.
   - Example: pair sum in sorted array, container with most water.

2) Fast/slow pointers (index roles differ)
   - One pointer writes/marks while another reads/scans, or one jumps faster.
   - Example: remove duplicates in sorted array (read vs write), Floyd cycle detection (linked lists), move zeroes.

3) Window expansion/shrink (two indices bound a window)
   - Left/right indices define a valid window; adjust while tracking constraints.
   - Example: longest substring without repeat (if using map + two indices), min window substring (becomes full sliding window).

4) Partition/swap from ends
   - Swap elements that are on the wrong side of a condition while moving inward.
   - Example: reverse array, Dutch National Flag variant (3-way partition uses three pointers).

## Complexity intuition
- Time: Typically O(n) because each pointer advances monotonically.
- Space: O(1) extra, aside from input/output.

## Common pitfalls
- Forgetting to move the correct pointer when the condition matches (can cause infinite loops).
- Mishandling duplicates (skip duplicates carefully in three-sum).
- Off-by-one when stopping (use l < r for converging scans; careful with window bounds for empty windows).
- Mutating arrays in-place when the problem expects a new array (read the prompt!).

## Quick mental checklist
- Is the data sorted or can you sort it without breaking requirements?
- Can I replace a nested loop with two indices moving in one pass?
- Do I only need one pass and O(1) extra memory?
- Can I define a window where a property stays monotonic as I move one side?

## Mini recipe examples
- Pair sum (sorted): l=0, r=n-1; if sum < target -> l++; if sum > target -> r--; else found.
- Remove duplicates (sorted): write=1; for read from 1..n-1, if nums[read] != nums[read-1], nums[write++]=nums[read].
- Move zeroes stable: write=0; for read over array, if nums[read]!=0 swap(nums[write], nums[read]); write++.
- Palindrome string: l=0, r=n-1; while l<r ensure s[l]==s[r]; move inward.

## When not to use it
- Unsorted data where ordering matters and sorting is disallowed.
- Problems requiring non-local decisions (DP/graph) where two indices cannot capture state.

Use this alongside the runnable examples in 14DSA/index.js, practice.js, and leetcode.js to see the patterns in code.
