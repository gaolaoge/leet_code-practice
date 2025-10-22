/*
 * @lc app=leetcode.cn id=80 lang=javascript
 * @lcpr version=30300
 *
 * [80] 删除有序数组中的重复项 II
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]): number {
  if (nums.length < 3) return nums.length;
  let slow = 1;

  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1;
};

export {};

/**
 *
 */
