// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints 
// of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array 
// [1,8,6,2,5,4,8,3,7]. In this case,
// the max area of water (blue section) the container can contain is 49.

// Example 2:

// Input: height = [1,1]
// Output: 1

var maxArea = function(height) {
    //     console.time('t')
    //     generic/brute force solution is to iterate through the height array
    //     calculating elements with each other and storing the biggest sum
    //     O(n²) time complexity
    
        var maxContainer = 0;
    
    //     for ( var i = 0; i < height.length; i = i + 1 ) {
    
    //         for ( var j = 0; j < height.length; j = j + 1 ) {
    
    //            var borderHeight = Math.min( height[i], height[j] );
    //            var distance = j - i;
    //            var currentContainer = borderHeight * distance;
    //            if ( currentContainer > maxContainer ) {
    //                maxContainer = currentContainer;
    //            }
    //         }
    //     }
    
    //     a lot of redundant and repetative actions are done
    //     low performace
    
    // While Loop Solution
    
        //keeping track of left border and right border and
        //performing only nessesary math operation 
        //will reduce time and space complexity to linear
        var containerLength = height.length;
        var lastElement = containerLength - 1;
        var leftBorderPointer = 0;
        var rightBorderPoiner = lastElement;
    
        while ( leftBorderPointer < lastElement ) {
        
            var distance = rightBorderPoiner - leftBorderPointer;
            //over here more logic added to avoid repetition
            //keep track of minimum border for current run to avoid unnecessary iteration
            var left = height[leftBorderPointer];
            var right = height[rightBorderPoiner];
            var currentContainerBorder = Math.min(left, right);
            var currentContainer = distance * currentContainerBorder;
    
            //if the volume of the container is bigger, store it
            if ( currentContainer > maxContainer ) {
                maxContainer = currentContainer;
            } 
    
            //move right pointer to the left
    
            //when pointers meet, 
            //left pointer moves right
            //right pointer moves to default (the last position)
            //minBorder goes to default (0)
            var moveLeft = function () {

                leftBorderPointer = leftBorderPointer + 1;
                rightBorderPoiner = lastElement;                
                return;
            }
    
             if (left <= right) { 
                moveLeft(); 
             } else { 
                rightBorderPoiner = rightBorderPoiner - 1 }
        }
    
    //     console.timeEnd('t');
    
    // execution time with a large array
    // nested loop: t: 20824.994873046875 ms
    // while loop t: 12964.739990234375 ms
    // still way too slow
    // while loop with leftBorderPointer optimization: t: 9.199951171875 ms
    
        return maxContainer;
    
    };
    
    // var height = [1,8,6,2,5,4,8,3,7];
    
    export { maxArea };
    