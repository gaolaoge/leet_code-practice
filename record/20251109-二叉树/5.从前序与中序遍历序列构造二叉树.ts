/*
 * [105] 从前序与中序遍历序列构造二叉树
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;
  const rootValue = preorder.shift();
  const root = new TreeNode(rootValue);
  const midIndex = inorder.indexOf(rootValue!);

  root.left = buildTree(
    preorder.slice(0, midIndex),
    inorder.slice(0, midIndex)
  );
  root.right = buildTree(preorder.slice(midIndex), inorder.slice(midIndex + 1));

  return root;
}

/**
 * 递归 + 分治
 * 前序遍历特性 ：第一个元素是根节点的值
 * 中序遍历特性 ：根节点将中序遍历序列分为左子树和右子树两部分
 */

export {};
