// import bigArray from './bigArrayNums';
import { maxArea } from './maxArea';

test('should calculate the maximum amount of water', () => {
    let height = [1,8,6,2,5,4,8,3,7];
    expect(maxArea(height)).toBe(49);
});
test('should not break with small numbers', () => {
    let height = [1,1];
    expect(maxArea(height)).toBe(1);
});

//babel doesn't really like this one, it passed though
// test('should be work with big arrays', () => {
//     expect(maxArea(bigArray)).toBe(705634720);
// }, 1000);