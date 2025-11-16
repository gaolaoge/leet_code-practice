/*
 * [146] LRU 缓存
 * https://leetcode.cn/problems/lru-cache/
 */

class IListNode {
  key: number;
  val: number;
  prev?: IListNode;
  next?: IListNode;
  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
  }
}

class LRUCache {
  capacity: number;
  map: Map<number, IListNode>;
  head: IListNode;
  tail: IListNode;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new IListNode(0, 0);
    this.tail = new IListNode(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;
    this.removeNode(node);
    this.addNodeToHead(node);
    return node.val;
  }

  put(key: number, value: number): void {
    const node = this.map.get(key);
    if (node) {
      node.val = value;
      this.removeNode(node);
      this.addNodeToHead(node);
    } else {
      if (this.map.size >= this.capacity) {
        const lastNode = this.tail.prev!;
        this.removeNode(lastNode);
        this.map.delete(lastNode.key);
      }
      const newNode = new IListNode(key, value);
      this.map.set(key, newNode);
      this.addNodeToHead(newNode);
    }
  }

  removeNode(node: IListNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  addNodeToHead(node: IListNode): void {
    node.prev = this.head;
    node.next = this.head.next;

    node.next!.prev = node;
    this.head.next = node;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * LRU 是一种常用的缓存淘汰策略，当缓存满时，优先淘汰最久未使用的数据。
 * 核心原则：
 * 1. 最近使用的数据更有价值：刚被访问的数据在未来被再次访问的概率更高
 * 2. 淘汰最久未使用的数据：长时间未被访问的数据被认为重要性较低
 */

/**
 * 哈希 + 双链表：实现O(1)时间复杂度的LRU缓存。
 */

export {};
