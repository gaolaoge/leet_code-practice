/*
 * [76] 最小覆盖子串
 * https://leetcode.cn/problems/minimum-window-substring/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s: string, t: string): string {
  let res = '';
  if (s.length < t.length) return res;

  const need = new Map();
  const window = new Map();

  for (let tt of t) {
    if (need.has(tt)) {
      need.set(tt, need.get(tt) + 1);
    } else {
      need.set(tt, 1);
    }
  }

  const variable = (): boolean => {
    for (let [key, count] of need) {
      if (!window.get(key) || window.get(key) < count) {
        return false;
      }
    }
    return true;
  };

  const isSmallerStr = (newStr: string): boolean => {
    return res.length === 0 || newStr.length < res.length;
  };

  const setWindowMap = (newStr: string): void => {
    window.clear();
    for (let ss of newStr) {
      if (window.has(ss)) {
        window.set(ss, window.get(ss) + 1);
      } else {
        window.set(ss, 1);
      }
    }
  };

  let left = 0;

  while (left <= s.length - t.length) {
    let right = left + t.length - 1;
    // 注意：右开区间
    while (right < s.length + 1) {
      if (res.length > 0 && right - left > res.length) {
        break;
      }
      const tempStr = s.slice(left, right);
      setWindowMap(tempStr);
      if (variable() && isSmallerStr(tempStr)) {
        res = tempStr;
        break;
      }
      right++;
    }
    left++;
  }

  return res;
};

/**
 * 左指针为 left ，右指针为 right ，
 * left 从 0 开始依次遍历，期间 right 从 left 加 t.length 开始依次遍历，
 * 判断左右区间中内容是否符合预期，符合且 length 小于 res.length 时更新 res , 结束当前 left 遍历，left ++
 * 结束后返回 res
 */

var minWindow2 = function (s: string, t: string): string {
  let res = '';
  if (s.length < t.length) return res;

  return res;
};

/**
 * 滑动窗口
 * 1. 初始化时 left = 0 right = 0 ，开始遍历；
 * 2. 不断 right++ ，判断区间是否符合预期；
 * 3. 若成功符合预期，开始 left++ ，判断是否符合预期；
 * 4. 直到不再符合预期，继续 right++ ，重复如上；
 * 5. 直到 right 超出 s.length ，结束遍历，
 * 6. 返回 res
 */

export {};
