import isUnique from './isUnique';

test('isUnique should be a function', ()=>{
  expect(isUnique).toBeDefined();
});

test('isUnque should return boolean', () => {
  expect(isUnique('happy')).toBeFalsy();
});

test('isUnque should return true is string has only unique characters', () => {
  expect(isUnique('train')).toBe(true);
});