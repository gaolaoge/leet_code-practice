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

  const need = new Map();
  const window = new Map();

  for (let i = 0; i < t.length; i++) {
    if (!need.has(t[i])) {
      need.set(t[i], 1);
    } else {
      need.set(t[i], need.get(t[i]) + 1);
    }
  }

  const variableValue = (): boolean => {
    for (let [key, sum] of need) {
      if (!window.has(key) || window.get(key) < sum) {
        return false;
      }
    }
    return true;
  };

  const variableMinLens = (newStr: string): boolean => {
    return res.length === 0 || newStr.length < res.length;
  };

  const setWindowMap = (newStr: string): void => {
    window.clear();
    for (let i = 0; i < newStr.length; i++) {
      if (!window.has(newStr[i])) {
        window.set(newStr[i], 1);
      } else {
        window.set(newStr[i], window.get(newStr[i]) + 1);
      }
    }
  };

  let left = 0;
  let right = 0;

  while (right <= s.length) {
    const newStr = s.slice(left, right);
    setWindowMap(newStr);
    if (variableValue()) {
      if (variableMinLens(newStr)) {
        res = newStr;
      }
      left++;
    } else {
      right++;
    }
  }

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

var minWindow3 = function (s: string, t: string): string {
  let res = '';
  if (s.length < t.length) return res;

  // 1. 统计t中字符频次
  const need = new Map<string, number>();
  for (let char of t) {
    need.set(char, (need.get(char) || 0) + 1);
  }

  // 2. 维护窗口状态
  const window = new Map<string, number>();
  let left = 0,
    right = 0;
  let valid = 0; // 窗口中满足条件的字符种类数
  let start = 0,
    len = Infinity;

  // 3. 滑动窗口
  while (right < s.length) {
    // 扩展右边界
    const c = s[right];
    right++;

    if (need.has(c)) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) {
        valid++;
      }
    }

    // 收缩左边界
    while (valid === need.size) {
      // 更新结果
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      const d = s[left];
      left++;

      if (need.has(d)) {
        if (window.get(d) === need.get(d)) {
          valid--;
        }
        window.set(d, (window.get(d) || 0) - 1);
      }
    }
  }

  return len === Infinity ? '' : s.substring(start, start + len);
};

/**
 * 滑动窗口
 * 优化性能：增量更新
 */

export {};
