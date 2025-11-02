/*
 * [933] 最近的请求次数
 * https://leetcode.cn/problems/number-of-recent-calls/description/
 */

class RecentCounter {
  queue: number[];
  constructor() {
    this.queue = [];
  }

  ping(t: number): number {
    this.queue.push(t);

    while (this.queue[0] < t - 3000) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/**
 *
 */

export {};
