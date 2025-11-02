/*
 * [641] 设计循环双端队列
 * https://leetcode.cn/problems/design-circular-deque/
 */

class MyCircularDeque {
  k: number;
  queue: number[];
  head: number;
  tail: number;
  // 构造函数,双端队列最大为 k
  constructor(k: number) {
    this.k = k + 1;
    this.queue = new Array(this.k);
    this.head = 0;
    this.tail = 0;
  }

  // 将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false
  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    if (this.isEmpty()) {
      this.queue[this.head] = value;
      this.tail += 1;
    } else {
      this.head = (this.head - 1 + this.k) % this.k;
      this.queue[this.head] = value;
    }

    return true;
  }

  // 将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false
  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.k;
    return true;
  }

  // 从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false
  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.k;
    return true;
  }

  // 从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false
  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.tail = (this.tail - 1 + this.k) % this.k;
    return true;
  }

  // 从双端队列头部获得一个元素。如果双端队列为空，返回 -1
  getFront(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.head];
  }

  // 获得双端队列的最后一个元素。 如果双端队列为空，返回 -1
  getRear(): number {
    if (this.isEmpty()) return -1;
    return this.queue[(this.tail - 1 + this.k) % this.k];
  }

  // 若双端队列为空，则返回 true ，否则返回 false
  isEmpty(): boolean {
    return this.head === this.tail;
  }

  // 若双端队列满了，则返回 true ，否则返回 false
  isFull(): boolean {
    return (this.tail + 1) % this.k === this.head;
  }
}

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

/**
 * 双端队列是一种两端都可以插入和删除的线性数据结构。它结合了栈和队列的特性，是一个更灵活、更强大的数据结构。
 */

export {};
