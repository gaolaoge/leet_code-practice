/*
 * @lc app=leetcode.cn id=215 lang=javascript
 * @lcpr version=20004
 *
 * [215] 数组中的第K个最大元素
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 快速选择，超时了
var findKthLargest = function (nums, k) {
  const n = nums.length
  const targetIndex = n - k
  const partition = (left, right) => {
    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
    let pivot = nums[pivotIndex]
    ;[nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]]

    let i = left
    for (let j = left; j < right; j++) {
      if (nums[j] < pivot) {
        ;[nums[j], nums[i]] = [nums[i], nums[j]]
        i++
      }
    }
    ;[nums[right], nums[i]] = [nums[i], nums[right]]
    console.log("nums: ", nums)
    console.log("i: ", i)
    return i
  }

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const pivotIndex = partition(left, right)
    if (pivotIndex === targetIndex) {
      return nums[pivotIndex]
    } else if (pivotIndex < targetIndex) {
      left = pivotIndex + 1
    } else {
      right = pivotIndex - 1
    }
  }

  return -1
}

//
var _findKthLargest = function (nums, k) {
  let left = 0
  let right = nums.length - 1

  const partition = (left, right) => {
    let mid = nums[left]
    let l = left + 1
    let r = right
    while (l <= r) {
      if (nums[l] < mid && nums[r] > mid) {
        ;[nums[l], nums[r]] = [nums[r], nums[l]]
        l++
        r--
      }
      if (nums[l] >= mid) {
        l++
      }
      if (nums[r] <= mid) {
        r--
      }
    }
    nums[left] = nums[r]
    nums[r] = midNum
    return r
  }

  while (true) {
    const pos = partition(left, right)
    if (pos === k - 1) {
      return nums[pos]
    } else if (pos > k - 1) {
      right = pos - 1
    } else {
      left = pos + 1
    }
  }
}

// @lc code=end

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */
