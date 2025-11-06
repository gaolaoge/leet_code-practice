/*
 * [1019] 链表中的下一个更大节点
 * https://leetcode.cn/problems/next-greater-node-in-linked-list/
 */

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

function nextLargerNodes(head: ListNode | null): number[] {
  const arr: number[] = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  const result = new Array(arr.length).fill(0);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    while (stack.length > 0 && curr > arr[stack[stack.length - 1]]) {
      const idx = stack.pop()!;
      result[idx] = curr;
    }
    stack.push(i);
  }

  return result;
}

/**
 * 题目要求：找到自身节点右侧第 1 个大于自己的节点的值的集合；
 */

export {};
