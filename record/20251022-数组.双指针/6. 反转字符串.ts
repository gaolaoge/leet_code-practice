/*
 * @lc app=leetcode.cn id=344 lang=javascript
 * @lcpr version=30300
 *
 * [344] 反转字符串
 * https://leetcode.cn/problems/reverse-string/description/
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s: string[]): void {
  if (s.length < 2) return;
  let a = 0;
  let b = s.length - 1;
  while (a < b) {
    [s[a], s[b]] = [s[b], s[a]];
    a++;
    b--;
  }
};

/**
 *
 */

export {};
