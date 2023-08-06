// Implement Queue using Stacks (Easy):
// Implement a queue using two stacks and the standard queue operations: enqueue, dequeue, peek, and isEmpty.

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(val) {
    this.stack1.push(val);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      this.moveElementsFromStack1ToStack2();
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      this.moveElementsFromStack1ToStack2();
    }
    return this.stack2[this.stack2.length - 1];
  }

  isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  moveElementsFromStack1ToStack2() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
}

// Example usage:
const queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.peek()); // Output: 1
queue.dequeue();
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.dequeue();
console.log(queue.isEmpty()); // Output: true
