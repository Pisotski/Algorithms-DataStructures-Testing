import { findMaxConsecutiveOnes, longestOnes } from "./findMaxConsecutiveOnes";

test(`should return the maximum number of consecutive 1's in the array`, () => {
    let nums = [1, 1, 0, 1, 1, 1];
    let ans = 3;
    expect(findMaxConsecutiveOnes(nums)).toEqual(ans);
});

test(`should return the maximum number of consecutive 1's in the array if you can flip at most k 0's`, () => {
    let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2;
    let ans = 6;
    expect(longestOnes(nums, k)).toEqual(ans);
});
