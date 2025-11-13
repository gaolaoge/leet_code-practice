/*
 * [230] 二叉搜索树中第 K 小的元素
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let count = 0;
  let res: number = 0;
  const inOrder = (root: TreeNode | null) => {
    if (!root || count >= k) return;

    inOrder(root.left);

    count++;
    if (count === k) {
      res = root.val;
      return;
    }

    inOrder(root.right);
  };

  inOrder(root);
  return res;
}

/**
 * 中序遍历：二叉搜索树的特点是 左子树内容永远小于 root ，右子树内容永远大于 root
 */

export {};
