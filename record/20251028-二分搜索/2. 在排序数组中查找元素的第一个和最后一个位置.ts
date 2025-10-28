/*
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    else {
      left = mid;
      right = mid;

      // ✅ TODO 建议继续使用二分搜索找边界，而不是线性搜索
      while (nums[left - 1] === target) {
        left--;
      }
      while (nums[right + 1] === target) {
        right++;
      }

      return [left, right];
    }
  }

  return [-1, -1];
};

/**
 *
 */

export {};
