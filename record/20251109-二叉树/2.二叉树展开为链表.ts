/*
 * [114] 二叉树展开为链表
 * https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) return;

  flatten(root.left);
  flatten(root.right);

  const tempRight = root.right;

  root.right = root.left;
  root.left = null;

  let rightRoot = root;
  while (rightRoot.right) {
    rightRoot = rightRoot.right;
  }

  rightRoot.right = tempRight;
}

/**
 * 递归 + 前序遍历
 */

export {};
