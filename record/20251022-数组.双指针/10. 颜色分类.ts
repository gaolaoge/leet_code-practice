/*
 * [75] 颜色分类
 * https://leetcode.cn/problems/sort-colors/description/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;
  let curr = 0;
  while (curr <= right) {
    if (nums[curr] === 0) {
      [nums[left], nums[curr]] = [nums[curr], nums[left]];
      left++;
      curr++;
    } else if (nums[curr] === 2) {
      [nums[curr], nums[right]] = [nums[right], nums[curr]];
      right--;
    } else {
      curr++;
    }
  }
}

/**
 * 颜色分类（Sort Colors）是经典的荷兰国旗问题
 * 三指针法（一次遍历）
 * - left：指向下一个 0 应该放的位置
 * - right：指向下一个 2 应该放的位置
 * - curr：当前遍历的位置
 * 注：curr 所在位置值确定符合预期时才移动
 */

export {};

function sortColors2(nums: number[]): void {
  let left = 0;
  let right = nums.length - 1;
  let index = right;

  while (index >= left) {
    if (nums[index] === 0) {
      [nums[left], nums[index]] = [nums[index], nums[left]];
      left++;
    } else if (nums[index] === 2) {
      [nums[right], nums[index]] = [nums[index], nums[right]];
      right--;
      index--;
    } else index--;
  }
}
