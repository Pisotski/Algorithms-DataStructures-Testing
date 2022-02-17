import { isPalindrome, longestPalindrome } from "./longestPalindrome";

describe(`isPalindrome should determine whether or not the string is a palindrom `, () => {
    test(`isPalindrome should return true is the string is palindrome`, () => {
        expect(isPalindrome(`aba`)).toBeTruthy()
    })
    test(`isPalindrome should return true is the string is palindrome`, () => {
        expect(isPalindrome(`abaa`)).toBeFalsy()
    })
});

test(`longestPalindrome should return the longest palindromic substring`, () => {
    expect(longestPalindrome(`a`)).toBe(`a`);
    expect(longestPalindrome(`aba`)).toBe(`aba`);
    expect(longestPalindrome(`aaabaa`)).toBe(`aabaa`);
});
