// Divide: the n-element sequence to be sorted into two subsequences of n/2 elements each.
// Conquer: Sort the two subsequences recursively using merge sort.
// Combine: Merge the two sorted subsequences to produce the sorted answer.

export const merge = function( left, right ) {
  // We merge by calling an auxiliary procedure MERGE(A,p,q,r), where A is an array and p,q and r are indices into the array such that p <= q < r.
  // The procedure assumes that the subarrays A[p...q] and A[q+1..r] are in sorted order.
  // It merges them to form a single sorted subarray that replaces the current subarray A[p..r].
    const sortedSequence = [];
    while( left.length && right.length ) {
      if( left[0] <= right[0] ) {
        sortedSequence.push(left.shift(0))
      } else {
        sortedSequence.push(right.shift(0))
      }
    }
    return sortedSequence.concat(left.slice(0)).concat(right.slice(0));
  };
  
  export const mergeSort = function( sequence, callback ) {
    if( sequence.length <= 1 ) {
      return sequence;
    }
    const middle = Math.floor( sequence.length / 2 );
    const left = sequence.slice( 0, middle );
    const right = sequence.slice( middle );
    return callback( mergeSort( left, callback ), mergeSort( right, callback ) );
  };
  