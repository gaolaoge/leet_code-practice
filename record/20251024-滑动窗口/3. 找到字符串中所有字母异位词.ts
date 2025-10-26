/*
 * [438] 找到字符串中所有字母异位词
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s: string, p: string): number[] {
  const res: number[] = [];

  if (p.length > s.length) return res;

  const need = new Map();
  for (let word of p) {
    need.set(word, (need.get(word) || 0) + 1);
  }

  const window = new Map();
  let valid = 0;
  let left = 0;
  let right = 0;

  while (right < p.length) {
    const word = s[right];
    if (need.has(word)) {
      window.set(word, (window.get(word) || 0) + 1);
      if (window.get(word) === need.get(word)) {
        valid++;
      }
    }
    right++;
  }

  if (valid === need.size) {
    res.push(left);
  }

  while (right < s.length) {
    const leftWord = s[left];
    left++;
    if (need.has(leftWord)) {
      if (window.get(leftWord) === need.get(leftWord)) {
        valid--;
      }
      window.set(leftWord, window.get(leftWord) - 1);
    }

    const rightWord = s[right];
    right++;

    if (need.has(rightWord)) {
      window.set(rightWord, (window.get(rightWord) || 0) + 1);
      if (window.get(rightWord) === need.get(rightWord)) {
        valid++;
      }
    }

    if (valid === need.size) {
      res.push(left);
    }
  }

  return res;
};

/**
 *
 */

export {};
