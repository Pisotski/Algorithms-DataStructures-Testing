import { findMedianSortedArrays } from "./findMedianSortedArrays";

test('should find a median of two sorted arrays', () => {
    let result = findMedianSortedArrays([1, 2], [3, 4])
    expect(result).not.toBeNaN();
    expect(result).toBe(2.5);
})