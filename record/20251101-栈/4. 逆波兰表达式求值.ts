/*
 * [150] 逆波兰表达式求值
 * https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens: string[]): number {
  const sign = ['+', '-', '*', '/'];
  const stack: number[] = [];

  const operation = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '*': (a: number, b: number) => a * b,
    '/': (a: number, b: number) => Math.trunc(a / b),
  };

  for (const word of tokens) {
    if (sign.includes(word)) {
      const b = stack.pop()!;
      const a = stack.pop()!;
      stack.push(operation[word as '+' | '-' | '*' | '/'](a, b));
    } else {
      stack.push(Number(word));
    }
  }

  return stack.pop()!;
};

/**
 * 逆波兰表示法
 * 有效的算符为 '+'、'-'、'*' 和 '/'
 */

export {};
