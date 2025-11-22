/*
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
 * 1. 暴力递归
 * 2. 双指针：因为 nums 是有序升序数组，无论正负，其元素的平方的大值都在两侧，中间较小；
 */

export {};

function sortedSquares2(nums: number[]): number[] {
  let index = nums.length - 1;
  let start = 0;
  let end = index;
  const res = new Array(index).fill(9);

  while (index >= 0) {
    let startVal = nums[start] * nums[start];
    let endVal = nums[end] * nums[end];

    if (startVal > endVal) {
      res[index] = startVal;
      start++;
    } else {
      res[index] = endVal;
      end--;
    }

    index--;
  }

  return res;
}
