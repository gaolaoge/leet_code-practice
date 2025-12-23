/**
 * 1018. 可被 5 整除的二进制前缀
 * https://leetcode.cn/problems/binary-prefix-divisible-by-5/description
 */

function prefixesDivBy5(nums: number[]): boolean[] {
  const res: boolean[] = new Array(nums.length).fill(true);
  let curr = 0; // 只保留 个位

  for (let i = 0; i < nums.length; i++) {
    curr = curr * 2 + nums[i];
    res[i] = curr % 5 === 0;
    if (curr > 9) curr %= 10;
  }

  return res;
}

/**
 * 二进制值每追加 1 位，体现在 10 进制值上就是乘以 2 崽追加 1 或 0 ；
 * 当前题目要求判断是否可以被 5 整除，那只看当前值的 个位就可以了；
 */

export {};
