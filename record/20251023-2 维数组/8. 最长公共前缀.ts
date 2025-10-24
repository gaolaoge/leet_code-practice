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
