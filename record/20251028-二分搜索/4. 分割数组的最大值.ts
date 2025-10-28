/*
 * [410] 分割数组的最大值
 * https://leetcode.cn/problems/split-array-largest-sum/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums: number[], k: number): number {
  let left = Math.max(...nums);
  let right = nums.reduce((count, curr) => count + curr, 0);

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (variable(nums, k, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

const variable = (nums: number[], k: number, unit: number) => {
  let len = 1;
  let index = 0;
  let currCount = 0;

  while (index < nums.length) {
    currCount += nums[index];

    if (currCount > unit) {
      currCount = nums[index];
      len++;

      if (len > k) return false;
    }
    index++;
  }

  return len <= k;
};

/**
 * nums = [7, 2, 5, 10, 8], k = 2
 * 目标：将数组分割成2个子数组，使得两个子数组和的最大值最小
 *
 * 可能的分割方式：
 * 1. [7] + [2, 5, 10, 8] → 子数组和：[7, 25] → 最大值：25
 * 2. [7, 2] + [5, 10, 8] → 子数组和：[9, 23] → 最大值：23
 * 3. [7, 2, 5] + [10, 8] → 子数组和：[14, 18] → 最大值：18
 * 4. [7, 2, 5, 10] + [8] → 子数组和：[24, 8] → 最大值：24
 *
 * 最优解：第3种方式，最大值为18
 */

/**
 * 二分答案
 */

export {};
