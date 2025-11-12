/*
 * [297] 二叉树的序列化与反序列化
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/description/
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

/*
 * Encodes a tree to a single string.
 */
/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const res: string[] = [];

  const build = (node: TreeNode | null) => {
    if (node === null) {
      if (res.length !== 0) {
        res.push('#');
      }
    } else {
      res.push(String(node.val));
      build(node.left!);
      build(node.right!);
    }
  };
  build(root);

  return res.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const res = data.split(',').filter(Boolean);
  if (res.length === 0) return null;

  let index = 0;

  const build = (): TreeNode | null => {
    // if (index >= res.length) {
    //     return null;
    // }
    const val = res[index];
    index++;
    const root = val === '#' ? null : new TreeNode(Number(val));
    if (root !== null) {
      root.left = build();
      root.right = build();
    }
    return root;
  };
  return build();
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * 以某种特定格式组织数据，使得数据可以独立于编程语言。就是序列化和反序列化的目的.
 */

/**
 * 当二叉树中节点的值不存在重复时：
 * 1. 如果序列化结果中不包含空指针的信息，且只给出一种遍历顺序，那么无法还原出唯一的一棵二叉树。
 * 2. 如果序列化结果中不包含空指针的信息，且会给出两种遍历顺序，分两种情况：
 *    1. 如果给出的是前序和中序，或者后序和中序，那么可以还原出唯一的一棵二叉树。
 *    2. 如果给出前序和后序，那么无法还原出唯一的一棵二叉树。
 * 3. 如果序列化结果中包含空指针的信息，且只给出一种遍历顺序，也要分两种情况：
 *    1. 如果给出的是前序或者后序，那么可以还原出唯一的一棵二叉树。
 *    2. 如果你给出的是中序，那么无法还原出唯一的一棵二叉树。
 */

export {};
