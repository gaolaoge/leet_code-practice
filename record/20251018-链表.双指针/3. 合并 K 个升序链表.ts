/*
 * @lc app=leetcode.cn id=23 lang=typescript
 * @lcpr version=30203
 *
 * [23] 合并 K 个升序链表
 * https://leetcode.cn/problems/merge-k-sorted-lists/description/
 */

import { ListNode } from '../../utils/nodes';
import { SimpleMinNodePQ } from '../../utils/utils';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null;
  const targetNode = new ListNode(-1);
  let currentNode = targetNode;
  const pq = new SimpleMinNodePQ(lists.length);

  for (const list of lists) {
    if (list) {
      pq.push(list);
    }
  }

  while (!pq.isEmpty()) {
    const min = pq.pop() as ListNode;
    currentNode.next = min;
    currentNode = currentNode.next;
    if (min.next) {
      pq.push(min.next);
    }
  }

  return targetNode.next;
}
