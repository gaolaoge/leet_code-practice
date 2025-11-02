/*
 * [1670] 设计前中后队列
 * https://leetcode.cn/problems/design-front-middle-back-queue/
 */

class FrontMiddleBackQueue {
  left: number[];
  right: number[];
  constructor() {
    this.left = [];
    this.right = [];
  }

  pushFront(val: number): void {
    this.left.unshift(val);
    if (this.left.length === this.right.length + 2) {
      this.right.unshift(this.left.pop()!);
    }
  }

  pushMiddle(val: number): void {
    // 如果 left 已经比 right 多 1，先调整
    if (this.left.length === this.right.length + 1) {
      this.right.unshift(this.left.pop()!);
    }
    // 总是插入到 left 末尾
    this.left.push(val);
  }

  pushBack(val: number): void {
    this.right.push(val);
    if (this.left.length < this.right.length) {
      this.left.push(this.right.shift()!);
    }
  }

  popFront(): number {
    if (this.left.length === 0) return -1;
    const val = this.left.shift()!;
    if (this.left.length < this.right.length) {
      this.left.push(this.right.shift()!);
    }
    return val;
  }

  popMiddle(): number {
    if (this.left.length === 0) return -1;

    // 总是从 left 末尾删除
    const val = this.left.pop()!;

    // 删除后调整
    if (this.left.length + 1 === this.right.length) {
      this.left.push(this.right.shift()!);
    }
    return val;
  }

  popBack(): number {
    if (this.left.length === 0 && this.right.length === 0) return -1;
    let val: number;
    if (this.right.length > 0) {
      val = this.right.pop()!;
      if (this.left.length === this.right.length + 2) {
        this.right.unshift(this.left.pop()!);
      }
    } else {
      val = this.left.pop()!;
    }
    return val;
  }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

export {};
