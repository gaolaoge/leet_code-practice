/*
 * @lc app=leetcode.cn id=27 lang=javascript
 * @lcpr version=30300
 *
 * [27] 移除元素
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/submissions/672741020/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums: number[], val: number): number {
  if (nums.length === 0) return 0;
  let a = 0;
  let b = 0;
  while (b < nums.length) {
    if (nums[b] !== val) {
      nums[a] = nums[b];
      a++;
    }
    b++;
  }
  return a;
};

/**
 *
 */

export {};
