/*
 * [54] 螺旋矩阵
 * https://leetcode.cn/problems/spiral-matrix/description/
 */

enum Direction {
  LEFT,
  RIGHT,
  TOP,
  BOTTOM,
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length;
  const n = matrix[0].length;
  const res: number[] = [];
  let len = 0;
  let topLine = 0;
  let bottomLine = m - 1;
  let leftLine = 0;
  let rightLine = n - 1;

  let direction: Direction = Direction.RIGHT;

  let colIndex = 0;
  let rowIndex = 0;

  while (len < m * n) {
    len++;
    res.push(matrix[colIndex][rowIndex]);
    switch (direction) {
      case Direction.RIGHT:
        if (rowIndex < rightLine) {
          rowIndex++;
        } else {
          topLine++;
          colIndex++;
          direction = Direction.BOTTOM;
        }
        break;
      case Direction.BOTTOM:
        if (colIndex < bottomLine) {
          colIndex++;
        } else {
          rightLine--;
          rowIndex--;
          direction = Direction.LEFT;
        }
        break;
      case Direction.LEFT:
        if (rowIndex > leftLine) {
          rowIndex--;
        } else {
          bottomLine--;
          colIndex--;
          direction = Direction.TOP;
        }
        break;
      case Direction.TOP:
        if (colIndex > topLine) {
          colIndex--;
        } else {
          leftLine++;
          rowIndex++;
          direction = Direction.RIGHT;
        }
        break;
    }
  }
  return res;
}

function spiralOrder2(matrix: number[][]): number[] {
  const res: number[] = [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    // 向右
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    top++;

    // 向下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;
    // 向左
    // 针对矩阵 m != n 情况
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        res.push(matrix[bottom][j]);
      }
      bottom--;
    }
    // 向上
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}

/**
 * 遍历
 */

export {};
