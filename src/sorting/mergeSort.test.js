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
    expect(mergeSort([3,2,1], merge)).toEqual([1,2,3]);
    expect(mergeSort([3,-1,-2], merge)).toEqual([-2,-1,3]);
  });
});
