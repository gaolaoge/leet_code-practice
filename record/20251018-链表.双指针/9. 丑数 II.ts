/*
 * @lc app=leetcode.cn id=264 lang=typescript
 * @lcpr version=30203
 *
 * [264] 丑数 II
 * https://leetcode.cn/problems/ugly-number-ii/description/
 */

class SimpleMinPQ {
  private heap: number[];
  constructor() {
    this.heap = [];
  }

  pop(): number {
    const res = this.heap[0];

    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapDown(0);

    return res;
  }

  push(val: number) {
    this.heap.push(val);
    this.heapUp(this.heap.length - 1);
  }

  heapUp(index: number) {
    if (index === 0) return;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapDown(index: number) {
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let smallestIndex = index;
      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[smallestIndex]
      ) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex === index) {
        break;
      }
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      index = smallestIndex;
    }
  }
}

// @lc code=start
function nthUglyNumber(n: number): number {
  if (n <= 0) return 0;

  const heap = new SimpleMinPQ();
  const seen = new Set<number>();

  heap.push(1);
  seen.add(1);

  let count = 0;
  let res = 0;

  while (count < n) {
    res = heap.pop();
    count++;
    for (const factor of [2, 3, 5]) {
      const next = res * factor;
      if (!seen.has(next)) {
        heap.push(next);
        seen.add(next);
      }
    }
  }
  return res;
}

/**
 * 丑树
 * 「丑数」是数学定义，
 * 定义：丑数是指只包含质因数 2、3 和 5 的正整数。换句话说，一个数如果它的质因数只有 2、3、5，那么它就是丑数。
 * 算法竞赛中的定义通常与数学定义一致，但有时会扩展到包含其他质因数的情况，例如："7-丑数"（质因数只有 2、3、5、7）。
 *
 * 因数
 * 定义：因数是指能整除给定整数的整数。如果整数 a 能被整数 b 整除（即 a ÷ b 的余数为 0），那么 b 就是 a 的因数。
 *
 * 质数
 * 定义：质数是指大于 1 且只有 1 和它本身两个因数的自然数。换句话说，质数只有两个因数：1 和它本身。
 * 举例质数：2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71
 *
 * 质因子
 * 定义：质因子是指能整除给定正整数的质数。换句话说，如果一个质数 p 能整除整数 n，那么 p 就是 n 的质因子。
 */

/**
 * 特点：
 * 每个丑数都可以通过前面的丑数乘以 2、3 或 5 得到。
 */

/**
 * 解题思路：
 * - 动态规划
 * - 优先级队列
 */

export {};
