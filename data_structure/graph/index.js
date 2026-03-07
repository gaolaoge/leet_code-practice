class TaskScheduler {
  tasks;
  constructor() {
    this.tasks = new Map();
  }

  addTask(name, deps, task) {
    if (this.tasks.has(name)) {
      throw new Error('xx');
    }
    this.tasks.set(name, { deps, task });
  }

  _makeTopologicalOrder() {
    const names = [...this.tasks.keys()];

    const graphs = new Map(); // {name, [...deDeps]}
    const inDegree = new Map(); // {name, count} 当前节点尚有多少依赖

    // 初始化
    for (const name of names) {
      graphs.set(name, []);
      inDegree.set(name, 0);
    }

    // 构建 inDegree 和 graphs
    for (const [name, { deps }] of this.tasks) {
      for (const dep of deps) {
        if (!this.tasks.has(dep)) {
          throw new Error('xx');
        }
        graphs.get(dep).push(name);
        inDegree.set(name, inDegree.get(name) + 1);
      }
    }

    const dependents = new Map(graphs);
    const remainingDeps = new Map(inDegree);

    // 拓扑排序
    const queue = [];
    for (const [name, count] of inDegree) {
      if (count === 0) {
        queue.push(name);
      }
    }

    const order = [];
    while (queue.length) {
      const name = queue.shift();
      order.push(name);
      for (const dep of graphs.get(name)) {
        inDegree.set(dep, inDegree.get(dep) - 1);
        if (inDegree.get(dep) === 0) {
          queue.push(dep);
        }
      }
    }

    if (order.length < names.length) {
      throw new Error('Circular xx');
    }

    return { order, dependents, remainingDeps };
  }

  async run() {
    const { order } = this._makeTopologicalOrder();

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

  async dynamicRun() {
    const { dependents, remainingDeps } = this._makeTopologicalOrder();

    const execute = async (name) => {
      const { task } = this.tasks.get(name);
      await task();

      const nextTasks = dependents.get(name) || [];
      const childrenPromises = [];

      for (const next of nextTasks) {
        const newCount = remainingDeps.get(next) - 1;
        remainingDeps.set(next, newCount);
        if (newCount === 0) {
          childrenPromises.push(next);
        }
      }

      await Promise.all(childrenPromises.map((child) => execute(child)));
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
