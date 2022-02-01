const insertionSort = function( sequence ) {
  //start loop from the second integer in sequence to be able to compare it with the first
  for( let i = 1; i < sequence.length; i += 1 ) {
    //store an integer that's going to be sorted
    let keyToBeSorted = sequence[i];
    //start second loop with the first integer in sequence
    let pointer = i - 1;
      //compare stored integer with every integer in sequence
      //if stored integer is smaller than integer under pointer and there is an integer under current pointer
      while ( keyToBeSorted < sequence[pointer] && pointer >= 0 ) {
        let underPointer = sequence[pointer];
        let nextToPointer = pointer + 1;
        //rewrite integer next to the pointer with an integer under pointer
        //EXAMPLE 0.0: sequence = [3,2]; pointer = 0; keyToBeSorted = 2; underPointer = 3; 3 is greater than 2; rewrite [3,2] => [3,3]
        sequence[nextToPointer] = underPointer;
        //check previous integer in sequence
        //EXAMPLE 0.1(continue): decrease current pointer: pointer = 0 => pointer = -1; pointer end loop by the rules above (while pointer >= 0)
      pointer -= 1;
    }
    //move pointer to the next integer in sequence
    //which by the rules above be index of the first integer in sequence
    //or index of smaller integer than stored one
    //EXAMPLE 0.2(continue): pointer = -1; end loop by the rules above (while pointer >= 0)
    pointer += 1;
    //rewrite stored integer under found index(pointer)
    //EXAMPLE 0.3(continue): sequence = [3,3]; pointer = 0; rewrite integer under pointer with stored key [3,3] => [2,3]
    sequence[pointer] = keyToBeSorted;
  }
  return sequence;
}

// var insertionSort = ( arr ) => {
//   for ( var i = 1; i < arr.length; i++ ) {
//     var temp = arr[ i ];

//     for ( var j = i - 1; j >= 0 && arr[ j ] > temp; j-- ) {
//     arr[ j + 1 ] = arr[ j ];
//     }
//     // by the properties of var statement, variable j remains in memory even when out of it's own scope
//     // current practice is not recommended and left for educational puposes
//     // as a work around an independant variable should be created in the outer scope above the inner foor loop

//     arr[ j + 1 ] = temp;
//   }

//   return arr;
// }

export default insertionSort;

