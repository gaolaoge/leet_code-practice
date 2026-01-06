class DirectGraph {
  adjacencyList;
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(key: any) {
    if (!this.adjacencyList.has(key)) {
      this.adjacencyList.set(key, []);
    }
  }

  addEdge(from: any, to: any) {
    this.adjacencyList.get(from)?.push(to);
  }
}

export { DirectGraph };
