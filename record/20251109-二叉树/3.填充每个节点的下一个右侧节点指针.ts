/*
 * [116] 填充每个节点的下一个右侧节点指针
 * https://leetcode.cn/problems/populating-next-right-pointers-in-each-node/description/
 */

/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { _Node } from '../../utils/nodes';

function connect(root: _Node | null): _Node | null {
  if (!root || !root.left) return root;

  root.left.next = root.right;
  if (root.next) root.right!.next = root.next.left;

  connect(root.left);
  connect(root.right);

  return root;
}

/**
 *
 */

export {};
