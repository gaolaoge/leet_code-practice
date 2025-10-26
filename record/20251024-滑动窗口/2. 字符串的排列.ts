/*
 * [567] 字符串的排列
 * https://leetcode.cn/problems/permutation-in-string/description/
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1: string, s2: string): boolean {
  if (s1.length > s2.length) return false;

  const need = new Map();
  for (let word of s1) {
    need.set(word, (need.get(word) || 0) + 1);
  }

  const window = new Map();
  let valid = 0;
  let left = 0;
  let right = 0;

  // 1. 初始化窗口
  while (right < s1.length) {
    const word = s2[right];
    if (need.has(word)) {
      window.set(word, (window.get(word) || 0) + 1);
      if (need.get(word) === window.get(word)) {
        valid++;
      }
    }

    right++;
  }

  // 2. 判断当前是否符合预期
  if (valid === need.size) return true;

  // 3. 移动窗口
  while (right < s2.length) {
    const leftWord = s2[left];
    if (need.has(leftWord)) {
      if (need.get(leftWord) === window.get(leftWord)) {
        valid--;
      }
      window.set(leftWord, window.get(leftWord) - 1);
    }
    left++;

    const rightWord = s2[right];
    if (need.has(rightWord)) {
      window.set(rightWord, (window.get(rightWord) || 0) + 1);
      if (need.get(rightWord) === window.get(rightWord)) {
        valid++;
      }
    }
    right++;
    if (valid === need.size) return true;
  }

  return false;
};

/**
 * 滑动窗口
 */
