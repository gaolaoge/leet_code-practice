/*
 * [1329] 将矩阵按对角线排序
 * https://leetcode.cn/problems/sort-the-matrix-diagonally/
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
function diagonalSort(mat: number[][]): number[][] {
  const row = mat.length;
  const col = mat[0].length;

  // 提取对角线排序函数
  const sortDiagonal = (startRow: number, startCol: number) => {
    const list: number[] = [];
    let x = startRow,
      y = startCol;

    // 收集
    while (x < row && y < col) {
      list.push(mat[x][y]);
      x++;
      y++;
    }

    // 排序
    list.sort((a, b) => a - b);

    // 填充
    x = startRow;
    y = startCol;
    let index = 0;
    while (x < row && y < col) {
      mat[x][y] = list[index];
      x++;
      y++;
      index++;
    }
  };

  // 处理左边界（向上）
  for (let j = row - 1; j >= 0; j--) {
    sortDiagonal(j, 0);
  }

  // 处理上边界（向右，跳过 (0,0)）
  for (let i = 1; i < col; i++) {
    sortDiagonal(0, i);
  }

  return mat;
}

/**
 *
 */
