// Given a binary array nums, return the maximum 
// number of consecutive 1's in the array.

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. 
//     The maximum number of consecutive 1s is 3.

// Sliding Window

var findMaxConsecutiveOnes = function (nums) {

    let left = 0, right = 0, zeros = 0, n = nums.length, globalMax = 0;

    while (right < n) {

        if (nums[right] === 0) zeros += 1;

        while (zeros > 0) {
            if (nums[left] === 0) zeros -= 1;

            left += 1;
        }

        right += 1;
        globalMax = Math.max(globalMax, right - left);
    }
    return globalMax;
};

// Given a binary array nums and an integer k, 
//return the maximum number of consecutive 1's 
// in the array if you can flip at most k 0's.

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. 
//     The longest subarray is underlined.

// Sliding Window

let longestOnes = function (nums, k) {

    let left = 0, right = 0, len = nums.length, globalMax = 0, zeros = k;

    while (right < len) {
        if (nums[right] === 0) zeros -= 1;

        while (zeros < 0) {
            if (nums[left] === 0) zeros += 1;
            left += 1;
        }
        right += 1;
        globalMax = Math.max(globalMax, right - left);
    }
    return globalMax;
};


export { findMaxConsecutiveOnes, longestOnes };
