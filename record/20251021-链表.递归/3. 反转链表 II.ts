/*
 * @lc app=leetcode.cn id=92 lang=javascript
 * @lcpr version=30300
 *
 * [92] 反转链表 II
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 */

import { ListNode } from '../../utils/nodes';

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (
  head: ListNode,
  left: number,
  right: number
): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let a = 1;
  let aNode = head;
  const res = new ListNode(-1, head);
  let prevANode = res;

  while (a < left) {
    prevANode = aNode;
    aNode = aNode.next!;
    a++;
  }

  const nextNode = reverseLink(aNode!, right - left + 1);

  prevANode.next = nextNode;

  return res.next;
};

const reverseLink = (head: ListNode, time: number): ListNode => {
  const start = head;
  let prev: ListNode;
  let tempTime = 0;

  while (head && tempTime < time) {
    const next = head.next as ListNode;
    head.next = prev! as ListNode;
    prev = head;
    head = next;
    tempTime++;
  }

  start.next = head;

  return prev!;
};

/**
 * 边界 case 比较多
 */

export {};
