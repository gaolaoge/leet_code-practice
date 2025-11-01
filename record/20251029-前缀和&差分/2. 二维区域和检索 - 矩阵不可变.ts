/*
 * [304] 二维区域和检索 - 矩阵不可变
 * https://leetcode.cn/problems/range-sum-query-2d-immutable/description/
 */

class NumMatrix {
  private pre: number[][];

  constructor(matrix: number[][]) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    this.pre = Array.from({ length: rows + 1 }, () => Array(cols + 1).fill(0));

    for (let i = 0; i < rows; i++) {
      let rowPrefix = 0;
      for (let j = 0; j < cols; j++) {
        rowPrefix += matrix[i][j];
        this.pre[i + 1][j + 1] = this.pre[i][j + 1] + rowPrefix;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    return (
      this.pre[row2 + 1][col2 + 1] +
      this.pre[row1 + 1][col1 + 1] -
      this.pre[row2][col2 + 1] -
      this.pre[row2 + 1][col2]
    );
  }
}

/**∏
 * 预构建 1 个 2 维数组和数据 PRE ，尺寸为 m+1 和 n+1 ，初始化为 0 ，
 */

export {};
