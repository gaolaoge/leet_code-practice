二维数组是数组的数组，可以理解为一个表格或矩阵，有行（row）和列（column）两个维度。

```ts
// 二维数组示例
const matrix = [
  [1, 2, 3], // 第0行
  [4, 5, 6], // 第1行
  [7, 8, 9], // 第2行
];
//  ↑  ↑  ↑
// 第0 1  2列

// 访问元素
matrix[0][0]; // 1  (第0行第0列)
```

```ts
// 1. 直接初始化
const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];

// 2. 创建空的二维数组
const rows = 3;
const cols = 4;
const arr2: number[][] = [];
for (let i = 0; i < rows; i++) {
  arr2[i] = [];
  for (let j = 0; j < cols; j++) {
    arr2[i][j] = 0;
  }
}

// 3. 使用 Array.from
const arr3 = Array.from({ length: rows }, () =>
  Array.from({ length: cols }, () => 0)
);

// 4. 使用 fill（注意陷阱！）
const arr4 = Array(rows).fill(Array(cols).fill(0)); // ❌ 错误！所有行共享同一个数组
const arr5 = Array.from({ length: rows }, () => Array(cols).fill(0)); // ✅ 正确
```

常见应用场景：

- 矩阵运算：加法、乘法、转置
- 图像处理：图片本质是二维像素数组
- 游戏开发：游戏地图、棋盘
- 动态规划：DP表格
- 图论：邻接矩阵表示图
- 路径问题：迷宫、网格遍历

## 二维数组题型总结表

| 题型          | 核心思路          | 常用技巧                   | 时间复杂度            | 场景特征（关键词识别）                                                                     |
| ------------- | ----------------- | -------------------------- | --------------------- | ------------------------------------------------------------------------------------------ |
| **遍历类**    | 边界指针控制      | 4个边界变量                | O(m×n)                | 螺旋、顺时针、逆时针<br>对角线、Z字形<br>打印矩阵、填充数字<br>按某种顺序遍历              |
| **变换类**    | 索引映射/分步操作 | 转置+翻转<br>四点环形交换  | O(m×n)                | 旋转90度、翻转、转置<br>原地修改<br>镜像、对称变换<br>矩阵置零                             |
| **搜索类**    | 二分/双指针       | 降维、从角落开始           | O(log(m×n))<br>O(m+n) | 有序矩阵、升序排列<br>查找、搜索目标值<br>第K小、第K大<br>每行递增、每列递增               |
| **路径/岛屿** | DFS/BFS           | 标记访问、方向数组<br>回溯 | O(m×n)                | 岛屿、连通区域<br>单词搜索、路径存在<br>最短路径、最短距离<br>上下左右移动<br>被围绕、包围 |
| **动态规划**  | 状态转移          | 原地DP<br>状态压缩         | O(m×n)                | 不同路径、路径数量<br>最小/最大路径和<br>最大正方形、最大矩形<br>只能向右/向下移动         |
| **模拟类**    | 规则判断          | 状态编码<br>辅助标记       | O(m×n)                | 游戏、生命、演化<br>规则、状态变化<br>数独、扫雷<br>周围8个/4个格子                        |

## 例题

- [151] 反转字符串中的单词：https://leetcode.cn/problems/reverse-words-in-a-string/description/
- [48] 旋转图像：https://leetcode.cn/problems/rotate-image/description/
- [54] 螺旋矩阵：https://leetcode.cn/problems/spiral-matrix/description/
- [59] 螺旋矩阵 II：https://leetcode.cn/problems/spiral-matrix-ii/
- [1329] 将矩阵按对角线排序：https://leetcode.cn/problems/sort-the-matrix-diagonally/
- [1260] 二维网格迁移：https://leetcode.cn/problems/shift-2d-grid/
- [867] 转置矩阵：https://leetcode.cn/problems/transpose-matrix/
- [14] 最长公共前缀：https://leetcode.cn/problems/longest-common-prefix/description/
