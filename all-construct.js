"use strict";

/**
 * Solution 1 -- recursive
 * Time: O(n^m)
 * Space: O(m)
 * 
 * @param {string} target 
 * @param {string[]} wordBank 
 * @returns {string[][]}
 */
function allConstruct(target, wordBank) {
    if (target === "") return [[]];

    let result = [];

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const suffix = target.slice(word.length); // Everything after the word
            const suffixWaysArr = allConstruct(suffix, wordBank);
            const targetWays = suffixWaysArr.map((way) => [word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
}

console.log( allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) );
// [
//     ["purp", "le"],
//     ["p", "ur", "p", "le"]
// ]
console.log( allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) );
// []
