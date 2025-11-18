class AVLNode {
  val: number;
  height: number;
  left: AVLNode | null;
  right: AVLNode | null;

  constructor(val: number) {
    this.val = val;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  root: AVLNode | null;
  constructor() {
    this.root = null;
  }

  private getHeight(node: AVLNode | null): number {
    return node ? node.height : 0;
  }

  private getBalance(node: AVLNode | null): number {
    return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
  }

  // 右旋
  private rightRotate(y: AVLNode): AVLNode {
    const x = y.left!;
    const T2 = x.right;

    // 渲染
    x.right = y;
    y.left = T2;

    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));
    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));

    return x;
  }

  // 左旋
  private leftRotate(x: AVLNode): AVLNode {
    const y = x.right!;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = 1 + Math.max(this.getHeight(x.left), this.getHeight(x.right));
    y.height = 1 + Math.max(this.getHeight(y.left), this.getHeight(y.right));

    return y;
  }

  insert(val: number): void {
    this.root = this.insertNode(this.root, val);
  }

  insertNode(node: AVLNode | null, val: number): AVLNode {
    if (!node) return new AVLNode(val);

    if (val < node.val) {
      node.left = this.insertNode(node.left, val);
    } else if (val > node.val) {
      node.right = this.insertNode(node.right, val);
    } else {
      return node; // 不插入相同值
    }

    node.height =
      1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

    const balance = this.getBalance(node);

    if (balance > 1 && val < node.left!.val) {
      return this.rightRotate(node); // LL
    }

    if (balance < -1 && val > node.right!.val) {
      return this.leftRotate(node); // RR
    }

    if (balance > 1 && val > node.left!.val) {
      node.left = this.leftRotate(node.left!);
      return this.rightRotate(node); // LR
    }

    if (balance < -1 && val < node.right!.val) {
      node.right = this.rightRotate(node.right!);
      return this.leftRotate(node); // RL
    }

    return node;
  }

  search(val: number): boolean {
    return this.searchNode(this.root, val);
  }

  private searchNode(node: AVLNode | null, val: number): boolean {
    if (!node) return false;
    if (node.val === val) return true;
    if (val < node.val) return this.searchNode(node.left, val);
    return this.searchNode(node.right, val);
  }

  // 遍历
  inorder(): number[] {
    const result: number[] = [];
    this.inorderTraversal(this.root, result);
    return result;
  }

  private inorderTraversal(node: AVLNode | null, result: number[]): void {
    if (!node) return;
    this.inorderTraversal(node.left, result);
    result.push(node.val);
    this.inorderTraversal(node.right, result);
  }
}

export {};
