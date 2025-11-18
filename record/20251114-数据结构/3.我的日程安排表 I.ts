/*
 * [729] 我的日程安排表 I
 * https://leetcode.cn/problems/my-calendar-i/description/
 */

class AVLNode {
  val: [number, number];
  height: number;
  left: AVLNode | null;
  right: AVLNode | null;
  constructor(val: [number, number]) {
    this.val = val;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class MyCalendar {
  root: AVLNode | null;
  constructor() {
    this.root = null;
  }

  // 插入新值
  book(startTime: number, endTime: number): boolean {
    if (this.hasConflictWithAny(this.root, [startTime, endTime])) return false;
    this.root = this.insert(this.root, [startTime, endTime]);
    return true;
  }

  private hasConflictWithAny(
    node: AVLNode | null,
    val: [number, number]
  ): boolean {
    if (!node) return false;
    if (this.hasConflict(node, val)) return true;
    return val[0] < node.val[0]
      ? this.hasConflict(node!.left, val)
      : this.hasConflict(node!.right!, val);
  }

  private hasConflict(node: AVLNode | null, val: [number, number]): boolean {
    if (!node) return false;
    const [startTime, endTime] = val;

    return Math.max(node.val[0], startTime) < Math.min(node.val[1], endTime);
  }

  private insert(node: AVLNode | null, val: [number, number]): AVLNode | null {
    if (!node) return new AVLNode(val);

    const [startTime, endTime] = val;
    if (node.val[0] > startTime) {
      node.left = this.insert(node.left, val);
    }
    if (node.val[0] < startTime) {
      node.right = this.insert(node.right, val);
    }
    if (node.val[0] === startTime) return node; // 不会有这个情况，已经被 hasConflict 拦住了

    const balance = this.getBalance(node);

    if (balance > 1 && startTime < node.left!.val[0]) {
      node = this.rightRotate(node); // LL
    }
    if (balance < -1 && startTime > node.right!.val[0]) {
      node = this.leftRotate(node); // RR
    }
    if (balance > 1 && startTime > node.left!.val[0]) {
      node.left = this.leftRotate(node.left!);
      node = this.rightRotate(node); // LR
    }
    if (balance < -1 && startTime < node.right!.val[0]) {
      node.right = this.rightRotate(node.left!);
      node = this.leftRotate(node); // RL
    }

    return node;
  }

  private rightRotate(y: AVLNode): AVLNode {
    const x = y.left!;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    return x;
  }

  private leftRotate(x: AVLNode): AVLNode {
    const y = x.right!;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    return y;
  }

  private getBalance(node: AVLNode): number {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  private getHeight(node: AVLNode | null): number {
    return node ? node.height : 0;
  }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */

/**
 * 思路：把 MyCalendar 视作 1 个平衡二叉树，book 作为新节点的创建入口，
 */

export {};

/**
 * 平衡二叉树 是 二叉搜索树 的升级变体，为了解决特定情况下 二叉搜索树 变成 类链表 的结构；
 * 二叉搜索树 的本质就是识别到 二叉树 结构不平衡时重新组织 二叉树 结构使其再次平衡；
 * - 这个操作就是「旋转」：左旋转，右旋转，左右旋转，右左旋转，旋转的目的是让中间值成为新的根节点；
 */
