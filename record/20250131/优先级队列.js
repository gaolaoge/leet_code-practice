/**
 * https://leetcode.cn/problems/merge-k-sorted-lists/submissions/596139691/
 */

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class PriorityQueue2 {
  queue = [];

  constructor() {}

  isEmpty() {
    return this.queue.length === 0;
  }

  parentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  leftChildIndex(i) {
    return 2 * i + 1;
  }

  rightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(i, j) {
    [this.queue[i], this.queue[j]] = [this.queue[j], this.queue[i]];
  }

  // 增
  push(val) {
    if (!val) {
      return;
    }
    this.queue.push(val);
    this.swim(this.queue.length - 1);
  }

  // 删
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const val = this.queue[0];
    this.swap(0, this.queue.length - 1);
    this.queue.pop();
    this.sink(0);
    return val;
  }

  // 下沉
  sink(i) {
    const n = this.queue.length;

    while (true) {
      const left = this.leftChildIndex(i);
      const right = this.rightChildIndex(i);
      let min = i;
      if (left < n && this.queue[left]?.val < this.queue[min].val) {
        min = left;
      }
      if (right < n && this.queue[right]?.val < this.queue[min].val) {
        min = right;
      }
      if (min === i) {
        break;
      }
      this.swap(i, min);
      i = min;
    }
  }

  // 上浮
  swim(i) {
    while (i > 0 && this.queue[this.parentIndex(i)].val > this.queue[i].val) {
      this.swap(this.parentIndex(i), i);
      i = this.parentIndex(i);
    }
  }
}

function mergeKLists(lists) {
  let dummy = new ListNode(-1);
  let d = dummy;
  let pq = new PriorityQueue2();

  for (const list of lists) {
    if (list) {
      pq.push(list);
    }
  }

  while (!pq.isEmpty()) {
    const min = pq.pop();
    if (min) {
      d.next = min;
      d = d.next;
      if (min?.next) {
        pq.push(min.next);
      }
    }
  }

  return dummy.next;
}
