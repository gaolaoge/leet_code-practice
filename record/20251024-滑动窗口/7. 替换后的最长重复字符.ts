/*
 * [424] 替换后的最长重复字符
 * https://leetcode.cn/problems/longest-repeating-character-replacement/description/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s: string, k: number): number {
  if (k >= s.length) return s.length;

  let left = 0;
  let right = 0;
  let maxCount = 0; // 最大频次
  let maxLen = 0; // 最大长度
  const window = new Map();

  while (right < s.length) {
    const word = s[right];
    window.set(word, (window.get(word) || 0) + 1);
    maxCount = Math.max(maxCount, window.get(word));
    right++;

    while (right - left - maxCount > k) {
      const newWord = s[left];
      window.set(newWord, (window.get(newWord) || 0) - 1);
      left++;
    }

    // 关键：每次都要更新最大长度
    maxLen = Math.max(maxLen, right - left);
  }

  return maxLen; // 返回历史最大值
};

/**
 * 滑动窗口
 * 主要字符：窗口内出现次数最多的字符
 * 窗口内最多有k个不同的字符
 * 找到最长的窗口，其"非主要字符"的个数 ≤ k
 */

export {};
