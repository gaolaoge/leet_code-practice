/**
 * 3751.范围内总波动值 I
 * https://leetcode.cn/problems/total-waviness-of-numbers-in-range-i/description/
 */

function totalWaviness(num1: number, num2: number): number {
  if (num1 < 100) num1 = 100;
  if (num2 < 100) num2 = 100;

  let time = 0;
  let curr = num1;
  while (curr <= num2) {
    const val = String(curr).split('').map(Number);
    for (let i = 1; i < val.length - 1; i++) {
      const isPeak = val[i - 1] < val[i] && val[i] > val[i + 1];
      const isValley = val[i - 1] > val[i] && val[i] < val[i + 1];
      if (isPeak || isValley) time++;
    }
    curr++;
  }

  return time;
}

/**
 * 暴力枚举
 */

export {};
