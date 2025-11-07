/*
 * [402] 移掉 K 位数字
 * https://leetcode.cn/problems/remove-k-digits/description/
 */

function removeKdigits(num: string, k: number): string {
  if (num.length === k) return '0';

  const stack: string[] = [];
  for (let i = 0; i < num.length; i++) {
    const word = num[i];
    while (word < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(word);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  const res = stack.join('').replace(/^0+/, '');
  return res || '0';
}

/**
 *
 */

export {};
