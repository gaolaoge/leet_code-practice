/*
 * [222] 完全二叉树的节点个数
 * https://leetcode.cn/problems/count-complete-tree-nodes/description/
 */

import { TreeNode } from '../../utils/nodes';

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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  const leftHeight = getLeftHeight(root);
  const rightHeight = getRightHeight(root);

  if (leftHeight === rightHeight) return (1 << leftHeight) - 1; // 2^leftHeight - 1
  return 1 + countNodes(root.left) + countNodes(root.right);
}

const getLeftHeight = (root: TreeNode | null): number => {
  let count = 0;
  while (root) {
    root = root.left;
    count++;
  }
  return count;
};

const getRightHeight = (root: TreeNode | null): number => {
  let count = 0;
  while (root) {
    root = root.right;
    count++;
  }
  return count;
};

/**
 * 完全二叉树 的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。
 * 若最底层为第 h 层（从第 0 层开始），则该层包含 1~ 2h 个节点。
 */

export {};
