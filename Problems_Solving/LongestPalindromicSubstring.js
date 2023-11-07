/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let maxStringPalindrome = 0;
    let stringPalindrome = "";

    for (let i = 0; i < s.length; i++) {
        let consideringCharecter = s.charAt(i);

        for (let j = i + 1; j < s.length; j++) {
            if (consideringCharecter == s.charAt(j) && isStringPalindrome(s.slice(i, j + 1))) {
                maxStringPalindrome = j - i;
                if (s.slice(i, j + 1).length > stringPalindrome.length) {
                    stringPalindrome = s.slice(i, j + 1);
                }
            }
        }
    }
    if (stringPalindrome == "") stringPalindrome = s.charAt(0) ?? ""; 
    return stringPalindrome;
};

/**
 * @param {string} string
 * @return {boolean}
 */
function isStringPalindrome(string) {
    let startIndex = 0;
    let endIndex = string.length - 1;
    let isPalindrome = true;
    while (endIndex >= startIndex) {
        if (string.charAt(startIndex) != string.charAt(endIndex)) {
            isPalindrome = false;
            break;
        }
        startIndex++;
        endIndex--;
    }
    return isPalindrome;
}

longestPalindrome("ccc");
