/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30300
 *
 * [5] 最长回文子串
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s: string): string {
  if (s.length < 2) return s;
  let maxStr = s[0];
  let a = 0;
  let b = 1;
  let res = '';

  while (a < s.length) {
    b = 1;
    if (s[a - b + 1] === s[a + b]) {
      while (a + b < s.length && a - b + 1 >= 0) {
        if (s[a - b + 1] === s[a + b]) {
          res = s.slice(a - b + 1, a + b + 1);
          if (res.length > maxStr.length) {
            maxStr = res;
          }
          b++;
        } else {
          break;
        }
      }
    }
    b = 1;
    if (s[a - b] === s[a + b]) {
      while (a + b < s.length && a - b >= 0) {
        if (s[a - b] === s[a + b]) {
          res = s.slice(a - b, a + b + 1);
          if (res.length > maxStr.length) {
            maxStr = res;
          }
          b++;
        } else {
          break;
        }
      }
    }
    a++;
  }
  return maxStr;
};

export {};
