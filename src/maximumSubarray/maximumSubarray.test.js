import {
  findMaxCrossingSubarray,
  findMaximumSubarray
} from './maximumSubarray';

test('findMaxCrossingSubarray should return maximum posible sum in array and it\'s range',() => {
  expect(findMaxCrossingSubarray([-2,3,4,5], 0, 1, 3)).toEqual({maxLeft: 1, maxRight: 3, sum: 12});
});
test('findMaximumSubarray should return maximum posible sum in array and it\'s range',() => {
  expect(findMaximumSubarray([-8, 15, 23, 4, -2, 0, 0, 4, -4, -3], 0, 10)).toEqual({high: 7, low: 1, sum: 44});
});
