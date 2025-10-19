/*
 * @lc app=leetcode.cn id=141 lang=typescript
 * @lcpr version=30203
 *
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
 * 快慢针
 */
