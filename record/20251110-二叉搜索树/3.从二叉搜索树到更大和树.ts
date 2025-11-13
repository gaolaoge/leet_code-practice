/*
 * [1038] 从二叉搜索树到更大和树
 * https://leetcode.cn/problems/binary-search-tree-to-greater-sum-tree/description/
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

function bstToGst(root: TreeNode | null): TreeNode | null {
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
 *
 */

export {};
