/**
 * 110.平衡二叉树
 * https://leetcode.cn/problems/balanced-binary-tree/description/
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

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  const isBalance = (node: TreeNode | null): number => {
    if (!node) return 0;

    const leftHeight = isBalance(node.left);
    if (leftHeight === -1) return -1;
    const rightHeight = isBalance(node.right);
    if (rightHeight === -1) return -1;

    if (Math.abs(leftHeight - rightHeight) > 1) return -1;

    return Math.max(leftHeight, rightHeight) + 1;
  };
  return isBalance(root) !== -1;
}

/**
 * 自底向上遍历判断
 */

export {};
