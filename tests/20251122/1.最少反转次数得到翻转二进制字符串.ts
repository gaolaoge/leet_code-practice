/**
 * 100901.最少反转次数得到翻转二进制字符串
 * https://leetcode.cn/problems/minimum-number-of-flips-to-reverse-binary-string/description/
 */

function minimumFlips(n: number): number {
  let time = 0;

  const binaryVal = n.toString(2);
  let left = 0;
  let right = binaryVal.length - 1;

  while (left < right) {
    if (binaryVal[left] !== binaryVal[right]) time++;
    left++;
    right--;
  }

  return time * 2;
}

/**
 * 位运算 更快
 */

export {};
