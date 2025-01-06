/*
 * @lc app=leetcode.cn id=88 lang=javascript
 * @lcpr version=20004
 *
 * [88] 合并两个有序数组
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 正向遍历插入
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m)
  let index = 0
  while (nums2.length) {
    if (nums2[0] <= nums1[index] || nums1[index] === undefined) {
      nums1.splice(index, 0, nums2.shift())
    } else {
      index++
    }
  }
}

// 逆向遍历插入
function _merge(nums1, m, nums2, n) {
  let lastIndex = m + n - 1
  let mIndex = m - 1
  let nIndex = n - 1
  while (lastIndex >= 0) {
    if (nums1[mIndex] <= nums2[nIndex] || mIndex < 0) {
      nums1[lastIndex] = nums2[nIndex]
      nIndex--
    } else {
      nums1[lastIndex] = nums1[mIndex]
      mIndex--
    }
    lastIndex--
  }
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n[]\n0\n
// @lcpr case=end

// @lcpr case=start
// [0]\n0\n[1]\n1\n
// @lcpr case=end

 */
