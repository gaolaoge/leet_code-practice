/*
 * [98] 验证二叉搜索树
 * https://leetcode.cn/problems/validate-binary-search-tree/description/
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

function isValidBST(root: TreeNode | null): boolean {
  let prevVal: number;
  const inOrder = (node: TreeNode | null): boolean => {
    if (!node) return true;

    if (!inOrder(node.left)) return false;

    if (prevVal !== undefined && prevVal >= node.val) return false;
    prevVal = node.val;

    return inOrder(node.right);
  };

  return inOrder(root);
}

/**
 * 不仅要检查当前节点与其直接父节点的关系，还要检查节点与整个子树范围的关系。
 * 直接把这个 BST 抽象成被 中序遍历 后的结果更容易理清逻辑：判断当前 节点 比前 1 个 节点 大，否则为 false ；
 */

export {};
