/*
 * @lc app=leetcode.cn id=373 lang=javascript
 * @lcpr version=30300
 *
 * [373] 查找和最小的 K 对数字
 * https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/description/
 */

type Item = { i: number; j: number; sum: number };

class SimpleMinPQ {
  heap: Item[] = [];

  push(item: Item): void {
    this.heap.push(item);
    this.heapUp(this.heap.length - 1);
  }

  pop(): Item | undefined {
    if (this.heap.length === 0) return undefined;

    const res = this.heap[0];

    if (this.heap.length === 1) {
      this.heap.pop();
      return res;
    }

    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapDown(0);

    return res;
  }

  heapUp(index: number): void {
    while (index > 0) {
      let parentIndex = this.parent(index);
      if (this.heap[parentIndex].sum > this.heap[index].sum) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  heapDown(index: number): void {
    while (true) {
      let leftIndex = this.left(index);
      let rightIndex = this.right(index);
      let minIndex = index;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex].sum < this.heap[minIndex].sum
      ) {
        minIndex = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex].sum < this.heap[minIndex].sum
      ) {
        minIndex = rightIndex;
      }

      if (minIndex === index) {
        break;
      } else {
        this.swap(minIndex, index);
        index = minIndex;
      }
    }
  }

  swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  parent(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  left(index: number): number {
    return index * 2 + 1;
  }

  right(index: number): number {
    return index * 2 + 2;
  }
}

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1: number[], nums2: number[], k: number) {
  // 边界检查
  if (!nums1.length || !nums2.length || k === 0) return [];

  const pq = new SimpleMinPQ();
  const res: [number, number][] = [];
  const visited = new Set<string>();

  // 初始化：将每个 nums1[i] 与 nums2[0] 配对入堆
  // 优化：只入前 min(k, nums1.length) 个
  const initialCount = Math.min(k, nums1.length);
  for (let i = 0; i < initialCount; i++) {
    const sum = nums1[i] + nums2[0];
    pq.push({ i, j: 0, sum });
    visited.add(`${i},0`);
  }

  // 循环 k 次或堆空
  while (res.length < k && pq.heap.length > 0) {
    const current = pq.pop();
    if (!current) break;

    const { i, j } = current;
    res.push([nums1[i], nums2[j]]);

    // 将该行的下一列入堆（如果未访问且未越界）
    if (j + 1 < nums2.length) {
      const key = `${i},${j + 1}`;
      if (!visited.has(key)) {
        const sum = nums1[i] + nums2[j + 1];
        pq.push({ i, j: j + 1, sum });
        visited.add(key);
      }
    }
  }

  return res;
};

/**
 * 解法：最小堆 + 多路归并
 *
 * 思路：
 * 1. 将 nums1 的每个元素看作一个"有序队列"的起点，与 nums2 的元素依次配对
 * 2. 初始化：将每个 nums1[i] 与 nums2[0] 配对入堆（最多 min(k, nums1.length) 个）
 * 3. 循环 k 次：
 *    - 弹出堆顶最小对 (i, j)
 *    - 将该对的下一列 (i, j+1) 入堆（如果未越界且未访问）
 * 4. 使用 visited 集合去重，避免重复入堆
 *
 * 时间复杂度：O(k log k)
 * 空间复杂度：O(k)
 *
 * 示例：
 * nums1 = [1,7,11], nums2 = [2,4,6], k = 3
 * 初始堆：(1,2), (7,2), (11,2)
 * 第1次：弹出(1,2)，入堆(1,4)
 * 第2次：弹出(1,4)，入堆(1,6)
 * 第3次：弹出(1,6)
 * 结果：[[1,2],[1,4],[1,6]]
 */

export {};
