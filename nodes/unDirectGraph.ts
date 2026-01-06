class UnDirectGraph {
  adjacencyList;
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(key: any) {
    if (!this.adjacencyList.has(key)) {
      this.adjacencyList.set(key, []);
    }
  }

  addEdge(v1: any, v2: any) {
    this.adjacencyList.get(v1)?.push(v2);
    this.adjacencyList.get(v2)?.push(v1);
  }
}

const graph = new UnDirectGraph();
// 加顶点
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

// 加边
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');

console.log(graph.adjacencyList);

export { UnDirectGraph };
