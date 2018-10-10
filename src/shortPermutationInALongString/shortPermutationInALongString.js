// Given two strings s1 and s2, write a function to return true 
// if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

// Input:s1 = "ab" s2 = "eidbaooo"
// Output:True
// Explanation: s2 contains one permutation of s1 ("ba").

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False

var short = 'ab';
var long = 'aab';

var shortPermutationInALongString = function(short, long) {
  if( !short || !long ) {
    return 'yo!'
  }
  var letterHash = {};
  for( var i = 0; i < short.length; i++ ) {
    var letter = short[i];
    if( !letterHash[letter] ) {
      letterHash[letter] = 0;
    }
    letterHash[letter] += 1;
  }
  var start = 0;
  var gap = short.length-1;
  var result = [];

  var findPermutations = function(start, end, hash) {
    hash = hash || Object.assign({}, letterHash);

    while ( start <= end ) {
      var letter = long[start];
      if( !hash[letter] ) {
        return;
      }
      hash[letter] -= 1;
      if( hash[letter] === 0 ) {
        delete hash[letter];
      }
      start += 1;
    }
    if( !Object.keys(hash).length ) {
      result.push([end-gap, end]);
    }
  }

  for( var i = 0; i < long.length; i += 1 ) {
    if( long[i] in letterHash && long[i+gap] in letterHash ) {
      findPermutations(i, i+gap);
    }
  }
  return result;
}

shortPermutationInALongString(short, long)
export default shortPermutationInALongString;
