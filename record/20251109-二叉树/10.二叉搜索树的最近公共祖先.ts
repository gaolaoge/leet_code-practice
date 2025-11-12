/*
 * [235] 二叉搜索树的最近公共祖先
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || !p || !q) return root;

  let curr = root;

  while (curr) {
    if (curr.val < p.val && curr.val < q.val) {
      curr = curr.right!;
    } else if (curr.val > p.val && curr.val > q.val) {
      curr = curr.left!;
    } else {
      return curr;
    }
  }
  return null;
}

/**
 * 二叉搜索树是一种特殊的二叉树，满足以下性质：
 * - 对于任意节点，左子树所有节点值 < 根节点值 < 右子树所有节点值
 * - 左右子树也分别是二叉搜索树
 */

export {};
