import letterCombinations from "./letterCombinations";

test('has take a number(s) on the phone and return all possible letter combinations with no repetitions', () => {

    let result = letterCombinations('23');
    let expectedResult = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
    expect(result).toEqual(expectedResult);
})