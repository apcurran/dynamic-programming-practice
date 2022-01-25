"use strict";

/**
 * Solution
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} n 
 * @returns {number}
 */
function fib(n) {
    let table = Array(n + 1).fill(0);
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        const currVal = table[i];
        table[i + 1] += currVal;
        table[i + 2] += currVal;
    }

    return table[n];
}

console.log( fib(6) ); // 8
console.log( fib(7) ); // 13
console.log( fib(8) ); // 21
console.log( fib(50) ); // 12586269025
