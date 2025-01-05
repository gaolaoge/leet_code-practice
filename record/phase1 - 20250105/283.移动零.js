/*
 * @lc app=leetcode.cn id=283 lang=typescript
 * @lcpr version=20004
 *
 * [283] 移动零
 */
// @lcpr-template-start
// @lcpr-template-end
// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */

// 冒泡
function moveZeroes(nums) {
    const len = nums.length;
    for (let left = 0; left < len - 1; left++) {
        for (let right = len - 1; right > left; right--) {
            if (nums[right] !== 0 && nums[right - 1] === 0) {
                nums[right - 1] = nums[right];
                nums[right] = 0;
            }
        }
    }
}
;

// 双指针
function _moveZeroes(nums) {
    let lastNotZoreIndex = 0;
    for (let i = 0;i < nums.length;i ++) {
        if (nums[i] !== 0) {
            nums[lastNotZoreIndex] = nums[i]
            lastNotZoreIndex ++;
        }
    }
    for (let j = lastNotZoreIndex;j < nums.length;j ++) {
        nums[j] = 0;
    }
}
;

moveZeroes([0,1,0,3,12]);
// @lc code=end
/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

 */
