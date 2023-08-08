// Sliding Window Maximum (Medium):
// Given an array and an integer k, find the maximum element for each window of size k moving from left to right.


function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = []; // Store indices of elements, maintaining a decreasing order of values
  
    for (let i = 0; i < nums.length; i++) {
      // Remove elements that are out of the current window
      while (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }
  
      // Remove smaller elements as they are not needed
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
  
      deque.push(i); // Add the current index to the deque
  
      // Start recording the maximum values after the first k-1 elements
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [1, 3, -1, -3, 5, 3, 6, 7];
  const k = 3;
  console.log(maxSlidingWindow(nums, k)); // Output: [3, 3, 5, 5, 6, 7]
  