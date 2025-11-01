/*
 * [1094] 拼车
 * https://leetcode.cn/problems/car-pooling/description/
 */

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
function carPooling(trips: number[][], capacity: number): boolean {
  let maxSite = 0;
  for (const [, , to] of trips) {
    maxSite = Math.max(maxSite, to);
  }
  const pre = new Array(maxSite).fill(0);
  for (const [_numPassengers, _from, to] of trips) {
    pre[_from] += _numPassengers;
    pre[to] -= _numPassengers;
  }
  let i = 0;
  let curr = 0;
  while (i < maxSite) {
    curr += pre[i];
    if (curr > capacity) {
      return false;
    }
    i++;
  }
  return true;
}

/**
 *
 */

export {};
