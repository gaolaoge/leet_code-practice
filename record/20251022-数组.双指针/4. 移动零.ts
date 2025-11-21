/*
 * [283] 移动零
 * https://leetcode.cn/problems/move-zeroes/description/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums: number[]): void {
  if (nums.length === 0) return;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      if (left !== right) [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
};

/**
 * 左右针
 */
