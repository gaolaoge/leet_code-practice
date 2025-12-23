/**
 * 2054. 两个最好的不重叠活动
 * https://leetcode.cn/problems/two-best-non-overlapping-events/
 */

function maxTwoEvents(events: number[][]): number {
  events.sort((a, b) => a[0] - b[0]);
  const lens = events.length;

  let maxValue = 0;

  for (let i = 0; i < lens; i++) {
    let [_startTime, endTime, value] = events[i];
    let currMaxAfterVal = 0;

    let j = i + 1;
    while (j < lens) {
      let [afterStartTime, _afterEndTime, afterValue] = events[j];
      if (endTime < afterStartTime) {
        currMaxAfterVal = Math.max(currMaxAfterVal, afterValue);
      }
      j++;
    }
    maxValue = Math.max(maxValue, value + currMaxAfterVal);
  }

  return maxValue;
}

export {};

/**
 * 1. 排序
 * 2. 最大前缀
 * 3. 二分
 */
