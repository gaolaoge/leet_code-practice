/*
 * [141] 环形链表
 * https://leetcode.cn/problems/linked-list-cycle/description/
 */

// @lc code=start
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

import { ListNode } from '../../utils/nodes';

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let slow = head;
  let fast: ListNode | null = head;
  while (slow.next) {
    slow = slow.next;
    fast = fast?.next?.next || null;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

/**
 * 快慢针：若存在 fast 等于 slow 则存在环，若链表终止，则没有环；
 */

export {};
