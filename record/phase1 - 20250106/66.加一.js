/*
 * @lc app=leetcode.cn id=66 lang=javascript
 * @lcpr version=20004
 *
 * [66] 加一
 */

// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let res = digits.reverse()
  let index = 0
  let carry = true
  while (index < res.length && carry) {
    if (res[index] === 9) {
      res[index] = 0
      carry = true
    } else {
      res[index] += 1
      carry = false
    }
    index++
  }
  if (carry) {
    res.push(1)
  }
  return res.reverse()
}

plusOne([9])
// @lc code=end

/*
// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [4,3,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [9]\n
// @lcpr case=end

 */
