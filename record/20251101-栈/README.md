**栈**是一种遵循**后进先出（LIFO - Last In First Out）**原则的线性数据结构。就像一摞盘子，你只能从顶部放入或取出。

### 核心特点

1. **后进先出（LIFO）**：最后加入的元素最先被移除
2. **受限的访问**：只能在栈顶进行插入和删除操作
3. **顺序存储或链式存储**：可以用数组或链表实现

### 基本操作

| 操作           | 说明                   | 时间复杂度 |
| -------------- | ---------------------- | ---------- |
| `push(item)`   | 将元素压入栈顶         | O(1)       |
| `pop()`        | 弹出并返回栈顶元素     | O(1)       |
| `peek()/top()` | 查看栈顶元素（不删除） | O(1)       |
| `isEmpty()`    | 判断栈是否为空         | O(1)       |
| `size()`       | 返回栈的大小           | O(1)       |

### JavaScript/TypeScript 实现示例

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
```

### 典型应用场景

1. **函数调用栈**：程序执行时的函数调用记录
2. **表达式求值**：中缀、后缀表达式计算
3. **括号匹配**：检查括号是否配对
4. **路径简化**：如你的第一题「简化路径」
5. **浏览器历史记录**：前进/后退功能
6. **撤销/重做**：编辑器的撤销功能
7. **深度优先搜索（DFS）**：图和树的遍历
8. **单调栈**：解决「下一个更大元素」等问题

### 常见题型

- ✅ 有效的括号
- ✅ 最小栈
- ✅ 简化路径（你已完成）
- ✅ 逆波兰表达式求值
- ✅ 每日温度
- ✅ 柱状图中最大的矩形

栈是一个简单但强大的数据结构，掌握它对理解递归、DFS 和很多算法问题都很有帮助！

## 例题

- [71] 简化路径：https://leetcode.cn/problems/simplify-path/
- [143] 重排链表：https://leetcode.cn/problems/reorder-list/
- [20] 有效的括号：https://leetcode.cn/problems/valid-parentheses/description/
- [150] 逆波兰表达式求值：https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/
- [225] 用队列实现栈：https://leetcode.cn/problems/implement-stack-using-queues/description/
- [388] 文件的最长绝对路径：https://leetcode.cn/problems/longest-absolute-file-path/
