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
  let a = 0;
  let b = numbers.length - 1;
  let count;
  while (a < b) {
    count = numbers[a] + numbers[b];
    if (count === target) return [a + 1, b + 1];
    else if (count < target) a++;
    else b--;
  }
  return [];
};

var twoSum2 = function (numbers: number[], target: number): number[] {
  let a = 0;
  while (a < numbers.length - 1) {
    let b = a + 1;
    let sum;
    while (b < numbers.length) {
      sum = numbers[a] + numbers[b];
      if (sum === target) return [a + 1, b + 1];
      else if (sum < target) b++;
      else break;
    }
    a++;
  }
  return [];
};

/**
 * 注意：有且只有 1 个答案
 * 1. 左右针
 * 2. 暴力遍历
 */

export {};

var twoSum3 = function (numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length - 1; i++) {
    const value = target - numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] === value) return [i + 1, j + 1];
    }
  }
  return [];
};
