/*
 * [303] 区域和检索 - 数组不可变
 * https://leetcode.cn/problems/range-sum-query-immutable/description/
 */

class NumArray {
  prefixNums: number[] = [0];
  constructor(nums: number[]) {
    for (let i = 0; i < nums.length; i++) {
      this.prefixNums[i] = this.prefixNums[i - 1] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefixNums[right] - this.prefixNums[left];
  }
}

/**
 *
 */

export {};
