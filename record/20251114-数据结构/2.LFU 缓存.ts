/**
 * [460] LFU 缓存
 * https://leetcode.cn/problems/lfu-cache/description/
 */

class LFUCache {
  capacity: number;
  keyToVal: Map<number, number>; // KEY 与 VALUE 的映射
  keyToFreq: Map<number, number>; // KEY 与 FREQ 的映射
  freqToKeys: Map<number, Set<number>>; // FREQ 的集合，相同 FREQ 集合可知插入顺序
  minFreq: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.keyToVal = new Map();
    this.keyToFreq = new Map();
    this.freqToKeys = new Map();
    this.minFreq = 0;
  }

  // - 如果键存在于缓存中，则获取键的值，否则返回 -1
  get(key: number): number {
    if (!this.keyToVal.has(key)) return -1;
    this.increaseFreq(key);
    return this.keyToVal.get(key)!;
  }

  // 如果键已存在，则变更其值；如果键不存在，请插入键值对。
  // 当缓存达到其容量时，在插入新项之前，删除最不经常使用的项。如果存在使用频率相同的多个项，则删除最久未使用的项
  put(key: number, value: number): void {
    if (this.capacity === 0) return;

    if (this.keyToVal.has(key)) {
      this.keyToVal.set(key, value);
      this.increaseFreq(key);
      return;
    }

    if (this.keyToVal.size >= this.capacity) this.removeMinFreqKey();

    this.keyToVal.set(key, value);
    this.keyToFreq.set(key, 1);

    if (!this.freqToKeys.has(1)) this.freqToKeys.set(1, new Set());
    this.freqToKeys.get(1)!.add(key);

    this.minFreq = 1;
  }

  // 增加使用频率
  increaseFreq(key: number) {
    const freq = this.keyToFreq.get(key);
    this.keyToFreq.set(key, (freq as number) + 1);
    this.freqToKeys.get(freq as number)!.delete(key);

    if (!this.freqToKeys.has((freq as number) + 1))
      this.freqToKeys.set((freq as number) + 1, new Set());
    this.freqToKeys.get((freq as number) + 1)?.add(key);

    if (this.freqToKeys.get(freq as number)!.size === 0) {
      this.freqToKeys.delete(freq as number);
      if (this.minFreq === freq) this.minFreq += 1;
    }
  }

  // 删除最小使用频率的 KEY
  removeMinFreqKey() {
    const set = this.freqToKeys.get(this.minFreq)!;

    const key = set.keys().next().value!;

    set.delete(key);
    if (set.size === 0) this.freqToKeys.delete(this.minFreq);

    this.keyToVal.delete(key);
    this.keyToFreq.delete(key);
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

/**
 * LFU (最不经常使用)：只关心访问时间，最近访问的放前面。
 * 需要同时考虑两个维度：
 * - 使用频率（Frequency）
 * - 访问时间（Recency）
 */

export {};
