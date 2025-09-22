"use strict";

// /**
//  * Solution 1
//  * Time: O(2^n)
//  * Space: O(2^n)
//  *
//  * @param {number} n
//  * @returns {number}
//  */
// function fib(n) {
//     if (n === 0 || n === 1) return n;

//     return fib(n - 1) + fib(n - 2);
// }

// /**
//  * Solution 2 -- memoized
//  * Time: O(n)
//  * Space: O(n)
//  *
//  * @param {number} n
//  * @param {Map<number, number>} cache
//  * @returns {number}
//  */
// function fib(n, cache = new Map()) {
//     if (n === 0 || n === 1) return n;

//     if (cache.has(n)) return cache.get(n);

//     // Calc n value
//     const nValue = fib(n - 1, cache) + fib(n - 2, cache);
//     // Cache n value
//     cache.set(n, nValue);

//     return nValue;
// }

/**
 * Solution 3 -- memoized (array cache for VERY large fib values)
 * Time: O(n)
 * Space: O(n)
 *
 * @param {bigint} n
 * @param {bigint[]} cache
 * @returns {bigint}
 */
function fib(n, cache = []) {
    if (n === 0n || n === 1n) return n;

    if (cache[n] !== undefined) {
        return cache[n];
    }

    const nValue = fib(n - 1n, cache) + fib(n - 2n, cache);
    // Cache n value
    cache[n] = nValue;

    return nValue;
}

console.log(fib(5n)); // 5n
console.log(fib(7n)); // 13n
console.log(fib(50n)); // 12586269025n
console.log(fib(100n)); // 354_224_848_179_261_915_075n
