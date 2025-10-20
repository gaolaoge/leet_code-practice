/*
 * @lc app=leetcode.cn id=19 lang=typescript
 * @lcpr version=30203
 *
 * [19] 删除链表的倒数第 N 个结点
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let pre = new ListNode(0);
  pre.next = head;

  let left = pre;
  let right = pre;
  while (n--) {
    right = right.next as ListNode;
  }
  while (right?.next) {
    left = left.next as ListNode;
    right = right.next as ListNode;
  }
  if (left.next) {
    left.next = left.next?.next as ListNode;
  }
  return pre.next;
}

export {};

/**
 * 前后针
 *
 * 如果直接用 head，会遇到边界情况处理复杂的问题：
 * - 删除头节点时，需要返回 head.next
 * - 删除其他节点时，需要返回 head
 */
