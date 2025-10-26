/*
 * [3] 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s: string): number {
  if (s.length < 2) return s.length;

  const window = new Map();

  let left = 0;
  let right = 0;
  let res = 0;

  while (right < s.length) {
    const word = s[right];
    if (window.has(word)) {
      let unValid = word;
      window.set(word, 2);
      while (left <= right) {
        const leftWord = s[left];
        left++;
        if (window.get(leftWord) === 1) {
          window.delete(leftWord);
        } else {
          window.set(leftWord, window.get(leftWord) - 1);
        }
        if (unValid === leftWord) {
          right++;
          break;
        }
      }
    } else {
      window.set(word, 1);
      const len = right - left + 1;
      if (res < len) res = len;
      right++;
    }
  }

  return res;
};

/**
 *
 */

export {};
