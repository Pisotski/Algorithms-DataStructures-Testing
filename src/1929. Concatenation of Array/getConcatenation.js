var getConcatenation = function ( originalArray, ans, pointer ) {

	//by the problem statement, an array of numbers is given
	//it is safe to use Array.prototype.slice method to make a shallow copy of the original array

    // 	var ans = originalArray.slice().concat( originalArray );


    //to do the same manually many options may be used
    //each one of them will take linear time, because each element has to be added


    //as a sample of iteration methods tail recursion may be used
    //in order to do that, the pointer will be created to keep track of how many steps still have to be made

    //if pointer is undefined the new variable will be created
    //reflecting the amount of integers in the array

    if ( !pointer ) {

        pointer = 0;

    };

    //in order to prevent mutation the new array has to be created?????

    if ( !ans ) {

        ans = originalArray.slice();

    };
    
    //base case: when the pointer will get to the the last integer in the original array the function ends the recursion

    if ( pointer === originalArray.length ) {

        return ans;

    };
	
    //add the integer located under pointer to the end of ans array

    ans.push( originalArray[ pointer ] );
    
    //increment pointer

    pointer = pointer + 1;

    //enter recursion with modified ans and incremented pointer

    return getConcatenation( originalArray, ans, pointer );

};

export { getConcatenation };
