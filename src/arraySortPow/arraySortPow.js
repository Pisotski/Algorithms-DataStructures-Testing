// Help your interviewee get better! 

// Given a sorted array of integers (with negative numbers),
// return a sorted array of squares of those numbers.

// one line O(N + NlogN) solution
// function arraySortPow(arr) {
//   return arr.map(el => Math.pow(el, 2)).sort((a, b) => a > b);
// }

function memo() {
  const cache = {};
  return function(el) {
    if(!cache[el]) {
      cache[el] = Math.pow(el, 2);
    }
    return cache[el];
  }
}

function arraySortPow(arr) {
  // we know that array is sorted, so the greated el^2 will be at the start or in the end
  let start = 0;
  let end = arr.length - 1;
  const result = [];
  const store = memo();
  // loop through the given array.
  // increment start and decrement end respectfully until start is greater or equal to end
  while (start <= end) {
    // we can store results of Math.abs using memoization to reduce overall computations
    const head = Math.abs(arr[start]);
    const tail = Math.abs(arr[end]);
    if(head > tail) {
      result.push(store(head, 2));
      start += 1;
    } else {
      result.push(store(tail, 2));
      end -= 1;
    }
  }
  // return a sorted array of squares of those numbers. flow is not specified
  return result;
}
console.log(arraySortPow([1,2,34]))
// interview.io oct 15 2018
// FEEDBACK
// Candidate struggled with a linear solution and needed some hints. Then was able to demonstrated solid coding, once the solution is clear.

// Candidate understands CS fundamentals and I certainly see potential in the candidate. To continue practicing, can review these algorithmic patterns:
//  DFS/BFS
//  greedy
//  sliding window
//  divide and conquer
//  recursion
//  dynamic programming.

// A popular site to practice algorithms is leetcode.com.
 
//  Also, review topics of system design (CAP theorem, blogs/videos on scalability), e.g. start from: https://github.com/donnemartin/system-design-primer

export {memo, arraySortPow};
