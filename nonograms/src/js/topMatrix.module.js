// Transpose of a matrix - turning rows into columns
export function transformAndInvertMatrix(matrix) {
  const transformed = transformMatrix(matrix);

  const invertedMatrix = [];
  for (let i = 0; i < transformed[0].length; i++) {
    invertedMatrix[i] = [];
    for (let j = 0; j < transformed.length; j++) {
      invertedMatrix[i][j] = transformed[j][i];
    }
  }

  return invertedMatrix;
}

// Transform the original matrix for topNumGrid numbers
function transformMatrix(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const newMatrix = Array(numCols)
    .fill(0)
    .map(() => []);

  for (let col = 0; col < numCols; col++) {
    let count = 0;
    for (let row = 0; row < numRows; row++) {
      if (matrix[row][col] === 1) {
        count++;
      } else {
        if (count > 0) {
          newMatrix[col].push(count);
          count = 0;
        }
      }
    }
    if (count > 0) {
      newMatrix[col].push(count);
    }
    // add zeros to the beginning of the subarray so that its length is 5
    while (newMatrix[col].length < 5) {
      newMatrix[col].unshift(0);
    }
  }

  return newMatrix;
}
