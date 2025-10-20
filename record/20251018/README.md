## 链表.双指针

双指针 是链表问题中最常用的算法技巧之 1 ，通过使用两个指针在链表中移动来解决问题。

> 双指针模式：在链表中使用两个指针，通过不同的移动策略来达到特定目的。

常见双指针类型：

1. 快慢指针（快指针 + 慢指针）
2. 前后指针（前指针 + 后指针）
3. 左右指针（左指针 + 右指针）

双指针的优势：

1. 时间复杂度优化：通常能将 O(n²) 优化为 O(n)
2. 空间复杂度优化：通常只需要 O(1) 额外空间
3. 逻辑清晰：代码简洁，易于理解和维护

使用技巧：

1. 虚拟头节点：使用 dummy 节点简化边界处理
2. 指针初始化：注意指针的初始位置
3. 移动条件：明确指针移动的终止条件
4. 边界处理：考虑空链表、单节点等特殊情况

选择策略：

1. 需要检测环或找中点 → 快慢指针
2. 需要删除特定位置节点 → 前后指针
3. 需要比较或合并操作 → 左右指针
4. 复杂问题 → 组合使用多种指针类型

| 类型         | 移动方式 | 典型应用       | 核心思想     |
| ------------ | -------- | -------------- | ------------ |
| **快慢指针** | 速度不同 | 检测环、找中点 | 利用速度差   |
| **前后指针** | 保持距离 | 删除倒数第N个  | 利用固定间距 |
| **左右指针** | 分别移动 | 合并、比较     | 利用位置关系 |

### 1. 快慢指针 - 检测链表环

**问题**：判断链表是否有环

```typescript
function hasCycle(head: ListNode | null): boolean {
  if (!head || !head.next) return false;

  let slow = head; // 慢指针：每次走1步
  let fast = head.next; // 快指针：每次走2步

  while (fast && fast.next) {
    if (slow === fast) return true; // 相遇说明有环
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
}
```

**原理**：就像两个人跑步，一个跑得快一个跑得慢，如果跑道是环形的，快的人最终会追上慢的人。

---

### 2. 前后指针 - 删除倒数第N个节点

**问题**：删除链表中倒数第n个节点

```typescript
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(0);
  dummy.next = head;

  let first = dummy; // 前指针
  let second = dummy; // 后指针

  // 前指针先走n+1步
  for (let i = 0; i <= n; i++) {
    first = first.next;
  }

  // 两指针同时移动，直到前指针到末尾
  while (first) {
    first = first.next;
    second = second.next;
  }

  // 删除节点
  second.next = second.next.next;
  return dummy.next;
}
```

**原理**：就像两个人保持固定距离走路，当前面的人走到终点时，后面的人正好在要删除的位置。

---

### 3. 左右指针 - 合并两个有序链表

**问题**：将两个有序链表合并成一个有序链表

```typescript
function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  // 左右指针分别指向两个链表
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1; // 选择较小的值
      l1 = l1.next; // 左指针移动
    } else {
      current.next = l2;
      l2 = l2.next; // 右指针移动
    }
    current = current.next;
  }

  // 连接剩余节点
  current.next = l1 || l2;
  return dummy.next;
}
```

**原理**：就像两个人分别拿着两摞已经排好序的卡片，每次比较最上面的卡片，把较小的放到结果中。

## 例题

- [21] 合并两个有序链表：https://leetcode.cn/problems/merge-two-sorted-lists/description/
- [86] 分隔链表：https://leetcode.cn/problems/partition-list/description/
- [23] 合并 K 个升序链表：https://leetcode.cn/problems/merge-k-sorted-lists/description/
- [141] 环形链表：https://leetcode.cn/problems/linked-list-cycle/description/
- [142] 环形链表 II：https://leetcode.cn/problems/linked-list-cycle-ii/description/
- [876] 链表的中间结点：https://leetcode.cn/problems/middle-of-the-linked-list/
- [19] 删除链表的倒数第 N 个结点：https://leetcode.cn/problems/remove-nth-node-from-end-of-list/
- [160] 相交链表：https://leetcode.cn/problems/intersection-of-two-linked-lists/submissions/596143258/
- [264] 丑数 II：https://leetcode.cn/problems/ugly-number-ii/description/
- [378] 有序矩阵中第 K 小的元素：https://leetcode.cn/problems/kth-smallest-element-in-a-sorted-matrix/description/
- [373] 查找和最小的 K 对数字：https://leetcode.cn/problems/find-k-pairs-with-smallest-sums/description/
- [82] 删除排序链表中的重复元素 II：https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/
- [2] 两数相加：https://leetcode.cn/problems/add-two-numbers/description/
- [445] 两数相加 II：https://leetcode.cn/problems/add-two-numbers-ii/description/
