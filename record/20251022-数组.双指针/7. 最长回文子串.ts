/*
 * [5] 最长回文子串
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s: string): string {
  const len = s.length;
  if (len < 2) return s;

  let left;
  let right;
  let maxPalindromStr = '';
  let maxStrLen = 0;

  const searchPalindrome = (index: number, isDoubleMid: boolean): string => {
    let res = '';
    left = index;
    right = index + (isDoubleMid ? 1 : 0);

    while (0 <= left && right < len) {
      if (s[left] !== s[right]) break;
      else {
        left--;
        right++;
      }
    }

    return (res = s.slice(left + 1, right - 1)); // 省去 while 内遍历追加 res 消耗
  };

  for (let i = 0; i < len; i++) {
    const singleRes = searchPalindrome(i, false);
    const doubleRes = searchPalindrome(i, true);

    if (singleRes.length > maxStrLen) {
      maxPalindromStr = singleRes;
      maxStrLen = singleRes.length;
    }

    if (doubleRes.length > maxStrLen) {
      maxPalindromStr = doubleRes;
      maxStrLen = doubleRes.length;
    }
  }

  return maxPalindromStr;
};

/**
 * 遍历 + 基于中心扩展 + 双指针
 */

export {};
