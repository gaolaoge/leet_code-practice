import { SimpleMinPQ, SimpleMinNodePQ } from './utils';
import { ListNode } from './nodes';

// 测试代码
const pq = new SimpleMinPQ(5);
pq.push(3);
pq.push(2);
pq.push(1);
pq.push(5);
pq.push(4);

console.log(pq.pop()); // 1
console.log(pq.pop()); // 2
console.log(pq.pop()); // 3
console.log(pq.pop()); // 4
console.log(pq.pop()); // 5

const pqNode = new SimpleMinNodePQ(5);
pqNode.push(new ListNode(3, null));
pqNode.push(new ListNode(2, null));
pqNode.push(new ListNode(1, null));
pqNode.push(new ListNode(5, null));
pqNode.push(new ListNode(4, null));

console.log(pqNode.pop()); // 1
console.log(pqNode.pop()); // 2
console.log(pqNode.pop()); // 3
console.log(pqNode.pop()); // 4
console.log(pqNode.pop()); // 5
