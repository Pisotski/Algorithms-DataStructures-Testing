import { evalRPN } from "./evalRPN";

test(`should evaluate the value of an arithmetic expression in Reverse Polish Notation`, () => {
    let expectedAns = "22";
    let tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
    expect(evalRPN(tokens)).toEqual(expectedAns);
})
