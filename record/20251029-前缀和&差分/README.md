## 前缀和 (Prefix Sum)

**前缀和**是一种预处理技术，用于快速计算数组某个区间的和。

### 基本概念

- 对于数组 `arr`，前缀和数组 `prefix` 定义为：`prefix[i] = arr[0] + arr[1] + ... + arr[i]`
- 通过前缀和，可以在 O(1) 时间内计算任意区间 `[l, r]` 的和：`sum(l, r) = prefix[r] - prefix[l-1]`

### 实现示例

```typescript
// 构建前缀和数组
function buildPrefixSum(arr: number[]): number[] {
  const prefix = new Array(arr.length + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    prefix[i + 1] = prefix[i] + arr[i];
  }
  return prefix;
}

// 查询区间和
function rangeSum(prefix: number[], l: number, r: number): number {
  return prefix[r + 1] - prefix[l];
}
```

### 应用场景

1. **子数组和问题**：如"和为K的子数组"、"连续子数组的最大和"
2. **区间查询**：频繁查询数组某个区间的和
3. **二维前缀和**：处理矩阵的子矩阵和问题

## 差分 (Difference Array)

**差分**是前缀和的逆操作，用于高效处理区间修改问题。

### 基本概念

- 对于数组 `arr`，差分数组 `diff` 定义为：`diff[i] = arr[i] - arr[i-1]`（其中 `arr[-1] = 0`）
- 通过差分数组，可以在 O(1) 时间内对区间 `[l, r]` 的所有元素加上某个值

### 实现示例

```typescript
// 构建差分数组
function buildDiffArray(arr: number[]): number[] {
  const diff = new Array(arr.length).fill(0);
  diff[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    diff[i] = arr[i] - arr[i - 1];
  }
  return diff;
}

// 区间修改：对 [l, r] 区间所有元素加 val
function rangeAdd(diff: number[], l: number, r: number, val: number): void {
  diff[l] += val;
  if (r + 1 < diff.length) {
    diff[r + 1] -= val;
  }
}

// 从差分数组恢复原数组
function restoreArray(diff: number[]): number[] {
  const arr = new Array(diff.length);
  arr[0] = diff[0];
  for (let i = 1; i < diff.length; i++) {
    arr[i] = arr[i - 1] + diff[i];
  }
  return arr;
}
```

### 应用场景

1. **区间修改**：频繁对数组某个区间进行加减操作
2. **航班预订统计**：处理座位预订问题
3. **会议室安排**：处理时间区间重叠问题

## 经典例题

### 1. 和为K的子数组

```typescript
function subarraySum(nums: number[], k: number): number {
  const prefixSum = new Map<number, number>();
  prefixSum.set(0, 1); // 前缀和为0出现1次

  let count = 0;
  let sum = 0;

  for (const num of nums) {
    sum += num;
    if (prefixSum.has(sum - k)) {
      count += prefixSum.get(sum - k)!;
    }
    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }

  return count;
}
```

### 2. 航班预订统计

```typescript
function corpFlightBookings(bookings: number[][], n: number): number[] {
  const diff = new Array(n + 1).fill(0);

  // 使用差分数组处理区间修改
  for (const [first, last, seats] of bookings) {
    diff[first - 1] += seats;
    diff[last] -= seats;
  }

  // 恢复原数组
  const result = new Array(n);
  result[0] = diff[0];
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + diff[i];
  }

  return result;
}
```

## 总结

- **前缀和**：用于快速查询区间和，时间复杂度 O(1)
- **差分**：用于快速修改区间值，时间复杂度 O(1)
- 两者是互逆操作，经常配合使用
- 在解决区间相关问题时非常高效，能将 O(n) 的操作优化到 O(1)

这两个概念在算法竞赛和实际开发中都非常重要，特别是在处理大量区间操作时能显著提升性能。

## 例题

- [303] 区域和检索 - 数组不可变：https://leetcode.cn/problems/range-sum-query-immutable/description/
- [304] 二维区域和检索 - 矩阵不可变：https://leetcode.cn/problems/range-sum-query-2d-immutable/description/
- [1109] 航班预订统计：https://leetcode.cn/problems/corporate-flight-bookings/
- [1094] 拼车：https://leetcode.cn/problems/car-pooling/description/
