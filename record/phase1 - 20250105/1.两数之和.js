/*
 * @lc app=leetcode.cn id=1 lang=typescript
 * @lcpr version=20004
 *
 * [1] 两数之和
 */
// @lcpr-template-start
// @lcpr-template-end
// @lc code=start
/* 暴力 */
function twoSum(nums, target) {
    var len = nums.length;
    for (var left = 0; left < len - 1; left++) {
        for (var right = left + 1; right < len; right++) {
            if (nums[left] + nums[right] === target) {
                return [left, right];
            }
        }
    }
    return [-1, -1];
}
;
/* 哈希 */
function _twoSum(nums, target) {
    var map = new Map();
    map.set(nums[0], 0);
    for (var i = 1; i < nums.length; i++) {
        var diff = target - nums[i];
        if (map.has(diff)) {
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return [-1, -1];
}
;
// @lc code=end
/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [3,2,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [3,3]\n6\n
// @lcpr case=end

 */
