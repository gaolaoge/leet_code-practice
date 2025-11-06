/*
 * [1475] 商品折扣后的最终价格
 * https://leetcode.cn/problems/final-prices-with-a-special-discount-in-a-shop/description/
 */

function finalPrices(prices: number[]): number[] {
  const len = prices.length;
  const res: number[] = [...prices];
  const stack: number[] = []; // 单调递增栈，存索引

  for (let i = len - 1; i >= 0; i--) {
    // 弹出所有比当前价格高的（它们不能作为折扣）
    while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
      stack.pop();
    }

    // 如果栈非空，栈顶就是第一个可以作为折扣的商品
    if (stack.length > 0) {
      res[i] = prices[i] - stack[stack.length - 1];
    }
    // 如果栈空，说明右边没有更便宜的，保持原价（已在初始化时设置）

    stack.push(prices[i]);
  }

  return res;
}

/**
 *
 */

export {};
