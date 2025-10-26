/*
 * [1658] 将 x 减到 0 的最小操作数
 * https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/description/
 */

/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums: number[], x: number): number {
  const total = nums.reduce((sum, curr) => sum + curr, 0);
  const target = total - x;

  if (target < 0) return -1;
  if (target === 0) return nums.length;

  let left = 0;
  let right = 0;
  let maxLin = -1;
  let currentSum = 0;

  while (right < nums.length) {
    currentSum += nums[right];
    right++;

    while (currentSum > target) {
      currentSum -= nums[left];
      left++;
    }

    if (currentSum === target) {
      maxLin = Math.max(maxLin, right - left);
    }
  }
  return maxLin === -1 ? -1 : nums.length - maxLin;
};

/**
 * 逆向思维：尽量少的取左右两侧元素和为 x 就是尽量保留多的中间元素使其和为 total - x
 * 滑动窗口
 */

export {};
