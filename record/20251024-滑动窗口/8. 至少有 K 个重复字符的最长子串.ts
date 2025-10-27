/*
 * [395] 至少有 K 个重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/description/
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s: string, k: number): number {
  let maxLens = 0;
  for (let i = 1; i <= new Set(s).size; i++) {
    maxLens = Math.max(maxLens, longestSubstringUniqueChars(s, k, i));

    if (maxLens === s.length) {
      break;
    }
  }
  return maxLens;
};

const longestSubstringUniqueChars = (
  s: string,
  k: number,
  uniqueCount: number
): number => {
  const window = new Map();
  let left = 0;
  let right = 0;
  let maxCount = 0;
  let valid = 0;

  while (right < s.length) {
    const word = s[right];
    right++;
    window.set(word, (window.get(word) || 0) + 1);
    if (window.get(word) === k) {
      valid++;
    }
    while (window.size > uniqueCount) {
      const tempWord = s[left];
      left++;
      window.set(tempWord, window.get(tempWord) - 1);
      if (window.get(tempWord) === k - 1) {
        valid--;
      }
      if (window.get(tempWord) === 0) {
        window.delete(tempWord);
      }
    }
    if (window.get(word) >= k && valid === uniqueCount) {
      maxCount = Math.max(maxCount, right - left);
    }
  }
  return maxCount;
};

export {};
