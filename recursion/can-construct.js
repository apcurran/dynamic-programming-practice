"use strict";

// /**
//  * Solution 1 -- brute force
//  *
//  * m = target.length
//  * n = wordBank.length
//  *
//  * Time: O((n^m) * m)
//  * Space: O(m^2)
//  *
//  * @param {string} target
//  * @param {string[]} wordBank
//  * @returns {boolean}
//  */
// function canConstruct(target, wordBank) {
//     if (target === "") return true;

//     for (let word of wordBank) {
//         if (target.startsWith(word)) {
//             const endOfWord = word.length;
//             const suffix = target.slice(endOfWord);

//             if (canConstruct(suffix, wordBank) === true) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }

/**
 * Solution 2 -- memo ver
 *
 * m = target.length
 * n = wordBank.length
 *
 * Time: O(n * m^2)
 * Space: O(m^2)
 *
 * @param {string} target
 * @param {string[]} wordBank
 * @returns {boolean}
 */
function canConstruct(target, wordBank, memo = new Map()) {
    if (memo.has(target)) return memo.get(target);

    if (target === "") return true;

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const endOfWord = word.length;
            const suffix = target.slice(endOfWord);

            if (canConstruct(suffix, wordBank, memo) === true) {
                memo.set(target, true);

                return true;
            }
        }
    }

    memo.set(target, false);

    return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log(
    canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]),
); // false
console.log(
    canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
        "e",
        "ee",
        "eee",
        "eeee",
        "eeeee",
        "eeeeee",
    ]),
); // false
