/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=30300
 *
 * [14] 最长公共前缀
 * https://leetcode.cn/problems/longest-common-prefix/description/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 1) return strs[0];

  let res = '';
  let index = 0;

  while (true) {
    let val = strs[0][index];
    let done = false;
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][index] != val || val === undefined) {
        done = true;
        break;
      }
    }
    if (done) {
      break;
    }
    res += val;
    index++;
  }

  return res;
};

/**
 *
 */

export {};

var longestCommonPrefix2 = function (strs: string[]): string {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];

  const firstStr = strs[0];

  for (let i = 0; i < firstStr.length; i++) {
    const char = firstStr[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return firstStr.substring(0, i);
      }
    }
  }

  return firstStr;
};
