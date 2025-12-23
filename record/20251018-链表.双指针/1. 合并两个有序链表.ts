/*
 * [21] 合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 */

// @lc code=start

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) return list1 || list2;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}

function mergeTwoLists2(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const head = new ListNode(0);
  let temp = head;
  let a = list1;
  let b = list2;

  while (a || b) {
    if (!a || a?.val > b!.val) {
      temp.next = b;
      b = b!.next;
    } else {
      temp.next = a;
      a = a.next;
    }
    temp = temp.next!;
  }

  return head.next;
}

function mergeTwoLists3(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}

/**
 * 左右针 && 递归 || 迭代
 */

export {};
