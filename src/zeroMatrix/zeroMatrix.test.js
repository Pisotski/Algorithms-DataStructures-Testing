import { zeroMatrix, negateMatrix, convertMatrix } from './zeroMatrix';

let input,
    negativeMatrix,
    result

const setUpMatrixes = () => {
  input = 
  [
    [1, 2 ,3],
    [4, 0, 6],
    [7, 8, 9]
  ];
  negativeMatrix = 
  [
    [1, -2, 3],
    [-4, -0, -6],
    [7, -8, 9]
  ];
  result =
  [
    [ 1, 0, 3 ],
    [ 0, 0, 0 ],
    [ 7, 0, 9 ]
  ];
}
describe('zeroMatrix methods', () =>{
  beforeEach(() => setUpMatrixes());
  test('negativeMatrix should convert row and column into negative numbers if 0 is found', () => {
    expect(negateMatrix(1, 1, input)).toEqual(negativeMatrix);
  });
  test('convertMartix should convert all negative numbers into 0', () => {
    expect(convertMatrix(negativeMatrix)).toEqual(result);
  });
  test('zeroMatrix should convert row and column into 0 numbers if 0 is found', () => {
    expect(zeroMatrix(input)).toEqual(result);
  });
});