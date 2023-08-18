// Implement Stack using Priority Queue (Medium):
// Implement a stack data structure using a priority queue, which supports push, pop, top, and isEmpty operations.


class MyStack {
    constructor() {
      this.sequence = 0;
      this.priorityQueue = new PriorityQueue();
    }
  
    push(val) {
      this.priorityQueue.enqueue(val, this.sequence);
      this.sequence++;
    }
  
    pop() {
      if (this.isEmpty()) {
        return null;
      }
      this.sequence--; // Decrement sequence as we're removing an element
      return this.priorityQueue.dequeue().element;
    }
  
    top() {
      if (this.isEmpty()) {
        return null;
      }
      return this.priorityQueue.peek().element;
    }
  
    isEmpty() {
      return this.priorityQueue.isEmpty();
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(element, priority) {
      this.queue.push({ element, priority });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    peek() {
      return this.queue[0];
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  }
  
  // Example usage:
  const stack = new MyStack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.top()); // Output: 3
  console.log(stack.pop()); // Output: 3
  console.log(stack.top()); // Output: 2
  