## 链表.递归

递归是 1 种函数调用自身来解决问题的编程技术。通过将大问题分解为相同类型的小问题，直到达到最简单的基础情况。

核心要素：

- 基础情况（Base Case）：递归终止条件，防止无限递归；
- 递归情况（Recursive Case）：函数调用自身，问题规模逐渐缩小；
- 递归关系：当前问题与子问题的关系；

链表的递归定义：

- 链表 = 头节点 + 剩余链表（子链表）
- 子链表也是链表，具有相同的结构

自相似性：

- 链表的每个节点后面仍然是一个链表
- 天然适合递归处理

### 两种递归顺序

1. 前序递归（自顶向下）：先处理当前节点，再递归

```ts
function preOrder(head: ListNode | null): void {
  if (!head) return;

  console.log(head.val); // 先处理当前节点
  preOrder(head.next); // 再递归
}
// 输出顺序：1 -> 2 -> 3 -> 4
```

2. 后序递归（自底向上）：先递归，再处理当前节点

```ts
function postOrder(head: ListNode | null): void {
  if (!head) return;

  postOrder(head.next); // 先递归
  console.log(head.val); // 再处理当前节点
}
// 输出顺序：4 -> 3 -> 2 -> 1（逆序）
```

### 链表递归的经典应用

1. 反转链表

```ts
function reverseList(head: ListNode | null): ListNode | null {
  // 基础情况
  if (!head || !head.next) return head;

  // 递归反转剩余链表
  const newHead = reverseList(head.next);

  // 当前节点的处理：反转指针
  head.next.next = head;
  head.next = null;

  return newHead;
}
```

2. 计算链表长度

```ts
function getLength(head: ListNode | null): number {
  if (!head) return 0; // 基础情况
  return 1 + getLength(head.next); // 递归情况
}
```

3. 打印链表（逆序）

```ts
function printReverse(head: ListNode | null): void {
  if (!head) return;
  printReverse(head.next); // 先递归到最后
  console.log(head.val); // 回溯时打印
}
```

4. 判断回文链表

```ts
let frontPointer: ListNode | null;

function isPalindrome(head: ListNode | null): boolean {
  frontPointer = head;
  return recursiveCheck(head);
}

function recursiveCheck(currentNode: ListNode | null): boolean {
  if (!currentNode) return true;

  // 先递归到链表末尾
  if (!recursiveCheck(currentNode.next)) return false;

  // 回溯时比较
  if (currentNode.val !== frontPointer!.val) return false;

  frontPointer = frontPointer!.next;
  return true;
}
```

### 递归的优缺点

优点：

- 代码简洁优雅
- 思路清晰，易于理解
- 适合树形和链表结构

缺点：

- 空间复杂度高：O(n) 栈空间
- 可能栈溢出（链表过长）
- 性能可能不如迭代

## 例题

- [234] 回文链表：https://leetcode.cn/problems/palindrome-linked-list/description/
- [206] 反转链表：https://leetcode.cn/problems/reverse-linked-list/description/
- [92] 反转链表 II：https://leetcode.cn/problems/reverse-linked-list-ii/description/
- [25] K 个一组翻转链表：https://leetcode.cn/problems/reverse-nodes-in-k-group/
