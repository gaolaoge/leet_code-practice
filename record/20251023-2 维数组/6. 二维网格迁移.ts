/*
 * @lc app=leetcode.cn id=1260 lang=javascript
 * @lcpr version=30300
 *
 * [1260] 二维网格迁移
 * https://leetcode.cn/problems/shift-2d-grid/
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
function shiftGrid(grid: number[][], k: number): number[][] {
  if (grid[0].length === 0) return grid;
  const len = grid[0].length;

  // 2 维数组 拍平 为 1 维数组
  const temp = grid.reduce((accumulator: number[], curr: number[]) => {
    accumulator.push(...curr);
    return accumulator;
  }, [] as number[]);

  const realLen = temp.length;

  if (k % realLen === 0) return grid;

  // 追加需要移动部分的内容
  const realK = k % realLen;
  temp.push(...temp);

  // 前后针移动
  let left = 0;
  let right = realLen - realK;
  while (right <= temp.length) {
    temp[left] = temp[right];
    left++;
    right++;
  }
  // 截断 1 维数组
  temp.length = realLen;

  // 1 维数组 转为 2 维数组
  let index = 0;
  const res: number[][] = [];
  let row: number[] = [];

  while (index < realLen) {
    if ((index + 1) % len === 0) {
      console.log('temp[index]2: ', temp[index]);
      row.push(temp[index]);
      res.push(row);
      row = [];
    } else {
      console.log('temp[index]: ', temp[index]);
      row.push(temp[index]);
    }
    index++;
  }

  return res;
}

function shiftGrid2(grid: number[][], k: number): number[][] {
  if (grid.length === 0) return grid;

  const col = grid[0].length;
  const row = grid.length;
  const total = col * row;

  k = k % total;

  if (k === 0) return grid;

  const res: number[][] = Array.from({ length: row }, () => Array(col).fill(8));
  let i = 0;

  while (i < row) {
    let j = 0;
    while (j < col) {
      const oldIndex = i * col + j;
      const newIndex = (oldIndex + k) % total;
      const newRow = Math.floor(newIndex / col);
      const newCol = newIndex % col;
      res[newRow][newCol] = grid[i][j];
      j++;
    }
    i++;
  }

  return res;
}

/**
 *
 */
