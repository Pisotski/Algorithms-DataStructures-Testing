// Given a string, write a function to check if it is a permutation of a palindrome
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.

// Questions:
// In this case what does it mean for a string to be a pallindrome?
// Can I assume that a string consist of only letters?
// If not should I ignore any other characters that letters?
// How about case sensitivity?

const isPalindrome = (string) => {
  string = string.toLowerCase().replace(/\s/g, '');
  return string === string.split('').reverse().join('');
}

const isPalindromePermutation = (string) => {
  // if a string has more that one odd number of characters
  // it cannot be a palindrome
  var result = {};

  const recurse = (string, anagram = '') => {
    if(!string) {
      if(isPalindrome(anagram)){
        result[anagram] = true;
      }
      return;
    }

    for(let i = 0; i < string.length; i += 1){
      const newAnagram = anagram + string[i];
      const newString = string.slice(0, i) + string.slice(i + 1);
      recurse(newString, newAnagram);
    }
  }
  recurse(string);
  
  return Object.keys(result).length > 0;
}
console.log(isPalindromePermutation('fok'))

export {isPalindrome, isPalindromePermutation};