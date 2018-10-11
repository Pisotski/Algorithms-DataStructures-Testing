import {isPalindrome, isPalindromePermutation} from './palindromePermutations';

test('isPalindrome should return whether an input is palindrome or not', () => {
  expect(isPalindrome('Tat')).toBe(true);
  expect(isPalindrome('foo')).toBe(false);
})
test('isPalindromePermutation should if there are palindromes in the input', () => {
  expect(isPalindromePermutation('fok')).toBe(false);
  expect(isPalindromePermutation('asas')).toBe(true);
})
test('isPalindromePermutation should ignore spaces', () => {
  expect(isPalindromePermutation('as as')).toBe(true);
  expect(isPalindromePermutation(' a s a')).toBe(true);
})
