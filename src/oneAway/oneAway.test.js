import oneAway from './oneAway';

test('should return if inputs are one edit (or zero edits) away', () => {
  expect(oneAway('pay', 'pal')).toBe(true);
  expect(oneAway('pa', 'pall')).toBe(false);
  expect(oneAway('', '')).toBe(true);
})