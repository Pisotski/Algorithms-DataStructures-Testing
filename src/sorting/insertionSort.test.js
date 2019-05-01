import insertionSort from './insertionSort';

describe('insertion Sort', () =>{
  test('should return array of sorted numbers', () => {
    expect(insertionSort([3,2,1])).toEqual([1,2,3]);
  });
  test('should work with equal numbers', () => {
    expect(insertionSort([2,2,1])).toEqual([1,2,2]);
  });
  test('should sort negative numbers', () => {
    expect(insertionSort([-2,-1,-3])).toEqual([-3,-2,-1]);
  });
});