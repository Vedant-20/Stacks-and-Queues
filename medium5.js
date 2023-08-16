// Queue Reconstruction by Height (Medium):
// Given an array of people's heights and the number of people in front of them who have a height greater than or equal to theirs, reconstruct the queue.

function reconstructQueue(people) {
    // Sort people in decreasing order of height, and then by k in increasing order
    people.sort((a, b) => {
      if (a[0] !== b[0]) {
        return b[0] - a[0]; // Sort by height in decreasing order
      } else {
        return a[1] - b[1]; // Sort by k in increasing order
      }
    });
  
    const result = [];
    
    // Insert each person at their k position
    for (const person of people) {
      result.splice(person[1], 0, person);
    }
  
    return result;
  }
  
  // Example usage:
  const people = [
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2]
  ];
  console.log(reconstructQueue(people));
  // Output: [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
  