/*
 * [918] 环形子数组的最大和
 * https://leetcode.cn/problems/maximum-sum-circular-subarray/description/
 */

function maxSubarraySumCircular(nums: number[]): number {
  const n = nums.length;
  const prefixSum = new Array(2 * n + 1).fill(0);
  for (let i = 0; i < 2 * n; i++) {
    prefixSum[i + 1] = prefixSum[i] + nums[i % n];
  }

  const queue: number[] = [];
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let j = 0; j <= n * 2; j++) {
    while (queue.length > 0 && j - queue[0] > n) {
      queue.shift();
    }

    if (queue.length > 0) {
      maxSum = Math.max(maxSum, prefixSum[j] - prefixSum[queue[0]]);
    }

    // 队列维护单调递增的目的是 为了未来的j'（j' > j） 保存可能的最优i。
    // 提前维护会破坏当前循环下的最优解
    while (
      queue.length > 0 &&
      prefixSum[queue[queue.length - 1]] >= prefixSum[j]
    ) {
      queue.pop();
    }

    queue.push(j);
  }

  return maxSum;
}

/**
 * 前缀和 + 单调队列
 */

export {};
