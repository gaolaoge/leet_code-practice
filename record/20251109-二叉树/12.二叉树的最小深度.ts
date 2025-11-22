/**
 * 111.二叉树的最小深度
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from '../../utils/nodes';

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  if (!root.left && !root.right) return 1;

  let min = Infinity;
  if (root.left) min = Math.min(min, minDepth(root.left));
  if (root.right) min = Math.min(min, minDepth(root.right));

  return min + 1;
}

/**
 * 左右子树都为 null 才能认定为 叶子节点
 * 1. 递归
 * 2. BFS
 */

export {};
