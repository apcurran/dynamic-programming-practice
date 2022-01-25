"use strict";

// /**
//  * The function sumPossible takes in an amount and an array of positive numbers.
//  * The function should return a boolean indicating whether or not it is possible to create the amount by summing numbers of the array.
//  * You may reuse numbers of the array as many times as necessary.
//  * You may assume that the target amount is non-negative.
//  * 
//  * Solution 1 -- brute force
//  * 
//  * m = target sum
//  * n = array length
//  * 
//  * Time: O(n^m)
//  * Space: O(m)
//  * 
//  * @param {number} amount
//  * @param {number[]} numbers
//  * @returns {boolean}
//  */
// function sumPossible(amount, numbers) {
//     if (amount === 0) { // base case 1
//         return true;
//     } else if (amount < 0) { // base case 2
//         return false;
//     }

//     for (let num of numbers) {
//         const remainder = amount - num;

//         if (sumPossible(remainder, numbers) === true) {
//             return true;
//         }
//     }

//     return false;
// }

/**
 * Solution 2 -- memo version
 * 
 * m = target sum
 * n = array length
 * 
 * Time: O(m * n)
 * Space: O(m)
 * 
 * @param {number} amount
 * @param {number[]} numbers
 * @returns {boolean}
 */
function sumPossible(amount, numbers, memo = new Map()) {
    // Base case for memo retrieval
    if (memo.has(amount)) return memo.get(amount);

    if (amount === 0) { // base case 1
        return true;
    } else if (amount < 0) { // base case 2
        return false;
    }

    for (let num of numbers) {
        const remainder = amount - num;

        if (sumPossible(remainder, numbers, memo) === true) {
            // cache in memo
            memo.set(amount, true);

            return true;
        }
    }
    // cache in memo
    memo.set(amount, false);

    return false;
}

console.log( sumPossible(8, [5, 12, 4]) ); // -> true, 4 + 4;
console.log( sumPossible(15, [6, 2, 10, 19]) ); // -> false
console.log( sumPossible(300, [7, 14]) ); // -> false (slow without memoization)
