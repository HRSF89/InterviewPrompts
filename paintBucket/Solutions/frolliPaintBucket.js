
 /** Implement the paint bucket function in Paint. When you click on a pixel in an image, 
 * it overrides all adjacent pixels of the same color with the new specified color Input: 
 * “Image” is represented by an n x m matrix of colors, for example: [ [ ‘pink’, pink, ‘red’], 
 * [ ‘pink’, blue, pink] ] x and y represent coordinates in grid (like pixels on a screen) - 
 * for example, x=0, y=0 Color with which to override original color, for example: ‘blue’ Output: 
 * Returns grid with original colors Output: Returns grid with original colors overwritten, 
 * based on example inputs above, [ [‘blue’, ‘blue’, ‘red’], [‘blue’, ‘blue’, ‘pink’] ] 
 * 
 * Assumptions (fyi these were not given by the interviewer): colors are all represented the same way,
 * so you won’t see “#fff”/“white”/rgba(255,255,255) which are equivalent colors. 
 * Diagonals are not considered adjacent. 
 * You can return either the same array or a new array (pick whichever is easier for you) 
 * When your input is outside the m x n grid, return the grid with no colors changed **///

 // I: array of arrays, 2 integers, string
 // O: new array of arrays
 // Goal: Find the original color change to new color and any near by colors (up,down,left,right) that match orgirnal color.
 
 // Notes for me.
 // X = col
 // Y = row
 

 function paintBucket (grid, x, y, color) {
    let que = [];
    let originalColor = null;
    if (grid[y][x] !== undefined) {
        que = [[x, y]];
        originalColor = grid[y][x];
    }

    while (que.length > 0) {
        let newX = que[0][0];
        let newY = que[0][1];
        if (grid[newY] !== undefined && grid[newY][newX] !== undefined) {
            if (grid[newY][newX] === originalColor) {
                grid[newY][newX] = color;
                que.push([newX+1, newY]);
                que.push([newX-1, newY]);
                que.push([newX, newY+1]);
                que.push([newX, newY-1]);
            }
        }
        que.shift();
    }
  return grid;
 }
 
 
 // Test
var paintImage = [ [ 'pink', 'pink', 'red'], [ 'pink', 'blue', 'pink'], [ 'pink', 'pink', 'pink']];
console.log(paintBucket(paintImage, 0, 0, "blue")); // [ [ 'blue', 'blue', 'red'], [ 'blue', 'blue', 'blue'], [ 'blue', 'blue', 'blue']];