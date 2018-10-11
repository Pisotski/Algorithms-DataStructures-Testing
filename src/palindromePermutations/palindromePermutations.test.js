import {isPalindrome, isPalindromePermutation} from './palindromePermutations';

test.skip('isPalindrome should return whether an input is palindrome or not', () => {
  expect(isPalindrome('Tat')).toBe(true);
  expect(isPalindrome('foo')).toBe(false);
})
test.skip('isPalindromePermutation should if there are palindromes in the input', () => {
  expect(isPalindromePermutation('fok')).toBe(false);
  expect(isPalindromePermutation('asas')).toBe(true);
})
test.skip('isPalindromePermutation should ignore spaces', () => {
  expect(isPalindromePermutation('as as')).toBe(true);
  expect(isPalindromePermutation(' a s a')).toBe(true);
})
