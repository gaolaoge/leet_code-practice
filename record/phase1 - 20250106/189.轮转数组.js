/*
 * @lc app=leetcode.cn id=189 lang=javascript
 * @lcpr version=20004
 *
 * [189] 轮转数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const time = nums.length < k ? k % nums.length : k
  const right = nums.splice(nums.length - time, time)
  nums.unshift(...right)
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5,6,7]\n3\n
// @lcpr case=end

// @lcpr case=start
// [-1,-100,3,99]\n2\n
// @lcpr case=end

 */
