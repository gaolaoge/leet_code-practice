/*
 * @lc app=leetcode.cn id=876 lang=typescript
 * @lcpr version=30203
 *
 * [876] 链表的中间结点
 * https://leetcode.cn/problems/middle-of-the-linked-list/
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

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;
  }
  return slow;
}

/**
 * 快慢针
 */
