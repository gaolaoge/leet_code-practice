/*
 * [2073] 买票需要的时间
 * https://leetcode.cn/problems/time-needed-to-buy-tickets/description/
 */

function timeRequiredToBuy(tickets: number[], k: number): number {
  let time = 0;
  const target = tickets[k];

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      time += Math.min(target, tickets[i]);
    } else {
      time += Math.min(target - 1, tickets[i]);
    }
  }

  return time;
}

/**
 *
 */

function timeRequiredToBuy2(tickets: number[], k: number): number {
  const queue: [number, number][] = [];
  let time = 0;

  for (let i = 0; i < tickets.length; i++) {
    queue.push([i, tickets[i]]);
  }

  while (queue.length > 0) {
    let [index, ticket] = queue.shift()!;
    if (ticket > 0) {
      time++;
      ticket--;
    }

    if (ticket === 0 && index === k) return time;

    queue.push([index, ticket]);
  }

  return time;
}

export {};
