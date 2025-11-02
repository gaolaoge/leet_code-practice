/*
 * [71] 简化路径
 * https://leetcode.cn/problems/simplify-path/
 */

function simplifyPath(path: string): string {
  const stack: string[] = [];
  const paths = path.split('/');

  for (const part of paths) {
    if (part === '.' || part === '') {
      continue;
    } else if (part === '..') {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(part);
    }
  }

  return '/' + stack.join('/');
}

/**
 *
 */

export {};
