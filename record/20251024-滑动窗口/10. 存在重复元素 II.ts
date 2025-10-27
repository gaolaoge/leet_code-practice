/*
 * [219] 存在重复元素 II
 * https://leetcode.cn/problems/contains-duplicate-ii/description/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums: number[], k: number): boolean {
  let left = 0;
  let right = 1;
  while (left < nums.length) {
    right = left + 1;
    while (right < nums.length && right - left <= k) {
      if (nums[left] === nums[right]) {
        return true;
      }
      right++;
    }
    left++;
  }
  return false;
};

/**
 * 滑动窗口
 * abs 绝对值，absolute value
 *
 * 暴力枚举
 * - 每次 left 移动后重新扫描候选区间
 * - 每次都“从头开始”计算
 *
 * 滑动窗口
 * - 移动 right 时只扩展
 * - 移动 left 时只移除
 * - 利用窗口状态避免重复计算
 */

var containsNearbyDuplicate2 = function (nums: number[], k: number): boolean {
  if (nums.length < 2 || k < 1) return false;

  const window = new Set();
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (right - left > k) {
      window.delete(nums[left]);
      left++;
    }

    if (window.has(nums[right])) {
      return true;
    }

    window.add(nums[right]);

    right++;
  }

  return false;
};
