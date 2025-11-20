/*
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
  if (!head) return null;

  const prev = new ListNode(0, head);
  let curr: ListNode | null = head;
  let index = 0;

  // 判断是足够翻转 1 次
  while (index < k) {
    if (curr) {
      curr = curr.next;
      index++;
    } else return prev.next;
  }

  // 进行翻转
  index = 0;
  curr = head;
  let tempPrev: ListNode | null = null;
  while (index < k) {
    const next: ListNode | null = curr!.next;
    curr!.next = tempPrev!;
    tempPrev = curr!;
    curr = next;
    index++;
  }

  // 拼接 + 向下递归
  prev.next = tempPrev!;
  head.next = reverseKGroup(curr, k);

  return prev.next;
};

/**
 * 递归
 */
