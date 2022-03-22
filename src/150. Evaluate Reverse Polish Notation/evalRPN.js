// Evaluate the value of an arithmetic expression in Reverse Polish Notation.

// Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Note that division between two integers should truncate toward zero.

// It is guaranteed that the given RPN expression is always valid. 
// That means the expression would always evaluate to a result, 
// and there will not be any division by zero operation.

// VALID OPERATORS +, -, *, and /
// DIVISION between two integers should truncate toward zero.
// RPN IS ALWAYS VALID no escape needed
// NO division by zero 

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

let evalRPN = function (tokens) {

    // create a helper functions
    // helper evaluates valid operators
    // helper that wraps the expression in brakets ?
    // if the expression is always in brakets, there is no need to create the whole expression
    // looks like it's enought to just calculate the answer along the way 

    let stack = [];
    tokens.forEach(el => isNaN(el) ? doMath(el) : stack.push(el));

    function doMath(operator) {

        //poped
        //stack[last] = toString(Math.floor(eval(stack[last] + operator + popped)));
        let popped = Number(stack.pop());
        let lastNum = Number(stack[stack.length - 1]);
        let ans;
        switch (operator) {
            case '+':
                ans = lastNum + popped;
                break;
            case '-':
                ans = lastNum - popped;
                break;
            case '*':
                ans = lastNum * popped;
                break;
            case '/':
                ans = lastNum / popped;
                break;
            default:
                console.log(`Invalid operator ${operator}`)
        }
        stack[stack.length - 1] = Math.trunc(ans).toString();
        return;
    }

    // maybe return ans
    // can be written in one line using Array.prototype.reduce
    return stack.length ? stack[0] : stack;
};

// comments were left for educational purposes

export { evalRPN }
