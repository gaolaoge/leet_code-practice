/*
 * [209] 长度最小的子数组
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 */

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let currentCount = 0;
  let minLens = Infinity;

  while (right < nums.length) {
    currentCount += nums[right];
    while (currentCount >= target) {
      minLens = Math.min(minLens, right - left + 1);
      currentCount -= nums[left];
      left++;
    }
    right++;
  }

  return minLens === Infinity ? 0 : minLens;
};

/**
 *
 */
