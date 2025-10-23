/*
 * @lc app=leetcode.cn id=48 lang=javascript
 * @lcpr version=30300
 *
 * [48] 旋转图像
 * https://leetcode.cn/problems/rotate-image/description/
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix: number[][]): void {
  const len = matrix.length;

  // 对角线映射翻转
  for (let i = 0; i <= len - 1; i++) {
    for (let j = i; j <= len - 1; j++) {
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }

  // 垂直映射翻转
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < Math.floor(len / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][len - j - 1];
      matrix[i][len - j - 1] = temp;
    }
  }
};

const params = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(params);

/**
 * 矩阵旋转 90 度，思路是先沿着对角线映射对称，然后再水平映射翻转
 */

export {};
