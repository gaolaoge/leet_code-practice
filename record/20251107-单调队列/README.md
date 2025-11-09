单调队列是一种特殊的队列数据结构，它维护了队列元素的单调性（递增或递减）。与普通队列不同，单调队列在添加新元素时会自动移除破坏单调性的元素，从而保持队列的有序性。

### 核心特性
1. **单调性维护**：保持队列中的元素单调递增或单调递减
2. **双向操作**：支持从队首（front）和队尾（back）进行操作
3. **自动过滤**：当新元素入队时，会移除所有不符合单调条件的旧元素

### 基本操作
- **入队**：从队尾入队，入队前移除所有破坏单调性的队尾元素
- **出队**：从队首出队，通常是移除超出窗口范围的元素
- **查询**：队首元素通常代表当前窗口中的极值（最大值或最小值）

### 主要应用场景
1. **滑动窗口最大值/最小值**：O(n)时间复杂度查找每个窗口的最值
2. **和至少为K的最短子数组**：优化前缀和的查找过程
3. **环形子数组的最大和**：结合前缀和处理环形结构问题
4. **绝对差不超过限制的最长连续子数组**：维护滑动窗口内的最大差值

### 实现方式
通常使用双端队列（deque）实现，支持高效的队首和队尾操作。

### 时间复杂度
- 均摊时间复杂度为O(n)，因为每个元素最多入队和出队一次
- 空间复杂度为O(k)，其中k为窗口大小或队列中元素的最大数量

单调队列的核心思想是**过滤无效信息**，只保留对未来查询可能有用的元素，从而在保持高效的同时提供所需的极值查询功能。

## 例题

- [239] 滑动窗口最大值：https://leetcode.cn/problems/sliding-window-maximum/description/
- [1438] 绝对差不超过限制的最长连续子数组：https://leetcode.cn/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/
- [862] 和至少为 K 的最短子数组：https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k/description/
- [918] 环形子数组的最大和：https://leetcode.cn/problems/maximum-sum-circular-subarray/description/
        