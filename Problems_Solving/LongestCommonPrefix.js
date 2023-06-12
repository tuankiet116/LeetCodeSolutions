/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let common = "";
    let sorted = strs.sort();

    let first = sorted[0];
    let last = sorted[sorted.length - 1];
    for (let i = 0; i < Math.min(first.length, last.length); ++i) {
        if (first[i] == last[i]) common+= first[i];
        else break;
    }

    return common;
};

longestCommonPrefix(["kiet", "k", "kit"]);