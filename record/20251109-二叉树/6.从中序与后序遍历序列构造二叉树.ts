/*
 * [106] 从中序与后序遍历序列构造二叉树
 * https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0) return null;
  const rootValue = postorder.pop();
  const root = new TreeNode(rootValue);
  const midIndex = inorder.indexOf(rootValue!);

  root.left = buildTree(
    inorder.slice(0, midIndex),
    postorder.slice(0, midIndex)
  );
  root.right = buildTree(
    inorder.slice(midIndex + 1),
    postorder.slice(midIndex)
  );

  return root;
}

/**
 *
 */

export {};
