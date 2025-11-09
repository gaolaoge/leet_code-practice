/*
 * [226] 翻转二叉树
 * https://leetcode.cn/problems/invert-binary-tree/
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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return root;
  [root.left, root.right] = [root.right, root.left];
  root.left = invertTree(root.left);
  root.right = invertTree(root.right);
  return root;
}

/**
 * 递归
 */

export {};
