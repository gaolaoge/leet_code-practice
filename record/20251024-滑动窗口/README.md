滑动窗口是 1 种在数组或字符串上维护 1 个动态窗口的技术，通过移动窗口的边界来解决问题。

核心思想：

- 维护 1 个固定大小或可变大小的窗口；
- 通过移动窗口边界来遍历数据；
- 避免重复计算，提高效率；

万能模版

```ts
function slidingWindow(s: string, target: string): string {
  let left = 0,
    right = 0;

  while (right < s.length) {
    // 1. 扩展右边界
    // 处理 s[right]
    right++;

    // 2. 收缩左边界（如果需要）
    while (满足收缩条件) {
      // 处理 s[left]
      left++;
    }

    // 3. 更新结果
  }

  return result;
}
```

## 应用场景

### 1. 子数组/子字符串问题

- 最大/最小子数组和
- 最长/最短子字符串
- 子数组计数

### 2. 字符频率问题

- 最长无重复字符子串
- 包含所有字符的最短子串
- 字符替换问题

### 3. 滑动统计

- 滑动窗口最大值/最小值
- 滑动平均值
- 滑动中位数

## 例题

- [76] 最小覆盖子串：https://leetcode.cn/problems/minimum-window-substring/description/
- [567] 字符串的排列：https://leetcode.cn/problems/permutation-in-string/description/
- [438] 找到字符串中所有字母异位词：https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
- [3] 无重复字符的最长子串：https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
- [1658] 将 x 减到 0 的最小操作数：https://leetcode.cn/problems/minimum-operations-to-reduce-x-to-zero/description/
- [1004] 最大连续1的个数 III：https://leetcode.cn/problems/max-consecutive-ones-iii/description/
- [424] 替换后的最长重复字符：https://leetcode.cn/problems/longest-repeating-character-replacement/description/
- [395] 至少有 K 个重复字符的最长子串：https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/description/
- [713] 乘积小于 K 的子数组：https://leetcode.cn/problems/subarray-product-less-than-k/description/
- [219] 存在重复元素 II：https://leetcode.cn/problems/contains-duplicate-ii/description/
- [220] 存在重复元素 III：https://leetcode.cn/problems/contains-duplicate-iii/description/
- [209] 长度最小的子数组：https://leetcode.cn/problems/minimum-size-subarray-sum/description/
