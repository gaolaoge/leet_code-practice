/*
 * [239] 滑动窗口最大值
 * https://leetcode.cn/problems/sliding-window-maximum/description/
 */

/**
 * 解题思路：使用单调队列
 * 1. 维护一个单调递减队列，存储数组索引（而非元素值）
 * 2. 队列中的元素按照对应的值从大到小排序
 * 3. 每次滑动窗口时：
 *    - 移除超出窗口范围的索引
 *    - 移除队列中所有小于当前元素的值对应的索引
 *    - 将当前元素索引加入队列
 *    - 队列头部即为当前窗口最大值
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  const queue: number[] = [];
  const res: number[] = [];

  for (let right = 0; right < nums.length; right++) {
    // 删除队首位置超出的元素
    if (queue.length > 0 && queue[0] < right - k + 1) {
      queue.shift();
    }

    // 删除队尾位置比 nums[right] 小的元素
    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[right]) {
      queue.pop();
    }

    queue.push(right);

    if (right >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }

  return res;
}

/**
 *
 */

export {};
