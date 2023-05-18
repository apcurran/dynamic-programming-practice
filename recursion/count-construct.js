"use strict";

/**
 * solution 1
 * m = target length
 * n = wordBank length
 * time: O(n * m^2)
 * space: O(m^2)
 * 
 * @param {string} target 
 * @param {string[]} wordBank 
 * @returns {number}
 */
function countConstruct(target, wordBank, cache = new Map()) {
    if (cache.has(target)) return cache.get(target);

    if (target === "") return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.startsWith(word)) {
            const numberOfWaysForRest = countConstruct(target.slice(word.length), wordBank, cache);
            totalCount += numberOfWaysForRest;
        }
    }

    // update cache
    cache.set(target, totalCount);

    return totalCount;
}

console.log( countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) ); // 2
console.log( countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) ); // 1
console.log( countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) ); // 0
