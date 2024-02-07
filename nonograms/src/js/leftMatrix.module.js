// Transform the original matrix for leftNumGrid numbers
export function transformLeftMatrix(matrix) {
  const numRows = matrix.length;
  const newMatrix = Array(numRows)
    .fill(0)
    .map(() => []);

  for (let row = 0; row < numRows; row++) {
    let count = 0;
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 1) {
        count++;
      } else {
        if (count > 0) {
          newMatrix[row].push(count);
          count = 0;
        }
      }
    }
    // Add the remaining count if it is greater than zero
    if (count > 0) {
      newMatrix[row].push(count);
    }
    // add zeros to the beginning of the subarray so that its length is 5
    while (newMatrix[row].length < 5) {
      newMatrix[row].unshift(0);
    }
  }

  return newMatrix;
}
