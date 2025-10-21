/*
 * @lc app=leetcode.cn id=445 lang=javascript
 * @lcpr version=30300
 *
 * [445] 两数相加 II
 * https://leetcode.cn/problems/add-two-numbers-ii/description/
 */

import { ListNode } from '../../utils/nodes';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1: ListNode, l2: ListNode) {
  const stack1 = [];
  const stack2 = [];
  const res = new ListNode(-1);
  let tempRes = res;
  const resList = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next as ListNode;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next as ListNode;
  }

  let temp1 = stack1.pop();
  let temp2 = stack2.pop();

  let curryOver = false;
  let preCurryOver = false;

  while (temp1 !== undefined || temp2 !== undefined) {
    preCurryOver = curryOver;
    let sum = (temp1 || 0) + (temp2 || 0) + (preCurryOver ? 1 : 0);
    if (sum > 9) {
      curryOver = true;
      sum -= 10;
    } else {
      curryOver = false;
    }
    resList.push(sum);
    if (temp1 !== undefined) {
      temp1 = stack1.pop();
    }
    if (temp2 !== undefined) {
      temp2 = stack2.pop();
    }
  }
  if (curryOver) {
    tempRes.next = new ListNode(1);
    tempRes = tempRes.next;
  }

  for (let i = resList.length - 1; i >= 0; i--) {
    tempRes.next = new ListNode(resList[i]);
    tempRes = tempRes.next;
  }

  return res.next;
};

/**
 * 本题是「两数相加」的进阶版本，但题目要求不要「翻转链表」，
 * 使用栈存储链表内容，确保先进后出，即可借用「两数相加」的思路完成解题。
 */
