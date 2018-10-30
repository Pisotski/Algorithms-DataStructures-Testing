// chapter 4 page 92 ~Introduction to algorithms~
// also Kadane's algorithm

//first implementation by sudocode from the book

const findMaxCrossingSubarray = ( array, low, mid, high ) => {
  let leftSum = -Infinity;
  let rightSum = -Infinity;
  let sum = 0;
  let maxLeft;
  let maxRight;
  for( let i = mid; i >= low; i -= 1 ){
    sum += array[i];
    if( sum > leftSum ) {
      leftSum = sum;
      maxLeft = i;
    }
  }
  sum = 0;
  for( let i = mid + 1; i <= high; i += 1 ){
    sum = sum + array[i];
    if( sum > rightSum ){
      rightSum = sum;
      maxRight = i;
    }
  }
  return {
    maxLeft,
    maxRight,
    sum: leftSum + rightSum,
  }
}

const findMaximumSubarray = ( array, low, high ) => {

  if( high === low ){
    return {
      low,
      high,
      sum: array[low],
    }
  }
  else{
    const mid = Math.floor((low + high) / 2);
    const leftResults = findMaximumSubarray(array, low, mid);
    const leftLow = leftResults.low;
    const leftHigh = leftResults.high;
    const leftSum = leftResults.sum;
    const rightResults = findMaximumSubarray(array, mid + 1, high);
    const rightLow = rightResults.low;
    const rightHigh = rightResults.high;
    const rightSum = rightResults.sum;
    const crossResults = findMaxCrossingSubarray(array, low, mid, high);
    const crossLow = crossResults.maxLeft;
    const crossHigh = crossResults.maxRight;
    const crossSum = crossResults.sum;

    if( leftSum >= rightSum && leftSum >= crossSum ) {
      return {
        low: leftLow,
        high: leftHigh,
        sum: leftSum,
      }
    } else if( rightSum >= leftSum && rightSum >= crossSum ) {
      return {
        low: rightLow,
        high: rightHigh,
        sum: rightSum,
      }
    } else {
      return {
        low: crossLow,
        high: crossHigh,
        sum: crossSum,
      }
    }
  }
}

export {
  findMaxCrossingSubarray,
  findMaximumSubarray
}
