/*
 * [889] 根据前序和后序遍历构造二叉树
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
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

function constructFromPrePost(
  preorder: number[],
  postorder: number[]
): TreeNode | null {
  if (preorder.length === 0) return null;

  const rootValue = preorder.shift();
  const root = new TreeNode(rootValue);
  if (postorder.length === 0) return root;

  const leftRootValue = preorder[0];
  const leftLen = postorder.indexOf(leftRootValue) + 1;

  root.left = constructFromPrePost(
    preorder.slice(0, leftLen),
    postorder.slice(0, leftLen)
  );
  root.right = constructFromPrePost(
    preorder.slice(leftLen),
    postorder.slice(leftLen, postorder.length - 1)
  );

  return root;
}

/**
 * 前序遍历：[ 根, 左子树前序, 右子树前序 ]
 * 后序遍历：[ 左子树后序, 右子树后序, 根 ]
 *
 * 此时：
 * 前序的第二个元素是 左子树的根（如果左子树存在）。
 * 在后序中找到这个左子树根，就能确定左子树的大小，从而划分左右子树。
 */

export {};
