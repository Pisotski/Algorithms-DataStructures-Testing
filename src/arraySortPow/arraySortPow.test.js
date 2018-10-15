import { memo, arraySortPow } from "./arraySortPow";

test('memo shoud compute a square of the element and store it in cache', () => {
  const store = memo();
  expect(store(2)).toBe(4);
  expect(store(-2)).toBe(4);
});

test('arraySortPow should return empty array if the input array is empty', () => {
  expect(arraySortPow([])).toEqual([]);
});

test('arraySortPow should return sorted array of squared elements', () => {
  expect(arraySortPow([0, 1, 2, 3])).toEqual([9, 4, 1, 0]);
  expect(arraySortPow([-1, 0, 2, 3])).toEqual([9, 4, 1, 0]);
});
