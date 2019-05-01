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

export default insertionSort;

