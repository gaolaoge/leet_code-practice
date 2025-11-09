/*
 * [654] 最大二叉树
 * https://leetcode.cn/problems/maximum-binary-tree/description/
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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;
  let maxIndex: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }
  }

  const root = new TreeNode(nums[maxIndex]);
  root.left = constructMaximumBinaryTree(nums.slice(0, maxIndex));
  root.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1));

  return root;
}

/**
 * 最大二叉树是根据给定数组构造的一种特殊二叉树，遵循以下规则：
 * - 根节点：数组中的最大值作为根节点
 * - 左子树：递归构建最大值左侧子数组的最大二叉树
 * - 右子树：递归构建最大值右侧子数组的最大二叉树
 */

/**
 * 分治是一种算法设计思想，将一个复杂的问题分解成若干个规模较小的相同子问题，分别解决后再合并结果。
 */

export {};
