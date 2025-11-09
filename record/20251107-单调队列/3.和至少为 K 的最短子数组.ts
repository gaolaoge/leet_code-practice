/*
 * [862] 和至少为 K 的最短子数组
 * https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/description/
 */

function shortestSubarray(nums: number[], k: number): number {
  const prefixSum = new Array(nums.length + 1);

  for (let i = 1; i < prefixSum.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  let left = 0;
  let right = 0;
  let minLin = Infinity;
  const queue: number[] = [];

  while (right < prefixSum.length) {
    while (
      queue.length > 0 &&
      prefixSum[queue[queue.length - 1]] < prefixSum[right]
    ) {
      queue.pop();
    }

    while (prefixSum[right] - prefixSum[left] >= k) {
      minLin = Math.min(minLin, right - left + 1);
      left++;
    }

    queue.push(right);
    right++;
  }

  return minLin === Infinity ? -1 : minLin;
}

/**
 * 同时结合了 滑动窗口算法、前缀和技巧 和 单调队列 ，
 * 首先，想要快速记录子数组的和，需要 前缀和 预计算一个 preSum 数组，
 * 然后在 preSum 数组上进行 滑动窗口算法 寻找一个差值大于等于 k 且宽度最小的「窗口」，这个窗口的大小就是题目想要的结果。
 * 这里面还有个问题，当滑动窗口扩大时，新进入窗口的元素 preSum[right] 需要知道窗口中最小的那个元素是多少，
 * 和最小的那个元素相减才能得到尽可能大的子数组和。

如何快速判断窗口中的最值？这就需要单调队列
 */

/**
 * 滑动窗口不适合处理负数的情况：
 * - 单调性破坏 ：普通滑动窗口假设窗口扩大（右指针右移）时和会增加，窗口缩小（左指针右移）时和会减少。但负数的存在使得这个假设不再成立。
 * - 最优解可能被跳过 ：当窗口内包含负数时，即使当前窗口和已经满足条件，继续扩大窗口（包含更多负数）可能会找到更短的满足条件的子数组。
 * - 无法确定何时移动左指针 ：传统滑动窗口中，当窗口和超过目标值时移动左指针。但对于包含负数的数组，这可能导致错过最优解。
 */

export {};
