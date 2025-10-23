/*
 * @lc app=leetcode.cn id=59 lang=javascript
 * @lcpr version=30300
 *
 * [59] 螺旋矩阵 II
 * https://leetcode.cn/problems/spiral-matrix-ii/
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n: number): number[][] {
  const res: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = n - 1;

  let index = 1;

  while (left <= right && top <= bottom) {
    // 向右
    for (let j = left; j <= right; j++) {
      res[top][j] = index++;
    }
    top++;
    // 向下
    for (let i = top; i <= bottom; i++) {
      res[i][right] = index++;
    }
    right--;
    // 向左
    for (let j = right; j >= left; j--) {
      res[bottom][j] = index++;
    }
    bottom--;
    // 向上
    console.log(res);
    for (let i = bottom; i >= top; i--) {
      console.log(i, left);
      res[i][left] = index++;
    }
    left++;
  }
  return res;
};

generateMatrix(3);

/**
 *
 */

export {};
