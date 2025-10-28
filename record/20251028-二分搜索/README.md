**二分搜索**是一种高效的搜索算法，用于在**有序数组**中查找特定元素。

### 核心思想

- **分而治之**：每次将搜索范围缩小一半
- **比较中间元素**：根据比较结果决定搜索左半部分还是右半部分
- **重复过程**：直到找到目标元素或搜索范围为空

### 算法步骤

1. **确定搜索范围**：left = 0, right = n-1
2. **计算中间位置**：mid = (left + right) / 2
3. **比较目标值**：
   - 如果 `nums[mid] == target`，找到目标
   - 如果 `nums[mid] < target`，搜索右半部分
   - 如果 `nums[mid] > target`，搜索左半部分
4. **更新搜索范围**：根据比较结果调整 left 或 right
5. **重复步骤2-4**：直到找到目标或 left > right

### 时间复杂度

- **O(log n)**：每次将搜索范围减半，最多需要 log₂n 次比较

### 空间复杂度

- **O(1)**：只使用常数额外空间（迭代版本）
- **O(log n)**：递归调用栈空间（递归版本）

### 适用条件

- ✅ **数组必须有序**（升序或降序）
- ✅ 查找单个目标值
- ✅ 数据量较大时效果显著

### 常见变体

1. **查找插入位置**：找到目标值应插入的位置
2. **查找边界**：查找目标值的第一个或最后一个位置
3. **旋转数组搜索**：在部分有序数组中搜索

### 优势

- 效率高：时间复杂度 O(log n)
- 实现简单：逻辑清晰易懂
- 应用广泛：很多算法的基础

二分搜索是计算机科学中最基础且重要的算法之一，掌握它对理解更复杂的算法（如二分答案、分治算法等）非常有帮助。

## 例题

- [704] 二分查找：https://leetcode.cn/problems/binary-search/description/
- [34] 在排序数组中查找元素的第一个和最后一个位置：https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
- [1011] 在 D 天内送达包裹的能力：https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days/description/
- [410] 分割数组的最大值：https://leetcode.cn/problems/split-array-largest-sum/description/
