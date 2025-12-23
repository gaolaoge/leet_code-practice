/*
 * [1930] 长度为 3 的不同回文子序列
 * https://leetcode.cn/problems/unique-length-3-palindromic-subsequences/description/
 */

function countPalindromicSubsequence(s: string): number {
  let count = 0;
  if (s.length < 3) return count;

  let words = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const set = new Set();

    const firstIndex = s.indexOf(word);
    const lastIndex = s.lastIndexOf(word);

    if (firstIndex > -1 && lastIndex > -1 && firstIndex + 1 < lastIndex) {
      const subStr = s.slice(firstIndex + 1, lastIndex);
      for (let key of subStr) {
        set.add(key);
      }
      count += set.size;
      set.clear();
    }
  }

  return count;
}

/**
 * 不读题害死人呐
 */

export {};
