//The are three types of edits that can be performed on strings:
//insert a character, remove a character, or replace a character
//Given two strings, write a function to check if they are one edit (or zero edits) away

//Question:
//How replace method should work? Is it possible to swap using replace method?

//naive solution
//declare methods insert, remove and replace
//compare the outputs
//time complexity = O(n^2 * 3)

const oneAway = (input, escape) => {

  const difference = input.length - escape.length;
  let result = false;
  const largest = Math.max(input.length, escape.length);

  if(difference > 1) {
    return result;
  }

  const recurse = function(string1, string2, numberOfOperations = 0) {
    if(numberOfOperations > 1) {
      return;
    }
    if(string1.length === 0 && string2.length === 0) {
      result = true;
      return;
    }
    if(string1[0] !== string2[0]) {
      if(difference > 0) {
        return recurse(string1.slice(1), string2, numberOfOperations += 1);
      }
      if(difference < 0) {
        return recurse(string1, string2.slice(1), numberOfOperations += 1);
      }
      if(difference === 0) {
        return recurse(string1.slice(1), string2.slice(1), numberOfOperations += 1);
      }
    }
    return recurse(string1.slice(1), string2.slice(1), numberOfOperations);
  }
  recurse(input, escape);
  return result;
}

export default oneAway;
