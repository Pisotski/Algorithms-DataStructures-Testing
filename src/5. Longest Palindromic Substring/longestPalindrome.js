// Given a string s, return the longest palindromic substring in s.

function isPalindrome(string, p1 = 0, p2 = string.length - 1) {

    if (p2 - p1 <= 0) {
        return true;
    }
    if (string[p1] === string[p2]) {
        return isPalindrome(string, p1 = p1 + 1, p2 = p2 - 1);
    } else {
        return false;
    }

}

function longestPalindrome(string) {

    let p1 = 0;
    let p2 = string.length - 1;
    let result = '';

    while (p1 < string.length && result.length < string.length - p1) {

        let head = string[p1];
        let tail = string[p2];

        if (head === tail) {

            let stringCut = string.slice(p1, p2 + 1);

            if (isPalindrome(stringCut)) {
                if (stringCut.length > result.length) {
                    result = stringCut;
                    p1 = p1 + 1;
                    p2 = string.length;
                }
            }
        }

        if (p1 >= p2) {
            p1 = p1 + 1;
            p2 = string.length;
        }
        p2 = p2 - 1;
    }
    return result;
}

export {
    isPalindrome,
    longestPalindrome
}
