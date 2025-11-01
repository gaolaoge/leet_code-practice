/*
 * [1109] 航班预订统计
 * https://leetcode.cn/problems/corporate-flight-bookings/
 */

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
function corpFlightBookings(bookings: number[][], n: number): number[] {
  const pre = new Array(n + 1).fill(0);

  for (const [l, r, seats] of bookings) {
    pre[l - 1] += seats;
    pre[r] -= seats;
  }

  const res: number[] = [];
  let run = 0;
  for (let i = 0; i < n; i++) {
    run += pre[i];
    res[i] = run;
  }

  return res;
}

/**
 * 一维差分
 */

function corpFlightBookings2(bookings: number[][], n: number): number[] {
  const counts: number[] = new Array(n).fill(0);

  for (let i = 0; i < bookings.length; i++) {
    const [first, end, seats] = bookings[i];
    for (let j = first; j <= end; j++) {
      counts[j - 1] += seats;
    }
  }

  return counts.map((count) => (count === undefined ? 0 : count));
}

export {};
