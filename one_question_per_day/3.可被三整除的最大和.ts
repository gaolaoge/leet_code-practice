/**
 * 1262. 可被三整除的最大和
 * https://leetcode.cn/problems/greatest-sum-divisible-by-three/description/
 */

function maxSumDivThree(nums: number[]): number {
  const dp = [0, -Infinity, -Infinity];

  for (let num of nums) {
    const remainder = num % 3;
    const prevDp = [...dp];
    switch (remainder) {
      case 0:
        dp[0] = prevDp[0] + num;
        dp[1] = Math.max(prevDp[1], prevDp[1] + num);
        dp[2] = prevDp[2] + num;
        break;
      case 1:
        dp[0] = Math.max(prevDp[0], prevDp[2] + num);
        dp[1] = Math.max(prevDp[1], prevDp[0] + num);
        dp[2] = Math.max(prevDp[2], prevDp[1] + num);
        break;
      case 2:
        dp[0] = Math.max(prevDp[0], prevDp[1] + num);
        dp[1] = Math.max(prevDp[1], prevDp[2] + num);
        dp[2] = Math.max(prevDp[2], prevDp[0] + num);
        break;
    }
  }

  return dp[0];
}

/**
 * 状态机：数学模型，用来描述系统在不同状态间的转换
 * 动态规划：通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法，是状态机的 1 种应用形式
 *
 * 现有和 sum（假设 sum % 3 = i），然后加上一个新数字 num（假设 num % 3 = j）时：
 * (new_sum) % 3 = (sum + num) % 3 = (sum % 3 + num % 3) % 3 = (i + j) % 3
 */

export {};
