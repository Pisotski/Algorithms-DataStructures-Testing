// implement an algorithm to determine if a string has all unique characters.
// What if you can not use additional data structures

const isUnique = (string) => {
//_______________GENERAL SOLUTION___________________
  // const store = {};
  // for( let i = 0; i < string.length; i++ ) {
  //   if( store[string[i]] ) {
  //     return false;
  //   }
  //   store[string[i]] = true;
  // }
  // return true;
//_______________END GENERAL SOLUTION__________________

// NlogN solution using sort
  const sorted = string.split('').sort((a,b) => a > b);
  for( let i = 0; i < sorted.length; i++ ) {
    //potential error sorted.last+1 === undefined
    if( sorted[i] === sorted[i + 1] ) {
      return false;
    }
  }
  return true;
}
isUnique('xyi');
export default isUnique;