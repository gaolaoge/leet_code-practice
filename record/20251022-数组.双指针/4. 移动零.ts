/*
 * @lc app=leetcode.cn id=283 lang=javascript
 * @lcpr version=30300
 *
 * [283] 移动零
 * https://leetcode.cn/problems/move-zeroes/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]): void {
  if (nums.length === 0) return;
  let a = 0;
  let b = 0;
  while (b < nums.length) {
    if (nums[b] !== 0) {
      [nums[a], nums[b]] = [nums[b], nums[a]];
      a++;
    }
    b++;
  }
};

/**
 *
 */

export {};
