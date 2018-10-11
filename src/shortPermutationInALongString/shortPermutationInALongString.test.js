import shortPermutationInALongString from './shortPermutationInALongString';

test('shortPermutationInALongString should exist', () => {
  expect(shortPermutationInALongString).toBeDefined();
});

test('should return "wrong input" if non strings are passed', () => {
  expect(shortPermutationInALongString()).toBe('wrong input');
});

test('should return a truthy value when 2 strings passed', () => {
  expect(shortPermutationInALongString('ab', 'aab')).toBeTruthy();
});

test('should return position of permutation of first input', () => {
  expect(shortPermutationInALongString('ab', 'aab')).toEqual([[1,2]]);
});