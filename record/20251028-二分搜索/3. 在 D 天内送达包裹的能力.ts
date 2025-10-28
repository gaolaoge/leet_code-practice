/*
 * [1011] 在 D 天内送达包裹的能力
 * https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/description/
 */

// @lc code=start
/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights: number[], days: number): number {
  let left = Math.max(...weights);
  let right = weights.reduce((count, curr) => count + curr, 0);

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (days < canShip(mid, weights)) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const canShip = (unit: number, weights: number[]): number => {
  let needDays = 1;
  let index = 0;
  let currWeight = 0;

  while (index < weights.length) {
    currWeight += weights[index];

    if (currWeight > unit) {
      currWeight = weights[index];
      needDays++;
    }

    index++;
  }

  return needDays;
};

/**
 * 二分答案设定 left right 范围 + 贪心算法校验是否满足条件
 * 二分答案：1 种算法技巧，它不是搜索数组中的元素，而是搜索答案本身。
 */

export {};
