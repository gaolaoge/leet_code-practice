/*
 * [88] 合并两个有序数组
 * https://leetcode.cn/problems/merge-sorted-array/description/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let end = nums1.length - 1;
  let index1 = m - 1;
  let index2 = n - 1;
  while (end >= 0) {
    if (nums1[index1] >= nums2[index2] || index2 < 0) {
      nums1[end] = nums1[index1];
      index1--;
    } else {
      nums1[end] = nums2[index2];
      index2--;
    }
    end--;
  }
};

/**
 * 3 指针，
 * 倒序，从后往前插入
 * 注意不要越界
 */

export {};

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
  let index = m + n;

  while (index > 0) {
    if (m === 0 || nums2[n - 1] > nums1[m - 1]) nums1[index] = nums2[--n];
    else nums1[index] = nums1[--m];
    index--;
  }
}
