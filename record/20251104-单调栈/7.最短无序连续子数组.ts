/*
 * [581] 最短无序连续子数组
 * https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/description/
 */

function findUnsortedSubarray(nums: number[]): number {
  let left = nums.length - 1;
  let right = -1;
  const stack: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]) {
      left = Math.min(left, stack.pop()!);
    }
    stack.push(i);
  }

  if (left === nums.length - 1) return 0;

  stack.length = 0;

  for (let j = nums.length - 1; j >= 0; j--) {
    while (stack.length > 0 && nums[stack[stack.length - 1]] < nums[j]) {
      right = Math.max(right, stack.pop()!);
    }
    stack.push(j);
  }

  return right - left + 1;
}

/**
 *
 */

export {};
