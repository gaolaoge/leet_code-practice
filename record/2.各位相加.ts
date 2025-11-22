/**
 * 258.各位相加
 * https://leetcode.cn/problems/add-digits/description/
 */

function addDigits(num: number): number {
  if (num < 10) return num;
  return addDigits(
    String(num)
      .split('')
      .reduce((count, curr) => count + Number(curr), 0)
  );
}

/**
 * 1. 递归
 * 2. 循环
 * 3. 数学公式：模9运算
 */

export {};

function addDigits2(num: number): number {
  if (num < 10) return num;
  while (num >= 10) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    num = sum;
  }
  return num;
}
