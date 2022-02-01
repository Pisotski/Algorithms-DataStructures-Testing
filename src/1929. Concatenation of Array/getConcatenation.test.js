import { getConcatenation } from "./getConcatenation";

test('getConcatenation should merge two arrays', () => {
    const expectedConcatenatedArray = [1,2,3,1,2,3];
    expect(getConcatenation([1,2,3])).toEqual(expectedConcatenatedArray);
}); 
