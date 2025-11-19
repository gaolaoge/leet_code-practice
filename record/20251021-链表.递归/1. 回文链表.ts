/*
 * [234] 回文链表
 * https://leetcode.cn/problems/palindrome-linked-list/description/
 */

import { ListNode } from '../../utils/nodes';

let frontPoint: ListNode;

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function isPalindrome(head: ListNode | null): boolean {
  let frontPoint = head;
  const recursive = (node: ListNode | null): boolean => {
    if (!node) return true;
    if (!recursive(node.next)) return false;
    if (node.val !== frontPoint!.val) return false;
    frontPoint = frontPoint!.next;
    return true;
  };
  return recursive(head);
}

var isPalindrome2 = function (head: ListNode): boolean {
  if (!head) return true;
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next!;
    fast = fast.next?.next!;
  }

  const reverseLink = (node: ListNode | null) => {
    let prev = null;
    while (node) {
      const next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev;
  };

  let start = head;
  let end = reverseLink(slow);

  while (start && end) {
    if (start.val !== end.val) return false;
    start = start.next!;
    end = end.next!;
  }

  return true;
};

function isPalindrome3(head: ListNode | null): boolean {
  if (!head) return true;
  const list: number[] = [];
  let node = head;
  while (node) {
    list.push(node.val);
    node = node.next!;
  }
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    if (list[left] !== list[right]) return false;
    left++;
    right--;
  }
  return true;
}

function isPalindrome4(head: ListNode | null): boolean {
  if (!head) return true;
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next!;
    fast = fast.next?.next!;
  }

  const reverseLink = (node: ListNode | null) => {
    let prev = null;
    while (node) {
      const next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return prev;
  };

  let start = head;
  let end = reverseLink(slow);

  while (start && end) {
    if (start.val !== end.val) return false;
    start = start.next!;
    end = end.next!;
  }

  return true;
}

/**
 * 回文链表是指 1 个链表从前往后读和从后往前读的内容完全相同。
 */

/**
 * 思路1：递归，递归性能很差，尽量避免递归
 * - 当前逻辑：先递归到链表末尾，然后逐个比较节点值，
 * - 问题：这里对比了链表全程，实际上只对比半程就够，BUT 对比全程与半程的性能差异不大：
 *  - 对比的消耗是 1 ，判断超过半程直接返回 true 消耗也是 1 ,
 *  - 递归的本质是不断创建新的栈，减少对比次数不会影响栈的创建，而创建栈才是高消耗，真正的优化应该是避免递归；
 * - 递归会额外增加栈的开销，递归深度为 n，对于长链表可能导致栈溢出，浏览器常规情况支持 1-30000 的栈深度，NodeJs 环境支持 1-50000 左右；
 *
 * 思路2：翻转链表&左右针：
 * 思路3：数组辅助（最简单）：需要消耗额外的 空间复杂度 O(n)
 */

export {};
