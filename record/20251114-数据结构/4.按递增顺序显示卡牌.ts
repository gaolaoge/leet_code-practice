/*
 * [950] 按递增顺序显示卡牌
 * https://leetcode.cn/problems/reveal-cards-in-increasing-order/description/
 */

function deckRevealedIncreasing(deck: number[]): number[] {
  const temp = deck.sort((a, b) => a - b);
  const res: number[] = [];

  for (let i = temp.length - 1; i >= 0; i--) {
    if (res.length > 0) res.unshift(res.pop()!);
    res.unshift(temp[i]);
  }

  return res;
}

/**
 *
 */

export {};
