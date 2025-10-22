/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30300
 *
 * [125] 验证回文串
 * https://leetcode.cn/problems/valid-palindrome/description/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s: string): boolean {
  if (s.length < 2) return true;
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    if (!/[A-Za-z0-9]/.test(s[start])) {
      start++;
    } else if (!/[A-Za-z0-9]/.test(s[end])) {
      end--;
    } else if (s[start].toLowerCase() === s[end].toLowerCase()) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

export {};

/**
 * 正则中 ❌ 错误：[A-z] 包含了 A-Z 之间和 a-z 之间的所有字符：A-Z, [, \, ], ^, _, `, a-z
 * 正确：[A-Za-z0-9]
 */
