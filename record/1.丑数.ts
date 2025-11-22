/**
 * 263.丑数
 * https://leetcode.cn/problems/ugly-number/description/
 */

function isUgly(n: number): boolean {
  if (n === 0) return false;
  for (let number of [2, 3, 5]) {
    while (n % number === 0) n /= number;
  }
  return n === 1;
}

/**
 *
 */

export {};
