/*
 * @lc app=leetcode.cn id=234 lang=javascript
 * @lcpr version=30300
 *
 * [234] 回文链表
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 */

import { ListNode } from '../../utils/nodes';

let frontPoint: ListNode;

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head: ListNode): boolean {
  frontPoint = head;
  return recursive(head);
};

function recursive(node: ListNode | null): boolean {
  if (!node) return true;

  if (!recursive(node.next)) return false;

  if (node.val !== frontPoint.val) {
    return false;
  }

  frontPoint = frontPoint.next as ListNode;
  return true;
}

/**
 * 思路1：递归，递归性能很差，尽量避免递归
 * - 当前逻辑：先递归到链表末尾，然后逐个比较节点值，
 * - 问题：这里对比了链表全程，实际上只对比半程就够，BUT 对比全程与半程的性能差异不大：
 *  - 对比的消耗是 1 ，判断超过半程直接返回 true 消耗也是 1 ,
 *  - 递归的本质是不断创建新的栈，减少对比次数不会影响栈的创建，而创建栈才是高消耗，真正的优化应该是避免递归；
 *
 * 思路2：翻转链表&左右针
 * 思路3：数组辅助（最简单）
 */

var isPalindrome2 = function (head: ListNode): boolean {
  let slow = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next;
  }

  let start = head;
  let end = reverseLink(slow);

  console.log(start);
  console.log(end);

  while (end) {
    if (start.val !== end.val) {
      return false;
    }
    start = start.next as ListNode;
    end = end.next as ListNode;
  }

  return true;
};

function reverseLink(node: ListNode): ListNode {
  let prev = null;

  while (node) {
    const next = node.next;
    node.next = prev;
    prev = node;
    node = next as ListNode;
  }

  return prev as ListNode; // 注意这里不能返回，因为 node 已经移动到链表边界之外变成 null 了
}

export {};
