// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by
// rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function (strs) {
	const result = [];
	const strsCopy = strs.slice();
	for (var wordNumber = 0; wordNumber < strsCopy.length; wordNumber++) {
		var currentWord = strsCopy[wordNumber];
		currentWord = currentWord.split("").sort().join("");
		strsCopy[wordNumber] = currentWord;
	}

	for (var wordNumber = 0; wordNumber < strsCopy.length; wordNumber++) {
		let currentWordAnagrams;

		if (strsCopy[wordNumber] !== null) {
			const currentWord = strsCopy[wordNumber];
			currentWordAnagrams = [strs[wordNumber]];

			for (
				var nextWordNumber = wordNumber + 1;
				nextWordNumber < strsCopy.length;
				nextWordNumber++
			) {
				const nextWord = strsCopy[nextWordNumber];
				const isAnagram = currentWord === nextWord;
				if (isAnagram) {
					currentWordAnagrams.push(strs[nextWordNumber]);
					strsCopy[nextWordNumber] = null;
				}
			}
		}
		const isLastWord = nextWordNumber === strsCopy.length;
		if (isLastWord && currentWordAnagrams?.length)
			result.push(currentWordAnagrams);
	}

	return result;
};

export { groupAnagrams };
