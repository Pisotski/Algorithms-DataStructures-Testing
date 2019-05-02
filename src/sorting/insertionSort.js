const insertionSort = function( sequence ) {
  for( let i = 1; i < sequence.length; i += 1 ) {
    let keyToBeSorted = sequence[i];
    let pointer = i - 1;
    while ( keyToBeSorted < sequence[pointer] && pointer >= 0 ) {
      let numberUnderPointer = sequence[pointer];
      let nextToPointer = pointer + 1;
      sequence[nextToPointer] = numberUnderPointer;
      pointer -= 1;
    }
    pointer += 1;
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
//     arr[ j + 1 ] = temp;
//   }

//   return arr;
// }

export default insertionSort;

