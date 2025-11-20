/*
 * [83] 删除排序链表中的重复元素
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
 */

import { ListNode } from '../../utils/nodes';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head: ListNode) {
  if (!head || !head.next) return head;
  const res = new ListNode(-1, head);
  let b: ListNode | null = head;

  while (b?.next) {
    if (b.val === b.next.val) {
      b.next = b?.next.next;
    } else {
      b = b.next;
    }
  }

  return res.next;
};

/**
 *
 */

export {};

function deleteDuplicates2(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let left = head;
  let right = left.next;

  while (right) {
    if (right.val !== left.val) {
      left.next = right;
      left = left.next;
    }
    right = right.next;
  }

  left.next = null;

  return head;
}
