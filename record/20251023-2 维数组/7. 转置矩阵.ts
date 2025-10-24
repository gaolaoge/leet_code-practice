/*
 * @lc app=leetcode.cn id=867 lang=javascript
 * @lcpr version=30300
 *
 * [867] 转置矩阵
 * https://leetcode.cn/problems/transpose-matrix/
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix: number[][]): number[][] {
  if (matrix?.length === 0) return matrix;

  const rows = matrix.length;
  const cols = matrix[0].length;

  const res: number[][] = Array.from({ length: cols }, () =>
    Array(rows).fill(0)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      res[j][i] = matrix[i][j];
    }
  }

  return res;
};

/**
 *
 */

export {};
