/*
 * @lc app=leetcode.cn id=26 lang=javascript
 * @lcpr version=20004
 *
 * [26] 删除有序数组中的重复项
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums.length
  }
  let fast = 1
  let low = 1
  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[low] = nums[fast]
      low++
    }
    fast++
  }
  return low
}

// 暴力
var _removeDuplicates = function (nums) {
  if (nums.length < 2) {
    return nums.length
  }
  let index = 1
  while (index < nums.length) {
    if (nums[index] === nums[index - 1]) {
      nums.splice(index, 1)
    } else {
      index++
    }
  }
  return nums.length
}

// @lc code=end

/*
// @lcpr case=start
// [1,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,1,1,1,2,2,3,3,4]\n
// @lcpr case=end

 */
