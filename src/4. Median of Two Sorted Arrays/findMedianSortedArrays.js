// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).



// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

export function findMedianSortedArrays(nums1, nums2) {

    // even it was not stated in the problem, i think the purpose of it
    // is not just using native .sort method.

    // manual solution

    let mergedNums = [];
    let nextIndexNums1 = 0;
    let nextIndexNums2 = 0;
    let allNumsLength = nums1.length + nums2.length;
    let maxCounter = Math.ceil(allNumsLength / 2);
    let step = 0;
    let result = [];

    while (step <= maxCounter) {

        // at least one extra number will be pushed
        let currNum1 = nums1[nextIndexNums1];
        let currNum2 = nums2[nextIndexNums2];
        if (currNum1 === undefined || currNum2 === undefined) {

            mergedNums = currNum1 === undefined ? mergedNums.concat(nums2.slice(nextIndexNums2)) : mergedNums.concat(nums1.slice(nextIndexNums1));
            break;
        }

        if (currNum1 < currNum2) {
            mergedNums.push(currNum1);
            nextIndexNums1 += 1;
            step += 1;
        } else {
            mergedNums.push(currNum2);
            nextIndexNums2 += 1;
            step += 1;
        }
    }

    if (allNumsLength % 2) {
        result = mergedNums[maxCounter - 1] || 0;
    } else {
        result = ([mergedNums[maxCounter - 1] + mergedNums[maxCounter]]) / 2 || 0;
    }

    return result;
}

