// Implement Stack using Queues (Medium):
// Implement a stack using two queues and the standard stack operations: push, pop, peek, and isEmpty


class MyStack {
    constructor() {
      this.queue1 = [];
      this.queue2 = [];
    }
  
    push(val) {
      // Move elements from queue1 to queue2
      while (this.queue1.length > 0) {
        this.queue2.push(this.queue1.shift());
      }
  
      // Add the new element to queue1
      this.queue1.push(val);
  
      // Move elements back to queue1 from queue2
      while (this.queue2.length > 0) {
        this.queue1.push(this.queue2.shift());
      }
    }
  
    pop() {
      return this.queue1.shift();
    }
  
    top() {
      return this.queue1[0];
    }
  
    isEmpty() {
      return this.queue1.length === 0;
    }
  }
  
  // Example usage:
  const stack = new MyStack();
  stack.push(1);
  stack.push(2);
  console.log(stack.top()); // Output: 2
  console.log(stack.pop()); // Output: 2
  console.log(stack.isEmpty()); // Output: false
  console.log(stack.pop()); // Output: 1
  console.log(stack.isEmpty()); // Output: true
  