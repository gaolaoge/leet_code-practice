/*
 * [3190] 使所有元素都可以被 3 整除的最少操作数
 * https://leetcode.cn/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/
 */

function minimumOperations(nums: number[]): number {
  let time = 0;

  for (let num of nums) {
    const val = num % 3;
    if (val === 0) continue;
    time += Math.min(val, 3 - val);
  }

  return time;
}

/**
 *
 */

export {};

function minimumOperations2(nums: number[]): number {
  let time = 0;

  for (let num of nums) {
    const val = num % 3;
    if (val !== 0) time += 1;
  }

  return time;
}
