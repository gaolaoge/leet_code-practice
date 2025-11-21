/*
 * [167] 两数之和 II - 输入有序数组
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length - 1; i++) {
    const value = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === value) return [i + 1, j + 1];
    }
  }
  return [];
};

/**
 * 左右针
 */

export {};
