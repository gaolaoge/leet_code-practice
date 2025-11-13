/*
 * [538] 把二叉搜索树转换为累加树
 * https://leetcode.cn/problems/convert-bst-to-greater-tree/description/
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

function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;

  const reverseInOrder = (node: TreeNode | null): void => {
    if (!node) return;
    reverseInOrder(node.right);

    sum += node.val;
    node.val = sum;

    reverseInOrder(node.left);
  };
  reverseInOrder(root);

  return root;
}

/**
 * 累加树是一种特殊的二叉搜索树（BST）转换形式，
 * 每个节点的新值 = 原树中大于或等于该节点值的所有节点值之和
 */

export {};
