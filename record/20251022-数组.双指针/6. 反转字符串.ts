/*
 * [344] 反转字符串
 * https://leetcode.cn/problems/reverse-string/description/
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s: string[]): void {
  if (s.length < 2) return;
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

/**
 * 左右针
 */

export {};
