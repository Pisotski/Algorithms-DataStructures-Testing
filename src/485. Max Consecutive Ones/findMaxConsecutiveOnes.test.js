import { findMaxConsecutiveOnes } from "./findMaxConsecutiveOnes";

test(`return the maximum number of consecutive 1's in the array`, () => {
    let nums = [1, 1, 0, 1, 1, 1];
    let ans = 3;
    expect(findMaxConsecutiveOnes(nums)).toEqual(ans);
});
