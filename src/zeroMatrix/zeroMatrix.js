//write an algorithm such that if am element in an MxN matrix is 0,
//its entire row and column are set to 0

//Question
//can we assume that all items in a matrix are positive integers?

// search for 0
// when found toggle every item in a row to its negative
// -0 === 0 => true 

const zeroMatrix = (matrix) => {

  for(let row = 0; row < matrix.length; row += 1) {
    for(let col = 0; col < matrix[row].length; col += 1) {
      if(matrix[row][col] === 0) {
        matrix = negateMatrix(row, col, matrix);
      }
    }
  }

  matrix = convertMatrix(matrix);
  return matrix;
}

const negateMatrix = (row, col, matrix) => {
  let point = 0;
  while(point < matrix[row].length) {
    matrix[row][point] = -Math.abs(matrix[row][point]);
    point += 1;
  }

  point = 0;
  while(point < matrix.length) {
    matrix[point][col] = -Math.abs(matrix[point][col]);
    point += 1;
  }
  return matrix;
}

const convertMatrix = (matrix) => {

  for(let row = 0; row < matrix.length; row += 1) {
    for(let col = 0; col < matrix[row].length; col += 1) {
      if(matrix[row][col] < 0 || matrix[row][col] === -0) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}

const matrix = [
  [1, 2 ,3],
  [4, 0, 6],
  [7, 8, 9]
]

export { zeroMatrix, negateMatrix, convertMatrix };
