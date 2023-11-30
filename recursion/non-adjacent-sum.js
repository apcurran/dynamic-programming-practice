"use strict";

/**
 * solution 1 -- brute force recursion
 * time: O(2^n)
 * space: O(n)
 * 
 * @param {number[]} nums 
 * @param {number=} i index of array (avoids creating sliced copies within recursion)
 * @returns {number} The largest sum of non-adjacent nums in array
 */
function nonAdjacentSum(nums, i = 0) {
    // index is out of bounds
    if (i >= nums.length) {
        return 0;
    }

    const takeCurrentNumSkipAdjacent = nums[i] + nonAdjacentSum(nums, i + 2);
    const skipCurrentNum = nonAdjacentSum(nums, i + 1);

    return Math.max(takeCurrentNumSkipAdjacent, skipCurrentNum);
}

console.log(nonAdjacentSum([2, 4, 5, 12, 7])); // 16
