/*
 * [155] 最小栈
 * https://leetcode.cn/problems/min-stack/description/
 */

class MinStack {
  stack: number[];
  minStack: number[];
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin())
      this.minStack.push(val);
  }

  pop(): void {
    const val = this.stack.pop();
    if (this.getMin() === val) this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

/**
 * 注意：栈是先进后出
 * 维护 minStack 中记录的永远是剩余元素中的最小值；
 */

export {};
