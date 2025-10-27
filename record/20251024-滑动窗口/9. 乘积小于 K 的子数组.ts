/*
 * [713] 乘积小于 K 的子数组
 * https://leetcode.cn/problems/subarray-product-less-than-k/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums: number[], k: number): number {
  let count = 0;
  let left = 0;
  let right = 0;
  let currentVal = 1;

  while (right < nums.length) {
    currentVal *= nums[right];

    while (currentVal >= k && left <= right) {
      currentVal /= nums[left];
      left++;
    }

    // 这里追加所有以 right 结尾的子数组
    count += right - left + 1;

    right++;
  }

  return count;
};

export {};

/**
 * 滑动窗口
 * 假设 nums = [1,2,3,4,5,6] k = 1000
 * 那 count 不断追加的实例实际上就是：
 * [1]
 * [1,2] [2]
 * [1,2,3] [2,3] [3]
 * [1,2,3,4] [2,3,4] [3,4] [4]
 * [1,2,3,4,5] [2,3,4,5] [3,4,5] [4,5] [5]
 * [1,2,3,4,5,6] [2,3,4,5,6] [3,4,5,6] [4,5,6] [5,6] [6]
 */
