import { lengthOfLongestSubstring } from './lengthOfLongestSubstring';

test ('should find the length of the longest substring without repeating characters', () => {
    expect(lengthOfLongestSubstring('abcabcabc')).toBe(3);
    expect(lengthOfLongestSubstring('1')).toBe(1);
});