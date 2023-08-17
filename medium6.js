// Design Circular Deque (Medium):
// Implement a circular deque (double-ended queue) data structure that supports insertFront, insertLast, deleteFront, deleteLast, getFront, getLast, and isEmpty operations.

class MyCircularDeque {
    constructor(k) {
      this.queue = new Array(k + 1);
      this.front = 0; // Index of the front element
      this.rear = 0;  // Index of the next available position after the rear
      this.capacity = k + 1; // One extra space for distinguishing between full and empty
    }
  
    insertFront(value) {
      if (this.isFull()) {
        return false;
      }
  
      this.front = (this.front - 1 + this.capacity) % this.capacity;
      this.queue[this.front] = value;
  
      return true;
    }
  
    insertLast(value) {
      if (this.isFull()) {
        return false;
      }
  
      this.queue[this.rear] = value;
      this.rear = (this.rear + 1) % this.capacity;
  
      return true;
    }
  
    deleteFront() {
      if (this.isEmpty()) {
        return false;
      }
  
      this.front = (this.front + 1) % this.capacity;
  
      return true;
    }
  
    deleteLast() {
      if (this.isEmpty()) {
        return false;
      }
  
      this.rear = (this.rear - 1 + this.capacity) % this.capacity;
  
      return true;
    }
  
    getFront() {
      if (this.isEmpty()) {
        return -1;
      }
  
      return this.queue[this.front];
    }
  
    getLast() {
      if (this.isEmpty()) {
        return -1;
      }
  
      return this.queue[(this.rear - 1 + this.capacity) % this.capacity];
    }
  
    isEmpty() {
      return this.front === this.rear;
    }
  
    isFull() {
      return (this.rear + 1) % this.capacity === this.front;
    }
  }
  
  // Example usage:
  const circularDeque = new MyCircularDeque(3);
  console.log(circularDeque.insertLast(1)); // Output: true
  console.log(circularDeque.insertLast(2)); // Output: true
  console.log(circularDeque.insertFront(3)); // Output: true
  console.log(circularDeque.insertFront(4)); // Output: false (deque is full)
  console.log(circularDeque.getRear());     // Output: 2
  console.log(circularDeque.isFull());      // Output: true
  console.log(circularDeque.deleteLast());  // Output: true
  console.log(circularDeque.insertFront(4)); // Output: true
  console.log(circularDeque.getFront());    // Output: 4
  