/*
 * @lc app=leetcode.cn id=83 lang=javascript
 * @lcpr version=30300
 *
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
