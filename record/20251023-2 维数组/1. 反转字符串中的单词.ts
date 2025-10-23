/*
 * @lc app=leetcode.cn id=151 lang=javascript
 * @lcpr version=30300
 *
 * [151] 反转字符串中的单词
 * https://leetcode.cn/problems/reverse-words-in-a-string/description/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s: string): string {
  return s.split(' ').reverse().filter(Boolean).join(' ');
};

var reverseWords2 = function (s: string): string {
  const matrix: string[][] = [];
  let row = [];

  for (let word of s) {
    if (word === ' ') {
      if (row.length > 0) {
        matrix.push(row);
        row = [];
      }
    } else {
      row.push(word);
    }
  }
  if (row.length > 0) {
    matrix.push(row);
    row = [];
  }

  let left = 0;
  let right = matrix.length - 1;
  while (left < right) {
    [matrix[left], matrix[right]] = [matrix[right], matrix[left]];
    left++;
    right--;
  }

  let res = '';

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      res += matrix[i][j];
    }
    if (i < matrix.length - 1) {
      res += ' ';
    }
  }

  return res;
};

/**
 *
 */
