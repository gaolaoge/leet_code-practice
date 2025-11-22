/**
 * 1670.设计前中后队列
 * https://leetcode.cn/problems/design-front-middle-back-queue/
 */

class FrontMiddleBackQueue {
  private queue: number[];

  constructor() {
    this.queue = [];
  }

  pushFront(val: number): void {
    this.queue.unshift(val);
  }

  pushMiddle(val: number): void {
    const middle = Math.floor(this.queue.length / 2);
    this.queue.splice(middle, 0, val);
  }

  pushBack(val: number): void {
    this.queue.push(val);
  }

  popFront(): number {
    return this.queue.length ? this.queue.shift()! : -1;
  }

  popMiddle(): number {
    if (this.queue.length === 0) return -1;
    const middle = Math.floor((this.queue.length - 1) / 2);
    return this.queue.splice(middle, 1)[0];
  }

  popBack(): number {
    return this.queue.length ? this.queue.pop()! : -1;
  }
}

/**
 * 队列：FIFO
 * 通义灵码给了更粗暴的解法，且耗时更小
 */

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
