/*
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
  const prev = new ListNode(-1, head);
  let curr = prev;
  let index = 0;

  while (index < left - 1) {
    curr = curr.next!;
    index++;
  }

  const reverse = (node: ListNode | null): ListNode | null => {
    if (!node) return null;
    const root = node!;
    let prev = null;
    while (index < right) {
      const next: ListNode | null = node!.next;
      node!.next = prev;
      prev = node;
      node = next;
      index++;
    }
    root.next = node;
    return prev;
  };

  curr.next = reverse(curr.next)!;

  return prev.next;
};

/**
 * 配置 冗余头部 避免 head 需要翻转；
 * 移动到 left 边界开始反转，翻转到 right 后将剩余节点 接连到当前尾部（翻转前的首部）
 */

export {};
