/*
 * [82] 删除排序链表中的重复元素 II
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/
 */

import { ListNode } from '../../utils/nodes';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  const base = new ListNode(0, head);
  let prev = base;
  let curr = head;

  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      const sameVal = curr.val;

      while (curr && curr.val === sameVal) {
        curr = curr.next as ListNode;
      }
      prev.next = curr;
    } else {
      prev = prev.next as ListNode;
      curr = curr.next as ListNode;
    }
  }

  return base.next;
}

/**
 * 左右针，虚拟头节点
 */

function _deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;
  const dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = dummy.next;
  let simple_val;

  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      simple_val = curr.val;

      while (curr && curr.val === simple_val) {
        curr = curr.next;
      }

      prev.next = curr;
    } else {
      prev = prev.next!;
      curr = curr.next;
    }
  }

  return dummy.next;
}
