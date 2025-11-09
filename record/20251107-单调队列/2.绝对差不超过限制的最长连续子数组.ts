/*
 * [1438] 绝对差不超过限制的最长连续子数组
 * https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/
 */

function longestSubarray(nums: number[], limit: number): number {
  const minQueue: number[] = []; // 升序队列
  const maxQueue: number[] = [];
  let maxLen = 0;

  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // 操作 升序、降序队列
    while (
      minQueue.length > 0 &&
      nums[minQueue[minQueue.length - 1]] > nums[right]
    ) {
      minQueue.pop();
    }
    while (
      maxQueue.length > 0 &&
      nums[maxQueue[maxQueue.length - 1]] < nums[right]
    ) {
      maxQueue.pop();
    }

    // push
    minQueue.push(right);
    maxQueue.push(right);

    // 判断是否超出范围
    while (nums[maxQueue[0]] - nums[minQueue[0]] > limit) {
      if (maxQueue[0] === left) maxQueue.shift();
      if (minQueue[0] === left) minQueue.shift();
      left++;
    }

    // 计算 maxLen
    maxLen = Math.max(maxLen, right - left + 1);

    right++;
  }

  return maxLen;
}

/**
 *
 */

export {};
