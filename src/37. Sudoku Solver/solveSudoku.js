// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

var solveSudoku = function (board, rowIndex = 0, columnIndex = 0, number = 1) {

    // the problem consist of keeping track of 3 axis
    // every array in the board should have every digit from 1 to 9
    // every index of every array should have every digit from 1 to 9
    // every square should have every digit from 1 to 9
    // definition of square
    // index modulo 3 === 0
    // find it's x asis's siblings, and j axis's siblings
    // each number has 8 siblings

    // This problem will have a lot of digits. Name variables appropriatelly
    // This is recursive problem.
    // Board can be not resolvable.

    // base, when the very last '.' is filled with correct number

    //the hardest is to define and check squares.

    // will need 3 helper functions
    // addNumber, 1 - 9

    // ideally to create a class or write helper helper functions in outer scope
    // to maintain modular system. otherwise helper functions are hard to test

    // all helper function are working
    // logic when traversing through the matrix is wrong line 37 thru 67

    if (number > 9) {
        console.log(`row ${rowIndex}, col ${columnIndex}, number wasn't updated ${number}`);
        return;
    }
    let target = board[rowIndex][columnIndex];

    if (rowIndex === 8 && columnIndex === 8 && target !== '.') {
        return board;
    }
    if (target !== '.') {
        let coordinates = updateCoordinates(rowIndex, columnIndex);
        return solveSudoku(board, coordinates.rowIndex, coordinates.columnIndex)
    }

    let isPossible = tryNum(board, rowIndex, columnIndex, number);
    if (isPossible && rowIndex === 8 && columnIndex === 8) {
        return board;
    }
    if (isPossible) {
        let copyBoard = copy(board);
        copyBoard[rowIndex][columnIndex] = number.toString();
        return solveSudoku(copyBoard, rowIndex, columnIndex);
    } else if (number < 9) {
        for (let n = 1; n < 10; n += 1) {
            solveSudoku(board, rowIndex, columnIndex, number += 1);
        }
    } else {
        return;
    }

    function tryNum(board, row, col, number) {

        if (row < 0 || row > 8 || col < 0 || col > 8) {
            console.log(`out of range row ${row}, col ${col}`);
            return;
        }

        function checkRow(row, number) {

            let result = true;
            for (let i = 0; i < 9; i += 1) {
                if (parseInt(board[row][i]) === number) return false;
            }
            return result;
        }

        function checkCol(col, number) {
            let result = true;
            for (let i = 0; i < 9; i += 1) {
                if (parseInt(board[i][col]) === number) return false;
            }
            return result;
        }

        function checkBox(row, col, number) {
            //coordinates board[5][2]

            let startRow = row;
            let startCol = col;
            while (startRow % 3 !== 0 && startRow !== 0) {
                startRow -= 1;
            }
            while (startCol % 3 !== 0 && startCol !== 0) {
                startCol -= 1;
            }
            //if row modulo is 0
            //sub 3 from the row/col
            //if not, sub the remainder
            let result = true;
            for (let r = startRow; r < startRow + 3; r += 1) {
                for (let c = startCol; c < startCol + 3; c += 1)
                    if (parseInt(board[r][c]) === number) {
                        return false;
                    }
            }
            return result;
        }

        return (checkRow(row, number) && checkCol(col, number) && checkBox(row, col, number));
    }

    function updateCoordinates(rowIndex, columnIndex) {
        let updateRow = columnIndex >= 8;
        let coordinates = {
            rowIndex: updateRow ? rowIndex + 1 : rowIndex,
            columnIndex: updateRow ? 0 : columnIndex + 1
        }
        return coordinates;
    }

    function copy(board) {
        return board.map(row => row.map(el => el = el))
    }
};

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

solveSudoku(board);

// solveSudoku();