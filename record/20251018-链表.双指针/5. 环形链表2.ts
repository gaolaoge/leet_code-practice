/*
 * [142] 环形链表 II
 * https://leetcode.cn/problems/linked-list-cycle-ii/description/
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

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;
    if (slow === fast) {
      break;
    }
  }
  if (!fast.next || !fast.next.next) {
    return null;
  }
  slow = head;
  while (slow !== fast) {
    slow = slow.next as ListNode;
    fast = fast.next as ListNode;
  }
  return slow;
}

/**
 * 快慢指针
 *
 * 快慢指针在环形链表中最多只需要一圈就会相遇。
 *
 * 解：
 * 因为：快慢针移动时，快针速度是慢针的2倍，
 * 所以：当慢针进入环链，快针已经在环链中某个位置，
 * 因为：快针比慢针快1步/次，
 * 所以：快针会以每次1步的速度追赶慢针，
 * 设 环链长度为 n，快慢针初始距离为 d，
 * 则 0 <= d < n，
 * 则 快慢针每移动1次，距离d减1，
 * 最坏情况：d = n-1（快针在慢针前面1步），
 * 则 需要移动 n-1 次，距离变为 0，两针相遇，
 * 因为 n-1 < n，
 * 所以 快慢针必然在第一圈内相遇，
 * 结论：快慢针最多需要n-1步相遇，不可能需要第二圈。
 */

/**
 * 设链表头到环入口距离为 a，环入口到相遇点距离为 b，相遇点到环入口距离为 c，则：a = c
 *
 * 第一次相遇时：
 * 慢指针路程：a + b
 * 快指针路程：a + b + c + b = a + 2b + c
 * 速度关系：快指针速度是慢指针的2倍
 * 时间关系：时间相同，所以路程是2倍关系
 *
 * 2(a + b) = a + 2b + c
 * 2a + 2b = a + 2b + c
 * a = c
 */

export {};
