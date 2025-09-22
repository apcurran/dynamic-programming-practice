"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number}
 */
function fib(n) {
    let table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

console.log(fib(6)); // 8
console.log(fib(7)); // 13
console.log(fib(8)); // 21
console.log(fib(50)); // 12586269025
