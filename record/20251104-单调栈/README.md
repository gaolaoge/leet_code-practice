**单调栈**是一种特殊的栈数据结构，其核心特点是**栈内元素保持单调性**（单调递增或单调递减）。

### 核心特点

1. **单调递增栈**：从栈底到栈顶元素递增
2. **单调递减栈**：从栈底到栈顶元素递减

### 工作原理

在入栈前，会将破坏单调性的元素**先出栈**，确保栈内元素始终保持单调。

```typescript
// 单调递减栈示例（栈顶到栈底递减）
const stack: number[] = [];
for (let i = 0; i < nums.length; i++) {
  // 当前元素大于栈顶，破坏单调性，弹出栈顶
  while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
    stack.pop();
  }
  stack.push(i); // 通常存储索引而非值
}
```

### 典型应用场景

1. **下一个更大/更小元素**
   - 例：找到数组中每个元素右边第一个比它大的元素
2. **区间最大/最小值问题**
   - 例：直方图中最大矩形面积

3. **滑动窗口最值**
   - 结合单调队列使用

### 时间复杂度

虽然有嵌套循环（while 在 for 内），但每个元素**最多入栈一次、出栈一次**，因此总体时间复杂度为 **O(n)**。

单调栈本质是用**空间换时间**，通过维护一个有序结构，避免重复比较，快速找到满足单调性条件的元素。

## 例题

- [1019] 链表中的下一个更大节点：https://leetcode.cn/problems/next-greater-node-in-linked-list/
- [1944] 队列中可以看到的人数：https://leetcode.cn/problems/number-of-visible-people-in-a-queue/
- [1475] 商品折扣后的最终价格：https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/description/
- [901] 股票价格跨度：https://leetcode.cn/problems/online-stock-span/
- [402] 移掉 K 位数字：https://leetcode.cn/problems/remove-k-digits/description/
- [853] 车队：https://leetcode.cn/problems/car-fleet/
- [581] 最短无序连续子数组：https://leetcode.cn/problems/shortest-unsorted-continuous-subarray/description/
