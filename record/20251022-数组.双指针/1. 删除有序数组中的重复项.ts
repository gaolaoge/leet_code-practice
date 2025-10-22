/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=30300
 *
 * [26] 删除有序数组中的重复项
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]) {
  if (nums.length < 2) {
    return nums.length;
  }
  let a = 1;
  let b = 1;

  while (b < nums.length) {
    if (nums[b] !== nums[b - 1]) {
      nums[a] = nums[b];
      a++;
    }
    b++;
  }

  return a;
};

/**
 * 左右针
 */
