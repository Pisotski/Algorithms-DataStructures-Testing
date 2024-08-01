import { groupAnagrams } from "./groupAnagrams";

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

describe(`groupAnagrams returns a nested Array. Inner arrays are anagrams`, function () {
	const emptyArray = groupAnagrams([]);
	const arrayWithOneItem = groupAnagrams([""]);
	const arrayWithAnagrams = groupAnagrams([
		"eat",
		"tea",
		"tan",
		"ate",
		"nat",
		"bat",
	]);
	const arrayWithAnagrams_Expected = [
		["eat", "tea", "ate"],
		["tan", "nat"],
		["bat"],
	];
	const arrayWithAnagrams2 = groupAnagrams(["", ""]);
	const arrayWithAnagrams2_Expected = [["", ""]];
	test(`should return an Array`, function () {
		expect(Array.isArray(emptyArray)).toBeTruthy();
	});
	test(`empty Array should return an empty array`, function () {
		expect(emptyArray).toHaveLength(0);
	});
	test(`should an Array with one item if no anagrams found`, function () {
		expect(arrayWithOneItem).toHaveLength(1);
		expect(arrayWithOneItem).toEqual([[""]]);
	});
	test(`should return anagrams of each string`, function () {
		expect(arrayWithAnagrams).toEqual(arrayWithAnagrams_Expected);
	});
	test(`should consider an empty string as an anagram too`, function () {
		expect(arrayWithAnagrams2).toEqual(arrayWithAnagrams2_Expected);
	});
});
