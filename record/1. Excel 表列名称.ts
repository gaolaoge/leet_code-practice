/**
 * 168. Excel 表列名称
 * https://leetcode.cn/problems/excel-sheet-column-title/description/
 */

function convertToTitle(columnNumber: number): string {
  let res = '';

  while (columnNumber > 0) {
    columnNumber--;

    res = String.fromCharCode('A'.charCodeAt(0) + (columnNumber % 26)) + res;

    columnNumber = Math.floor(columnNumber / 26);
  }

  return res;
}

/**
 * 乱糟糟
 */

export {};
