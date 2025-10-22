/*
 * @lc app=leetcode.cn id=167 lang=javascript
 * @lcpr version=30300
 *
 * [167] 两数之和 II - 输入有序数组
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers: number[], target: number): number[] {
  let a = 0;

  while (a < numbers.length - 1) {
    let b = a + 1;
    while (b < numbers.length) {
      const sum = numbers[a] + numbers[b];
      if (sum === target) {
        return [a + 1, b + 1];
      } else if (sum < target) {
        b++;
      } else {
        break;
      }
    }
    a++;
  }
  return [];
};

/**
 * 左右针
 */

export {};
