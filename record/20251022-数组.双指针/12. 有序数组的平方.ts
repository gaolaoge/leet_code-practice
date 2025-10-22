/*
 * @lc app=leetcode.cn id=977 lang=javascript
 * @lcpr version=30300
 *
 * [977] 有序数组的平方
 * https://leetcode.cn/problems/squares-of-a-sorted-array/description/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums: number[]): number[] {
  const res = nums.map((item) => item * item);

  let end = res.length - 1;

  while (end > 0) {
    let start = 0;
    while (start < end) {
      if (res[start] > res[end]) {
        [res[start], res[end]] = [res[end], res[start]];
      }
      start++;
    }
    end--;
  }

  return res;
};

/**
 *
 */

export {};
