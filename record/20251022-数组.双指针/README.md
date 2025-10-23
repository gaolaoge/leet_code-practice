双指针是 1 种常用的数组/字符串处理技巧，通过使用两个指针在数组中移动，来高效地解决问题。
相比嵌套循环，双指针通常可以将时间复杂度从 O(n²) 降低到 O(n)。

## 模式

### 1. 对撞指针（相向双指针）

特点：两个指针从两端向中间移动；

应用场景：

- 有序数组求和问题
- 回文判断
- 反转数组/字符串

```ts
function twoPointers(arr: number[]): void {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // 根据条件移动指针
    if (满足某条件) {
      left++;
    } else {
      right--;
    }
  }
}
```

### 2. 快慢指针（同向双指针）

特点：两个指针同方向移动，速度不同；

应用场景：

- 删除重复元素
- 移动零
- 分隔数组
- 原地修改数组

```ts
function slowFast(arr: number[]): void {
  let slow = 0;
  let fast = 0;

  while (fast < arr.length) {
    if (满足某条件) {
      // slow 和 fast 都移动
      arr[slow] = arr[fast];
      slow++;
    }
    fast++; // fast 总是移动
  }
}
```

### 3. 滑动窗口（固定/可变窗口）

特点：维护一个区间，left 和 right 指针定义窗口边界；

应用场景：

- 子数组/子串问题
- 连续元素和
- 最长/最短子串

```ts
function slidingWindow(arr: number[]): void {
  let left = 0;
  let right = 0;

  while (right < arr.length) {
    // 扩大窗口
    // 处理 arr[right]
    right++;

    while (窗口需要收缩) {
      // 缩小窗口
      // 处理 arr[left]
      left++;
    }

    // 更新结果
  }
}
```

## 例题

- [26] 删除有序数组中的重复项：https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
- [83] 删除排序链表中的重复元素：https://leetcode.cn/problems/remove-duplicates-from-sorted-list/description/
- [27] 移除元素：https://leetcode.cn/problems/remove-duplicates-from-sorted-list/submissions/672741020/
- [283] 移动零：https://leetcode.cn/problems/move-zeroes/description/
- [167] 两数之和 II - 输入有序数组：https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
- [344] 反转字符串：https://leetcode.cn/problems/reverse-string/description/
- [5] 最长回文子串：https://leetcode.cn/problems/longest-palindromic-substring/description/
- [80] 删除有序数组中的重复项 II：https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/
- [125] 验证回文串：https://leetcode.cn/problems/valid-palindrome/description/
- [75] 颜色分类：https://leetcode.cn/problems/sort-colors/description/
- [88] 合并两个有序数组：https://leetcode.cn/problems/merge-sorted-array/description/
- [977] 有序数组的平方：https://leetcode.cn/problems/squares-of-a-sorted-array/description/
