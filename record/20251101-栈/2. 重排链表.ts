/*
 * [143] 重排链表
 * https://leetcode.cn/problems/reorder-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from '../../utils/nodes';

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head: ListNode): void {
  if (!head || !head.next) return;

  let slow = head;
  let fast = head;
  while (fast.next && fast.next?.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  const stack: ListNode[] = [];

  let curr = slow.next!;
  while (curr) {
    stack.push(curr);
    curr = curr.next!;
  }

  curr = head;

  while (stack.length > 0) {
    const nextNode = curr.next;
    const tailNode = stack.pop()!;

    curr.next = tailNode;
    tailNode.next = nextNode;
    curr = nextNode!;
  }

  if (curr) {
    curr.next = null;
  }
};

/**
 * 快慢针AB ，自动到最后，若 B 针后面余有 1 节点，则当前链表长度为偶数，反之为奇数；
 */

export {};
