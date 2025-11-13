/*
 * [450] 删除二叉搜索树中的节点
 * https://leetcode.cn/problems/delete-node-in-a-bst/description/
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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    let minNode = root.right;
    while (minNode.left) {
      minNode = minNode.left;
    }
    root.val = minNode.val;
    root.right = deleteNode(root.right, root.val);
  }

  return root;
}

/**
 *
 */

export {};
