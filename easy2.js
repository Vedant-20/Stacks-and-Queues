// Rotting Oranges (Easy):
// Given a grid representing a 2D array of oranges, determine the minimum number of minutes it takes for all oranges to rot. Oranges can rot if they are adjacent to a rotten orange and there is a minute to pass.


function orangesRotting(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  
    let freshOranges = 0;
    const queue = [];
  
    // Count fresh oranges and push rotten oranges into the queue
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === 1) {
          freshOranges++;
        } else if (grid[i][j] === 2) {
          queue.push([i, j, 0]); // [i, j] is the position, and 0 is the elapsed time (initially 0 for rotten oranges)
        }
      }
    }
  
    let minutes = 0;
    while (queue.length > 0) {
      const [row, col, elapsed] = queue.shift();
  
      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
  
        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
          grid[newRow][newCol] = 2;
          freshOranges--;
          queue.push([newRow, newCol, elapsed + 1]);
          minutes = elapsed + 1;
        }
      }
    }
  
    return freshOranges === 0 ? minutes : -1;
  }
  
  // Example usage:
  const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
  ];
  console.log(orangesRotting(grid)); // Output: 4
  