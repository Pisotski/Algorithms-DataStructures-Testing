import { mergeSort, merge } from './mergeSort';

const mockMerge = jest.fn();

describe(merge,() => {
  beforeEach(() => {
    return mergeSort([3,2], mockMerge);
  });
  test('should call function merge', () => {
    expect(mockMerge).toBeCalled();
    expect(mockMerge.mock.calls.length).toBeGreaterThan(0);
  });
});

describe(mergeSort,() => {
  test('should sort array both positive and negative integers', () => {
    expect(mergeSort([3,2,1,6,5,4], merge)).toEqual([1,2,3,4,5,6]);
    expect(mergeSort([3,-1,-2], merge)).toEqual([-2,-1,3]);
    expect(mergeSort([0,-0,0,0], merge)).toEqual([0,-0,0,0]);
  })
  test('should be able to handle empty array or array with just 1 element', () => {
    expect(mergeSort([0], merge)).toEqual([0]);
    expect(mergeSort([], merge)).toEqual([]);
  })
});
