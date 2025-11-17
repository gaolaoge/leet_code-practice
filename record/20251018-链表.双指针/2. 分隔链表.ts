/*
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

function partition2(head: ListNode | null, x: number): ListNode | null {
  let current = head;
  if (!current) return null;

  const a = new ListNode(-1);
  const b = new ListNode(-1);
  let aHead = a;
  let bHead = b;
  while (current) {
    if (current.val < x) {
      aHead.next = current;
      aHead = aHead.next;
    } else {
      bHead.next = current;
      bHead = bHead.next;
    }
    current = current.next;
  }
  aHead.next = b.next;
  bHead.next = null;
  return a.next;
}

/**
 * 维护双链表记录左右节点，然后拼接
 */

export {};
