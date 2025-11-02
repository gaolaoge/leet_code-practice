/*
 * [622] 设计循环队列
 * https://leetcode.cn/problems/design-circular-queue/
 */

class MyCircularQueue {
  queue: number[];
  k: number;
  // 构造器，设置队列长度为 k
  constructor(k: number) {
    this.queue = [];
    this.k = k;
  }

  // 向循环队列插入一个元素。如果成功插入则返回真
  enQueue(value: number): boolean {
    if (this.queue.length === this.k) return false;
    this.queue.push(value);
    return true;
  }

  // 从循环队列中删除一个元素。如果成功删除则返回真
  deQueue(): boolean {
    if (this.queue.length === 0) return false;
    for (let i = 0; i < this.queue.length; i++) {
      this.queue[i] = this.queue[i + 1];
    }
    this.queue.length -= 1;
    return true;
  }

  // 从队首获取元素。如果队列为空，返回 -1
  Front(): number {
    if (this.queue.length === 0) return -1;
    return this.queue[0];
  }

  // 获取队尾元素。如果队列为空，返回 -1
  Rear(): number {
    if (this.queue.length === 0) return -1;
    return this.queue[this.queue.length - 1];
  }

  // 检查循环队列是否为空
  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  // 检查循环队列是否已满
  isFull(): boolean {
    return this.queue.length === this.k;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/**
 * 正确的实现方式是：固定长度数组 & 双指针
 */

class MyCircularQueue2 {
  queue: number[];
  first: number;
  end: number;
  k: number;
  constructor(k: number) {
    this.k = k + 1; // 多一个空间用于区分空和满
    this.queue = new Array(this.k);
    this.first = 0;
    this.end = 0;
  }

  // 向循环队列插入一个元素。如果成功插入则返回真
  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.queue[this.end] = value;
    this.end = (this.end + 1) % this.k;
    return true;
  }

  // 从循环队列中删除一个元素。如果成功删除则返回真
  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.first = (this.first + 1) % this.k;
    return true;
  }

  // 从队首获取元素。如果队列为空，返回 -1
  Front(): number {
    if (this.isEmpty()) return -1;
    return this.queue[this.first];
  }

  // 获取队尾元素。如果队列为空，返回 -1
  Rear(): number {
    if (this.isEmpty()) return -1;
    return this.queue[(this.end - 1 + this.k) % this.k];
  }

  // 检查循环队列是否为空
  isEmpty(): boolean {
    return this.first === this.end;
  }

  // 检查循环队列是否已满
  isFull(): boolean {
    return (this.end + 1) % this.k === this.first;
  }
}

export {};
