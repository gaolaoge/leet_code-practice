/*
 * [26] 删除有序数组中的重复项
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates2(nums: number[]): number {
  if (nums.length < 2) return nums.length;

  let a = 1;
  let b = 1;

  while (b < nums.length) {
    if (nums[b] !== nums[b - 1]) {
      nums[a] = nums[b];
      a++;
    }
    b++;
  }

  return a;
}

/**
 * 左右针
 */
