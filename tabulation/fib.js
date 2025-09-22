"use strict";

// /**
//  * Solution 1
//  * time: O(n)
//  * space: O(n)
//  *
//  * @param {number} n
//  * @returns {number}
//  */
// function fib(n) {
//     let table = Array(n + 1).fill(0);
//     table[1] = 1;

//     for (let i = 2; i <= n; i++) {
//         table[i] = table[i - 1] + table[i - 2];
//     }

//     return table[n];
// }

/**
 * Solution 2 -- allow for large fib values
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {bigint}
 */
function fib(n) {
    let table = Array(n + 1).fill(0n);
    table[1] = 1n;

    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

console.log(fib(6)); // 8n
console.log(fib(7)); // 13n
console.log(fib(8)); // 21n
console.log(fib(50)); // 12586269025n
console.log(fib(100)); // 354224848179261915075n
