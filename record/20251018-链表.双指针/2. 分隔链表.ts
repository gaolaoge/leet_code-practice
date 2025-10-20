/*
 * @lc app=leetcode.cn id=86 lang=typescript
 * @lcpr version=30203
 *
 * [86] 分隔链表
 * https://leetcode.cn/problems/partition-list/description/
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;

  let a = new ListNode(-1, null);
  const aHead = a;
  let b = new ListNode(-1, null);
  const bHead = b;
  let index: ListNode | null = head;
  while (index) {
    if (index.val < x) {
      a.next = index;
      a = a.next;
    } else {
      b.next = index;
      b = b.next;
    }
    index = index.next;
  }

  a.next = bHead.next;
  b.next = null;
  return aHead.next;
}

/**
 * 最佳解法：双链表法
 */

export {};
