/*
 * @lc app=leetcode.cn id=25 lang=javascript
 * @lcpr version=30300
 *
 * [25] K 个一组翻转链表
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 */

import { ListNode } from '../../utils/nodes';

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = (head: ListNode | null, k: number): ListNode | null => {
  if (!head || !head.next) {
    return head;
  }

  const res = new ListNode(-1, head);
  let curr: ListNode | null = res;
  let index = 0;

  // 1. 判断剩余 链表 是否足够翻转
  while (index < k) {
    if (curr.next) {
      curr = curr.next;
      index++;
    } else {
      return head;
    }
  }

  // 2. 翻转
  curr = head;
  index = 0;
  let prev = null;
  while (index < k) {
    const next: ListNode | null = curr.next!;
    curr.next = prev;
    prev = curr;
    curr = next;
    index++;
  }

  let start = prev;
  let end = curr;

  // 3. 递归向后
  if (end) {
    head.next = reverseKGroup(end, k);
  }

  return start;
};

/**
 * 递归
 */
