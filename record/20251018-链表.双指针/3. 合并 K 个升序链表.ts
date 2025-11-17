/*
 * [23] 合并 K 个升序链表
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 */

import { ListNode } from '../../utils/nodes';
import { SimpleMinNodePQ } from '../../utils/utils';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  const targetNode = new ListNode(-1);
  let currentNode = targetNode;
  const pq = new SimpleMinNodePQ(lists.length);

  for (const list of lists) {
    if (list) {
      pq.push(list);
    }
  }

  while (!pq.isEmpty()) {
    const min = pq.pop() as ListNode;
    currentNode.next = min;
    currentNode = currentNode.next;
    if (min.next) {
      pq.push(min.next);
    }
  }

  return targetNode.next;
}

/**
 * 小顶堆：小顶堆的本质是 1 种特殊的 2 叉树：
 * - 堆性质：每个父节点的值都小于或等于其子节点的值；
 * - 根节点：堆顶元素始终是整个堆中的最小值；
 *
 * 当前的预期是通过「层序遍历（广度优先）」把小顶堆结构序列化为 1 个数组，特点：
 * - 父节点索引：Math.floor((i - 1)/2)
 * - 左子树索引是 2*i + 1
 * - 右子树索引是 2*i + 2
 */

export {};

class MinNodePQ {
  capacity: number;
  heap: ListNode[];
  constructor(capacity: number) {
    this.capacity = capacity;
    this.heap = [];
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  parentIndex(index: number): number {
    if (index === 0) return -1;
    return Math.floor((index - 1) / 2);
  }

  leftChildIndex(index: number): number {
    const childIndex = index * 2 + 1;
    if (childIndex >= this.heap.length) return -1;
    return childIndex;
  }

  rightChildIndex(index: number): number {
    const childIndex = index * 2 + 2;
    if (childIndex >= this.heap.length) return -1;
    return childIndex;
  }

  pop(): ListNode | null {
    if (this.isEmpty()) return null;
    const res = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.length -= 1;
    if (this.heap.length > 0) this.peak(0);
    return res!;
  }

  push(node: ListNode): void {
    this.heap.push(node);
    this.swim(this.heap.length - 1);
  }

  // 上浮
  swim(index: number): void {
    while (index > 0) {
      const node = this.heap[index];
      const tempIndex = this.parentIndex(index);
      const parentNode = this.heap[tempIndex];
      if (node.val < parentNode.val) {
        this.swap(index, tempIndex);
        index = tempIndex;
      } else {
        break;
      }
    }
  }

  // 下沉
  peak(index: number): void {
    while (true) {
      const leftIndex = this.leftChildIndex(index);
      const rightIndex = this.rightChildIndex(index);
      let minIndex = index;
      if (
        leftIndex !== -1 &&
        this.heap[minIndex].val > this.heap[leftIndex].val
      ) {
        minIndex = leftIndex;
      }
      if (
        rightIndex !== -1 &&
        this.heap[minIndex].val > this.heap[rightIndex].val
      ) {
        minIndex = rightIndex;
      }

      if (minIndex === index) {
        break;
      } else {
        this.swap(index, minIndex);
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
}

function mergeKLists2(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  const dummy = new ListNode(-1);
  let current = dummy;
  const pq = new MinNodePQ(lists.length);

  for (let list of lists) {
    if (list) pq.push(list);
  }

  while (!pq.isEmpty()) {
    const node = pq.pop()!;
    current.next = node;
    current = current.next;
    if (node.next) pq.push(node.next);
  }

  return dummy.next;
}
