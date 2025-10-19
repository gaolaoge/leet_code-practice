import { ListNode } from './nodes';

/**
 *    0
 *   1  2
 *  3 4 5 6
 *
 * 完全 2 叉树的索引特性：
 * 父节点的索引是 i，则左子节点的索引是 2i + 1，右子节点的索引是 2i + 2
 */

/**
 * 小顶堆
 * - 父节点 ≤ 子节点：每个父节点的值都小于或等于其子节点的值
 * - 根节点最小：堆顶元素是整个堆的最小值
 * - 部分有序：只保证父子关系，不保证兄弟关系
 * 供优先级队列实现
 */

class SimpleMinPQ {
  heap: any[];
  size: number;
  constructor(private capacity: number) {
    this.heap = new Array(capacity);
    this.size = 0;
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
  swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  /**返回最小元素*/
  peek(): number | null {
    return this.heap[0] || null;
  }

  /**追加新元素*/
  push(value: number): void {
    if (this.size >= this.capacity) {
      return;
    }
    this.heap[this.size] = value;
    this.size++;
    this.swim(this.size - 1);
  }
  /**删除并返回最小元素*/
  pop(): number | null {
    const res = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    this.sink(0);
    return res;
  }
  /**上浮*/
  swim(index: number): void {
    while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
      this.swap(this.parent(index), index);
      index = this.parent(index);
    }
  }
  /**下沉*/
  sink(index: number): void {
    while (this.left(index) < this.size || this.right(index) < this.size) {
      let min = index;
      if (this.heap[this.left(index)] < this.heap[min]) {
        min = this.left(index);
      }
      if (this.heap[this.right(index)] < this.heap[min]) {
        min = this.right(index);
      }
      if (min === index) {
        break;
      }
      this.swap(index, min);
      index = min;
    }
  }
}

class SimpleMinNodePQ {
  heap: ListNode[];
  size: number;
  constructor(private capacity: number) {
    this.heap = new Array(capacity);
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  leftIndex(index: number): number | null {
    const targetIndex = index * 2 + 1;
    return targetIndex < this.size ? targetIndex : null;
  }

  rightIndex(index: number): number | null {
    const targetIndex = index * 2 + 2;
    return targetIndex < this.size ? targetIndex : null;
  }

  parentIndex(index: number): number | null {
    const targetIndex = Math.floor((index - 1) / 2);
    return targetIndex >= 0 ? targetIndex : null;
  }

  /** 交换节点 */
  swapNode(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  /** 返回最小节点 */
  peek(): ListNode | null {
    return this.size > 0 ? this.heap[0] : null;
  }

  /** 传入新节点 */
  push(node: ListNode): void {
    if (this.size >= this.capacity) {
      return;
    }
    this.heap[this.size] = node;
    this.size++;
    this.swim(this.size - 1);
  }

  /** 删除并返回最小节点 */
  pop(): ListNode | null {
    if (this.size === 0) return null;

    const res = this.heap[0];
    this.heap[0] = this.heap[this.size - 1];
    this.size--;
    if (this.size > 0) {
      this.sink(0);
    }
    return res;
  }

  /** 上浮节点 */
  swim(index: number): void {
    while (index > 0) {
      let minNode = this.heap[index];
      let parentIndex = this.parentIndex(index);
      if (parentIndex !== null && this.heap[parentIndex].val > minNode.val) {
        this.swapNode(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  /** 下沉节点 */
  sink(index: number): void {
    while (true) {
      const left = this.leftIndex(index);
      const right = this.rightIndex(index);
      let smallest = index;
      if (
        left !== null &&
        this.heap[left as number].val < this.heap[smallest].val
      ) {
        smallest = left;
      }
      if (right !== null && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }
      if (smallest === index) {
        break;
      } else {
        this.swapNode(smallest, index);
        index = smallest;
      }
    }
  }
}

export { SimpleMinPQ, SimpleMinNodePQ };
