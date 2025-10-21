/*
 * @lc app=leetcode.cn id=2 lang=javascript
 * @lcpr version=30300
 *
 * [2] 两数相加
 * https://leetcode.cn/problems/add-two-numbers/description/
 */

import { ListNode } from '../../utils/nodes';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1: ListNode, l2: ListNode) {
  let res = new ListNode(0);
  let head1 = l1;
  let head2 = l2;
  let headRes = res;

  let preCarryOver = false;
  let carryOver = false;

  while (head1 || head2) {
    preCarryOver = carryOver;
    carryOver = false;

    let sum = (head1?.val || 0) + (head2?.val || 0) + (preCarryOver ? 1 : 0);
    if (sum > 9) {
      sum -= 10;
      carryOver = true;
    } else {
      carryOver = false;
    }

    headRes.next = new ListNode(sum);
    headRes = headRes.next;

    if (head1) {
      head1 = head1.next as ListNode;
    }
    if (head2) {
      head2 = head2.next as ListNode;
    }
  }

  if (carryOver) {
    headRes.next = new ListNode(1);
  }

  return res.next;
};

/**
 * 前后针，间距为 0
 */
