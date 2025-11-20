/*
 * [206] 反转链表
 * https://leetcode.cn/problems/reverse-linked-list/description/
 */

import { ListNode } from '../../utils/nodes';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head: ListNode) {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next as ListNode;
  }

  return prev;
};

/**
 *
 */
