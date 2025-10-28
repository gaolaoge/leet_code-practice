/*
 * [704] 二分查找
 * https://leetcode.cn/problems/binary-search/description/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(right - left);
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};

/**
 * 双指针.二分搜索
 *
 * 双指针主要有 6 种变体
 * 1. 对撞指针（相向双指针）
 * 2. 快慢指针（同向双指针）
 * 3. 滑动窗口（动态双指针）
 * 4. 二分搜索（固定中点双指针）
 * 5. 前后指针（保持距离）
 * 6. 多指针（三个或更多指针）
 */

export {};
