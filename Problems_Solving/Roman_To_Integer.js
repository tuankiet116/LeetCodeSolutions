
const SYMBOL = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let characters = s.split('');
    let result = 0;
    
    for (let i = 0; i < characters.length; ++i) {
        let currentNumber = SYMBOL[characters[i]];
        let nextNumber = SYMBOL[characters[i+1]];
        if (currentNumber < nextNumber) {
            result += nextNumber - currentNumber
            ++i
        } else {
            result += currentNumber
        }
    }
    return result;
};

console.log(romanToInt("MCM"));