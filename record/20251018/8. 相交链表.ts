/*
 * @lc app=leetcode.cn id=160 lang=typescript
 * @lcpr version=30203
 *
 * [160] 相交链表
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/submissions/596143258/
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from '../../utils/nodes';

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null;
  let p1 = headA;
  let p2 = headB;
  while (p1 !== p2) {
    if (p1 === null) {
      p1 = headB;
    } else {
      p1 = p1.next as ListNode;
    }
    if (p2 === null) {
      p2 = headA;
    } else {
      p2 = p2.next as ListNode;
    }
  }
  return p1;
}

/**
 * headA 和 headB 链表可能存在相交。
 * 两个指针 p1 和 p2 分别在两条链表上前进，
 * 由于两条链表的长度可能不同，两条链表之间的节点无法对应，
 * 所以并不能保证同时走到公共节点，也就无法得到相交节点 c1 ，
 * 问题的关键是，通过某些方式，让 p1 和 p2 能够同时到达相交节点 c1，
 *
 * 通过拼接 headA = headA + headB ,headB = headB + headA ，
 * 此时，两条链表长度相同，末尾处相同的节点位置也会确保相同。
 */
