/*
 * @lc app=leetcode.cn id=378 lang=javascript
 * @lcpr version=30300
 *
 * [378] 有序矩阵中第 K 小的元素
 * https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/description/
 */

type Item = {
  val: number;
  row: number;
  col: number;
};

class SimpleMinPQ {
  heap: Item[] = [];
  size = 0;
  constructor() {
    this.heap = [];
    this.size = 0;
  }

  push(value: Item): void {
    this.heap.push(value);
    this.heapUp(this.size);
    this.size++;
  }

  pop(): Item | null {
    if (this.size === 0) {
      return null;
    }
    const res = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    this.heap.pop();
    this.heapDown(0);

    return res;
  }

  heapUp(index: number): void {
    while (index > 0) {
      const parentIndex = this.parent(index);
      if (this.heap[parentIndex].val > this.heap[index].val) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapDown(index: number): void {
    while (true) {
      const leftIndex = this.left(index);
      const rightIndex = this.right(index);
      let smallestIndex = index;

      if (
        leftIndex < this.size &&
        this.heap[leftIndex].val < this.heap[smallestIndex].val
      ) {
        smallestIndex = leftIndex;
      }
      if (
        rightIndex < this.size &&
        this.heap[rightIndex].val < this.heap[smallestIndex].val
      ) {
        smallestIndex = rightIndex;
      }
      if (smallestIndex === index) {
        break;
      } else {
        this.swap(smallestIndex, index);
        index = smallestIndex;
      }
    }
  }

  swap(index1: number, index2: number) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  left(index: number): number {
    return index * 2 + 1;
  }
  right(index: number): number {
    return index * 2 + 2;
  }
  parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }
}

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix: number[][], k: number) {
  const pq = new SimpleMinPQ();

  for (let [index, list] of matrix.entries()) {
    pq.push({ val: list[0], row: index, col: 0 });
  }

  let length = 0;
  let res;

  while (length < k) {
    const { val, row, col } = pq.pop() as Item;
    res = val;
    if (matrix[row][col + 1] !== undefined) {
      pq.push({ val: matrix[row][col + 1], row, col: col + 1 });
    }
    length++;
  }
  return res;
};

/**
 * 优先级队列 - 小顶堆
 * 思路：每一行都是有序数组，从每行的第一个元素入堆（值、小标行、列）。弹出最小元素 k 次，每次弹出后把该行的下一个元素入堆。
 *
 * 注意：
 * 1. 无法确保任意 matrix[x][n] 都大于 matrix[y][n - 1]，所以不能只截取前 Math.ceil(k / matrix.length) 行到 pq 中，
 * 2. matrix.length 可能很大，无法把所有 item 都塞入 pq 中，
 * 3. 因为是 2 维数组，在外部计算每 1 列的 currentIndex 比较麻烦，建议直接 {val, row, col} 入堆。
 */

export {};
