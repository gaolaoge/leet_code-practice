/*
 * @lc app=leetcode.cn id=1004 lang=javascript
 * @lcpr version=30300
 *
 * [1004] 最大连续1的个数 III
 * https://leetcode.cn/problems/max-consecutive-ones-iii/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums: number[], k: number): number {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let maxLin = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }
    right++;
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxLin = Math.max(maxLin, right - left);
  }

  return maxLin;
};

/*
 *
 */

export {};
