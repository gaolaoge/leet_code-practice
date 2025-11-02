/*
 * [20] 有效的括号
 * https://leetcode.cn/problems/valid-parentheses/description/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s: string): boolean {
  const leftWord = ['(', '{', '['];
  const stack: string[] = [];
  for (const word of s) {
    if (leftWord.includes(word)) {
      stack.push(word);
    } else {
      const tailWord = stack.pop();
      if (
        (tailWord === '(' && word === ')') ||
        (tailWord === '[' && word === ']') ||
        (tailWord === '{' && word === '}')
      ) {
        continue;
      } else {
        return false;
      }
    }
  }

  return stack.length === 0;
}

/**
 * s 内容：'('，')'，'{'，'}'，'['，']'
 */

export {};
