**队列**是 1 种遵循**先进先出（FIFO - First In First Out）**原则的线性数据结构。就像排队买票，先到的人先被服务。

### 核心特点

1. **先进先出（FIFO）**：最先加入的元素最先被移除
2. **两端操作**：队尾（rear）插入，队首（front）删除
3. **受限的访问**：只能在队尾添加元素，在队首移除元素
4. **顺序存储或链式存储**：可以用数组或链表实现

### 基本操作

| 操作             | 说明                   | 时间复杂度 |
| ---------------- | ---------------------- | ---------- |
| `enqueue(item)`  | 将元素加入队尾         | O(1)       |
| `dequeue()`      | 移除并返回队首元素     | O(1)       |
| `front()/peek()` | 查看队首元素（不删除） | O(1)       |
| `isEmpty()`      | 判断队列是否为空       | O(1)       |
| `size()`         | 返回队列的大小         | O(1)       |

### JavaScript/TypeScript 实现示例

```typescript
class Queue<T> {
  private items: T[] = [];

  // 入队：在队尾添加元素
  enqueue(item: T): void {
    this.items.push(item);
  }

  // 出队：移除并返回队首元素
  dequeue(): T | undefined {
    return this.items.shift();
  }

  // 查看队首元素
  front(): T | undefined {
    return this.items[0];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}
```

### 队列 vs 栈

| 特性     | 栈（Stack）      | 队列（Queue）     |
| -------- | ---------------- | ----------------- |
| 原则     | 后进先出（LIFO） | 先进先出（FIFO）  |
| 操作端   | 只在一端操作     | 在两端操作        |
| 形象比喻 | 一摞盘子         | 排队买票          |
| 主要操作 | push / pop       | enqueue / dequeue |

### 典型应用场景

1. **广度优先搜索（BFS）**：层序遍历树、图的最短路径
2. **任务调度**：按顺序处理任务
3. **消息队列**：异步处理、生产者-消费者模型
4. **打印队列**：文档按提交顺序打印
5. **缓冲区**：IO 缓冲、键盘输入缓冲
6. **请求处理**：Web 服务器处理请求
7. **限流/滑动窗口**：时间窗口内的请求统计

### 队列的变种

1. **循环队列（Circular Queue）**：队尾连接队首，避免空间浪费
2. **双端队列（Deque）**：两端都可以插入和删除
3. **优先队列（Priority Queue）**：元素按优先级出队，通常用堆实现
4. **阻塞队列（Blocking Queue）**：多线程环境下的同步队列

### 常见题型

- **基础队列**
  - 用栈实现队列
  - 用队列实现栈
  - 设计循环队列
- **BFS 相关**
  - 二叉树的层序遍历
  - 岛屿数量
  - 打开转盘锁
  - 完全平方数
- **滑动窗口**
  - 滑动窗口最大值（单调队列）
  - 最近的请求次数（你正在做的）
- **优先队列**
  - 数据流的中位数
  - 前 K 个高频元素
  - 合并 K 个升序链表

### 性能优化技巧

**注意**：在 JavaScript 中，数组的 `shift()` 操作是 O(n) 的（因为需要移动所有元素），实际使用时可以：

- 使用**循环队列**优化
- 使用**链表**实现
- 使用**头指针**跟踪队首位置

```typescript
// 优化版：使用头指针避免 shift()
class OptimizedQueue<T> {
  private items: T[] = [];
  private head = 0;

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.head];
    this.head++;

    // 定期清理已出队的元素，避免内存泄漏
    if (this.head > this.items.length / 2) {
      this.items = this.items.slice(this.head);
      this.head = 0;
    }

    return item;
  }

  front(): T | undefined {
    return this.items[this.head];
  }

  isEmpty(): boolean {
    return this.head >= this.items.length;
  }

  size(): number {
    return this.items.length - this.head;
  }
}
```

## 例题

- [933] 最近的请求次数：https://leetcode.cn/problems/number-of-recent-calls/description/
- [622] 设计循环队列：https://leetcode.cn/problems/design-circular-queue/
- [641] 设计循环双端队列：https://leetcode.cn/problems/design-circular-deque/
- [1670] 设计前中后队列：https://leetcode.cn/problems/design-front-middle-back-queue/
- [2073] 买票需要的时间：https://leetcode.cn/problems/time-needed-to-buy-tickets/description/
