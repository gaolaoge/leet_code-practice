/*
 * [225] 用队列实现栈
 * https://leetcode.cn/problems/implement-stack-using-queues/description/
 */

class MyStack {
  private queue: number[] = [];

  push(x: number): void {
    const n = this.queue.length;
    // 先入队
    this.queue.push(x);

    // 将前面的元素移到后面，保持新元素在队首
    for (let i = 0; i < n; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number {
    return this.queue.shift()!; // 队首就是栈顶
  }

  top(): number {
    return this.queue[0]; // 队首就是栈顶
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

export {};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

/**
 *
 */

export {};
