/*
 * [1944] 队列中可以看到的人数
 * https://leetcode.cn/problems/number-of-visible-people-in-a-queue/
 */

function canSeePersonsCount(heights: number[]): number[] {
  const len = heights.length;
  const res: number[] = new Array(len).fill(0);
  const stack: number[] = [];
  for (let i = heights.length - 1; i >= 0; i--) {
    let count = 0;

    while (stack.length > 0 && stack[stack.length - 1] <= heights[i]) {
      stack.pop();
      count++;
    }

    if (stack.length > 0) {
      count++;
    }

    res[i] = count;
    stack.push(heights[i]);
  }
  return res;
}

/**
 * 例：[5, 3, 2, 1, 8, 4]
 * 题意：入参是若干元素的高度，计算每个元素可以向右看到的元素的数量；
 * - 元素5 可以看到 3 8 ，2 1 被 3 挡住看不到，4 被 8 挡住看不到；
 */

export {};
