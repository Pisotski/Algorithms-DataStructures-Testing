// Given a string s, 
// find the length of the longest
// substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, 
// "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    
    //linear time

    var maxLength = 0;

    //create storage for a current substring

    var substringBreakdown = {};

    var start = 0;

        while ( start <= s.length ) {
            //create an object with the current start point
            for ( var i = start; i <= s.length; i = i + 1 ) {

            //continue breaking the string down until the same key occurs or the end of the string has been reached

                if ( substringBreakdown.hasOwnProperty( s[i] ) || i === s.length ) {

                    var objectSize = Object.keys(substringBreakdown).length;
         
                    //when found compare the current object size with the maximum length. store size if it's greater

                    if ( objectSize > maxLength ) {
                        maxLength = objectSize;
                    }
                    //erase object
                    substringBreakdown = {};
                    
                    break;

                } 

               substringBreakdown[ s[i] ] = i;

            }

            start = start + 1;
        }     

    return maxLength;

// Queue can be used
// when the duplicate occurs dequeue all elements
// from the the head of the queue should be erased
// although shifting is very expensive method.

// The more efficient method would be using Map
// Map keeps track of when the data was added
// so everything before the duplicate can be easily deleted
};

export { lengthOfLongestSubstring };
