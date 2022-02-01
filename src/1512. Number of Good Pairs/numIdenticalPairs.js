// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var numIdenticalPairs = function(nums) {
    
  var mapOfNums = new Map();
  var sumPairs = 0;

  var addPair = function(num) {
    var pair = mapOfNums.get(num) + 1;
    mapOfNums.set(num, pair);
    sumPairs += pair;
    return;
  };

  nums.forEach(num => {
    mapOfNums.has(num) ? addPair(num) : mapOfNums.set(num, 0)
  });
  

  return sumPairs;
};
