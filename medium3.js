// Implement Circular Queue (Medium):
// Implement a circular queue data structure that supports the enqueue, dequeue, front, and isEmpty operations.

class MyCircularQueue {
    constructor(k) {
      this.queue = new Array(k);
      this.front = 0;
      this.rear = -1;
      this.size = 0;
      this.capacity = k;
    }
  
    enQueue(val) {
      if (this.isFull()) {
        return false;
      }
  
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = val;
      this.size++;
  
      return true;
    }
  
    deQueue() {
      if (this.isEmpty()) {
        return false;
      }
  
      this.front = (this.front + 1) % this.capacity;
      this.size--;
  
      return true;
    }
  
    Front() {
      if (this.isEmpty()) {
        return -1;
      }
  
      return this.queue[this.front];
    }
  
    Rear() {
      if (this.isEmpty()) {
        return -1;
      }
  
      return this.queue[this.rear];
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    isFull() {
      return this.size === this.capacity;
    }
  }
  
  // Example usage:
  const circularQueue = new MyCircularQueue(3);
  console.log(circularQueue.enQueue(1)); // Output: true
  console.log(circularQueue.enQueue(2)); // Output: true
  console.log(circularQueue.enQueue(3)); // Output: true
  console.log(circularQueue.enQueue(4)); // Output: false (queue is full)
  console.log(circularQueue.Rear());     // Output: 3
  console.log(circularQueue.isFull());   // Output: true
  console.log(circularQueue.deQueue());  // Output: true
  console.log(circularQueue.enQueue(4)); // Output: true
  console.log(circularQueue.Rear());     // Output: 4
  