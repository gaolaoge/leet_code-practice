/*
 * [220] 存在重复元素 III
 * https://leetcode.cn/problems/contains-duplicate-iii/description/
 */

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (
  num: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  const bucket = new Map();

  for (let i = 0; i < num.length; i++) {
    const bucketId = getBucketId(num[i], valueDiff);

    if (bucket.has(bucketId)) {
      return true;
    }

    if (bucket.has(bucketId + 1)) {
      if (Math.abs(bucket.get(bucketId + 1) - num[i]) <= valueDiff) {
        return true;
      }
    }

    if (bucket.has(bucketId - 1)) {
      if (Math.abs(bucket.get(bucketId - 1) - num[i]) <= valueDiff) {
        return true;
      }
    }

    bucket.set(bucketId, num[i]);

    if (i >= indexDiff) {
      const oldBacketId = getBucketId(num[i - indexDiff], valueDiff);
      bucket.delete(oldBacketId);
    }
  }
  return false;
};

const getBucketId = (value: number, size: number): number => {
  return Math.floor(value / (size + 1));
};

/**
 * 滑动窗口 + 桶排序
 *
 * 桶排序：
 */
