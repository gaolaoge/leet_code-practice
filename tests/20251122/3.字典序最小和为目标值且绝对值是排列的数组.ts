/**
 * 100854.字典序最小和为目标值且绝对值是排列的数组
 * https://leetcode.cn/problems/lexicographically-smallest-negated-permutation-that-sums-to-target/description/
 */

function lexSmallestNegatedPerm(n: number, target: number): number[] {
  const initialSum = ((1 + n) * n) / 2;

  const diff = initialSum - target;

  if (target > initialSum || target < -initialSum || diff % 2 !== 0) return [];

  const result: number[] = Array.from({ length: n }, (_, index) => index + 1);

  if (diff === 0) return result;

  const needNegate = diff / 2;

  let remaining = needNegate;

  for (let i = n; i >= 1 && remaining > 0; i--) {
    if (i <= remaining) {
      remaining -= i;
      result[i - 1] = -result[i - 1];
    }
    if (remaining === 0) break;
  }

  if (remaining !== 0) return [];

  return result.sort((a, b) => a - b);
}

/**
 * 字典序：
 * 基于字母或字符顺序的排列方式，类似于字典中单词的排列顺序。
 * 1.逐字符比较：
 * - apple" 和 "banana" 比较：第一个字符：'a' < 'b'，所以 "apple" < "banana"
 * - "cat" 和 "car" 比较：前两个字符相同，第三个字符：'t' > 'r'，所以 "cat" > "car"
 * 2.短字符串优先
 * - "hello" 和 "helloworld" 比较：前5个字符相同，"hello" 较短，所以 "hello" < "helloworld"
 *
 * const words = ["zoo", "apple", "banana", "app"];
 * words.sort(); // ["app", "apple", "banana", "zoo"]
 */

export {};

function lexSmallestNegatedPerm2(n: number, target: number): number[] {
  const initialSum = ((1 + n) * n) / 2;

  const diff = initialSum - target;

  if (target > initialSum || target < -initialSum || diff % 2 !== 0) return [];

  const result: number[] = new Array(n).fill(0);

  const needNegate = diff / 2;

  let remaining = needNegate;

  for (let i = n; i >= 1; i--) {
    if (i <= remaining) {
      remaining -= i;
      result[i - 1] = -i;
    } else result[i - 1] = i;
  }

  if (remaining !== 0) return [];

  return result.sort((a, b) => a - b);
}

/**
 * lexSmallestNegatedPerm2 比 lexSmallestNegatedPerm 快了 1 倍
 * - 去掉了 break 判断；
 *
 * 原因：CPU缓存和指令流水线优化
 * - 更线性的执行路径有利于CPU指令预取
 * - 减少了分支预测错误带来的性能惩罚
 * - 更简单的循环体有利于编译器优化
 *
 * 如特定的测试用例时：长度为 5w 的数组且实际需要判断到 4.9w 最后才能 container ，此时不如直接省略 if ，这样开销更小。
 */
