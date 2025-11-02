/*
 * [388] 文件的最长绝对路径
 * https://leetcode.cn/problems/longest-absolute-file-path/
 */

/**
 * @param {string} input
 * @return {number}
 */
function lengthLongestPath(input: string): number {
  const stack: number[] = [];
  const paths = input.split('\n');

  let maxLen = 0;

  for (let path of paths) {
    // 优化：用循环统计\t，比lastIndexOf更快
    let level = 0;
    while (path[level] === '\t') {
      level++;
    }

    // 调整栈
    stack.length = level; // 直接设置length，比while循环更快

    // 计算长度
    const nameLen = path.length - level;
    const prevLen = level > 0 ? stack[level - 1] : 0;
    const curLen = prevLen + nameLen + (level > 0 ? 1 : 0);

    if (path.includes('.')) {
      maxLen = Math.max(maxLen, curLen);
    } else {
      stack.push(curLen);
    }
  }
  return maxLen;
}

/**
 * 输入："dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
 * 序列化为："dir/subdir2/file.ext"
 */

export {};
