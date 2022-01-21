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

/**
 * Solution 2 -- memoized
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {number} n 
 * @param {Map} cache
 * @returns {number}
 */
function fib(n, cache = new Map()) {
    if (n === 0 || n === 1) return n;

    if (!cache.has(n)) {
        // Calc n value
        const nValue = fib(n - 1, cache) + fib(n - 2, cache);
        // Cache n value
        cache.set(n, nValue);
    }

    return cache.get(n);
}

console.log( fib(5) ); // 5
console.log( fib(7) ); // 13
console.log( fib(50) ); // 12586269025
