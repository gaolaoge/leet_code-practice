class TaskScheduler {
  tasks;

  constructor() {
    this.tasks = new Map();
  }

  addTask(name, deps, task) {
    if (this.tasks.has(name)) {
      throw new Error(`Task ${name} already exists`);
    }
    this.tasks.set(name, { deps, task, done: false });
  }

  /**
   * 拓扑排序，判断是否有环
   */
  _getTopologicalOrder() {
    const names = [...this.tasks.keys()];
    const inDegree = new Map(); // 入度
    const graph = new Map(); // 边

    // init
    for (const name of names) {
      inDegree.set(name, 0);
      graph.set(name, []);
    }

    // 构建 inDegree 和 graph
    for (const [name, { deps }] of this.tasks) {
      for (const dep of deps) {
        if (!this.tasks.has(dep)) {
          throw new Error('xx');
        }
        graph.get(dep).push(name);
        inDegree.set(name, inDegree.get(name) + 1);
      }
    }

    // 拓扑排序
    const queue = [];
    for (const name of names) {
      if (inDegree.get(name) === 0) {
        queue.push(name);
      }
    }

    /**
     * 环的特性 在闭环中（例如 A → B → A），环上的每个节点都依赖环内的另一个节点。
     * 因此，它们的 inDegree 初始值至少为 1，
     * 且因为没有环外节点能触发它们的入度减少，所以永远无法降为 0。
     */
    const order = [];
    while (queue.length) {
      const name = queue.shift();
      order.push(name);
      for (const dep of graph.get(name)) {
        inDegree.set(dep, inDegree.get(dep) - 1);
        if (inDegree.get(dep) === 0) {
          order.push(dep);
        }
      }
    }

    if (order.length !== names.length) {
      throw new Error('xx Circular');
    }

    return order;
  }

  /**
   * 非最优调度策略，是 1 种简化但安全的实现方式；
   * 简化实现：代码量少，逻辑清晰
   * 足够正确：虽然可能慢，但不会违反依赖
   * 便于理解：分层思想直观
   * 通常足够快：如果任务耗时差异不大，效率接近最优
   * */
  async run() {
    const order = this._getTopologicalOrder();

    const levels = [];
    const levelMap = new Map();

    for (const name of order) {
      const { deps } = this.tasks.get(name);
      let maxDepLevel = -1;
      for (const dep of deps) {
        maxDepLevel = Math.max(maxDepLevel, levelMap.get(dep) ?? -1);
      }
      const level = maxDepLevel + 1;
      levelMap.set(name, level);
      if (!levels[level]) {
        levels[level] = [];
      }
      levels[level].push(name);
    }

    for (const levelTasks of levels) {
      await Promise.all(
        levelTasks.map((name) => {
          const { task } = this.tasks.get(name);
          return task();
        })
      );
    }

    return;
  }

  /**
   * 理论上更优的方案：动态调度
   * 维护每个任务的剩余依赖计数
   * 每当一个任务完成，检查它的所有后继任务
   * 如果某个后继任务的依赖全部完成，立即执行它
   */
  async dynamicRun() {
    this._getTopologicalOrder();
    const remainingDeps = new Map(); // 剩余依赖数
    const dependents = new Map(); // 依赖此任务的后继

    for (const [name, { deps }] of this.tasks) {
      remainingDeps.set(name, deps.length);
      for (const dep of deps) {
        if (!dependents.has(dep)) {
          dependents.set(dep, []);
        }
        dependents.get(dep).push(name);
      }
    }

    const execute = async (name) => {
      const { task } = this.tasks.get(name);
      await task();

      const nextTasks = dependents.get(name) || [];
      const childPromises = [];

      for (const next of nextTasks) {
        const newCount = remainingDeps.get(next) - 1;
        remainingDeps.set(next, newCount);
        if (newCount === 0) {
          childPromises.push(execute(next));
        }
      }

      await Promise.all(childPromises);
    };

    const initialTasks = [];

    for (const [name, count] of remainingDeps) {
      if (count === 0) {
        initialTasks.push(name);
      }
    }

    await Promise.all(initialTasks.map((name) => execute(name)));
  }
}

/**
 * 需求：
 * 1. 支持注册任务（addTask）并记录其依赖。
 * 2. 执行时，按依赖关系安排执行顺序。
 * 3. 无依赖的任务可并行。
 * 4. 检测循环依赖，如果有则报错。
 * 5. 返回一个 Promise<void>，代表所有任务完成。
 */
